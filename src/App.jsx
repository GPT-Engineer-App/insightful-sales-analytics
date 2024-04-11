import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { BarChart, LineChart, Metric } from "./components/Charts";

const salesData = [
  { category: "Widgets", sales: 7500 },
  { category: "Gadgets", sales: 4200 },
  { category: "Gizmos", sales: 5100 },
];

const revenueData = [
  { month: "Jan", revenue: 5000 },
  { month: "Feb", revenue: 6200 },
  { month: "Mar", revenue: 7800 },
  { month: "Apr", revenue: 5900 },
  { month: "May", revenue: 8500 },
  { month: "Jun", revenue: 9100 },
  { month: "Jul", revenue: 7400 },
  { month: "Aug", revenue: 9600 },
  { month: "Sep", revenue: 8200 },
  { month: "Oct", revenue: 10500 },
  { month: "Nov", revenue: 9900 },
  { month: "Dec", revenue: 12000 },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Acme Inc. Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <Metric value={100} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <Metric value={10000} format="currency" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>New Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <Metric value={50} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Over Time</CardTitle>
            <CardDescription>Last 12 months</CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart data={revenueData} xKey="month" yKey="revenue" yFormat="currency" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={salesData} xKey="category" yKey="sales" yFormat="currency" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
