import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SurveyQuestion } from '../types/survey-report';

interface Step2Props {
  questions: SurveyQuestion[];
  onAddQuestion: (question: SurveyQuestion) => void;
  onNext: () => void;
}

export function Step2AddQuestions({ questions, onAddQuestion, onNext }: Step2Props) {
  const [question, setQuestion] = useState('');
  const [type, setType] = useState<'multiple-choice' | 'open-ended'>('open-ended');
  const [options, setOptions] = useState('');

  const handleAddQuestion = () => {
    if (question) {
      const newQuestion: SurveyQuestion = {
        id: Date.now().toString(),
        question,
        type,
        options: type === 'multiple-choice' ? options.split(',').map(o => o.trim()) : undefined
      };
      onAddQuestion(newQuestion);
      setQuestion('');
      setType('open-ended');
      setOptions('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="question">Question</Label>
        <Input
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter question"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="type">Question Type</Label>
        <Select value={type} onValueChange={(value: 'multiple-choice' | 'open-ended') => setType(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select question type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
            <SelectItem value="open-ended">Open Ended</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {type === 'multiple-choice' && (
        <div className="space-y-2">
          <Label htmlFor="options">Options (comma-separated)</Label>
          <Input
            id="options"
            value={options}
            onChange={(e) => setOptions(e.target.value)}
            placeholder="Option 1, Option 2, Option 3"
          />
        </div>
      )}
      <Button onClick={handleAddQuestion} disabled={!question}>Add Question</Button>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Added Questions:</h3>
        <ul className="list-disc pl-5">
          {questions.map((q) => (
            <li key={q.id}>{q.question}</li>
          ))}
        </ul>
      </div>
      <Button onClick={onNext} disabled={questions.length === 0}>Next</Button>
    </div>
  );
}

