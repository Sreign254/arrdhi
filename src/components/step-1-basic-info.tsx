import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface Step1Props {
  title: string;
  description: string;
  onNext: (title: string, description: string) => void;
}

export function Step1BasicInfo({ title, description, onNext }: Step1Props) {
  const [localTitle, setLocalTitle] = useState(title);
  const [localDescription, setLocalDescription] = useState(description);

  const handleNext = () => {
    if (localTitle && localDescription) {
      onNext(localTitle, localDescription);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Survey Title</Label>
        <Input
          id="title"
          value={localTitle}
          onChange={(e) => setLocalTitle(e.target.value)}
          placeholder="Enter survey title"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Survey Description</Label>
        <Textarea
          id="description"
          value={localDescription}
          onChange={(e) => setLocalDescription(e.target.value)}
          placeholder="Enter survey description"
        />
      </div>
      <Button onClick={handleNext} disabled={!localTitle || !localDescription}>
        Next
      </Button>
    </div>
  );
}

