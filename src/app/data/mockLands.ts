import { Land } from "../../../types/land";

export const mockLands: Land[] = [
  {
    id: "1",
    name: "Green Acres Farm",
    owner: "John Doe",
    location: "123 Farm Road, Countryside, State",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060,
    },
    loans: [
      {
        id: "l1",
        amount: 100000,
        interestRate: 3.5,
        term: 30,
        startDate: "2023-01-01",
      },
      {
        id: "l2",
        amount: 50000,
        interestRate: 4.0,
        term: 15,
        startDate: "2023-06-01",
      },
    ],
  },
  {
    id: "2",
    name: "Sunset Valley Vineyard",
    owner: "Jane Smith",
    location: "456 Vineyard Lane, Wine Country, State",
    coordinates: {
      lat: 38.2919,
      lng: -122.4580,
    },
    loans: [
      {
        id: "l3",
        amount: 200000,
        interestRate: 3.8,
        term: 25,
        startDate: "2022-12-01",
      },
    ],
  },
];

