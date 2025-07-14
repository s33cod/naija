import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AuthModal from "@/components/auth/AuthModal";
import {
  ChevronDown,
  Home,
  Search,
  Building2,
  Info,
  BookOpen,
  Newspaper,
  Menu,
  X,
} from "lucide-react";
import { LiveTimestamp } from "@/components/ui/live-timestamp";

const industries = [
  { name: "Banking & Finance", path: "/industry/banking-finance", icon: "🏦" },
  { name: "Oil & Gas", path: "/industry/oil-gas", icon: "⛽" },
  { name: "Technology", path: "/industry/technology", icon: "💻" },
  { name: "Entertainment", path: "/industry/entertainment", icon: "🎭" },
  { name: "Healthcare", path: "/industry/healthcare", icon: "🏥" },
  { name: "Agriculture", path: "/industry/agriculture", icon: "🌾" },
  { name: "Education", path: "/industry/education", icon: "📚" },
  { name: "Construction", path: "/industry/construction", icon: "🏗️" },
  { name: "Manufacturing", path: "/industry/manufacturing", icon: "🏭" },
  { name: "Transportation", path: "/industry/transportation", icon: "🚛" },
  { name: "Fashion & Design", path: "/industry/fashion-design", icon: "👗" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "join">("signin");
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleSignIn = () => {
    setAuthMode("signin");
    setAuthModalOpen(true);
  };

  const handleJoinPlatform = () => {
    setAuthMode("join");
    setAuthModalOpen(true);
  };

  const isActivePath = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const navLinkClasses = (path: string) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
      isActivePath(path)
        ? "bg-naija-green text-white shadow-md"
        : "text-gray-600 hover:text-naija-green hover:bg-naija-green/5"
    }`;

  const mobileNavLinkClasses = (path: string) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
      isActivePath(path)
        ? "bg-naija-green text-white shadow-md"
        : "text-gray-600 hover:text-naija-green hover:bg-naija-green/5"
    }`;

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a
                href="/"
                className="flex items-center hover:opacity-90 transition-opacity"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F00da386e3951423ca8f5efbdbe71f46e?format=webp&width=800"
                  alt="TalkAboutNigeria"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-2">
            <a href="/" className={navLinkClasses("/")}>
              <Home className="w-4 h-4" />
              Home
            </a>

            <a href="/discovery" className={navLinkClasses("/discovery")}>
              <Search className="w-4 h-4" />
              Discover Talents
            </a>

            {/* Industries Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`${navLinkClasses("/industry")} ${
                    currentPath.startsWith("/industry")
                      ? "bg-naija-green text-white"
                      : ""
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  Industries
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 shadow-lg border-0 bg-white">
                <DropdownMenuItem asChild>
                  <a
                    href="/industry"
                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-naija-green/5 transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-naija-green" />
                    <span className="font-medium">All Industries</span>
                  </a>
                </DropdownMenuItem>
                <div className="border-t my-1"></div>
                <div className="grid grid-cols-2 gap-1 p-2">
                  {industries.map((industry) => (
                    <DropdownMenuItem key={industry.path} asChild>
                      <a
                        href={industry.path}
                        className="flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-naija-green/5 transition-colors text-sm"
                      >
                        <span className="text-lg">{industry.icon}</span>
                        <span className="truncate">{industry.name}</span>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/news" className={navLinkClasses("/news")}>
              <Newspaper className="w-4 h-4" />
              News
            </a>

            <a href="/stories" className={navLinkClasses("/stories")}>
              <BookOpen className="w-4 h-4" />
              Stories
            </a>

            <a href="/about" className={navLinkClasses("/about")}>
              <Info className="w-4 h-4" />
              About Nigeria
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            {/* Live Timestamp - Hidden on mobile */}
            <div className="hidden xl:block">
              <LiveTimestamp
                className="text-xs"
                showSeconds={false}
                prefix="🇳🇬"
              />
            </div>

            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>

            <Button
              variant="outline"
              className="hidden sm:flex text-sm"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-naija-green hover:bg-naija-green-dark text-sm px-4"
              onClick={handleJoinPlatform}
            >
              Join Platform
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            <div className="space-y-2">
              <a href="/" className={mobileNavLinkClasses("/")}>
                <Home className="w-5 h-5" />
                Home
              </a>
              <a
                href="/discovery"
                className={mobileNavLinkClasses("/discovery")}
              >
                <Search className="w-5 h-5" />
                Discover Talents
              </a>
              <a href="/industry" className={mobileNavLinkClasses("/industry")}>
                <Building2 className="w-5 h-5" />
                Industries
              </a>
              <a href="/news" className={mobileNavLinkClasses("/news")}>
                <Newspaper className="w-5 h-5" />
                News
              </a>
              <a href="/stories" className={mobileNavLinkClasses("/stories")}>
                <BookOpen className="w-5 h-5" />
                Success Stories
              </a>
              <a href="/about" className={mobileNavLinkClasses("/about")}>
                <Info className="w-5 h-5" />
                About TAN
              </a>

              {/* Featured Industries in Mobile */}
              <div className="pt-4 border-t">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 px-4">
                  Popular Industries
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {industries.slice(0, 6).map((industry) => (
                    <a
                      key={industry.path}
                      href={industry.path}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-naija-green hover:bg-naija-green/5 rounded-lg transition-colors"
                    >
                      <span>{industry.icon}</span>
                      <span className="truncate">{industry.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </header>
  );
}
