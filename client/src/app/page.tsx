import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { colors } from '@/constants/colors';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className={`bg-gradient-to-br ${colors.primary[50]} ${colors.primary[100]} py-20 lg:py-32`}>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                카카오뱅크 자동 분류 AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                복잡한 가계부 정리는 이제 AI에게 맡기세요.<br />
                카카오뱅크 결제 내역을 자동으로 분류하고 분석해드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={`${colors.primary[400]} hover:${colors.primary[500]} text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg`}>
                  지금 시작하기
                </button>
                <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-50">
                  더 알아보기
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                왜 우리 서비스를 선택해야 할까요?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                AI 기술로 가계부 관리의 새로운 경험을 제공합니다
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className={`${colors.primary[50]} p-8 rounded-xl hover:shadow-lg transition-all duration-300`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">자동 분류</h3>
                <p className="text-gray-600 leading-relaxed">
                  카카오뱅크 결제 내역을 AI가 자동으로 식비, 교통비, 쇼핑 등으로 분류합니다.
                </p>
              </div>
              
              <div className={`${colors.primary[50]} p-8 rounded-xl hover:shadow-lg transition-all duration-300`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">실시간 분석</h3>
                <p className="text-gray-600 leading-relaxed">
                  지출 패턴을 실시간으로 분석하고 소비 트렌드를 파악해드립니다.
                </p>
              </div>
              
              <div className={`${colors.primary[50]} p-8 rounded-xl hover:shadow-lg transition-all duration-300`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">스마트 리포트</h3>
                <p className="text-gray-600 leading-relaxed">
                  월별, 카테고리별 상세한 리포트를 제공하여 가계 관리에 도움을 드립니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}