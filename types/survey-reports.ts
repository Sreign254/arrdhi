export interface SurveyQuestion {
    id: string;
    question: string;
    type: 'multiple-choice' | 'open-ended';
    options?: string[];
  }
  
  export interface SurveyResponse {
    questionId: string;
    answer: string | string[];
  }
  
  export interface SurveyReport {
    id: string;
    title: string;
    description: string;
    dateCreated: string;
    totalResponses: number;
    questions: SurveyQuestion[];
    responses: SurveyResponse[][];
  }
  
  