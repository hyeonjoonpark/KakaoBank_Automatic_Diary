'use client';

import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '@/styles/calendar.css';
import { Category, categoryColors, categoryLabels } from '@/constants/category';

const localizer = momentLocalizer(moment);

export default function PaymentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // 샘플 결제 데이터 (2025년 1월)
  const events = [
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

  const eventStyleGetter = (event: any) => {
    return {
      style: {
        backgroundColor: event.resource.color,
        borderRadius: '4px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block'
      }
    };
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">결제 달력</h3>
          <div className="h-[600px]">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '100%' }}
              views={['month']}
              defaultView="month"
              date={currentDate}
              onNavigate={(date) => setCurrentDate(date)}
              eventPropGetter={eventStyleGetter}
              popup
              showMultiDayTimes
              step={60}
              timeslots={1}
              culture="ko"
              messages={{
                next: '다음',
                previous: '이전',
                today: '오늘',
                month: '월',
                week: '주',
                day: '일',
                agenda: '일정',
                date: '날짜',
                time: '시간',
                event: '이벤트',
                noEventsInRange: '이 기간에는 이벤트가 없습니다.',
                showMore: (total: number) => `+${total}개 더 보기`
              }}
            />
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">범례</h4>
          <div className="flex flex-wrap gap-4">
            {Object.values(Category).map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded" 
                  style={{backgroundColor: categoryColors[category as Category]}}
                ></div>
                <span className="text-sm text-gray-600">{categoryLabels[category as Category]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
