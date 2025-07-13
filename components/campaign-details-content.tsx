"use client"

import { ArrowLeft, Calendar, Download, Edit, Share2, Trash2 } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartWrapper } from "@/data-chart/wrapper"
import Chart1 from "@/data-chart/line/1"
import Chart2 from "@/data-chart/bar/2"
import Chart3 from "@/data-chart/bar/3"

export default function CampaignDetailsContent({ id }: { id: string }) {
  // Mock data for a single campaign
  const campaign = {
    id: id,
    name: "Summer Sale 2023",
    leadCount: 342,
    leadsConverted: 87,
    moneySpent: 1250,
    startDate: "2023-06-01",
    endDate: "2023-06-30",
    status: "Active",
    description: "Summer promotion targeting existing customers with special discounts on seasonal products.",
    target: "Existing customers",
    budget: 2000,
    dailySpend: 41.67,
    channels: ["Email", "Social Media", "Display Ads"],
    conversionRate: "25.4%",
    costPerLead: "$3.65",
    roi: "215%",
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="/campaigns">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h2 className="text-3xl font-bold tracking-tight">{campaign.name}</h2>
            <div className={`status-badge ${campaign.status.toLowerCase()}`}>{campaign.status}</div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button variant="destructive" size="sm">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>

        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-1 h-4 w-4" />
          <span>
            {new Date(campaign.startDate).toLocaleDateString()} -{new Date(campaign.endDate).toLocaleDateString()}
          </span>
          <span className="mx-2">•</span>
          <span>ID: {campaign.id}</span>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{campaign.leadCount}</div>
                </CardContent>
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{campaign.conversionRate}</div>
                </CardContent>
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cost Per Lead</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{campaign.costPerLead}</div>
                </CardContent>
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">ROI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{campaign.roi}</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-1 dashboard-card">
                <CardHeader>
                  <CardTitle>Campaign Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Description</dt>
                      <dd className="text-sm">{campaign.description}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Target Audience</dt>
                      <dd className="text-sm">{campaign.target}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Total Budget</dt>
                      <dd className="text-sm">${campaign.budget}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Daily Spend</dt>
                      <dd className="text-sm">${campaign.dailySpend}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Channels</dt>
                      <dd className="text-sm flex flex-wrap gap-1">
                        {campaign.channels.map((channel) => (
                          <div key={channel} className="status-badge new">
                            {channel}
                          </div>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Daily Lead Generation</CardTitle>
                  <CardDescription>Number of leads captured each day during the campaign</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart1} className="h-full" title="Daily Lead Generation" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Conversion Rate Over Time</CardTitle>
                  <CardDescription>Daily conversion rate throughout the campaign</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart1} className="h-full" title="Conversion Rate Over Time" />
                  </div>
                </CardContent>
              </Card>

              <Card className="dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Channel Performance</CardTitle>
                  <CardDescription>Lead generation by marketing channel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart2} className="h-full" title="Channel Performance" />
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Cost Analysis</CardTitle>
                  <CardDescription>Daily spend and cost per lead metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart3} className="h-full" title="Cost Analysis" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="leads" className="space-y-6">
            <Card className="dashboard-card gradient-card">
              <CardHeader>
                <CardTitle>Lead Demographics</CardTitle>
                <CardDescription>Breakdown of leads by demographic data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ChartWrapper content={Chart2} className="h-full" title="Lead Demographics" />
                </div>
              </CardContent>
            </Card>

            <Card className="dashboard-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Lead List</CardTitle>
                  <CardDescription>All leads captured during this campaign</CardDescription>
                </div>
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-muted-foreground">
                  View the complete lead list in the Leads Management section
                </p>
                <div className="flex justify-center">
                  <Button asChild>
                    <Link href="/leads">View All Leads</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

