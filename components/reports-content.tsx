"use client"

import { Calendar, Download, FileText, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartWrapper } from "@/data-chart/wrapper"
import Chart1 from "@/data-chart/line/1"
import Chart2 from "@/data-chart/bar/2"
import Chart3 from "@/data-chart/bar/3"
import Chart4 from "@/data-chart/pie/1"

export default function ReportsContent() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
            <p className="text-muted-foreground">Analyze your campaign performance and lead metrics.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Date Range
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Reports
            </Button>
          </div>
        </div>

        <Tabs defaultValue="lead-acquisition" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
            <TabsTrigger value="lead-acquisition">Lead Acquisition</TabsTrigger>
            <TabsTrigger value="campaign-performance">Campaign Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="lead-acquisition" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,543</div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </CardContent>
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.3%</div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </CardContent>
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Cost Per Lead</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$4.28</div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </CardContent>
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Converted</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">618</div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Lead Acquisition Trends</CardTitle>
                  <CardDescription>Daily lead generation over the past 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart1} className="h-full" title="Lead Acquisition Trends" />
                  </div>
                </CardContent>
              </Card>

              <Card className="dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Lead Sources</CardTitle>
                  <CardDescription>Breakdown of leads by acquisition channel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart4} className="h-full" title="Lead Sources" />
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Lead Status Distribution</CardTitle>
                  <CardDescription>Number of leads in each stage of the funnel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart3} className="h-full" title="Lead Status Distribution" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="dashboard-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Lead Acquisition Report</CardTitle>
                  <CardDescription>Detailed breakdown of lead acquisition metrics</CardDescription>
                </div>
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Generate PDF
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-muted-foreground">
                  Configure your report parameters to generate a detailed PDF report
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Configure Parameters
                  </Button>
                  <Button>Generate Report</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaign-performance" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </CardContent>
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">Currently running</p>
                </CardContent>
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Campaign ROI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">215%</div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </CardContent>
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Campaign Spend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$10,892</div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Campaign Performance Comparison</CardTitle>
                  <CardDescription>Lead generation across active campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart2} className="h-full" title="Campaign Performance Comparison" />
                  </div>
                </CardContent>
              </Card>

              <Card className="dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Conversion Rate by Campaign</CardTitle>
                  <CardDescription>Percentage of leads converted per campaign</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart3} className="h-full" title="Conversion Rate by Campaign" />
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Campaign ROI Analysis</CardTitle>
                  <CardDescription>Return on investment metrics for all campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart1} className="h-full" title="Campaign ROI Analysis" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="dashboard-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Campaign Performance Report</CardTitle>
                  <CardDescription>Detailed breakdown of campaign performance metrics</CardDescription>
                </div>
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Generate PDF
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-muted-foreground">
                  Configure your report parameters to generate a detailed PDF report
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Configure Parameters
                  </Button>
                  <Button>Generate Report</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

