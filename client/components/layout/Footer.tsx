import React from "react";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Fc1d1b353699446cabb187f63b2cb9fdf?format=webp&width=800"
                  alt="Talk About Nigeria"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Connecting Nigeria's brightest talents across all industries.
                Discover professionals, artists, entrepreneurs, and innovators
                who are shaping the future of our great nation.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:hello@talkaboutnigeria.com"
                    className="hover:text-white"
                  >
                    hello@talkaboutnigeria.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+234 (0) 900 000 0000</span>
                </div>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Platform</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="/discovery"
                    className="hover:text-white transition-colors"
                  >
                    🔍 Discover Talents
                  </a>
                </li>
                <li>
                  <a
                    href="/industry"
                    className="hover:text-white transition-colors"
                  >
                    Industry Hubs
                  </a>
                </li>
                <li>
                  <a
                    href="/stories"
                    className="hover:text-white transition-colors"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Nigeria
                  </a>
                </li>
                <li>
                  <a
                    href="/join"
                    className="hover:text-white transition-colors"
                  >
                    Join Platform
                  </a>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Industries</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="/industry/banking-finance"
                    className="hover:text-white transition-colors"
                  >
                    Banking & Finance
                  </a>
                </li>
                <li>
                  <a
                    href="/industry/oil-gas"
                    className="hover:text-white transition-colors"
                  >
                    Oil & Gas
                  </a>
                </li>
                <li>
                  <a
                    href="/industry/entertainment"
                    className="hover:text-white transition-colors"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/industry/technology"
                    className="hover:text-white transition-colors"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="/industry"
                    className="hover:text-white transition-colors"
                  >
                    View All Industries →
                  </a>
                </li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Support & Legal</h4>
              <ul className="space-y-3 text-gray-400 mb-6">
                <li>
                  <a
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Support
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/cookies"
                    className="hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>

              {/* Social Media Links */}
              <div>
                <h5 className="font-medium mb-3">Follow Us</h5>
                <div className="flex space-x-3">
                  <a
                    href="https://twitter.com/talkaboutnigeria"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-naija-green transition-colors"
                    aria-label="Follow us on Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/company/talkaboutnigeria"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-naija-green transition-colors"
                    aria-label="Follow us on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com/talkaboutnigeria"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-naija-green transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com/talkaboutnigeria"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-naija-green transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com/talkaboutnigeria"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-naija-green transition-colors"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">
              Stay Connected with Nigerian Talent
            </h3>
            <p className="text-gray-400 mb-4">
              Get weekly updates on featured professionals, industry insights,
              and success stories from across Nigeria.
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-naija-green"
              />
              <Button className="bg-naija-green hover:bg-naija-green-dark px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Talk About Nigeria. All rights reserved. Made with ❤️
              in Nigeria.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
              <span>🇳🇬 Proudly Nigerian</span>
              <a href="/sitemap" className="hover:text-white">
                Sitemap
              </a>
              <a href="/accessibility" className="hover:text-white">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-naija-green hover:bg-naija-green-dark shadow-lg"
          aria-label="Open chat support"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </footer>
  );
}
