import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { SurveyReport } from "../types/survey-report"

interface SurveyReportDetailsProps {
  report: SurveyReport | null
  isOpen: boolean
  onClose: () => void
}

export function SurveyReportDetails({ report, isOpen, onClose }: SurveyReportDetailsProps) {
  if (!report) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{report.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Survey Questions</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Question</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {report.questions.map((question) => (
                <TableRow key={question.id}>
                  <TableCell>{question.question}</TableCell>
                  <TableCell>{question.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Sample Responses</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Question</TableHead>
                <TableHead>Answer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {report.responses.slice(0, 5).flatMap((response, index) => 
                response.map((answer) => (
                  <TableRow key={`${index}-${answer.questionId}`}>
                    <TableCell>
                      {report.questions.find(q => q.id === answer.questionId)?.question}
                    </TableCell>
                    <TableCell>
                      {Array.isArray(answer.answer) ? answer.answer.join(', ') : answer.answer}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  )
}


