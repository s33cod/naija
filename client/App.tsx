import "./global.css";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BankingFinance from "./pages/BankingFinance";
import OilGas from "./pages/OilGas";
import Entertainment from "./pages/Entertainment";
import IndustryHub from "./pages/IndustryHub";
import BlockchainNetwork from "./pages/BlockchainNetwork";
import { WalletProvider } from "./components/blockchain/WalletAuth";

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
      title || "NaijaPro Connect - Nigeria's Premier Professional Network";

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
        "Connect with Nigeria's top professionals across all industries. Discover verified talent, build networks, and collaborate with industry leaders.",
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
        "Nigeria professionals, networking, industry experts, career development, business connections, African talent, professional network, LinkedIn Nigeria",
    );

    // Add Open Graph tags
    const ogTags = [
      {
        property: "og:title",
        content:
          title || "NaijaPro Connect - Nigeria's Premier Professional Network",
      },
      {
        property: "og:description",
        content:
          description ||
          "Connect with Nigeria's top professionals across all industries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "NaijaPro Connect" },
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
      title="Latest Nigerian News - NaijaPro Connect"
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
      title="Professional Community - NaijaPro Connect"
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
      title="Browse Professionals - NaijaPro Connect"
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
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RouteWithSEO
                title="NaijaPro Connect - Nigeria's Premier Professional Network"
                description="Connect with Nigeria's top professionals across all industries. Discover verified talent, build networks, and collaborate with industry leaders like Tony Elumelu, Aliko Dangote, and Davido."
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
                title="Industry Hub - NaijaPro Connect"
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
                title="Banking & Finance Professionals - NaijaPro Connect"
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
                title="Oil & Gas Professionals - NaijaPro Connect"
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
                title="Entertainment Industry Professionals - NaijaPro Connect"
                description="Connect with Nigeria's entertainment leaders including Davido, Genevieve Nnaji, Mo Abudu and other creative industry experts."
                keywords="Nigerian entertainment, Nollywood, Afrobeats, Davido, Genevieve Nnaji, Mo Abudu, creative industry"
              >
                <Entertainment />
              </RouteWithSEO>
            }
          />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
