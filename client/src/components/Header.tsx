'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">💰</span>
            </div>
            <span className="text-xl font-bold text-gray-800">BankAI</span>
          </div>

          {/* Desktop Navigation */}
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

          {/* Login Button */}
          <div className="hidden md:block">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105">
              카카오 로그인
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
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
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 w-fit">
                카카오 로그인
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
