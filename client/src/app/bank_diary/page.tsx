'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TabNavigation from '@/components/TabNavigation';
import CategorySpending from '@/components/CategorySpending';
import MonthlySpending from '@/components/MonthlySpending';
import PaymentCalendar from '@/components/PaymentCalendar';
import { useTabStore } from '@/store/useTabStore';

export default function BankDiary() {
  const { activeTab } = useTabStore();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                나의 가계부
              </h1>
              <p className="text-xl text-gray-600">
                AI가 자동으로 분류한 결제 내역을 확인하세요
              </p>
            </div>

            <TabNavigation />

            {activeTab === 'category' && <CategorySpending />}

            {activeTab === 'monthly' && <MonthlySpending />}

            {activeTab === 'calendar' && <PaymentCalendar />}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
