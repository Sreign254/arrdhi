import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PartyDetails } from "@/types/land-transfer"
import { WatchIcon as Witness } from 'lucide-react'

interface PartyDetailsFormProps {
  type: "seller" | "buyer"
  value: PartyDetails
  onChange: (value: PartyDetails) => void
}

export function PartyDetailsForm({ type, value, onChange }: PartyDetailsFormProps) {
  const handleWitnessChange = (index: number, field: keyof Witness, newValue: string) => {
    const newWitnesses = [...value.witnesses]
    newWitnesses[index] = { ...newWitnesses[index], [field]: newValue }
    onChange({ ...value, witnesses: newWitnesses })
  }

  const addWitness = () => {
    if (value.witnesses.length < 4) {
      onChange({
        ...value,
        witnesses: [...value.witnesses, { name: "", id: "" }],
      })
    }
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold capitalize">{type} Details</h3>
          
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor={`${type}-name`}>Name</Label>
              <Input
                id={`${type}-name`}
                value={value.name}
                onChange={(e) => onChange({ ...value, name: e.target.value })}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor={`${type}-id`}>ID Number</Label>
              <Input
                id={`${type}-id`}
                value={value.idNumber}
                onChange={(e) => onChange({ ...value, idNumber: e.target.value })}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor={`${type}-address`}>Address</Label>
              <Input
                id={`${type}-address`}
                value={value.address}
                onChange={(e) => onChange({ ...value, address: e.target.value })}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor={`${type}-tel`}>Telephone</Label>
              <Input
                id={`${type}-tel`}
                type="tel"
                value={value.telephone}
                onChange={(e) => onChange({ ...value, telephone: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold">Witnesses</h4>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addWitness}
                disabled={value.witnesses.length >= 4}
              >
                <Witness className="mr-2 h-4 w-4" />
                Add Witness
              </Button>
            </div>
            
            {value.witnesses.map((witness, index) => (
              <div key={index} className="grid gap-4 rounded-lg border p-4">
                <div className="grid gap-2">
                  <Label htmlFor={`${type}-witness-${index}-name`}>Name</Label>
                  <Input
                    id={`${type}-witness-${index}-name`}
                    value={witness.name}
                    onChange={(e) => handleWitnessChange(index, "name", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor={`${type}-witness-${index}-id`}>ID Number</Label>
                  <Input
                    id={`${type}-witness-${index}-id`}
                    value={witness.id}
                    onChange={(e) => handleWitnessChange(index, "id", e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

