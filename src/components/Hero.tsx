import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-black"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            The Future of Digital Advertising
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Transform your digital presence with AI-powered advertising solutions that deliver results
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/register" className="group bg-cyan-400 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-300 transition-colors flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#demo" className="group px-8 py-3 rounded-lg text-lg font-semibold border border-white/20 hover:bg-white/10 transition-colors">
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}