"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface ChartWrapperProps {
  content: React.ComponentType<any>
  className?: string
  title?: string
}

export function ChartWrapper({ content: Chart, className, title }: ChartWrapperProps) {
  return (
    <div className={cn("w-full chart-container", className)}>
      <Chart title={title} />
    </div>
  )
}

