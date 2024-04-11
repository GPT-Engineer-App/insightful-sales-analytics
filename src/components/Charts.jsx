import { Card, CardContent } from "@/components/ui/card";

export function Metric({ value, format }) {
  const formatValue = (value) => {
    switch (format) {
      case "currency":
        return `$${value.toLocaleString()}`;
      default:
        return value.toLocaleString();
    }
  };

  return <div className="text-4xl font-bold">{formatValue(value)}</div>;
}

export function LineChart({ data, xKey, yKey, yFormat }) {
  // Implement a line chart using a charting library like Chart.js or Recharts
  // Pass in the data and keys to the charting component
  // Apply styling and interactivity as needed
  return (
    <Card>
      <CardContent>{/* Line chart component */}</CardContent>
    </Card>
  );
}

export function BarChart({ data, xKey, yKey, yFormat }) {
  // Implement a bar chart using a charting library like Chart.js or Recharts
  // Pass in the data and keys to the charting component
  // Apply styling and interactivity as needed
  return (
    <Card>
      <CardContent>{/* Bar chart component */}</CardContent>
    </Card>
  );
}
