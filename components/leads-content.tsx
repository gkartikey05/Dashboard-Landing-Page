"use client"

import { useState } from "react"
import {
  ArrowUpDown,
  Calendar,
  ChevronDown,
  Download,
  Filter,
  MoreHorizontal,
  Search,
  SlidersHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

// Mock data for leads
const leads = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "+1 (555) 123-4567",
    product: "Premium Plan",
    service: "Consultation",
    location: "New York, USA",
    status: "New",
    date: "2023-06-15",
    campaign: "Summer Sale 2023",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    mobile: "+1 (555) 987-6543",
    product: "Basic Plan",
    service: null,
    location: "Los Angeles, USA",
    status: "Contacted",
    date: "2023-06-16",
    campaign: "Summer Sale 2023",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.j@example.com",
    mobile: "+1 (555) 234-5678",
    product: "Enterprise Plan",
    service: "Implementation",
    location: "Chicago, USA",
    status: "Qualified",
    date: "2023-06-17",
    campaign: "Back to School",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.d@example.com",
    mobile: "+1 (555) 345-6789",
    product: "Premium Plan",
    service: "Training",
    location: "Miami, USA",
    status: "Converted",
    date: "2023-06-18",
    campaign: "Back to School",
  },
  {
    id: 5,
    name: "Michael Wilson",
    email: "michael.w@example.com",
    mobile: "+1 (555) 456-7890",
    product: "Basic Plan",
    service: null,
    location: "Seattle, USA",
    status: "Lost",
    date: "2023-06-19",
    campaign: "Email Newsletter",
  },
]

export default function LeadsContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [selectedLeads, setSelectedLeads] = useState<number[]>([])

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.mobile.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "All" || lead.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const toggleSelectAll = () => {
    if (selectedLeads.length === filteredLeads.length) {
      setSelectedLeads([])
    } else {
      setSelectedLeads(filteredLeads.map((lead) => lead.id))
    }
  }

  const toggleSelectLead = (id: number) => {
    if (selectedLeads.includes(id)) {
      setSelectedLeads(selectedLeads.filter((leadId) => leadId !== id))
    } else {
      setSelectedLeads([...selectedLeads, id])
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Leads Management</h2>
            <p className="text-muted-foreground">Track and manage your leads from all campaigns.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Customize View
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Leads
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex w-full md:w-auto items-center gap-2">
            <div className="relative w-full md:w-[300px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search leads..."
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
                <SelectItem value="New">New</SelectItem>
                <SelectItem value="Contacted">Contacted</SelectItem>
                <SelectItem value="Qualified">Qualified</SelectItem>
                <SelectItem value="Converted">Converted</SelectItem>
                <SelectItem value="Lost">Lost</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Advanced Filter
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Date Range
            </Button>
          </div>
        </div>

        <Card className="dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between py-4">
            <CardTitle>Lead Data</CardTitle>
            <div className="flex items-center gap-2">
              {selectedLeads.length > 0 && (
                <div className="text-sm text-muted-foreground">{selectedLeads.length} leads selected</div>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" disabled={selectedLeads.length === 0}>
                    Bulk Actions
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Update Status</DropdownMenuItem>
                  <DropdownMenuItem>Assign to Campaign</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete Selected</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table className="data-table">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <input
                      type="checkbox"
                      checked={selectedLeads.length === filteredLeads.length && filteredLeads.length > 0}
                      onChange={toggleSelectAll}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </TableHead>
                  <TableHead className="w-[80px]">ID</TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      Name
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Mobile</TableHead>
                  <TableHead>Product/Service</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Campaign</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={selectedLeads.includes(lead.id)}
                        onChange={() => toggleSelectLead(lead.id)}
                        className="h-4 w-4 rounded border-gray-300"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{lead.id}</TableCell>
                    <TableCell>{lead.name}</TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>{lead.mobile}</TableCell>
                    <TableCell>
                      <div>
                        <div>{lead.product}</div>
                        {lead.service && <div className="text-xs text-muted-foreground">{lead.service}</div>}
                      </div>
                    </TableCell>
                    <TableCell>{lead.location}</TableCell>
                    <TableCell>
                      <div className={`status-badge ${lead.status.toLowerCase()}`}>{lead.status}</div>
                    </TableCell>
                    <TableCell>{lead.campaign}</TableCell>
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
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Edit lead</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Update status</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Delete lead</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

