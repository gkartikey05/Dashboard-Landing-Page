"use client"

import { ArrowDown, ArrowUp, BarChart3, DollarSign, LineChart, Users } from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartWrapper } from "@/data-chart/wrapper"
import Chart1 from "@/data-chart/line/1"
import Chart2 from "@/data-chart/bar/2"
import Chart3 from "@/data-chart/bar/3"
import { Button } from "@/components/ui/button"

export default function DashboardContent() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">Welcome back to your lead management dashboard.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <BarChart3 className="mr-2 h-4 w-4" />
              Download Report
            </Button>
            <Button>
              <Users className="mr-2 h-4 w-4" />
              Create Campaign
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,543</div>
                  <p className="text-xs text-muted-foreground flex items-center mt-1">
                    <span className="text-success flex items-center mr-1">
                      <ArrowUp className="mr-1 h-3 w-3" />
                      12.5%
                    </span>
                    from last month
                  </p>
                </CardContent>
                <Users className="stat-card-icon h-24 w-24" />
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.3%</div>
                  <p className="text-xs text-muted-foreground flex items-center mt-1">
                    <span className="text-success flex items-center mr-1">
                      <ArrowUp className="mr-1 h-3 w-3" />
                      7.2%
                    </span>
                    from last month
                  </p>
                </CardContent>
                <LineChart className="stat-card-icon h-24 w-24" />
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground flex items-center mt-1">
                    <span className="text-destructive flex items-center mr-1">
                      <ArrowDown className="mr-1 h-3 w-3" />2
                    </span>
                    from last month
                  </p>
                </CardContent>
                <BarChart3 className="stat-card-icon h-24 w-24" />
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cost Per Lead</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$4.28</div>
                  <p className="text-xs text-muted-foreground flex items-center mt-1">
                    <span className="text-success flex items-center mr-1">
                      <ArrowUp className="mr-1 h-3 w-3" />
                      3.1%
                    </span>
                    better than target
                  </p>
                </CardContent>
                <DollarSign className="stat-card-icon h-24 w-24" />
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Lead Acquisition Trends</CardTitle>
                  <CardDescription>Daily lead generation over the past 30 days</CardDescription>
                </CardHeader>
                <CardContent className="px-2">
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart1} className="h-full" title="Lead Acquisition Trends" />
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-3 dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Top Performing Campaigns</CardTitle>
                  <CardDescription>Campaigns with highest conversion rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart2} className="h-full" title="Top Performing Campaigns" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-3 dashboard-card">
                <CardHeader>
                  <CardTitle>Recent Lead Activity</CardTitle>
                  <CardDescription>Latest leads captured by your campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center">
                        <div className="mr-4 rounded-full bg-primary/10 p-2">
                          <Users className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">John Doe {i}</p>
                          <p className="text-xs text-muted-foreground">Submitted form on Summer Campaign</p>
                        </div>
                        <div className="text-xs text-muted-foreground">{i}h ago</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Link href="/leads" className="text-sm text-primary hover:underline">
                      View all leads
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-4 dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Engagement Rate Metrics</CardTitle>
                  <CardDescription>Comparison of engagement across campaigns</CardDescription>
                </CardHeader>
                <CardContent className="px-2">
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart3} className="h-full" title="Engagement Rate Metrics" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Campaign Comparison</CardTitle>
                  <CardDescription>Performance metrics across all active campaigns</CardDescription>
                </CardHeader>
                <CardContent className="px-2">
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart3} className="h-full" title="Campaign Comparison" />
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-3 dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Conversion Funnel</CardTitle>
                  <CardDescription>Lead journey from acquisition to conversion</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart2} className="h-full" title="Conversion Funnel" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Download Detailed Report
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

