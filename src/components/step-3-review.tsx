import { Button } from "@/components/ui/button"
import { SurveyReport } from '@/types/survey-report';

interface Step3Props {
  surveyReport: SurveyReport;
  onSubmit: () => void;
  onBack: () => void;
}

export function Step3Review({ surveyReport, onSubmit, onBack }: Step3Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Review Survey Report</h2>
      <div>
        <h3 className="text-lg font-semibold">Title:</h3>
        <p>{surveyReport.title}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Description:</h3>
        <p>{surveyReport.description}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Questions:</h3>
        <ul className="list-disc pl-5">
          {surveyReport.questions.map((question) => (
            <li key={question.id}>
              <p>{question.question}</p>
              <p className="text-sm text-gray-500">Type: {question.type}</p>
              {question.options && (
                <ul className="list-circle pl-5">
                  {question.options.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        <Button onClick={onBack}>Back</Button>
        <Button onClick={onSubmit}>Submit</Button>
      </div>
    </div>
  );
}

