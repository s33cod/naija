import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with our team - we're here to help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <Card className="p-6">
              <CardContent className="p-0 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-naija-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-naija-green"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-naija-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-naija-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-naija-green"
                  ></textarea>
                </div>
                <Button className="w-full bg-naija-green hover:bg-naija-green-dark">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0 flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-naija-green mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      Victoria Island, Lagos
                      <br />
                      Nigeria
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0 flex items-start gap-4">
                  <Mail className="w-6 h-6 text-naija-green mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">hello@talkaboutnigeria.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0 flex items-start gap-4">
                  <Phone className="w-6 h-6 text-naija-green mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">+234 (0) 900 000 0000</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0 flex items-start gap-4">
                  <Clock className="w-6 h-6 text-naija-green mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
