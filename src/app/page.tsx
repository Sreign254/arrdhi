'use client'
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Search, HandshakeIcon, Download, FileText } from 'lucide-react'
import Sections from './Sections'
import Header from './Header'
import Footer from './Footer'


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
   

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="/land.jpeg?height=600&width=1920"
          alt="Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Ardhisasa</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ardhisasa is an online platform that allows Citizens, stakeholders and interested parties
            to interact with land information held and processes undertaken by Government.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Search Property</h3>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandshakeIcon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Transfer Property</h3>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Order A Plan</h3>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Order A Title</h3>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What is Ardhisasa</h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 text-center leading-relaxed">
            Ardhisasa is an online platform that allows Citizens, other stakeholders and interested parties to interact with land information held and processes undertaken by Government. It has been developed jointly by the Ministry of Land and Physical Planning (MoLPP) and the National Land Commission (NLC) and key partners in Government. It allows the lodgment of applications for various services offered by the Ministry and the Commission. The applications can be made from anywhere at any time.
          </p>
        </div>
      </section>

      <Sections />
      <Footer />
    </div>
  )
}

