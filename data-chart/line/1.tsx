"use client"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Mock data for line chart
const data = [
  { name: "Jan 1", value: 45 },
  { name: "Jan 5", value: 32 },
  { name: "Jan 10", value: 56 },
  { name: "Jan 15", value: 78 },
  { name: "Jan 20", value: 45 },
  { name: "Jan 25", value: 67 },
  { name: "Jan 30", value: 89 },
]

export default function Chart1({ title }: { title?: string }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 10,
        }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={{ stroke: "hsl(var(--border))" }}
          fontSize={12}
          tickMargin={10}
          stroke="hsl(var(--muted-foreground))"
        />
        <YAxis tickLine={false} axisLine={false} fontSize={12} tickMargin={10} stroke="hsl(var(--muted-foreground))" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            borderColor: "hsl(var(--border))",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
          itemStyle={{ color: "hsl(var(--foreground))" }}
          labelStyle={{ color: "hsl(var(--muted-foreground))" }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorValue)"
          activeDot={{ r: 6, strokeWidth: 0, fill: "hsl(var(--primary))" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

