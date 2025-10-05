import { useEffect, useRef } from 'react';

interface UseScrollRestorationProps {
  key: string;
  enabled?: boolean;
}

export function useScrollRestoration({ key, enabled = true }: UseScrollRestorationProps) {
  const scrollPositionRef = useRef<number>(0);
  const isRestoredRef = useRef<boolean>(false);

  // 스크롤 위치 저장
  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      scrollPositionRef.current = window.scrollY;
      sessionStorage.setItem(`scroll-${key}`, window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [key, enabled]);

  // 스크롤 위치 복원
  useEffect(() => {
    if (!enabled || isRestoredRef.current) return;

    const savedPosition = sessionStorage.getItem(`scroll-${key}`);
    if (savedPosition) {
      const position = parseInt(savedPosition, 10);
      // 약간의 지연을 두어 DOM이 완전히 렌더링된 후 스크롤 복원
      setTimeout(() => {
        window.scrollTo(0, position);
        scrollPositionRef.current = position;
        isRestoredRef.current = true;
      }, 100);
    } else {
      isRestoredRef.current = true;
    }
  }, [key, enabled]);

  // 컴포넌트 언마운트 시 스크롤 위치 저장
  useEffect(() => {
    return () => {
      if (enabled) {
        sessionStorage.setItem(`scroll-${key}`, scrollPositionRef.current.toString());
      }
    };
  }, [key, enabled]);

  return {
    scrollPosition: scrollPositionRef.current,
    isRestored: isRestoredRef.current,
  };
}
