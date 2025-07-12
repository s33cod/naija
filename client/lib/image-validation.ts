// Image validation utilities for professional profiles
// Ensures all user cards have actual professional images

export interface ImageValidationResult {
  isValid: boolean;
  isPlaceholder: boolean;
  isActualImage: boolean;
  quality: "low" | "medium" | "high";
  recommendation?: string;
}

export interface ProfessionalImageRequirements {
  minWidth: number;
  minHeight: number;
  maxFileSize: number; // in bytes
  allowedFormats: string[];
  requiresActualImage: boolean;
}

// Default requirements for professional images
export const DEFAULT_IMAGE_REQUIREMENTS: ProfessionalImageRequirements = {
  minWidth: 300,
  minHeight: 300,
  maxFileSize: 2 * 1024 * 1024, // 2MB
  allowedFormats: ["jpg", "jpeg", "png", "webp"],
  requiresActualImage: true,
};

// List of known placeholder URLs that should be rejected
const PLACEHOLDER_PATTERNS = [
  "/api/placeholder/",
  "placeholder.com",
  "picsum.photos",
  "lorem",
  "example.com",
  "dummy",
  "fake",
  "mock",
  "placeholder",
  "avatar.png",
  "default.jpg",
];

// Known professional image sources that are trusted
const TRUSTED_IMAGE_SOURCES = [
  "pbs.twimg.com", // Twitter profile images
  "media.licdn.com", // LinkedIn profile images
  "instagram.com",
  "facebook.com",
  "youtube.com",
  "forbes.com",
  "bloomberg.com",
  "official websites",
  "company websites",
];

/**
 * Validates if an image URL is an actual professional image
 */
export function validateProfessionalImage(
  imageUrl: string,
): ImageValidationResult {
  const result: ImageValidationResult = {
    isValid: false,
    isPlaceholder: false,
    isActualImage: false,
    quality: "low",
  };

  // Check if it's a placeholder
  const isPlaceholder = PLACEHOLDER_PATTERNS.some((pattern) =>
    imageUrl.toLowerCase().includes(pattern.toLowerCase()),
  );

  if (isPlaceholder) {
    result.isPlaceholder = true;
    result.recommendation =
      "Replace with actual professional image from social media or official website";
    return result;
  }

  // Check if it's from a trusted source
  const isTrustedSource = TRUSTED_IMAGE_SOURCES.some((source) =>
    imageUrl.toLowerCase().includes(source.toLowerCase()),
  );

  if (isTrustedSource) {
    result.isActualImage = true;
    result.isValid = true;
    result.quality = "high";
  }

  // Check URL format and quality indicators
  if (imageUrl.includes("400x400") || imageUrl.includes("_400x400")) {
    result.quality = "high";
  } else if (imageUrl.includes("200x200") || imageUrl.includes("_200x200")) {
    result.quality = "medium";
  }

  // Additional validation for HTTPS
  if (!imageUrl.startsWith("https://")) {
    result.recommendation = "Use HTTPS URL for better security";
  }

  return result;
}

/**
 * Validates image requirements for professional profiles
 */
