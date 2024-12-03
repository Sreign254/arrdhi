'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export function MapComponent({ coordinates }) {
  const mapRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!mapRef.current) {
        mapRef.current = L.map('map').setView([coordinates.lat, coordinates.lng], 13)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(mapRef.current)
      } else {
        mapRef.current.setView([coordinates.lat, coordinates.lng], 13)
      }

      L.marker([coordinates.lat, coordinates.lng]).addTo(mapRef.current)
    }
  }, [coordinates])

  return <div id="map" className="h-full w-full" />
}

