"use client"

import type React from "react"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { BarChart3, Calendar, Home, Menu, PieChart, Settings, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const pathname = usePathname()

  const routes = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
      isActive: pathname === "/dashboard",
    },
    {
      title: "Campaigns",
      href: "/campaigns",
      icon: Calendar,
      isActive: pathname === "/campaigns",
    },
    {
      title: "Leads",
      href: "/leads",
      icon: Users,
      isActive: pathname === "/leads",
    },
    {
      title: "Reports",
      href: "/reports",
      icon: BarChart3,
      isActive: pathname === "/reports",
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
      isActive: pathname === "/settings",
    },
  ]

  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <SidebarProvider defaultOpen={true}>
          <div className="flex min-h-screen">
            {/* Desktop Sidebar */}
            <Sidebar className="hidden md:flex">
              <SidebarHeader className="flex h-14 items-center border-b px-4">
                <div className="flex items-center gap-2 font-semibold">
                  <PieChart className="h-6 w-6" />
                  <span>LeadManager</span>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  {routes.map((route) => (
                    <SidebarMenuItem key={route.href}>
                      <SidebarMenuButton asChild isActive={route.isActive}>
                        <a href={route.href}>
                          <route.icon className="h-5 w-5" />
                          <span>{route.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarContent>
              <SidebarFooter className="border-t p-4">
                <div className="flex items-center gap-2">
                  <img src="/placeholder.svg?height=32&width=32" alt="User" className="h-8 w-8 rounded-full" />
                  <div>
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-muted-foreground">admin@example.com</p>
                  </div>
                </div>
              </SidebarFooter>
            </Sidebar>

            {/* Mobile Sidebar */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden absolute left-4 top-4 z-40">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <div className="flex h-14 items-center border-b px-4">
                  <div className="flex items-center gap-2 font-semibold">
                    <PieChart className="h-6 w-6" />
                    <span>LeadManager</span>
                  </div>
                </div>
                <nav className="grid gap-1 p-2">
                  {routes.map((route) => (
                    <a
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
                        route.isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                      )}
                    >
                      <route.icon className="h-5 w-5" />
                      {route.title}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <main className="flex-1 overflow-hidden">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

