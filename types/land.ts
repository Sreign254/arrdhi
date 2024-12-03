export interface Loan {
    id: string;
    amount: number;
    interestRate: number;
    term: number;
    startDate: string;
  }
  
  export interface Land {
    id: string;
    name: string;
    owner: string;
    location: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    loans: Loan[];
  }
  
  