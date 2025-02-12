"use client";
import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              About Cassandra Oil
            </h3>
            <p className="text-sm leading-relaxed">
              Cassandra Oil is a Swedish company pioneering new technologies to
              recover oil and gas from hydrocarbon-containing materials,
              including used tires, plastic waste, oil sludge, waste oil, and
              eventually, oil sands, oil shale and electronic scrap.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-teal-600" />
                <a
                  href="mailto:info@cassandraoil.com"
                  className="hover:text-teal-600 transition-colors"
                >
                  info@cassandraoil.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-teal-600" />
                <a
                  href="tel:+46761051688"
                  className="hover:text-teal-600 transition-colors"
                >
                  + 46-76-1051688
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-teal-600 mt-1" />
                <address className="not-italic">
                  Box 30078
                  <br />
                  104 25 Stockholm
                  <br />
                  Sweden
                </address>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-teal-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex justify-center">
            <div className="text-sm">
              © {currentYear} Cassandra. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
