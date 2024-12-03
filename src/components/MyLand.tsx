import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Property {
  id: number
  title: string
  acres: number
  price: number
  location: string
  description: string
  image: string
}

interface MyLandProps {
  property: Property
}

export function MyLand({ property }: MyLandProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <Image
        src={property.image}
        alt={property.title}
        width={600}
        height={400}
        className="h-48 w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="text-xl">{property.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{property.location}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{property.description}</p>
        <div className="mt-4">
          <p className="font-semibold">{property.acres} acres</p>
          <p className="text-lg font-bold mt-1">${property.price.toLocaleString()}</p>
        </div>
      </CardContent>
      <div className="p-4 pt-0">
        <Link href={`http://localhost:3000/u/properties/${property.id}`} passHref>
          <Button className="w-full">View Details</Button>
        </Link>
      </div>
    </Card>
  )
}

