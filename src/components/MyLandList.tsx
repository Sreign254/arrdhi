import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Property {
  id: number
  title: string
  acres: number
  location: string
  image: string
}

interface MyLandListProps {
  properties: Property[]
}

export function MyLandList({ properties }: MyLandListProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden">
            <Image
              src={property.image}
              alt={property.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{property.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">{property.location}</p>
              <p className="font-semibold mb-4">{property.acres} acres</p>
              <Link href={`http://localhost:3000/u/my-land/${property.id}`} passHref>
                <Button className="w-full">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

