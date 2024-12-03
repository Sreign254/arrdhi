"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Calendar, Download, MapPin, FileText, Home, Globe } from "lucide-react";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Page() {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Land Revenue (in $)",
        data: [2000, 4000, 3000, 6000, 7000, 5000, 4000, 4500, 6500, 5500, 6000, 7000],
        backgroundColor: "#1e3a8a", // Tailwind's blue-800
      },
    ],
  };

  return (
    <div className="p-6 bg-background-100 min-h-screen">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center justify-between mb-6">
  <h1 className="text-3xl font-bold text-blue-800 mb-4 md:mb-0">Land Dashboard</h1>
  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
    <div className="flex items-center gap-2 text-gray-600">
      <Calendar size={16} />
      <span>Jan 20, 2023 - Feb 09, 2023</span>
    </div>
    <button className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-md">
      <Download size={16} />
      Download Report
    </button>
  </div>
</header>


      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-background rounded-lg shadow flex items-center gap-4">
          <MapPin size={32} className="text-blue-800" />
          <div>
            <h3 className="text-sm font-medium text-gray-500">Total Properties Registered</h3>
            <p className="text-2xl font-semibold">45,231</p>
            <p className="text-sm text-green-500">+15% from last month</p>
          </div>
        </div>
        <div className="p-4 bg-background rounded-lg shadow flex items-center gap-4">
          <FileText size={32} className="text-green-600" />
          <div>
            <h3 className="text-sm font-medium text-gray-500">Land Transactions</h3>
            <p className="text-2xl font-semibold">1,234</p>
            <p className="text-sm text-green-500">+20% from last month</p>
          </div>
        </div>
        <div className="p-4 bg-background rounded-lg shadow flex items-center gap-4">
          <Home size={32} className="text-yellow-600" />
          <div>
            <h3 className="text-sm font-medium text-gray-500">New Developments</h3>
            <p className="text-2xl font-semibold">873</p>
            <p className="text-sm text-green-500">+10% from last month</p>
          </div>
        </div>
        <div className="p-4 bg-background rounded-lg shadow flex items-center gap-4">
          <Globe size={32} className="text-blue-500" />
          <div>
            <h3 className="text-sm font-medium text-gray-500">Active Surveyors</h3>
            <p className="text-2xl font-semibold">573</p>
            <p className="text-sm text-green-500">+5% from last month</p>
          </div>
        </div>
      </div>

      {/* Overview and Recent Transactions Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overview */}
        <div className="lg:col-span-2 p-4 bg-background rounded-lg shadow">
          <h3 className="text-lg font-medium text-blue-800 mb-4">Land Revenue Overview</h3>
          <Bar data={chartData} />
        </div>

        {/* Recent Transactions */}
        <div className="p-4 bg-background rounded-lg shadow">
  <h3 className="text-lg font-medium mb-4">Recent Sales</h3>
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Email</th>
          <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">Amount</th>
        </tr>
      </thead>
      <tbody>
        {[
          { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "$1,999.00" },
          { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "$39.00" },
          { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "$299.00" },
          { name: "William Kim", email: "will@email.com", amount: "$99.00" },
          { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "$39.00" },
        ].map((sale, index) => (
          <tr
            key={index}
            className={`${index % 2 === 0 ? "bg-background" : "bg-gray-50"} border-t`}
          >
            <td className="px-4 py-2 text-sm text-gray-800">{sale.name}</td>
            <td className="px-4 py-2 text-sm text-gray-500">{sale.email}</td>
            <td className="px-4 py-2 text-sm text-gray-800 text-right">{sale.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      </div>
    </div>
  );
}
