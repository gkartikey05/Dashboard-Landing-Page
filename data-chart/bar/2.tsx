"use client"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Mock data for bar chart
const data = [
  { name: "Campaign A", value: 400 },
  { name: "Campaign B", value: 300 },
  { name: "Campaign C", value: 200 },
  { name: "Campaign D", value: 278 },
  { name: "Campaign E", value: 189 },
]

export default function Chart2({ title }: { title?: string }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 10,
        }}
      >
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={1} />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.6} />
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
        <Bar dataKey="value" fill="url(#barGradient)" radius={[4, 4, 0, 0]} barSize={30} animationDuration={1500} />
      </BarChart>
    </ResponsiveContainer>
  )
}

