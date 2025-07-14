import React, { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface GoogleAdSenseProps {
  adClient: string;
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export function GoogleAdSense({
  adClient,
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = { display: "block" },
  className = "",
}: GoogleAdSenseProps) {
  useEffect(() => {
    try {
      // Initialize AdSense if not already loaded
      if (typeof window !== "undefined") {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      ></ins>
    </div>
  );
}

// Banner Ad Component (Top of page, header area)
export function BannerAd({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center my-4 ${className}`}>
      <GoogleAdSense
        adClient="ca-pub-XXXXXXXXXXXXXXXXX" // Replace with actual AdSense client ID
        adSlot="1234567890" // Replace with actual banner ad slot ID
        adFormat="horizontal"
        style={{ display: "block", width: "100%", height: "90px" }}
        className="max-w-4xl"
      />
    </div>
  );
}

// Sidebar Ad Component
export function SidebarAd({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="text-xs text-gray-500 mb-2 text-center">
        Advertisement
      </div>
      <GoogleAdSense
        adClient="ca-pub-XXXXXXXXXXXXXXXXX" // Replace with actual AdSense client ID
        adSlot="0987654321" // Replace with actual sidebar ad slot ID
        adFormat="vertical"
        style={{ display: "block", width: "100%", height: "600px" }}
      />
    </div>
  );
}

// In-Article Ad Component
export function InArticleAd({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full my-6 ${className}`}>
      <div className="text-xs text-gray-500 mb-2 text-center">
        Advertisement
      </div>
      <GoogleAdSense
        adClient="ca-pub-XXXXXXXXXXXXXXXXX" // Replace with actual AdSense client ID
        adSlot="1122334455" // Replace with actual in-article ad slot ID
        adFormat="fluid"
        style={{ display: "block", textAlign: "center" }}
      />
    </div>
  );
}

// Mobile Ad Component
export function MobileAd({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full block md:hidden ${className}`}>
      <div className="text-xs text-gray-500 mb-2 text-center">
        Advertisement
      </div>
      <GoogleAdSense
        adClient="ca-pub-XXXXXXXXXXXXXXXXX" // Replace with actual AdSense client ID
        adSlot="2233445566" // Replace with actual mobile ad slot ID
        adFormat="rectangle"
        style={{ display: "block", width: "100%", height: "250px" }}
      />
    </div>
  );
}

// AdSense initialization script for the entire app
export function AdSenseScript({ clientId }: { clientId: string }) {
  useEffect(() => {
    // Load AdSense script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [clientId]);

  return null;
}

// AdSense configuration
export const ADSENSE_CONFIG = {
  // Replace with actual Talk About Nigeria AdSense client ID
  clientId: "ca-pub-XXXXXXXXXXXXXXXXX",

  // Ad slots for different positions
  adSlots: {
    banner: "1234567890",
    sidebar: "0987654321",
    inArticle: "1122334455",
    mobile: "2233445566",
    footer: "3344556677",
  },

  // Ad configurations
  responsive: true,
  autoAds: true,
};
