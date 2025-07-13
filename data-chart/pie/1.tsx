"use client"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

// Mock data for pie chart
const data = [
  { name: "Email", value: 400 },
  { name: "Social", value: 300 },
  { name: "Direct", value: 300 },
  { name: "Referral", value: 200 },
]

const COLORS = ["hsl(var(--primary))", "hsl(var(--info))", "hsl(var(--success))", "hsl(var(--warning))"]

export default function Chart4({ title }: { title?: string }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          innerRadius={40}
          fill="#8884d8"
          dataKey="value"
          paddingAngle={2}
          animationDuration={1500}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="hsl(var(--background))"
              strokeWidth={2}
            />
          ))}
        </Pie>
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
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{ paddingTop: 20 }}
          formatter={(value) => <span style={{ color: "hsl(var(--foreground))" }}>{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

