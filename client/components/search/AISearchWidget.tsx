import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Sparkles,
  TrendingUp,
  Filter,
  MapPin,
  Star,
} from "lucide-react";

interface AISearchWidgetProps {
  industry?: string;
  placeholder?: string;
}

const industrySpecificSuggestions: Record<string, string[]> = {
  "Banking & Finance": [
    "Investment Banking + Art Collection",
    "Financial Analyst + Music Producer",
    "Credit Risk Manager + Photography",
    "Portfolio Manager + Creative Writing",
  ],
  "Oil & Gas": [
    "Petroleum Engineer + Environmental Art",
    "Geologist + Nature Photography",
    "Energy Consultant + Sustainable Design",
    "Pipeline Engineer + Documentary Film",
  ],
  Technology: [
    "Software Engineer + Music Production",
    "Data Scientist + Digital Art",
    "UX Designer + Interior Design",
    "DevOps Engineer + Photography",
  ],
  Entertainment: [
    "Music Producer + Business Strategy",
    "Actor + Financial Planning",
    "Director + Tech Innovation",
    "Content Creator + Marketing",
  ],
  Healthcare: [
    "Doctor + Medical Writing",
    "Nurse + Health Education",
    "Pharmacist + Wellness Coaching",
    "Surgeon + Medical Technology",
  ],
  Agriculture: [
    "Agronomist + Sustainable Innovation",
    "Farm Manager + Agri-Tech",
    "Crop Scientist + Environmental Conservation",
    "Agricultural Engineer + Food Technology",
  ],
};

const trendingSearches = [
  "Lagos-based UX Designer",
  "Financial Analyst + Photographer",
  "Music Producer + Tech Background",
  "Marketing Manager + Content Creator",
  "Data Scientist + Digital Artist",
  "Doctor + Medical Writer",
];

export default function AISearchWidget({
  industry,
  placeholder = "Search for professionals: 'UX Designer + Photographer' or 'Banker + Musician'",
}: AISearchWidgetProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const suggestions = industry
    ? industrySpecificSuggestions[industry] || []
    : trendingSearches;

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsLoading(true);
      // Simulate search loading
      setTimeout(() => {
        window.location.href = `/discovery?q=${encodeURIComponent(searchQuery)}${
          industry ? `&industry=${encodeURIComponent(industry)}` : ""
        }`;
      }, 500);
    } else {
      window.location.href = `/discovery${
        industry ? `?industry=${encodeURIComponent(industry)}` : ""
      }`;
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setTimeout(() => {
      handleSearch();
    }, 100);
  };

  return (
    <Card className="border-2 border-naija-green/20 bg-gradient-to-r from-white to-naija-green/5">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-naija-green" />
            <h3 className="text-lg font-semibold text-gray-900">
              AI-Powered Talent Discovery
            </h3>
          </div>
          <p className="text-gray-600 text-sm">
            {industry
              ? `Find ${industry} professionals with unique creative talents`
              : "Discover professionals with mashup skills across all industries"}
          </p>
        </div>

        {/* Main Search Bar */}
        <div className="mb-6">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="pl-10 h-12 text-base"
              />
            </div>
            <Button
              onClick={handleSearch}
              disabled={isLoading}
              className="h-12 px-6 bg-naija-green hover:bg-naija-green-dark"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Quick Suggestions */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              {industry ? `Popular in ${industry}:` : "Trending searches:"}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {suggestions.slice(0, 4).map((suggestion, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-naija-green hover:text-white transition-colors"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </Badge>
            ))}
          </div>
        </div>

        {/* Advanced Filters */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>All Nigerian States</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span>Verified Profiles</span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                (window.location.href = `/discovery${
                  industry ? `?industry=${encodeURIComponent(industry)}` : ""
                }`)
              }
              className="text-naija-green border-naija-green hover:bg-naija-green hover:text-white"
            >
              <Filter className="w-4 h-4 mr-2" />
              Advanced Search
            </Button>
          </div>
        </div>

        {industry && (
          <div className="mt-4 p-3 bg-naija-green/10 rounded-lg">
            <p className="text-xs text-naija-green">
              <strong>Pro Tip:</strong> Try searching for professionals who
              combine {industry.toLowerCase()} expertise with creative skills
              like photography, music, or design.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
