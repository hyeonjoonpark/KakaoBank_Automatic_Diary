'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TabNavigation from '@/components/TabNavigation';
import CategorySpending from '@/components/CategorySpending';
import MonthlySpending from '@/components/MonthlySpending';
import PaymentCalendar from '@/components/PaymentCalendar';
import InfiniteScrollList from '@/components/InfiniteScrollList';
import { useTabStore } from '@/store/useTabStore';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';
import { queryClient } from '@/lib/queryClient';
import { fetchTransactions } from '@/test/data/transactionData';

function BankDiaryContent() {
  const { activeTab } = useTabStore();
  
  // 스크롤 위치 복원
  useScrollRestoration({ 
    key: 'bank-diary', 
    enabled: true 
  });

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

            {activeTab === 'transactions' && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">거래 내역</h3>
                  <InfiniteScrollList
                    queryKey={['transactions']}
                    fetchFunction={fetchTransactions}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function BankDiary() {
  return (
    <QueryClientProvider client={queryClient}>
      <BankDiaryContent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
