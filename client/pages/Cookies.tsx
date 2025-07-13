import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: December 2024</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What are cookies?
            </h2>
            <p className="mb-6">
              Cookies are small text files that are placed on your computer by
              websites that you visit. They are widely used to make websites
              work more efficiently.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How we use cookies
            </h2>
            <p className="mb-6">
              We use cookies to improve your experience on our website,
              including keeping you signed in and remembering your preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Managing cookies
            </h2>
            <p className="mb-6">
              You can control and/or delete cookies as you wish through your
              browser settings. You can delete all cookies on your computer and
              set most browsers to prevent them from being placed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about our use of cookies, please contact
              us at privacy@talkaboutnigeria.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
