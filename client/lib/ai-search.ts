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
  {
    id: "shola-akinlade",
    name: "Shola Akinlade",
    alias: "@sholakin",
    profileType: "rising-star",
    status: "active",
    primaryIndustry: "Technology",
    secondaryIndustries: ["Fintech", "Entrepreneurship"],
    professionalTitle: "Co-founder & CEO, Paystack",
    company: "Paystack",
    creativeSkills: ["Product Strategy", "Innovation", "Leadership"],
    hobbies: ["Coding", "Reading", "Tech Innovation"],
    passions: [
      "Financial Inclusion",
      "African Technology",
      "Payment Solutions",
    ],
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
    },
    verifiedProfiles: {
      linkedin: "https://linkedin.com/in/shola-akinlade",
      twitter: "https://twitter.com/shola_akinlade",
      portfolio: "https://paystack.com",
    },
    skillTags: [
      "Fintech",
      "Product Management",
      "Software Engineering",
      "Leadership",
      "Innovation",
    ],
    interestTags: [
      "Financial Technology",
      "African Development",
      "Payments",
      "Software",
    ],
    personalityTags: ["Innovative", "Strategic", "Technical", "Leader"],
    reputationScore: 91,
    engagementLevel: "high",
    blockchainVerified: true,
  },
  {
    id: "genevieve-nnaji",
    name: "Genevieve Nnaji",
    alias: "@genevievennaji",
    profileType: "mentor",
    status: "active",
    primaryIndustry: "Entertainment",
    secondaryIndustries: ["Film Production", "Fashion"],
    professionalTitle: "Actress, Producer & Director",
    company: "The Entertainment Network",
    creativeSkills: [
      "Acting",
      "Film Direction",
      "Production",
      "Fashion Design",
    ],
    hobbies: ["Fashion", "Art", "Travel", "Photography"],
    passions: [
      "African Cinema",
      "Women Empowerment",
      "Storytelling",
      "Cultural Representation",
    ],
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
    },
    verifiedProfiles: {
      instagram: "https://instagram.com/genevievennaji",
      twitter: "https://twitter.com/GenevieveNnaji1",
      portfolio: "https://genevievennaji.com",
    },
    skillTags: [
      "Acting",
      "Film Production",
      "Direction",
      "Fashion",
      "Entertainment",
    ],
    interestTags: [
      "African Cinema",
      "Women's Rights",
      "Cultural Heritage",
      "Art",
    ],
    personalityTags: ["Creative", "Inspiring", "Elegant", "Cultural"],
    reputationScore: 94,
    engagementLevel: "medium",
    blockchainVerified: false,
  },
  {
    id: "kemi-adebayo-tech",
    name: "Kemi Adebayo",
    alias: "@kemiadebayo",
    profileType: "certified",
    status: "available",
    primaryIndustry: "Technology",
    secondaryIndustries: ["Healthcare", "AI Research"],
    professionalTitle: "Senior Software Engineer & AI Researcher",
    company: "Google Nigeria",
    creativeSkills: [
      "Machine Learning",
      "Data Visualization",
      "Technical Writing",
    ],
    hobbies: ["Research", "Mentoring", "Tech Blogging", "Innovation"],
    passions: [
      "Artificial Intelligence",
      "Healthcare Technology",
      "Education",
      "Women in Tech",
    ],
    location: {
      city: "Abuja",
      state: "FCT",
      country: "Nigeria",
    },
    verifiedProfiles: {
      linkedin: "https://linkedin.com/in/kemi-adebayo-tech",
      twitter: "https://twitter.com/kemiadebayo",
      portfolio: "https://kemiadebayo.dev",
    },
    skillTags: [
      "Machine Learning",
      "Software Engineering",
      "AI Research",
      "Python",
      "Data Science",
    ],
    interestTags: [
      "Artificial Intelligence",
      "Healthcare Tech",
      "Education Technology",
      "Research",
    ],
    personalityTags: [
      "Analytical",
      "Innovative",
      "Mentoring",
      "Research-oriented",
    ],
    reputationScore: 88,
    engagementLevel: "high",
    content: {
      type: "courses",
      items: [
        {
          id: "ml-course-africa",
          title: "Machine Learning for African Healthcare",
          type: "course",
          description:
            "Specialized ML course focusing on African healthcare challenges",
          price: 35000,
          currency: "NGN",
          endorsements: 180,
          downloads: 950,
          rating: 4.7,
        },
      ],
    },
    blockchainVerified: true,
  },
  {
    id: "tunde-bakare-fintech",
    name: "Tunde Bakare",
    alias: "@tundetech",
    profileType: "rising-star",
    status: "available",
    primaryIndustry: "Banking & Finance",
    secondaryIndustries: ["Photography", "Content Creation"],
    professionalTitle: "Fintech Product Manager",
    company: "Flutterwave",
    creativeSkills: [
      "Photography",
      "Content Creation",
      "Visual Storytelling",
      "Product Design",
    ],
    hobbies: ["Photography", "Travel", "Tech Blogging", "Video Creation"],
    passions: [
      "Financial Technology",
      "Digital Photography",
      "African Fintech",
      "User Experience",
    ],
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
    },
    verifiedProfiles: {
      linkedin: "https://linkedin.com/in/tunde-bakare-fintech",
      instagram: "https://instagram.com/tundetech",
      portfolio: "https://tundebakare.photography",
    },
    skillTags: [
      "Product Management",
      "Fintech",
      "Photography",
      "UX Design",
      "Content Creation",
    ],
    interestTags: [
      "Financial Technology",
      "Photography",
      "Digital Art",
      "Product Development",
    ],
    personalityTags: ["Creative", "Technical", "Visual", "Product-focused"],
    reputationScore: 85,
    engagementLevel: "high",
    content: {
      type: "digital-products",
      items: [
        {
          id: "fintech-photography",
          title: "Fintech Photography Presets",
          type: "image",
          description: "Professional photography presets for fintech brands",
          price: 15000,
          currency: "NGN",
          endorsements: 120,
          downloads: 650,
          rating: 4.6,
        },
      ],
    },
    blockchainVerified: false,
  },
  {
    id: "folake-adebayo-lawyer",
    name: "Folake Adebayo",
    alias: "@folakelaw",
    profileType: "certified",
    status: "active",
    primaryIndustry: "Legal Services",
    secondaryIndustries: ["Music Law", "Entertainment"],
    professionalTitle: "Entertainment Lawyer & Music Industry Consultant",
    company: "Adebayo & Associates",
    creativeSkills: [
      "Legal Writing",
      "Contract Negotiation",
      "Music Production",
      "Event Planning",
    ],
    hobbies: ["Music", "Singing", "Legal Research", "Industry Events"],
    passions: [
      "Entertainment Law",
      "Music Industry",
      "Artist Rights",
      "Creative Protection",
    ],
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
    },
    verifiedProfiles: {
      linkedin: "https://linkedin.com/in/folake-adebayo-law",
      instagram: "https://instagram.com/folakelaw",
      youtube: "https://youtube.com/folakelaw",
    },
    skillTags: [
      "Entertainment Law",
      "Contract Law",
      "Music Industry",
      "Legal Consulting",
      "Negotiation",
    ],
    interestTags: [
      "Entertainment Law",
      "Music Rights",
      "Artist Management",
      "Legal Education",
    ],
    personalityTags: [
      "Professional",
      "Creative",
      "Protective",
      "Industry-savvy",
    ],
    reputationScore: 89,
    engagementLevel: "medium",
    blockchainVerified: true,
  },
  {
    id: "ibrahim-yusuf-doctor",
    name: "Dr. Ibrahim Yusuf",
    alias: "@dribrahimyusuf",
    profileType: "mentor",
    status: "busy",
    primaryIndustry: "Healthcare",
    secondaryIndustries: ["Medical Technology", "Health Education"],
    professionalTitle: "Chief Medical Officer & Health Tech Innovator",
    company: "Federal Medical Centre, Abuja",
    creativeSkills: [
      "Medical Writing",
      "Health Communication",
      "Technology Innovation",
    ],
    hobbies: [
      "Medical Research",
      "Health Tech",
      "Teaching",
      "Community Health",
    ],
    passions: [
      "Healthcare Innovation",
      "Medical Education",
      "Public Health",
      "Technology in Medicine",
    ],
    location: {
      city: "Abuja",
      state: "FCT",
      country: "Nigeria",
    },
    verifiedProfiles: {
      linkedin: "https://linkedin.com/in/ibrahim-yusuf-md",
      portfolio: "https://dribrahimyusuf.health",
    },
    skillTags: [
      "Medicine",
      "Healthcare Technology",
      "Medical Research",
      "Public Health",
      "Leadership",
    ],
    interestTags: [
      "Healthcare Innovation",
      "Medical Technology",
      "Public Health",
      "Medical Education",
    ],
    personalityTags: [
      "Caring",
      "Innovative",
      "Research-oriented",
      "Educational",
    ],
    reputationScore: 92,
    engagementLevel: "medium",
    content: {
      type: "courses",
      items: [
        {
          id: "health-tech-course",
          title: "Healthcare Technology in Africa",
          type: "course",
          description:
            "Comprehensive course on implementing health tech solutions in African contexts",
          price: 45000,
          currency: "NGN",
          endorsements: 220,
          downloads: 780,
          rating: 4.8,
        },
      ],
    },
    blockchainVerified: true,
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

    // If no exact matches found, provide fallback results
    if (results.length === 0) {
      results = this.getFallbackResults(filters);
    }

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

  // Get fallback results when no exact matches found
  private getFallbackResults(filters: SearchFilters): TalentProfile[] {
    // If query exists, try partial matches
    if (filters.query) {
      const query = filters.query.toLowerCase();
      const partialMatches = this.database.filter((profile) => {
        const searchableText = [
          profile.name,
          profile.professionalTitle,
          profile.primaryIndustry,
          ...profile.skillTags,
          ...profile.creativeSkills,
        ]
          .join(" ")
          .toLowerCase();

        // Check if any word in query matches
        const queryWords = query.split(/[\s+&,]+/);
        return queryWords.some(
          (word) => word.length > 2 && searchableText.includes(word),
        );
      });

      if (partialMatches.length > 0) {
        return partialMatches.slice(0, 6);
      }
    }

    // If industry filter exists, show similar industry professionals
    if (filters.industries && filters.industries.length > 0) {
      const industryMatches = this.database.filter((profile) =>
        filters.industries!.some(
          (industry) =>
            profile.primaryIndustry
              .toLowerCase()
              .includes(industry.toLowerCase()) ||
            profile.secondaryIndustries.some((sec) =>
              sec.toLowerCase().includes(industry.toLowerCase()),
            ),
        ),
      );

      if (industryMatches.length > 0) {
        return industryMatches.slice(0, 6);
      }
    }

    // Default fallback: return trending/top-rated professionals
    return this.database
      .sort((a, b) => b.reputationScore - a.reputationScore)
      .slice(0, 6);
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
