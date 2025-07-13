// AI-powered search and discovery engine for Talk About Nigeria platform

export interface TalentProfile {
  id: string;
  name: string;
  alias: string;
  profileType: "gifted" | "certified" | "rising-star" | "mentor";
  status: "active" | "inactive" | "available" | "busy";

  // Professional Information
  primaryIndustry: string;
  secondaryIndustries: string[];
  professionalTitle: string;
  company?: string;

  // Creative/Personal Skills
  creativeSkills: string[];
  hobbies: string[];
  passions: string[];

  // Location
  location: {
    city: string;
    state: string;
    country: string;
    coordinates?: { lat: number; lng: number };
  };

  // Social Verification
  verifiedProfiles: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
    portfolio?: string;
    spotify?: string;
  };

  // AI-Enhanced Attributes
  skillTags: string[];
  interestTags: string[];
  personalityTags: string[];
  reputationScore: number;
  engagementLevel: "high" | "medium" | "low";

  // Content & Monetization
  content?: {
    type: "music" | "art" | "courses" | "digital-products" | "consulting";
    items: ContentItem[];
  };

  // Blockchain Integration
  blockchainVerified: boolean;
  nftPortfolio?: string[];
  digitalWallet?: string;
}

export interface ContentItem {
  id: string;
  title: string;
  type: "video" | "audio" | "image" | "document" | "course";
  description: string;
  price?: number;
  currency: "NGN" | "USD" | "BTC" | "ETH";
  endorsements: number;
  downloads: number;
  rating: number;
}

export interface SearchFilters {
  // Basic Search
  query?: string;
  name?: string;

  // Industry & Skills
  industries?: string[];
  skillTags?: string[];
  interestTags?: string[];

  // Location
  location?: {
    city?: string;
    state?: string;
    country?: string;
    radius?: number; // in km
  };

  // Profile Types
  profileTypes?: ("gifted" | "certified" | "rising-star" | "mentor")[];
  status?: ("active" | "inactive" | "available" | "busy")[];

  // Social Verification
  hasLinkedIn?: boolean;
  hasInstagram?: boolean;
  hasFacebook?: boolean;
  hasPortfolio?: boolean;

  // AI Filters
  minReputationScore?: number;
  engagementLevel?: ("high" | "medium" | "low")[];
  personalityTags?: string[];

  // Content & Monetization
  hasContent?: boolean;
  contentTypes?: string[];
  priceRange?: { min: number; max: number };

  // Blockchain
  blockchainVerified?: boolean;
  hasNFT?: boolean;
}

export interface SearchResult {
  profile: TalentProfile;
  relevanceScore: number;
  matchReasons: string[];
  suggestedConnections: string[];
}

export interface AISearchResponse {
  results: SearchResult[];
  totalCount: number;
  searchTime: number;
  suggestions: string[];
  relatedTags: string[];
  trendingProfiles: TalentProfile[];
}

