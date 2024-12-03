import { LandTransaction, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<LandTransaction[]> {
  // Fetch land transaction data from your API here.
  return [
    {
      id: "728ed52f",
      buyer: "John Doe",
      seller: "Jane Smith",
      transactionAmount: 250000,
      property: "123 Main St, Springfield",
      transactionDate: "2024-11-25",
      status: "completed",
    },
    // Add more data as needed
  ]
}

export default async function Page() {
  const data = await getData()

  return <DataTable columns={columns} data={data} />
}
