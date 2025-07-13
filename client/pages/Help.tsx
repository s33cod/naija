import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, Mail, Phone } from "lucide-react";

export default function Help() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions and get support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <Search className="w-12 h-12 text-naija-green mx-auto mb-4" />
              <h3 className="font-bold mb-2">Search FAQs</h3>
              <p className="text-gray-600 text-sm">
                Browse our comprehensive FAQ database
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <MessageCircle className="w-12 h-12 text-naija-green mx-auto mb-4" />
              <h3 className="font-bold mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm">
                Chat with our support team in real-time
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <Mail className="w-12 h-12 text-naija-green mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm">
                Send us a detailed message and we'll respond within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you succeed on the platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-naija-green hover:bg-naija-green-dark">
              <Mail className="w-4 h-4 mr-2" />
              Email Support
            </Button>
            <Button variant="outline">
              <MessageCircle className="w-4 h-4 mr-2" />
              Live Chat
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