// Mock data representing the Nigerian talent database
const TALENT_DATABASE: TalentProfile[] = [
  {
    id: "tony-elumelu",
    name: "Tony Elumelu",
    alias: "@tonyelumelu",
    profileType: "mentor",
    status: "active",
    primaryIndustry: "Banking & Finance",
    secondaryIndustries: ["Entrepreneurship", "Philanthropy"],
    professionalTitle: "Chairman & CEO, UBA Group",
    company: "UBA Group",
    creativeSkills: ["Public Speaking", "Strategic Planning", "Mentorship"],
    hobbies: ["Golf", "Reading", "Traveling"],
    passions: [
      "African Development",
      "Youth Empowerment",
      "Economic Transformation",
    ],
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
    },
    verifiedProfiles: {
      linkedin: "https://linkedin.com/in/tony-elumelu",
      twitter: "https://twitter.com/TonyElumelu",
      portfolio: "https://tonyelumelufoundation.org",
    },
    skillTags: [
      "Leadership",
      "Banking",
      "Investment",
      "Philanthropy",
      "Entrepreneurship",
    ],
    interestTags: [
      "African Development",
      "Youth Mentorship",
      "Financial Inclusion",
    ],
    personalityTags: ["Visionary", "Strategic", "Philanthropic", "Leader"],
    reputationScore: 95,
    engagementLevel: "high",
    blockchainVerified: true,
  },
  {
    id: "aliko-dangote",
    name: "Aliko Dangote",
    alias: "@dangote",
    profileType: "mentor",
    status: "active",
    primaryIndustry: "Oil & Gas",
    secondaryIndustries: ["Manufacturing", "Infrastructure"],
    professionalTitle: "President & CEO, Dangote Group",
    company: "Dangote Group",
    creativeSkills: ["Strategic Vision", "Industrial Planning"],
    hobbies: ["Business Development", "Infrastructure Projects"],
    passions: ["African Industrialization", "Economic Development"],
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
    },
    verifiedProfiles: {
      linkedin: "https://linkedin.com/in/aliko-dangote",
      portfolio: "https://dangote.com",
    },
    skillTags: [
      "Industrial Leadership",
      "Oil & Gas",
      "Manufacturing",
      "Infrastructure",
    ],
    interestTags: ["Economic Development", "Industrialization", "Job Creation"],
    personalityTags: ["Ambitious", "Strategic", "Industrial", "Visionary"],
    reputationScore: 98,
    engagementLevel: "medium",
    blockchainVerified: true,
  },
  {
    id: "davido",
    name: "Davido",
    alias: "@davido",
    profileType: "gifted",
    status: "active",
    primaryIndustry: "Entertainment",
    secondaryIndustries: ["Music Production", "Brand Management"],
    professionalTitle: "International Music Artist & CEO, DMW",
    company: "Davido Music Worldwide",
    creativeSkills: [
      "Music Production",
      "Performance",
      "Brand Building",
      "Social Media",
    ],
    hobbies: ["Fashion", "Cars", "Travel", "Technology"],
    passions: ["Afrobeats", "Global Music", "Youth Culture", "Entertainment"],
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
    },
    verifiedProfiles: {
      instagram: "https://instagram.com/davido",
      twitter: "https://twitter.com/davido",
      youtube: "https://youtube.com/davido",
      spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
    },
    skillTags: [
      "Music",
      "Entertainment",
      "Afrobeats",
      "Performance",
      "Branding",
    ],
    interestTags: [
      "Global Music",
      "Youth Culture",
      "African Pride",
      "Entertainment",
    ],
    personalityTags: ["Creative", "Energetic", "Charismatic", "Global"],
    reputationScore: 92,
    engagementLevel: "high",
    content: {
      type: "music",
      items: [
        {
          id: "timeless-album",
          title: "Timeless Album",
          type: "audio",
          description: "Latest Afrobeats album featuring global collaborations",
          price: 2000,
          currency: "NGN",
          endorsements: 15000,
          downloads: 500000,
          rating: 4.8,
        },
      ],
    },
    blockchainVerified: true,
  },
  {
    id: "creative-designer-lagos",
    name: "Adunni Soyinka",
    alias: "@creativedeco",
    profileType: "gifted",
    status: "available",
    primaryIndustry: "Technology",
    secondaryIndustries: ["Interior Design", "Digital Art"],
    professionalTitle: "Senior UX Designer",
    company: "Paystack",
    creativeSkills: [
      "Interior Design",
      "Digital Art",
      "UI/UX Design",
      "Photography",
    ],
    hobbies: ["Art", "Home Decor", "Photography", "Travel"],
    passions: ["Design Thinking", "African Aesthetics", "User Experience"],
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
    },
    verifiedProfiles: {
      linkedin: "https://linkedin.com/in/adunni-soyinka",
      instagram: "https://instagram.com/creativedeco",
      portfolio: "https://adunnisoyinka.design",
    },
    skillTags: [
      "UX Design",
      "Interior Design",
      "Digital Art",
      "User Research",
      "Prototyping",
    ],
    interestTags: [
      "Design",
      "Technology",
      "Art",
      "User Experience",
      "African Culture",
    ],
    personalityTags: ["Creative", "Detail-oriented", "Innovative", "Artistic"],
    reputationScore: 87,
    engagementLevel: "high",
    content: {
      type: "courses",
      items: [
        {
          id: "ux-design-course",
          title: "UX Design Fundamentals for Africans",
          type: "course",
          description:
            "Complete course on UX design with African cultural context",
          price: 25000,
          currency: "NGN",
          endorsements: 250,
          downloads: 1200,
          rating: 4.9,
        },
      ],
    },
    blockchainVerified: false,
  },
];

// AI-powered search engine
export class TalentSearchEngine {
  private database: TalentProfile[] = TALENT_DATABASE;

