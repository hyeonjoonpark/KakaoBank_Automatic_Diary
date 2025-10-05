'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PRIMARY_TEXT_COLOR } from '@/constants/colors';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleKakaoLogin = () => {
    router.push('/bank_diary');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-gray-800">서비스 이름 못 정함</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-yellow-600 transition-colors">
              기능
            </a>
            <a href="#about" className="text-gray-600 hover:text-yellow-600 transition-colors">
              소개
            </a>
            <a href="#contact" className="text-gray-600 hover:text-yellow-600 transition-colors">
              문의
            </a>
          </nav>

          <div className="hidden md:block flex items-center space-x-2">
            <button 
              onClick={handleKakaoLogin}
              className={`bg-yellow-400 hover:bg-yellow-500 ${PRIMARY_TEXT_COLOR} px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2`}
            >
              <img src="/kakaotalk logo.svg" alt="KakaoTalk" width="28" height="28" />
              <span>카카오 로그인</span>
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-yellow-600 transition-colors">
                기능
              </a>
              <a href="#about" className="text-gray-600 hover:text-yellow-600 transition-colors">
                소개
              </a>
              <a href="#contact" className="text-gray-600 hover:text-yellow-600 transition-colors">
                문의
              </a>
              <button 
                onClick={handleKakaoLogin}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-medium transition-all duration-300 w-full flex items-center justify-center space-x-2"
              >
                <img src="/kakaotalk logo.svg" alt="KakaoTalk" width="28" height="28" />
                <span>카카오 로그인</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
