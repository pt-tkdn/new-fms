"use client";

import { X } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { useReportGraphSensors } from "#/modules/reports/application/hooks/useReportGraphSensors";
import { ChartContainer } from "#/shared/components/ui/chart";

const GraphCharts: React.FC = () => {
  const { data } = useReportGraphSensors();

  if (!data) {
    return null;
  }

  return data.map((item) => {
    return (
      <div key={item.key} className="flex flex-col">
        <strong className="text-lg font-bold text-center">{item.name}</strong>
        <ChartContainer className="w-full h-[300px]" config={{}}>
          <LineChart
            width={800}
            height={300}
            className="m-auto"
            title={item.name}
            data={item.data}
          >
            <Line type="monotone" dot={false} dataKey="value" unit={item.uom} />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <YAxis
              tickFormatter={(value) => `${value} ${item.uom}`}
              dataKey="value"
            />
            <XAxis tickCount={item.data.length} dataKey="label" />
          </LineChart>
        </ChartContainer>
      </div>
    );
  });
};

export default GraphCharts;