  // Main search function
  async search(filters: SearchFilters): Promise<AISearchResponse> {
    const startTime = Date.now();

    // Apply filters
    let results = this.database.filter((profile) =>
      this.matchesFilters(profile, filters),
    );

    // Calculate relevance scores
    const scoredResults = results.map((profile) => ({
      profile,
      relevanceScore: this.calculateRelevanceScore(profile, filters),
      matchReasons: this.getMatchReasons(profile, filters),
      suggestedConnections: this.getSuggestedConnections(profile),
    }));

    // Sort by relevance
    scoredResults.sort((a, b) => b.relevanceScore - a.relevanceScore);

    const searchTime = Date.now() - startTime;

    return {
      results: scoredResults,
      totalCount: scoredResults.length,
      searchTime,
      suggestions: this.generateSuggestions(filters),
      relatedTags: this.getRelatedTags(filters),
      trendingProfiles: this.getTrendingProfiles(),
    };
  }

  // Check if profile matches filters
  private matchesFilters(
    profile: TalentProfile,
    filters: SearchFilters,
  ): boolean {
    // Query search
    if (filters.query) {
      const query = filters.query.toLowerCase();
      const searchableText = [
        profile.name,
        profile.alias,
        profile.professionalTitle,
        ...profile.skillTags,
        ...profile.interestTags,
        ...profile.creativeSkills,
      ]
        .join(" ")
        .toLowerCase();

      if (!searchableText.includes(query)) return false;
    }

    // Name search
    if (
      filters.name &&
      !profile.name.toLowerCase().includes(filters.name.toLowerCase())
    ) {
      return false;
    }

    // Industry filters
    if (filters.industries && filters.industries.length > 0) {
      const hasIndustry = filters.industries.some(
        (industry) =>
          profile.primaryIndustry
            .toLowerCase()
            .includes(industry.toLowerCase()) ||
          profile.secondaryIndustries.some((sec) =>
            sec.toLowerCase().includes(industry.toLowerCase()),
          ),
      );
      if (!hasIndustry) return false;
    }

    // Skill tags
    if (filters.skillTags && filters.skillTags.length > 0) {
      const hasSkill = filters.skillTags.some((skill) =>
        profile.skillTags.some((tag) =>
          tag.toLowerCase().includes(skill.toLowerCase()),
        ),
      );
      if (!hasSkill) return false;
    }

    // Profile types
    if (filters.profileTypes && filters.profileTypes.length > 0) {
      if (!filters.profileTypes.includes(profile.profileType)) return false;
    }

    // Status
    if (filters.status && filters.status.length > 0) {
      if (!filters.status.includes(profile.status)) return false;
    }

    // Location
    if (filters.location) {
      if (
        filters.location.city &&
        !profile.location.city
          .toLowerCase()
          .includes(filters.location.city.toLowerCase())
      ) {
        return false;
      }
      if (
        filters.location.state &&
        !profile.location.state
          .toLowerCase()
          .includes(filters.location.state.toLowerCase())
      ) {
        return false;
      }
      if (
        filters.location.country &&
        !profile.location.country
          .toLowerCase()
          .includes(filters.location.country.toLowerCase())
      ) {
        return false;
      }
    }

    // Social verification
    if (filters.hasLinkedIn && !profile.verifiedProfiles.linkedin) return false;
    if (filters.hasInstagram && !profile.verifiedProfiles.instagram)
      return false;
    if (filters.hasFacebook && !profile.verifiedProfiles.facebook) return false;
    if (filters.hasPortfolio && !profile.verifiedProfiles.portfolio)
      return false;

    // Reputation score
    if (
      filters.minReputationScore &&
      profile.reputationScore < filters.minReputationScore
    ) {
      return false;
    }

    // Engagement level
    if (filters.engagementLevel && filters.engagementLevel.length > 0) {
      if (!filters.engagementLevel.includes(profile.engagementLevel))
        return false;
    }

    // Content filters
    if (filters.hasContent && !profile.content) return false;

    // Blockchain verification
    if (filters.blockchainVerified && !profile.blockchainVerified) return false;

    return true;
  }

