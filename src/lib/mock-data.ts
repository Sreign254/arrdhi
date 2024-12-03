export const mockPayments = [
    {
      id: '1',
      transactionDate: '2023-05-15',
      amount: 50000,
      payer: {
        name: 'John Doe',
        contact: 'john@example.com'
      },
      recipient: {
        name: 'Jane Smith',
        contact: 'jane@example.com'
      },
      witness: {
        name: 'Mike Johnson',
        contact: 'mike@example.com'
      },
      land: {
        size: 5,
        location: 'Mpasa, Plot 123',
        coordinates: {
          lat: -1.2921,
          lng: 36.8219
        }
      }
    },
    {
      id: '2',
      transactionDate: '2023-06-02',
      amount: 75000,
      payer: {
        name: 'Alice Brown',
        contact: 'alice@example.com'
      },
      recipient: {
        name: 'Bob Green',
        contact: 'bob@example.com'
      },
      witness: {
        name: 'Eve White',
        contact: 'eve@example.com'
      },
      land: {
        size: 7.5,
        location: 'Mpasa, Plot 456',
        coordinates: {
          lat: -1.2974,
          lng: 36.8065
        }
      }
    }
  ]
  
  