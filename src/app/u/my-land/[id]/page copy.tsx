
"use client"
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';

const properties = [
  { 
    id: 1, 
    title: 'Mountain Retreat', 
    acres: 50, 
    location: 'Colorado',
    image: '/d37a2e7816614813b91fb39cfb4b2fb7.jpg?height=200&width=300',
    coordinates: { lat: 39.113014, lng: -105.358887 },
    description: 'Escape to the tranquility of this beautiful mountain retreat with breathtaking views.'
  },
  { 
    id: 2, 
    title: 'Coastal Haven', 
    acres: 20, 
    location: 'California',
    image: '/d37a2e7816614813b91fb39cfb4b2fb7.jpg?height=200&width=300',
    coordinates: { lat: 36.778259, lng: -119.417931 },
    description: 'A stunning coastal property perfect for relaxing by the beach.'
  },
  { 
    id: 3, 
    title: 'Forest Sanctuary', 
    acres: 100, 
    location: 'Oregon',
    image: '/d37a2e7816614813b91fb39cfb4b2fb7.jpg?height=200&width=300',
    coordinates: { lat: 43.804133, lng: -120.554201 },
    description: 'A large sanctuary nestled in the lush Oregon forests for nature lovers.'
  },
];

export default function PropertyDetailsPage() {
  const params = useParams();
  const id = Number(params.id); // `params.id` is a string, so we convert it to a number

  // Find the property based on the ID
  const property = properties.find((prop) => prop.id === id);

  if (!property) {
    // If the property doesn't exist, show a 404 page
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{property.title}</h1>
      <Image
        src={property.image}
        alt={property.title}
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
      />
      <div className="mb-4">
        <p className="text-muted-foreground font-semibold">Location: {property.location}</p>
        <p className="font-semibold">Size: {property.acres} acres</p>
      </div>
      <p className="mb-6">{property.description}</p>
      <Link href="/u/my-land">
        <Button className="mr-4">Back to Listings</Button>
      </Link>
      <Button variant="outline">Contact Owner</Button>
    </div>
  );
}
