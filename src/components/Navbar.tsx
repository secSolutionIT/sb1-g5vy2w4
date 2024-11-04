import React from 'react';
import { Globe } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Globe className="w-8 h-8 text-cyan-400" />
            <span className="ml-2 text-xl font-bold text-white">OpenAdv</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">Home</a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">Product</a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">Features</a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">Resources</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/login" className="text-white hover:text-cyan-400 transition-colors">Sign in</a>
            <a href="/register" className="bg-cyan-400 text-black px-4 py-2 rounded-lg hover:bg-cyan-300 transition-colors">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}