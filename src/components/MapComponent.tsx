'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

interface Property {
  id: number
  title: string
  coordinates: {
    lat: number
    lng: number
  }
}

interface MapComponentProps {
  properties: Property[]
}

export function MapComponent({ properties }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      version: 'weekly',
    })

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 39.8283, lng: -98.5795 },
          zoom: 4,
        })

        properties.forEach((property) => {
          new google.maps.Marker({
            position: property.coordinates,
            map: map,
            title: property.title,
          })
        })
      }
    })
  }, [properties])

  return <div ref={mapRef} className="w-full h-full" />
}