  // Calculate relevance score for search results
  private calculateRelevanceScore(
    profile: TalentProfile,
    filters: SearchFilters,
  ): number {
    let score = 0;

    // Base score from reputation
    score += profile.reputationScore * 0.3;

    // Query relevance
    if (filters.query) {
      const query = filters.query.toLowerCase();
      if (profile.name.toLowerCase().includes(query)) score += 20;
      if (profile.professionalTitle.toLowerCase().includes(query)) score += 15;
      if (profile.skillTags.some((tag) => tag.toLowerCase().includes(query)))
        score += 10;
    }

    // Industry match
    if (filters.industries) {
      filters.industries.forEach((industry) => {
        if (
          profile.primaryIndustry.toLowerCase().includes(industry.toLowerCase())
        )
          score += 15;
        if (
          profile.secondaryIndustries.some((sec) =>
            sec.toLowerCase().includes(industry.toLowerCase()),
          )
        )
          score += 8;
      });
    }

    // Skill match
    if (filters.skillTags) {
      filters.skillTags.forEach((skill) => {
        if (
          profile.skillTags.some((tag) =>
            tag.toLowerCase().includes(skill.toLowerCase()),
          )
        )
          score += 12;
      });
    }

    // Engagement bonus
    if (profile.engagementLevel === "high") score += 10;
    if (profile.engagementLevel === "medium") score += 5;

    // Verification bonus
    if (profile.blockchainVerified) score += 8;
    const verifiedPlatforms = Object.values(profile.verifiedProfiles).filter(
      Boolean,
    ).length;
    score += verifiedPlatforms * 3;

    // Content creator bonus
    if (profile.content) score += 15;

    return Math.min(score, 100); // Cap at 100
  }

  // Get match reasons for display
  private getMatchReasons(
    profile: TalentProfile,
    filters: SearchFilters,
  ): string[] {
    const reasons: string[] = [];

    if (filters.query) {
      const query = filters.query.toLowerCase();
      if (profile.name.toLowerCase().includes(query)) {
        reasons.push(`Name matches "${filters.query}"`);
      }
      if (profile.skillTags.some((tag) => tag.toLowerCase().includes(query))) {
        reasons.push(`Has skills related to "${filters.query}"`);
      }
    }

    if (filters.industries) {
      filters.industries.forEach((industry) => {
        if (
          profile.primaryIndustry.toLowerCase().includes(industry.toLowerCase())
        ) {
          reasons.push(`Works in ${industry}`);
        }
      });
    }

    if (profile.reputationScore >= 90) {
      reasons.push("Top-rated professional");
    }

    if (profile.blockchainVerified) {
      reasons.push("Blockchain verified");
    }

    if (profile.content) {
      reasons.push("Content creator");
    }

    return reasons;
  }

  // Get suggested connections
  private getSuggestedConnections(profile: TalentProfile): string[] {
    return this.database
      .filter((p) => p.id !== profile.id)
      .filter(
        (p) =>
          p.primaryIndustry === profile.primaryIndustry ||
          p.skillTags.some((tag) => profile.skillTags.includes(tag)) ||
          p.location.city === profile.location.city,
      )
      .slice(0, 3)
      .map((p) => p.name);
  }

  // Generate search suggestions
  private generateSuggestions(filters: SearchFilters): string[] {
    const suggestions = [
      "UX Designer + Interior Decorator",
      "Music Producer + Entrepreneur",
      "Software Engineer + Digital Artist",
      "Financial Analyst + Investment Advisor",
      "Content Creator + Brand Strategist",
    ];

    return suggestions.slice(0, 3);
  }

  // Get related tags for exploration
  private getRelatedTags(filters: SearchFilters): string[] {
    const allTags = this.database.flatMap((p) => [
      ...p.skillTags,
      ...p.interestTags,
    ]);
    const uniqueTags = [...new Set(allTags)];
    return uniqueTags.slice(0, 10);
  }

  // Get trending profiles
  private getTrendingProfiles(): TalentProfile[] {
    return this.database
      .filter((p) => p.engagementLevel === "high")
      .sort((a, b) => b.reputationScore - a.reputationScore)
      .slice(0, 3);
  }

  // Get profile by ID
  getProfile(id: string): TalentProfile | null {
    return this.database.find((p) => p.id === id) || null;
  }

  // Get all industries
  getAllIndustries(): string[] {
    const industries = new Set<string>();
    this.database.forEach((profile) => {
      industries.add(profile.primaryIndustry);
      profile.secondaryIndustries.forEach((industry) =>
        industries.add(industry),
      );
    });
    return Array.from(industries).sort();
  }

  // Get all skill tags
  getAllSkillTags(): string[] {
    const skills = new Set<string>();
    this.database.forEach((profile) => {
      profile.skillTags.forEach((skill) => skills.add(skill));
    });
    return Array.from(skills).sort();
  }
}

// Singleton instance
export const talentSearchEngine = new TalentSearchEngine();

// React hook for using the search engine
export function useTalentSearch() {
  return {
    search: (filters: SearchFilters) => talentSearchEngine.search(filters),
    getProfile: (id: string) => talentSearchEngine.getProfile(id),
    getAllIndustries: () => talentSearchEngine.getAllIndustries(),
    getAllSkillTags: () => talentSearchEngine.getAllSkillTags(),
  };
}
