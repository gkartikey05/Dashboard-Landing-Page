"use client"

import { useState } from "react"
import { ArrowUpDown, Calendar, Download, Filter, MoreHorizontal, Plus, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartWrapper } from "@/data-chart/wrapper"
import Chart1 from "@/data-chart/line/1"
import Chart2 from "@/data-chart/bar/2"

// Mock data for campaigns
const campaigns = [
  {
    id: "CAM001",
    name: "Summer Sale 2023",
    leadCount: 342,
    leadsConverted: 87,
    moneySpent: 1250,
    startDate: "2023-06-01",
    endDate: "2023-06-30",
    status: "Active",
  },
  {
    id: "CAM002",
    name: "Back to School",
    leadCount: 215,
    leadsConverted: 43,
    moneySpent: 980,
    startDate: "2023-07-15",
    endDate: "2023-08-15",
    status: "Active",
  },
  {
    id: "CAM003",
    name: "Holiday Special",
    leadCount: 512,
    leadsConverted: 128,
    moneySpent: 2100,
    startDate: "2022-11-15",
    endDate: "2022-12-31",
    status: "Ended",
  },
  {
    id: "CAM004",
    name: "Spring Collection",
    leadCount: 187,
    leadsConverted: 32,
    moneySpent: 750,
    startDate: "2023-03-01",
    endDate: "2023-04-15",
    status: "Ended",
  },
  {
    id: "CAM005",
    name: "New Product Launch",
    leadCount: 423,
    leadsConverted: 112,
    moneySpent: 1800,
    startDate: "2023-05-10",
    endDate: "2023-06-10",
    status: "Paused",
  },
]

export default function CampaignsContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch =
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || campaign.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Campaigns</h2>
            <p className="text-muted-foreground">Manage and track your marketing campaigns.</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Campaign
          </Button>
        </div>

        <Tabs defaultValue="list" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-[400px]">
            <TabsTrigger value="list">Campaign List</TabsTrigger>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex w-full md:w-auto items-center gap-2">
                <div className="relative w-full md:w-[300px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search campaigns..."
                    className="pl-8 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Statuses</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Paused">Paused</SelectItem>
                    <SelectItem value="Ended">Ended</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Advanced Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            <Card className="dashboard-card">
              <CardContent className="p-0">
                <Table className="data-table">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">S.No</TableHead>
                      <TableHead>
                        <div className="flex items-center">
                          Campaign ID/Name
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead className="text-right">Lead Count</TableHead>
                      <TableHead className="text-right">Converted</TableHead>
                      <TableHead className="text-right">Money Spent</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCampaigns.map((campaign, index) => (
                      <TableRow key={campaign.id}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{campaign.id}</div>
                            <div className="text-sm text-muted-foreground">{campaign.name}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">{campaign.leadCount}</TableCell>
                        <TableCell className="text-right">{campaign.leadsConverted}</TableCell>
                        <TableCell className="text-right font-medium">${campaign.moneySpent}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>
                              {new Date(campaign.startDate).toLocaleDateString()} -
                              {new Date(campaign.endDate).toLocaleDateString()}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className={`status-badge ${campaign.status.toLowerCase()}`}>{campaign.status}</div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Link href={`/campaigns/${campaign.id}`} className="flex w-full">
                                  View details
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>Edit campaign</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                {campaign.status === "Active" ? "Pause campaign" : "Activate campaign"}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">Delete campaign</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{campaigns.filter((c) => c.status === "Active").length}</div>
                </CardContent>
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Leads (Last 30 Days)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,245</div>
                </CardContent>
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Cost Per Lead</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$4.28</div>
                </CardContent>
              </Card>

              <Card className="dashboard-card stat-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.3%</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Leads per Campaign (Last 30 Days)</CardTitle>
                  <CardDescription>Comparison of lead generation across active campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart2} className="h-full" title="Leads per Campaign" />
                  </div>
                </CardContent>
              </Card>

              <Card className="dashboard-card gradient-card">
                <CardHeader>
                  <CardTitle>Conversion Rate Trends</CardTitle>
                  <CardDescription>Daily conversion rates over the past 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartWrapper content={Chart1} className="h-full" title="Conversion Rate Trends" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="dashboard-card gradient-card">
              <CardHeader>
                <CardTitle>Campaign Performance Analysis</CardTitle>
                <CardDescription>Detailed metrics for all campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Campaign Comparison</h3>
                    <div className="h-[300px]">
                      <ChartWrapper content={Chart2} className="h-full" title="Campaign Comparison" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Cost Per Lead Analysis</h3>
                    <div className="h-[300px]">
                      <ChartWrapper content={Chart1} className="h-full" title="Cost Per Lead Analysis" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

