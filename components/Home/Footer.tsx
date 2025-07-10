// components/Footer.tsx
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaSyncAlt,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600">Magazine</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              <li><a href="#" className="hover:text-blue-600">Legal Notice</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Other Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Car Hire</a></li>
              <li><a href="#" className="hover:text-blue-600">Activity Finder</a></li>
              <li><a href="#" className="hover:text-blue-600">Flight Finder</a></li>
              <li><a href="#" className="hover:text-blue-600">Travel Agents</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="mb-2"><span className="font-semibold">Phone:</span> +012 4565 5643</p>
            <p><span className="font-semibold">Email:</span> example@gmail.com</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2024 Webdev. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <span className="font-medium">Social:</span>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700">
              <FaLinkedin />
            </a>

            {/* Other Icons */}
            <a href="#" className="text-gray-600 hover:text-blue-600 ml-4">
              <FaSearch />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaSyncAlt />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
