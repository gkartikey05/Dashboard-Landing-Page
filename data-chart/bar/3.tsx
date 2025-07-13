"use client"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Mock data for bar chart
const data = [
  { name: "Jan", value1: 400, value2: 240 },
  { name: "Feb", value1: 300, value2: 139 },
  { name: "Mar", value1: 200, value2: 980 },
  { name: "Apr", value1: 278, value2: 390 },
  { name: "May", value1: 189, value2: 480 },
]

export default function Chart3({ title }: { title?: string }) {
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
          <linearGradient id="barGradient1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={1} />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.6} />
          </linearGradient>
          <linearGradient id="barGradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--info))" stopOpacity={1} />
            <stop offset="100%" stopColor="hsl(var(--info))" stopOpacity={0.6} />
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
        <Legend
          iconType="circle"
          wrapperStyle={{ paddingTop: 10 }}
          formatter={(value) => (
            <span style={{ color: "hsl(var(--foreground))" }}>{value === "value1" ? "This Year" : "Last Year"}</span>
          )}
        />
        <Bar
          dataKey="value1"
          name="This Year"
          fill="url(#barGradient1)"
          radius={[4, 4, 0, 0]}
          barSize={20}
          animationDuration={1500}
        />
        <Bar
          dataKey="value2"
          name="Last Year"
          fill="url(#barGradient2)"
          radius={[4, 4, 0, 0]}
          barSize={20}
          animationDuration={1500}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

