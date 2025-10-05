import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* 메인 콘텐츠 영역 */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              카카오뱅크 자동 분류 AI 서비스
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              카카오뱅크 결제 내역을 AI가 자동으로 분류해드립니다.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
              🚀 지금 시작하기
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}