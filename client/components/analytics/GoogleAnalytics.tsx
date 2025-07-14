import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const isValidMeasurementId =
    measurementId && !measurementId.includes("XXXXXXXXXX");

  useEffect(() => {
    if (!isValidMeasurementId) {
      console.log(
        "Google Analytics: Using placeholder measurement ID, skipping initialization",
      );
      return; // Don't initialize GA with invalid ID
    }

    // Load Google Analytics script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script1.onerror = () => {
      console.error("Failed to load Google Analytics script");
    };
    document.head.appendChild(script1);

    // Initialize Google Analytics
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `;
    document.head.appendChild(script2);

    // Initialize gtag function
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(arguments);
      };

    return () => {
      // Cleanup on unmount
      try {
        if (script1.parentNode) {
          script1.parentNode.removeChild(script1);
        }
        if (script2.parentNode) {
          script2.parentNode.removeChild(script2);
        }
      } catch (error) {
        console.error("Error cleaning up Google Analytics scripts:", error);
      }
    };
  }, [measurementId, isValidMeasurementId]);

  return null;
}

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "GA_MEASUREMENT_ID", {
      page_title: title,
      page_location: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track user engagement
export const trackEngagement = (
  engagementType: string,
  details?: Record<string, any>,
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "engagement", {
      engagement_type: engagementType,
      ...details,
    });
  }
};

// Default Google Analytics configuration
export const GA_CONFIG = {
  // Replace with actual Talk About Nigeria GA4 Measurement ID
  measurementId: "G-XXXXXXXXXX", // This should be replaced with the actual ID from talkaboutnigeria.com

  // Enhanced ecommerce and user tracking
  enhancedEcommerce: true,
  userProperties: {
    country: "Nigeria",
    platform: "Talk About Nigeria",
  },

  // Custom dimensions for Nigerian professional network
  customDimensions: {
    user_type: "professional",
    industry_interest: "all",
    location_preference: "nigeria",
  },
};
