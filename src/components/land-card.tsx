import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Land } from "../../types/land";

interface LandCardProps {
  land: Land;
  onViewDetails: (land: Land) => void;
}

export function LandCard({ land, onViewDetails }: LandCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{land.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Owner:</strong> {land.owner}</p>
        <p><strong>Location:</strong> {land.location}</p>
        <div className="mt-4 bg-gray-200 h-40 flex items-center justify-center">
          <span className="text-gray-500">Map Placeholder</span>
        </div>
        <Button className="mt-4 w-full" onClick={() => onViewDetails(land)}>
          View Loan Details
        </Button>
      </CardContent>
    </Card>
  );
}

