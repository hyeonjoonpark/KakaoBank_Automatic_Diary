import { colors } from '@/constants/colors';

export default function ServiceIntro() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI가 분석하는 스마트 가계부
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            카카오뱅크와 연동하여 자동으로 분류하고 분석하는 
            <span className="font-semibold text-yellow-600"> AI 가계부 서비스</span>입니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className={`w-16 h-16 ${colors.primary[400]} rounded-full flex items-center justify-center mb-6`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">자동 분류</h3>
            <p className="text-gray-600 leading-relaxed">
              AI가 결제 내역을 자동으로 분석하여 식비, 교통비, 쇼핑 등으로 
              정확하게 분류해드립니다.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className={`w-16 h-16 ${colors.primary[400]} rounded-full flex items-center justify-center mb-6`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">실시간 분석</h3>
            <p className="text-gray-600 leading-relaxed">
              지출 패턴을 실시간으로 분석하여 월별 트렌드와 
              카테고리별 소비 현황을 한눈에 확인하세요.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className={`w-16 h-16 ${colors.primary[400]} rounded-full flex items-center justify-center mb-6`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">빠른 처리</h3>
            <p className="text-gray-600 leading-relaxed">
              카카오뱅크와의 연동으로 결제 즉시 자동 분류되어 
              별도의 입력 없이 가계부가 완성됩니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                왜 AI 가계부를 선택해야 할까요?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 ${colors.primary[400]} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">수동 입력 불필요</h4>
                    <p className="text-gray-600">카드 결제 시 자동으로 분류되어 별도의 가계부 입력이 필요 없습니다.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 ${colors.primary[400]} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">정확한 분석</h4>
                    <p className="text-gray-600">AI가 학습한 패턴으로 95% 이상의 정확도로 지출을 분류합니다.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 ${colors.primary[400]} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">개인화된 인사이트</h4>
                    <p className="text-gray-600">개인의 소비 패턴을 분석하여 맞춤형 절약 제안을 제공합니다.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4">95%</div>
                  <div className="text-xl font-semibold mb-2">분류 정확도</div>
                  <div className="text-yellow-100">AI가 학습한 패턴으로 정확한 분류</div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 ${colors.primary[400]} rounded-full`}></div>
              <span className="font-medium">카카오뱅크 연동</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 ${colors.primary[400]} rounded-full`}></div>
              <span className="font-medium">실시간 동기화</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 ${colors.primary[400]} rounded-full`}></div>
              <span className="font-medium">보안 인증</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
