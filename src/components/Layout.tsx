import React from 'react';
import { Menu, User, LogOut } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8f7e8]">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-gray-600" />
              <span className="ml-2 text-xl font-semibold">Panyero Lottery</span>
            </div>
            <div className="flex items-center space-x-4">
              <User className="h-6 w-6 text-gray-600" />
              <LogOut className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}