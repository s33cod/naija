import "./global.css";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BankingFinance from "./pages/BankingFinance";
import OilGas from "./pages/OilGas";
import Entertainment from "./pages/Entertainment";
import Technology from "./pages/Technology";
import IndustryHub from "./pages/IndustryHub";
import BlockchainNetwork from "./pages/BlockchainNetwork";
import AdminProfessionals from "./pages/AdminProfessionals";
import UserProfile from "./pages/UserProfile";
import TalentDiscovery from "./pages/TalentDiscovery";
import Stories from "./pages/Stories";
import About from "./pages/About";
import Join from "./pages/Join";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Healthcare from "./pages/Healthcare";
import Agriculture from "./pages/Agriculture";
import Education from "./pages/Education";
import Construction from "./pages/Construction";
import Manufacturing from "./pages/Manufacturing";
import Transportation from "./pages/Transportation";
import FashionDesign from "./pages/FashionDesign";
import News from "./pages/News";
import { WalletProvider } from "./components/blockchain/WalletAuth";
import {
  GoogleAnalytics,
  GA_CONFIG,
} from "./components/analytics/GoogleAnalytics";
import { AdSenseScript, ADSENSE_CONFIG } from "./components/ads/GoogleAdSense";

const queryClient = new QueryClient();

// SEO and Meta Tags Component
function SEOHead({
  title,
  description,
  keywords,
}: {
  title?: string;
  description?: string;
  keywords?: string;
}) {
  useEffect(() => {
    // Update document title
    document.title =
      title ||
      "TalkAboutNigeria - Connect with Nigeria's Leading Professionals & Businesses";

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      description ||
        "Discover and connect with Nigeria's leading professionals, entrepreneurs, and businesses across all industries. Showcase your skills, find mentors, build networks, and grow your career with verified Nigerian talent.",
    );

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      keywords ||
        "Nigeria professionals, Nigerian businesses, professional networking, career development, industry experts, African talent, Lagos professionals, Abuja businesses, Nigerian entrepreneurs, tech professionals Nigeria, banking finance Nigeria, oil gas Nigeria, entertainment Nigeria, healthcare professionals, agricultural experts, educational consultants, construction professionals, manufacturing experts, transportation logistics, fashion designers Nigeria, Nollywood, Afrobeats, fintech Nigeria, startup ecosystem, business mentors Nigeria, professional network Africa",
    );

    // Add Open Graph tags
    const ogTags = [
      {
        property: "og:title",
        content:
          title ||
          "TalkAboutNigeria - Connect with Nigeria's Leading Professionals & Businesses",
      },
      {
        property: "og:description",
        content:
          description ||
          "Discover verified Nigerian professionals, entrepreneurs, and businesses across all industries. Build networks, find mentors, and showcase your skills.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TalkAboutNigeria" },
    ];

    ogTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", tag.content);
    });
  }, [title, description, keywords]);

  return null;
}

// Route wrapper to handle SEO
function RouteWithSEO({
  children,
  title,
  description,
  keywords,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}) {
  return (
    <>
      <SEOHead title={title} description={description} keywords={keywords} />
      {children}
    </>
  );
}

// Placeholder components for future pages
function NewsPage() {
  return (
    <RouteWithSEO
      title="Latest Nigerian News - TalkAboutNigeria"
      description="Stay updated with the latest news from Nigeria's business, technology, and professional sectors."
      keywords="Nigeria news, business news Nigeria, technology news, professional updates"
    >
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-nigerian-red">
            Latest News 2025
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Coming soon - Your source for the latest Nigerian professional and
            business news.
          </p>
        </div>
      </div>
    </RouteWithSEO>
  );
}

function CommunityPage() {
  return (
    <RouteWithSEO
      title="Professional Community - TalkAboutNigeria"
      description="Join our community of verified Nigerian professionals for peer-to-peer networking and collaboration."
      keywords="professional community, Nigerian professionals, networking, peer-to-peer, collaboration"
    >
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-nigerian-green">
            Community Hub
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Connect and collaborate with fellow professionals in our exclusive
            community space.
          </p>
        </div>
      </div>
    </RouteWithSEO>
  );
}

