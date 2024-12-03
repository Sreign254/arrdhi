'use client'

import { useState } from 'react'
import { SurveyReportCard } from '@/components/survey-report-card'
import { SurveyReportDetails } from '@/components/survey-report-details'
import { mockSurveyReports } from '../../data/mock-survey-reports'
import { SurveyReport } from '../../types/survey-report'

export default function SurveyReportsPage() {
  const [selectedReport, setSelectedReport] = useState<SurveyReport | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleViewDetails = (report: SurveyReport) => {
    setSelectedReport(report)
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Survey Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSurveyReports.map((report) => (
          <SurveyReportCard
            key={report.id}
            report={report}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
      <SurveyReportDetails
        report={selectedReport}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  )
}

