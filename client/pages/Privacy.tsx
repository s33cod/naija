import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: December 2024</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="mb-6">
              We collect information you provide directly to us, such as when
              you create an account, update your profile, or communicate with
              us.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-6">
              We use the information we collect to provide, maintain, and
              improve our services, process transactions, and communicate with
              you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information Sharing
            </h2>
            <p className="mb-6">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at privacy@talkaboutnigeria.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