function ProfessionalsPage() {
  return (
    <RouteWithSEO
      title="Browse Professionals - TalkAboutNigeria"
      description="Discover and connect with verified professionals across all Nigerian industries."
      keywords="browse professionals, Nigerian experts, industry professionals, career networking"
    >
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-nigerian-yellow">
            Browse Professionals
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Advanced search and filtering for Nigerian professionals coming
            soon.
          </p>
        </div>
      </div>
    </RouteWithSEO>
  );
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <TooltipProvider>
          <GoogleAnalytics measurementId={GA_CONFIG.measurementId} />
          <AdSenseScript clientId={ADSENSE_CONFIG.clientId} />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <RouteWithSEO
                    title="TalkAboutNigeria - Connect with Nigeria's Leading Professionals & Businesses"
                    description="Discover and connect with Nigeria's leading professionals, entrepreneurs, and businesses across all industries. Showcase your skills, find mentors, build networks, and grow your career with verified Nigerian talent including industry leaders like Tony Elumelu, Aliko Dangote, and Davido."
                    keywords="Nigeria professionals, Tony Elumelu, Aliko Dangote, Davido, networking, banking finance, oil gas, entertainment, technology, professional network"
                  >
                    <Index />
                  </RouteWithSEO>
                }
              />
              <Route path="/professionals" element={<ProfessionalsPage />} />
              <Route
                path="/industry"
                element={
                  <RouteWithSEO
                    title="Industry Hub - TalkAboutNigeria"
                    description="Explore all Nigerian industries and connect with professional leaders across Banking, Oil & Gas, Entertainment, Technology, and more."
                    keywords="Nigerian industries, professional sectors, industry hub, business sectors Nigeria, professional networking"
                  >
                    <IndustryHub />
                  </RouteWithSEO>
                }
              />
              <Route
                path="/industry/banking-finance"
                element={
                  <RouteWithSEO
                    title="Banking & Finance Professionals - TalkAboutNigeria"
                    description="Connect with Nigeria's top banking and finance professionals including Tony Elumelu, Ngozi Okonjo-Iweala, and other industry leaders."
                    keywords="Nigerian banking, finance professionals, Tony Elumelu, banking mentors, financial services Nigeria"
                  >
                    <BankingFinance />
                  </RouteWithSEO>
                }
              />
              <Route
                path="/industry/oil-gas"
                element={
                  <RouteWithSEO
                    title="Oil & Gas Professionals - TalkAboutNigeria"
                    description="Connect with Nigeria's energy sector leaders including Aliko Dangote and other oil & gas industry experts."
                    keywords="Nigerian oil gas, energy professionals, Aliko Dangote, petroleum industry, energy mentors"
                  >
                    <OilGas />
                  </RouteWithSEO>
                }
              />
              <Route
                path="/industry/entertainment"
                element={
                  <RouteWithSEO
                    title="Entertainment Industry Professionals - Talk About Nigeria"
                    description="Connect with Nigeria's entertainment leaders including Davido, Genevieve Nnaji, Mo Abudu and other creative industry experts."
                    keywords="Nigerian entertainment, Nollywood, Afrobeats, Davido, Genevieve Nnaji, Mo Abudu, creative industry"
                  >
                    <Entertainment />
                  </RouteWithSEO>
                }
              />
              <Route
                path="/industry/technology"
                element={
                  <RouteWithSEO
                    title="Technology Professionals - Nigerian Tech Leaders"
                    description="Connect with Nigeria's leading technology professionals including Paystack founders, fintech innovators, and software engineers shaping Africa's digital future."
                    keywords="Nigerian tech professionals, fintech Nigeria, software engineers, tech entrepreneurs, Paystack, Flutterwave"
                  >
                    <Technology />
                  </RouteWithSEO>
                }
              />
              <Route
                path="/blockchain"
                element={
                  <RouteWithSEO
                    title="Blockchain Network - TalkAboutNigeria"
                    description="Access decentralized professional networking with Web3 wallet integration, P2P connections, and blockchain-verified credentials."
                    keywords="blockchain networking, Web3 professionals, decentralized identity, crypto connections, blockchain verification"
                  >
                    <BlockchainNetwork />
                  </RouteWithSEO>
                }
              />
              <Route
                path="/admin/professionals"
                element={
                  <RouteWithSEO
                    title="Admin - Manage Professionals - TalkAboutNigeria"
                    description="Admin panel for managing professional profiles with mandatory image validation and verification requirements."
                    keywords="admin, professional management, image validation, profile verification"
                  >
                    <AdminProfessionals />
                  </RouteWithSEO>
                }
              />
              <Route
                path="/profile/:userId"
                element={
                  <RouteWithSEO
                    title="Professional Profile - TalkAboutNigeria"
                    description="View detailed professional profile, experience, education, and activities of Nigerian industry leaders."
                    keywords="professional profile, Nigerian professionals, user profile, networking"
                  >
                    <UserProfile />
                  </RouteWithSEO>
                }
              />
              <Route
                path="/discovery"
                element={
                  <RouteWithSEO
                    title="AI-Powered Talent Discovery - Talk About Nigeria"
                    description="Discover Nigerian professionals and gifted individuals through advanced AI search. Find talents by skills, industry, location, and verified social profiles."
                    keywords="talent discovery, AI search, Nigerian professionals, skill matching, social verification, talent search"
                  >
                    <TalentDiscovery />
                  </RouteWithSEO>
                }
              />
              <Route path="/stories" element={<Stories />} />
              <Route path="/about" element={<About />} />
              <Route path="/join" element={<Join />} />
              <Route path="/help" element={<Help />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/industry/healthcare" element={<Healthcare />} />
              <Route path="/industry/agriculture" element={<Agriculture />} />
              <Route path="/industry/education" element={<Education />} />
              <Route path="/industry/construction" element={<Construction />} />
              <Route
                path="/industry/manufacturing"
                element={<Manufacturing />}
              />
              <Route
                path="/industry/transportation"
                element={<Transportation />}
              />
              <Route
                path="/industry/fashion-design"
                element={
                  <RouteWithSEO
                    title="Fashion & Design Professionals - TalkAboutNigeria"
                    description="Connect with Nigeria's leading fashion designers, stylists, and creative professionals including Mai Atafo, Deola Sagoe, Lisa Folawiyo, and other industry innovators."
                    keywords="Nigerian fashion designers, African fashion, fashion industry Nigeria, creative professionals, fashion stylists, Lagos fashion, contemporary African fashion"
                  >
                    <FashionDesign />
                  </RouteWithSEO>
                }
              />
              <Route path="/news" element={<News />} />
              <Route path="/community" element={<CommunityPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </WalletProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
