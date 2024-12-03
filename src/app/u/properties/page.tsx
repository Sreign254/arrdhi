import { MapComponent } from '@/components/MapComponent'
import { PropertyCard } from '@/components/PropertyCard'

// This would typically come from a database or API
const properties = [
  { 
    id: 1, 
    title: 'Scenic Mountain Land', 
    acres: 50, 
    price: 250000, 
    location: 'Colorado',
    description: 'Nestled in the heart of the Rocky Mountains, this 50-acre parcel offers breathtaking views and endless opportunities for outdoor enthusiasts.',
    image: '/d37a2e7816614813b91fb39cfb4b2fb7.jpg?height=400&width=600',
    coordinates: { lat: 39.113014, lng: -105.358887 }
  },
  { 
    id: 2, 
    title: 'Coastal Paradise', 
    acres: 20, 
    price: 500000, 
    location: 'California',
    description: 'Experience the beauty of the Pacific Coast with this 20-acre property featuring stunning ocean views and private beach access.',
    image: '/d37a2e7816614813b91fb39cfb4b2fb7.jpg?height=400&width=600',
    coordinates: { lat: 36.778259, lng: -119.417931 }
  },
  { 
    id: 3, 
    title: 'Forest Retreat', 
    acres: 100, 
    price: 300000, 
    location: 'Oregon',
    description: 'Immerse yourself in nature with this expansive 100-acre forest property, perfect for those seeking privacy and a connection with the great outdoors.',
    image: '/d37a2e7816614813b91fb39cfb4b2fb7.jpg?height=400&width=600',
    coordinates: { lat: 43.804133, lng: -120.554201 }
  },
]

export default function SharedPropertiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Featured Land Properties</h1>
      
      <div className="mb-12 h-[400px]">
        <MapComponent properties={properties} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}

