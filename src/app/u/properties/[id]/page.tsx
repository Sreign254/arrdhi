import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapComponent } from '@/components/MapComponent';

const properties = [
  {
    id: 1,
    title: 'Scenic Mountain Land',
    acres: 50,
    price: 250000,
    location: 'Colorado',
    description:
      'Nestled in the heart of the Rocky Mountains, this 50-acre parcel offers breathtaking views and endless opportunities for outdoor enthusiasts. With its diverse terrain and abundant wildlife, this property is perfect for those seeking a private mountain retreat or a unique investment opportunity.',
    features: ['Mountain views', 'Stream on property', 'Accessible by road', 'Suitable for building'],
    zoning: 'Residential',
    utilities: ['Electricity nearby', 'Well water possible'],
    images: [
      '/d37a2e7816614813b91fb39cfb4b2fb7.jpg?height=600&width=800',
      '/d37a2e7816614813b91fb39cfb4b2fb7.jpg?height=400&width=600',
      '/d37a2e7816614813b91fb39cfb4b2fb7.jpg?height=400&width=600',
    ],
    coordinates: { lat: 39.113014, lng: -105.358887 },
  },
  {
    id: 2,
    title: 'Coastal Paradise',
    acres: 20,
    price: 500000,
    location: 'California',
    description: 'Experience the beauty of the Pacific Coast with this 20-acre property featuring stunning ocean views and private beach access.',
    features: ['Ocean views', 'Private beach access', 'Mild coastal weather'],
    zoning: 'Recreational',
    utilities: ['Electricity available', 'City water'],
    images: ['/d37a2e7816614813b91fb39cfb4b2fb7.jpg?height=400&width=600'], // Fixed: Added an `images` array
    coordinates: { lat: 36.778259, lng: -119.417931 },
  },
  {
    id: 3,
    title: 'Forest Retreat',
    acres: 100,
    price: 300000,
    location: 'Oregon',
    description:
      'Immerse yourself in nature with this expansive 100-acre forest property, perfect for those seeking privacy and a connection with the great outdoors.',
    features: ['Dense forest', 'Secluded location', 'Abundant wildlife'],
    zoning: 'Agricultural',
    utilities: ['Solar power potential', 'Water from natural spring'],
    images: ['/d37a2e7816614813b91fb39cfb4b2fb7.jpg?height=400&width=600'], // Fixed: Added an `images` array
    coordinates: { lat: 43.804133, lng: -120.554201 },
  },
];

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === parseInt(params.id));

  if (!property) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{property.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <Image
            src={property.images[0]} // Safely accessing the first image
            alt={property.title}
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-semibold">${property.price.toLocaleString()}</p>
          <p className="text-xl">
            {property.acres} acres in {property.location}
          </p>
          <p className="text-muted-foreground">{property.description}</p>
          <div className="flex space-x-4">
            <Button>Contact Agent</Button>
            <Button variant="outline">Schedule Viewing</Button>
          </div>
        </div>
      </div>

      {property.images.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {property.images.slice(1).map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${property.title} - Image ${index + 2}`}
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Property Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {property.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Zoning and Utilities</h2>
            <p className="mb-2">
              <strong>Zoning:</strong> {property.zoning}
            </p>
            <h3 className="text-xl font-semibold mb-2">Available Utilities</h3>
            <ul className="list-disc list-inside space-y-2">
              {property.utilities.map((utility, index) => (
                <li key={index}>{utility}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Property Location</h2>
          <div className="h-[400px]">
            <MapComponent properties={[property]} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
