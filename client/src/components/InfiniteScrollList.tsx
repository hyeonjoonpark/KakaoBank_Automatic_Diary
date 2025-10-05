'use client';

import { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { categoryColors, Category } from '@/constants/category';

interface ListItem {
  id: number;
  title: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}

interface InfiniteScrollListProps {
  queryKey: string[];
  fetchFunction: (pageParam: number) => Promise<{
    data: ListItem[];
    nextCursor: number | null;
  }>;
  onScrollRestore?: (scrollPosition: number) => void;
}

export default function InfiniteScrollList({ 
  queryKey, 
  fetchFunction, 
  onScrollRestore 
}: InfiniteScrollListProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const scrollRestored = useRef(false);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 0 }) => fetchFunction(pageParam as number),
    getNextPageParam: (lastPage: any) => lastPage.nextCursor,
    initialPageParam: 0,
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });

  // 스크롤 위치 저장
  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current) {
        // 세션 스토리지에 스크롤 위치 저장
        sessionStorage.setItem(`${queryKey.join('-')}-scroll`, listRef.current.scrollTop.toString());
      }
    };

    const listElement = listRef.current;
    if (listElement) {
      listElement.addEventListener('scroll', handleScroll);
      return () => listElement.removeEventListener('scroll', handleScroll);
    }
  }, [queryKey]);

  // 스크롤 위치 복원
  useEffect(() => {
    if (data && !scrollRestored.current && listRef.current) {
      const savedScrollPosition = sessionStorage.getItem(`${queryKey.join('-')}-scroll`);
      if (savedScrollPosition) {
        const position = parseInt(savedScrollPosition, 10);
        listRef.current.scrollTop = position;
        if (onScrollRestore) {
          onScrollRestore(position);
        }
      }
      scrollRestored.current = true;
    }
  }, [data, queryKey, onScrollRestore]);

  // 무한 스크롤 처리
  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current && hasNextPage && !isFetchingNextPage) {
        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 100) {
          fetchNextPage();
        }
      }
    };

    const listElement = listRef.current;
    if (listElement) {
      listElement.addEventListener('scroll', handleScroll);
      return () => listElement.removeEventListener('scroll', handleScroll);
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">데이터를 불러오는 중 오류가 발생했습니다.</p>
      </div>
    );
  }

  const allItems = data?.pages.flatMap((page: any) => page.data) || [];

  return (
    <div 
      ref={listRef}
      className="h-96 overflow-y-auto border border-gray-200 rounded-lg"
    >
      <div className="space-y-4 p-4">
        {allItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className={`text-xs bg-gray-100 px-2 py-1 rounded`} style={{backgroundColor: categoryColors[item.category as Category]}}>{item.category}</span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-gray-900">
                  {item.amount.toLocaleString()}원
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isFetchingNextPage && (
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-400"></div>
          </div>
        )}
        
        {!hasNextPage && allItems.length > 0 && (
          <div className="text-center py-4 text-gray-500">
            모든 데이터를 불러왔습니다.
          </div>
        )}
      </div>
    </div>
  );
}
