
import Image from "next/image"

export default function Sections() {
  return (
    <>
      {/* Services Section */}
      <section className="relative py-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/sercices.jpg?height=1080&width=1920"
          alt="Landscape background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center text-white">Services</h2>
        <div className="bg-background/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Main Categories */}
            <div className="space-y-4">
              {[
                "LAND REGISTRATION",
                "LAND ADMINISTRATION",
                "PHYSICAL PLANNING",
                "SURVEY & MAPPING",
                "VALUATION",
                "ADJUDICATION & SETTLEMENT",
                "NATIONAL LAND COMMISSION"
              ].map((category) => (
                <div
                  key={category}
                  className="p-3 bg-sidebar-background hover:bg-sidebar-background hover:border-gray-600 cursor-pointer rounded-lg transition-all duration-200 border border-gray-500"
                >
                  {category}
                </div>
              ))}
            </div>

            {/* Right Column - Specific Services */}
            <div className="space-y-4">
              {[
                "Caution",
                "Charge",
                "Lease",
                "Registration of certificate of Titles/ Leases",
                "Replacement of Title",
                "Restriction",
                "Search",
                "Stamp duty",
                "Transfer"
              ].map((service) => (
                <div
                  key={service}
                  className="p-3 bg-sidebar-background hover:border-rose-500 cursor-pointer rounded-lg shadow transition-colors"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>

     
    </>
  )
}

