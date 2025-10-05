export enum Category {
  FOOD = '식비',
  TRANSPORT = '교통비',
  HOBBY = '취미',
  ENTERTAINMENT = '유흥비',
  SUBSCRIPTION = '정기결제'
}

export const categoryColors = {
  [Category.FOOD]: '#fbbf24',        // 노란색
  [Category.TRANSPORT]: '#3b82f6',   // 파란색
  [Category.HOBBY]: '#8b5cf6',        // 보라색
  [Category.ENTERTAINMENT]: '#ef4444', // 빨간색
  [Category.SUBSCRIPTION]: '#10b981'  // 초록색
} as const;

export const categoryLabels = {
  [Category.FOOD]: '식비',
  [Category.TRANSPORT]: '교통비',
  [Category.HOBBY]: '취미',
  [Category.ENTERTAINMENT]: '유흥비',
  [Category.SUBSCRIPTION]: '정기결제'
} as const;
