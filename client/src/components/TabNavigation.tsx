import { colors } from '@/constants/colors';
import { useTabStore } from '@/store/useTabStore';

export default function TabNavigation() {
  const { activeTab, setActiveTab } = useTabStore();
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-gray-100 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('category')}
          className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
            activeTab === 'category'
              ? `${colors.primary[400]} text-gray-900 shadow-lg`
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          카테고리별 결제
        </button>
        <button
          onClick={() => setActiveTab('monthly')}
          className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
            activeTab === 'monthly'
              ? `${colors.primary[400]} text-gray-900 shadow-lg`
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          월별 결제
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
            activeTab === 'calendar'
              ? `${colors.primary[400]} text-gray-900 shadow-lg`
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          결제 달력
        </button>
        <button
          onClick={() => setActiveTab('transactions')}
          className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
            activeTab === 'transactions'
              ? `${colors.primary[400]} text-gray-900 shadow-lg`
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          거래 내역
        </button>
      </div>
    </div>
  );
}
