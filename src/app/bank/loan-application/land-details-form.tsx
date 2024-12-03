

'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function LandDetailsForm({ data, updateData }) {
  const [formData, setFormData] = useState(data)

  useEffect(() => {
    updateData(formData)
  }, [formData, updateData])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="landSize">Land Size (acres)</Label>
        <Input
          id="landSize"
          name="landSize"
          type="number"
          value={formData.landSize || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="landLocation">Land Location</Label>
        <Input
          id="landLocation"
          name="landLocation"
          value={formData.landLocation || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="landValue">Estimated Land Value ($)</Label>
        <Input
          id="landValue"
          name="landValue"
          type="number"
          value={formData.landValue || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="landDescription">Land Description</Label>
        <Textarea
          id="landDescription"
          name="landDescription"
          value={formData.landDescription || ''}
          onChange={handleChange}
          rows={4}
        />
      </div>
    </div>
  )
}

