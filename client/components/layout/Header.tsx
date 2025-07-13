import React from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-naija-green to-naija-green-light rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🇳🇬</span>
              </div>
              <a
                href="/"
                className="text-xl font-bold text-gray-900 hover:text-naija-green transition-colors"
              >
                Talk About Nigeria
              </a>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-900 hover:text-naija-green font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="/discovery"
              className="text-gray-600 hover:text-naija-green transition-colors"
            >
              🔍 Discover Talents
            </a>
            <a
              href="/industry"
              className="text-gray-600 hover:text-naija-green transition-colors"
            >
              Industries
            </a>
            <a
              href="/about"
              className="text-gray-600 hover:text-naija-green transition-colors"
            >
              About Nigeria
            </a>
            <a
              href="/stories"
              className="text-gray-600 hover:text-naija-green transition-colors"
            >
              Success Stories
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:flex">
              Sign In
            </Button>
            <Button className="bg-naija-green hover:bg-naija-green-dark">
              Join Platform
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t bg-white">
        <nav className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-around text-sm">
            <a href="/" className="text-gray-900 font-medium">
              Home
            </a>
            <a href="/discovery" className="text-gray-600">
              Discover
            </a>
            <a href="/industry" className="text-gray-600">
              Industries
            </a>
            <a href="/about" className="text-gray-600">
              About
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
