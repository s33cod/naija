import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-8">Last updated: December 2024</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Acceptance of Terms
            </h2>
            <p className="mb-6">
              By accessing and using Talk About Nigeria, you accept and agree to
              be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Use License
            </h2>
            <p className="mb-6">
              Permission is granted to temporarily use Talk About Nigeria for
              personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              User Responsibilities
            </h2>
            <p className="mb-6">
              Users are responsible for maintaining the confidentiality of their
              account information and for all activities that occur under their
              account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p>
              Questions about the Terms of Service should be sent to us at
              legal@talkaboutnigeria.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
