"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Calendar, Download, MapPin, Home, Globe, FileText } from "lucide-react";
import { MapComponent } from '@/components/MapComponent'

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


// const Map = dynamic(() => import('./Map'), { ssr: false });

export default function AnalyticsPage() {
  // Example Data for Analytics
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Lands with Loans",
        data: [100, 200, 300, 250, 220, 300, 450, 500, 400, 450, 550, 600],
        backgroundColor: "#4CAF50",
      },
      {
        label: "Lands without Loans",
        data: [150, 120, 180, 200, 240, 220, 250, 300, 280, 320, 350, 400],
        backgroundColor: "#FF5733",
      },
      {
        label: "Sold Lands",
        data: [50, 60, 80, 70, 100, 120, 150, 200, 180, 220, 250, 300],
        backgroundColor: "#2196F3", 
      },
      {
        label: "Lands in Progress of Selling",
        data: [30, 40, 50, 60, 80, 100, 130, 160, 180, 200, 250, 280],
        backgroundColor: "#FFEB3B",
      },
    ],
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-4 md:mb-0">Analytics Dashboard</h1>
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

      {/* Analytics Section with Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Bar Chart for Land Analytics */}
        <div className="p-4 bg-background rounded-lg shadow">
          <h3 className="text-lg font-medium text-blue-800 mb-4">Land Analytics Overview</h3>
          <Bar data={chartData} />
        </div>

        {/* Map showing Land Properties */}
        <div className="p-4 bg-background rounded-lg shadow">
          <h3 className="text-lg font-medium text-blue-800 mb-4">Property Locations on Map</h3>
          <MapComponent />
        </div>
      </div>

      {/* Key Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="p-4 bg-background rounded-lg shadow flex items-center gap-4">
          <MapPin size={32} className="text-blue-800" />
          <div>
            <h3 className="text-sm font-medium text-gray-500">Lands with Loans</h3>
            <p className="text-2xl font-semibold">3,540</p>
          </div>
        </div>
        <div className="p-4 bg-background rounded-lg shadow flex items-center gap-4">
          <FileText size={32} className="text-green-600" />
          <div>
            <h3 className="text-sm font-medium text-gray-500">Lands without Loans</h3>
            <p className="text-2xl font-semibold">4,200</p>
          </div>
        </div>
        <div className="p-4 bg-background rounded-lg shadow flex items-center gap-4">
          <Home size={32} className="text-yellow-600" />
          <div>
            <h3 className="text-sm font-medium text-gray-500">Sold Properties</h3>
            <p className="text-2xl font-semibold">1,800</p>
          </div>
        </div>
        <div className="p-4 bg-background rounded-lg shadow flex items-center gap-4">
          <Globe size={32} className="text-blue-500" />
          <div>
            <h3 className="text-sm font-medium text-gray-500">In Progress Sales</h3>
            <p className="text-2xl font-semibold">600</p>
          </div>
        </div>
      </div>

      {/* Table Section for Recent Transactions */}
      <div className="p-4 bg-background rounded-lg shadow">
        <h3 className="text-lg font-medium text-blue-800 mb-4">Recent Land Transactions</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Land Owner</th>
              <th className="px-4 py-2 text-left text-gray-600">Property Type</th>
              <th className="px-4 py-2 text-left text-gray-600">Amount ($)</th>
              <th className="px-4 py-2 text-left text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { owner: "Olivia Martin", type: "Residential", amount: 2500, status: "Sold" },
              { owner: "Jackson Lee", type: "Commercial", amount: 5000, status: "In Progress" },
              { owner: "Isabella Nguyen", type: "Agricultural", amount: 1500, status: "Sold" },
              { owner: "William Kim", type: "Industrial", amount: 7000, status: "In Progress" },
            ].map((transaction, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{transaction.owner}</td>
                <td className="px-4 py-2">{transaction.type}</td>
                <td className="px-4 py-2">{transaction.amount}</td>
                <td className="px-4 py-2">{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
