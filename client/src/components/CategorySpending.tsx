import { colors } from '@/constants/colors';
import { Category, categoryColors } from '@/constants/category';

export default function CategorySpending() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">카테고리별 지출</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{backgroundColor: categoryColors[Category.FOOD]}}
              ></div>
              <span className="text-gray-700">{Category.FOOD}</span>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">562,500원</p>
              <p className="text-sm text-gray-500">전월 대비 +25,000원</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{backgroundColor: categoryColors[Category.TRANSPORT]}}
              ></div>
              <span className="text-gray-700">{Category.TRANSPORT}</span>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">312,500원</p>
              <p className="text-sm text-gray-500">전월 대비 -15,000원</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{backgroundColor: categoryColors[Category.HOBBY]}}
              ></div>
              <span className="text-gray-700">{Category.HOBBY}</span>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">250,000원</p>
              <p className="text-sm text-gray-500">전월 대비 +30,000원</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{backgroundColor: categoryColors[Category.ENTERTAINMENT]}}
              ></div>
              <span className="text-gray-700">{Category.ENTERTAINMENT}</span>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">180,000원</p>
              <p className="text-sm text-gray-500">전월 대비 +20,000원</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{backgroundColor: categoryColors[Category.SUBSCRIPTION]}}
              ></div>
              <span className="text-gray-700">{Category.SUBSCRIPTION}</span>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">125,000원</p>
              <p className="text-sm text-gray-500">전월 대비 +5,000원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
