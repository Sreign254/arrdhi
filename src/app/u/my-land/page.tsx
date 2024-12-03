import { MyLandList } from '@/components/MyLandList'
import { MapComponent } from '@/components/MapComponent'
import { MyLandStats } from '@/components/MyLandStats'


// This would typically come from a database or API
const properties = [
  { 
    id: 1, 
    title: 'Mountain Retreat', 
    acres: 50, 
    location: 'Colorado',
    image: '/d37a2e7816614813b91fb39cfb4b2fb7.jpg?height=200&width=300',
    coordinates: { lat: 39.113014, lng: -105.358887 }
  },
  { 
    id: 2, 
    title: 'Coastal Haven', 
    acres: 20, 
    location: 'California',
    image: '/d37a2e7816614813b91fb39cfb4b2fb7.jpg?height=200&width=300',
    coordinates: { lat: 36.778259, lng: -119.417931 }
  },
  { 
    id: 3, 
    title: 'Forest Sanctuary', 
    acres: 100, 
    location: 'Oregon',
    image: '/d37a2e7816614813b91fb39cfb4b2fb7.jpg?height=200&width=300',
    coordinates: { lat: 43.804133, lng: -120.554201 }
  },
]

export default function MyLandPage() {
  const totalProperties = properties.length
  const totalAcres = properties.reduce((sum, property) => sum + property.acres, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Land</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <MyLandStats totalProperties={totalProperties} totalAcres={totalAcres} />
        <div className="h-[300px]">
          <MapComponent properties={properties} />
        </div>
      </div>
      
      <MyLandList properties={properties} />
    </div>
  )
}

