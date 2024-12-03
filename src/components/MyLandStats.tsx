import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface MyLandStatsProps {
  totalProperties: number
  totalAcres: number
}

export function MyLandStats({ totalProperties, totalAcres }: MyLandStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalProperties}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Acres</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalAcres}</div>
        </CardContent>
      </Card>
    </div>
  )
}

