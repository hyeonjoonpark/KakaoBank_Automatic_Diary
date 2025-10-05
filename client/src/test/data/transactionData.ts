import { Category } from '@/constants/category';

export interface TransactionItem {
  id: number;
  title: string;
  description: string;
  amount: number;
  category: Category;
  date: string;
}

// 샘플 거래 데이터 생성 함수
export const generateTransactionData = (page: number, pageSize: number = 10): {
  data: TransactionItem[];
  nextCursor: number | null;
} => {
  const startId = page * pageSize + 1;
  const endId = (page + 1) * pageSize;
  
  const categories = Object.values(Category);
  const titles = [
    '스타벅스 커피', '지하철 요금', '넷플릭스 구독', '점심 식사', '택시 요금',
    '온라인 쇼핑', '영화관 입장료', '카페 라떼', '버스 요금', '유튜브 프리미엄',
    '저녁 식사', '주유비', '게임 아이템', '카페 아메리카노', '지하철 환승',
    '아마존 프라임', '점심 도시락', '버스 환승', '스포츠 용품', '카페 디저트'
  ];
  
  const descriptions = [
    '아침 커피로 시작하는 하루', '출근길 교통비', '월 구독 서비스', '점심시간 식사', '늦은 밤 택시',
    '온라인 쇼핑몰 구매', '주말 영화 관람', '오후 휴식', '출근길 교통비', '음악 스트리밍',
    '저녁 식사', '차량 주유', '게임 내 구매', '점심 후 커피', '지하철 환승',
    '영상 스트리밍', '점심 도시락', '버스 환승', '운동 용품', '디저트'
  ];

  const data: TransactionItem[] = [];
  
  for (let i = startId; i <= endId; i++) {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
    const randomAmount = Math.floor(Math.random() * 100000) + 1000; // 1,000원 ~ 100,000원
    
    // 날짜 생성 (최근 30일 내)
    const daysAgo = Math.floor(Math.random() * 30);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    
    data.push({
      id: i,
      title: randomTitle,
      description: randomDescription,
      amount: randomAmount,
      category: randomCategory,
      date: date.toLocaleDateString('ko-KR')
    });
  }

  // 마지막 페이지인지 확인 (총 100개 아이템으로 제한)
  const totalItems = 100;
  const hasMore = endId < totalItems;
  
  return {
    data,
    nextCursor: hasMore ? page + 1 : null
  };
};

// API 시뮬레이션 함수
export const fetchTransactions = async (pageParam: number = 0): Promise<{
  data: TransactionItem[];
  nextCursor: number | null;
}> => {
  // 네트워크 지연 시뮬레이션
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return generateTransactionData(pageParam);
};
