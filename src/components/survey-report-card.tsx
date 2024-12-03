import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SurveyReport } from "../types/survey-report"

interface SurveyReportCardProps {
  report: SurveyReport
  onViewDetails: (report: SurveyReport) => void
}

export function SurveyReportCard({ report, onViewDetails }: SurveyReportCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{report.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
        <p className="text-sm mb-1"><strong>Date Created:</strong> {report.dateCreated}</p>
        <p className="text-sm mb-4"><strong>Total Responses:</strong> {report.totalResponses}</p>
        <Button onClick={() => onViewDetails(report)} className="w-full">
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}