export function validateImageRequirements(
  imageUrl: string,
  requirements: ProfessionalImageRequirements = DEFAULT_IMAGE_REQUIREMENTS,
): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check if actual image is required
  if (requirements.requiresActualImage) {
    const validation = validateProfessionalImage(imageUrl);

    if (validation.isPlaceholder) {
      errors.push(
        "Placeholder images are not allowed. Use actual professional image.",
      );
    }

    if (!validation.isActualImage) {
      errors.push(
        "Image must be from a verified professional source (social media, official website).",
      );
    }
  }

  // Check URL format
  if (!imageUrl || imageUrl.trim() === "") {
    errors.push("Image URL is required");
  }

  // Check for valid URL format
  try {
    new URL(imageUrl);
  } catch {
    errors.push("Invalid image URL format");
  }

  // Check file format
  const fileExtension = imageUrl.split(".").pop()?.toLowerCase();
  if (fileExtension && !requirements.allowedFormats.includes(fileExtension)) {
    errors.push(
      `Image format must be one of: ${requirements.allowedFormats.join(", ")}`,
    );
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Get recommended image sources for a professional
 */
export function getRecommendedImageSources(professionalName: string): string[] {
  const name = professionalName.toLowerCase().replace(/\s+/g, "");

  return [
    `https://twitter.com/${name}`,
    `https://linkedin.com/in/${name}`,
    `https://instagram.com/${name}`,
    `Search "${professionalName} official photo" on their company website`,
    `Check ${professionalName}'s verified social media profiles`,
    `Look for recent professional headshots from news articles or press releases`,
  ];
}

/**
 * Professional image database with verified images
 */
export const VERIFIED_PROFESSIONAL_IMAGES: Record<
  string,
  {
    name: string;
    imageUrl: string;
    source: string;
    lastVerified: string;
  }
> = {
  "tony-elumelu": {
    name: "Tony Elumelu",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1604081652468523008/SzQFJOL0_400x400.jpg",
    source: "Twitter (@TonyElumelu)",
    lastVerified: "2024-01-15",
  },
  "aliko-dangote": {
    name: "Aliko Dangote",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1153616477684973569/x7wEPOEL_400x400.jpg",
    source: "Twitter (@AlikoDangote)",
    lastVerified: "2024-01-15",
  },
  davido: {
    name: "Davido",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1735413305191063552/fKYHAaYX_400x400.jpg",
    source: "Twitter (@davido)",
    lastVerified: "2024-01-15",
  },
  "ngozi-okonjo-iweala": {
    name: "Ngozi Okonjo-Iweala",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1357323048636436481/LkQfKEtv_400x400.jpg",
    source: "Twitter (@NOIweala)",
    lastVerified: "2024-01-15",
  },
  "genevieve-nnaji": {
    name: "Genevieve Nnaji",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1598020636076089344/rCYuJ7w__400x400.jpg",
    source: "Twitter (@GenevieveNnaji1)",
    lastVerified: "2024-01-15",
  },
  "mo-abudu": {
    name: "Mo Abudu",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1654522062654177282/6O9oPdTz_400x400.jpg",
    source: "Twitter (@MoAbudu)",
    lastVerified: "2024-01-15",
  },
  "aig-imoukhuede": {
    name: "Aig Imoukhuede",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1354425999582773249/DJyHKcMD_400x400.jpg",
    source: "Twitter (@AigImoukhuede)",
    lastVerified: "2024-01-15",
  },
  "kachikwu-ibe": {
    name: "Kachikwu Ibe",
    imageUrl:
      "https://pbs.twimg.com/profile_images/925711649777885184/SMQHP7xD_400x400.jpg",
    source: "Twitter (@IbeKachikwu)",
    lastVerified: "2024-01-15",
  },
  "roger-brown": {
    name: "Roger Brown",
    imageUrl:
      "https://www.seplatenergy.com/wp-content/uploads/2019/08/Roger-Brown-1.jpg",
    source: "Seplat Energy Official Website",
    lastVerified: "2024-01-15",
  },
};

/**
 * Get verified image for a professional
 */
export function getVerifiedImage(professionalName: string): string | null {
  const key = professionalName.toLowerCase().replace(/\s+/g, "-");
  return VERIFIED_PROFESSIONAL_IMAGES[key]?.imageUrl || null;
}

/**
 * Mandatory image validation hook for React components
 */
export function useMandatoryImageValidation() {
  const validateImage = (imageUrl: string, professionalName?: string) => {
    const validation = validateProfessionalImage(imageUrl);
    const requirements = validateImageRequirements(imageUrl);

    if (!validation.isValid || !requirements.isValid) {
      const verifiedImage = professionalName
        ? getVerifiedImage(professionalName)
        : null;
      const recommendations = professionalName
        ? getRecommendedImageSources(professionalName)
        : [];

      return {
        isValid: false,
        errors: requirements.errors,
        suggestions: {
          verifiedImage,
          recommendations,
          validation,
        },
      };
    }

    return { isValid: true, errors: [] };
  };

  return { validateImage };
}
