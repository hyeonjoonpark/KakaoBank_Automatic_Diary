export default function MonthlySpending() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">월별 지출 현황</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-lg font-semibold text-gray-900">2024년 1월</p>
              <p className="text-sm text-gray-500">31일</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">1,250,000원</p>
              <p className="text-sm text-red-600">+65,000원</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-lg font-semibold text-gray-900">2023년 12월</p>
              <p className="text-sm text-gray-500">31일</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">1,180,000원</p>
              <p className="text-sm text-green-600">-25,000원</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-lg font-semibold text-gray-900">2023년 11월</p>
              <p className="text-sm text-gray-500">30일</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">1,205,000원</p>
              <p className="text-sm text-red-600">+100,000원</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">월별 트렌드</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">평균 월 지출</span>
            <span className="font-bold text-gray-900">1,211,667원</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">최고 지출</span>
            <span className="font-bold text-red-600">1,250,000원 (1월)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">최저 지출</span>
            <span className="font-bold text-green-600">1,180,000원 (12월)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">증감금액</span>
            <span className="font-bold text-gray-900">+70,000원</span>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">AI 예측</h4>
          <p className="text-blue-800 text-sm">
            다음 달 예상 지출: <span className="font-bold">1,200,000원</span>
          </p>
          <p className="text-blue-600 text-xs mt-1">
            지난 3개월 패턴 분석 결과
          </p>
        </div>
      </div>
    </div>
  );
}
