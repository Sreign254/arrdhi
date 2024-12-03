import { SurveyReport } from "../../../types/survey-report";
export const mockSurveyReports: SurveyReport[] = [
  {
    id: '1',
    title: 'Customer Satisfaction Survey 2023',
    description: 'Annual survey to gauge customer satisfaction with our products and services.',
    dateCreated: '2023-05-15',
    totalResponses: 500,
    questions: [
      {
        id: 'q1',
        question: 'How satisfied are you with our product?',
        type: 'multiple-choice',
        options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied']
      },
      {
        id: 'q2',
        question: 'What features would you like to see in future updates?',
        type: 'open-ended'
      }
    ],
    responses: [
      [
        { questionId: 'q1', answer: 'Satisfied' },
        { questionId: 'q2', answer: 'Better integration with third-party tools.' }
      ],
      [
        { questionId: 'q1', answer: 'Very Satisfied' },
        { questionId: 'q2', answer: 'More customization options for reports.' }
      ]
    ]
  },
  {
    id: '2',
    title: 'Employee Engagement Survey Q2 2023',
    description: 'Quarterly survey to measure employee engagement and satisfaction.',
    dateCreated: '2023-06-01',
    totalResponses: 250,
    questions: [
      {
        id: 'q1',
        question: 'How would you rate your overall job satisfaction?',
        type: 'multiple-choice',
        options: ['Excellent', 'Good', 'Average', 'Poor', 'Very Poor']
      },
      {
        id: 'q2',
        question: 'What suggestions do you have for improving our company culture?',
        type: 'open-ended'
      }
    ],
    responses: [
      [
        { questionId: 'q1', answer: 'Good' },
        { questionId: 'q2', answer: 'More team-building activities and social events.' }
      ],
      [
        { questionId: 'q1', answer: 'Excellent' },
        { questionId: 'q2', answer: 'Implement a mentorship program for career development.' }
      ]
    ]
  }
];

