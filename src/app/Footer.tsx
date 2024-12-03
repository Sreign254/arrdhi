import Link from "next/link"
import { Facebook, Youtube, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <>
     

      {/* Footer */}
      <footer className="bg-[#8B4513] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contacts */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacts</h3>
              <div className="space-y-2 text-sm">
                <p>Working Days/Hours: Mon - Fri / 8:00 AM - 5:00 PM</p>
                <p>Address: Ardhi House, Off Ngong Rd: P.O. Box 30450-00100, Nairobi,Kenya.</p>
                <p>Email: ardhisasa@ardhi.go.ke</p>
                <div>
                  <p className="font-semibold mt-4">Nairobi Customer Care Contacts:</p>
                  <p>0746 962239 /0794 067815</p>
                  <p>0792 940224 /0792 940222</p>
                </div>
                <div>
                  <p className="font-semibold mt-4">Muranga Customer Care Contacts:</p>
                  <p>0113 165916 /0114 229495</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block hover:underline">About Us</Link>
                <Link href="/services" className="block hover:underline">Services</Link>
                <Link href="/faqs" className="block hover:underline">FAQs</Link>
                <Link href="/terms" className="block hover:underline">Terms & Conditions</Link>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <Link href="#" className="block hover:underline">National Land Commission</Link>
                <Link href="#" className="block hover:underline">Ministry of Lands and Physical Planning</Link>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Social Links</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Youtube className="w-6 h-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
            <p>©2024 All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

