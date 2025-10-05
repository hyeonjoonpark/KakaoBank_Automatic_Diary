import { Category, categoryColors } from '@/constants/category';

export const calendarEvents = [
  {
    id: 1,
    title: `${Category.FOOD} - 25,000원`,
    start: new Date(2025, 0, 3),
    end: new Date(2025, 0, 3),
    resource: { category: Category.FOOD, amount: 25000, color: categoryColors[Category.FOOD] }
  },
  {
    id: 2,
    title: `${Category.TRANSPORT} - 15,000원`,
    start: new Date(2025, 0, 7),
    end: new Date(2025, 0, 7),
    resource: { category: Category.TRANSPORT, amount: 15000, color: categoryColors[Category.TRANSPORT] }
  },
  {
    id: 3,
    title: `${Category.HOBBY} - 80,000원`,
    start: new Date(2025, 0, 12),
    end: new Date(2025, 0, 12),
    resource: { category: Category.HOBBY, amount: 80000, color: categoryColors[Category.HOBBY] }
  },
  {
    id: 4,
    title: `${Category.FOOD} - 45,000원`,
    start: new Date(2025, 0, 15),
    end: new Date(2025, 0, 15),
    resource: { category: Category.FOOD, amount: 45000, color: categoryColors[Category.FOOD] }
  },
  {
    id: 5,
    title: `${Category.ENTERTAINMENT} - 30,000원`,
    start: new Date(2025, 0, 18),
    end: new Date(2025, 0, 18),
    resource: { category: Category.ENTERTAINMENT, amount: 30000, color: categoryColors[Category.ENTERTAINMENT] }
  },
  {
    id: 6,
    title: `${Category.TRANSPORT} - 12,000원`,
    start: new Date(2025, 0, 22),
    end: new Date(2025, 0, 22),
    resource: { category: Category.TRANSPORT, amount: 12000, color: categoryColors[Category.TRANSPORT] }
  },
  {
    id: 7,
    title: `${Category.HOBBY} - 60,000원`,
    start: new Date(2025, 0, 25),
    end: new Date(2025, 0, 25),
    resource: { category: Category.HOBBY, amount: 60000, color: categoryColors[Category.HOBBY] }
  },
  {
    id: 8,
    title: `${Category.FOOD} - 35,000원`,
    start: new Date(2025, 0, 28),
    end: new Date(2025, 0, 28),
    resource: { category: Category.FOOD, amount: 35000, color: categoryColors[Category.FOOD] }
  },
  {
    id: 9,
    title: `카페 - 8,000원`,
    start: new Date(2025, 0, 5),
    end: new Date(2025, 0, 5),
    resource: { category: Category.FOOD, amount: 8000, color: categoryColors[Category.FOOD] }
  },
  {
    id: 10,
    title: `택시 - 7,500원`,
    start: new Date(2025, 0, 9),
    end: new Date(2025, 0, 9),
    resource: { category: Category.TRANSPORT, amount: 7500, color: categoryColors[Category.TRANSPORT] }
  },
  {
    id: 11,
    title: `온라인쇼핑 - 45,000원`,
    start: new Date(2025, 0, 14),
    end: new Date(2025, 0, 14),
    resource: { category: Category.HOBBY, amount: 45000, color: categoryColors[Category.HOBBY] }
  },
  {
    id: 12,
    title: `${Category.SUBSCRIPTION} - 12,000원`,
    start: new Date(2025, 0, 20),
    end: new Date(2025, 0, 20),
    resource: { category: Category.SUBSCRIPTION, amount: 12000, color: categoryColors[Category.SUBSCRIPTION] }
  },
  {
    id: 13,
    title: `넷플릭스 - 13,500원`,
    start: new Date(2025, 0, 1),
    end: new Date(2025, 0, 1),
    resource: { category: Category.SUBSCRIPTION, amount: 13500, color: categoryColors[Category.SUBSCRIPTION] }
  },
  {
    id: 14,
    title: `클럽 - 50,000원`,
    start: new Date(2025, 0, 10),
    end: new Date(2025, 0, 10),
    resource: { category: Category.ENTERTAINMENT, amount: 50000, color: categoryColors[Category.ENTERTAINMENT] }
  }
];
