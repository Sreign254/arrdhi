export interface Witness {
    name: string;
    id: string;
  }
  
  export interface PartyDetails {
    name: string;
    idNumber: string;
    address: string;
    telephone: string;
    witnesses: Witness[];
  }
  
  export interface LandTransferForm {
    seller: PartyDetails;
    buyer: PartyDetails;
    landDescription: string;
    priceInFigures: number;
    priceInWords: string;
    acknowledgement: boolean;
    officials: {
      villageElder: { name: string; idNumber: string; };
      assistantChief: { name: string; };
      chief: { name: string; };
    };
  }
  
  