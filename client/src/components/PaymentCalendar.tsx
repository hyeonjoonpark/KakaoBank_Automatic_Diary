'use client';

import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '@/styles/calendar.css';
import { Category, categoryColors, categoryLabels } from '@/constants/category';
import { calendarEvents } from '@/test/data/calendar_json';

const localizer = momentLocalizer(moment);

export default function PaymentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());


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
              events={calendarEvents}
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
