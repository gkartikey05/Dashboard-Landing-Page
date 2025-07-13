"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { BarChart3, Calendar, Home, Menu, Moon, PieChart, Settings, Sun, Users } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Check for user preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else if (prefersDark) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", newTheme)
  }

  const routes = [
    {
      title: "Dashboard",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      title: "Campaigns",
      href: "/campaigns",
      icon: Calendar,
      isActive: pathname === "/campaigns" || pathname?.startsWith("/campaigns/"),
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
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden border-r bg-card/40 md:block md:w-64">
        <div className="flex h-16 items-center border-b px-6">
          <div className="flex items-center gap-2 font-semibold">
            <PieChart className="h-6 w-6 text-primary" />
            <span className="text-lg">LeadManager</span>
          </div>
        </div>
        <nav className="grid gap-1 p-4">
          {routes.map((route) => (
            <Link key={route.href} href={route.href} className={cn("sidebar-link", route.isActive ? "active" : "")}>
              <route.icon className="h-5 w-5" />
              {route.title}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4 border-t pt-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">AU</span>
              </div>
              <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@example.com</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden absolute left-4 top-4 z-40">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <div className="flex h-16 items-center border-b px-6">
            <div className="flex items-center gap-2 font-semibold">
              <PieChart className="h-6 w-6 text-primary" />
              <span className="text-lg">LeadManager</span>
            </div>
          </div>
          <nav className="grid gap-1 p-4">
            {routes.map((route) => (
              <Link key={route.href} href={route.href} className={cn("sidebar-link", route.isActive ? "active" : "")}>
                <route.icon className="h-5 w-5" />
                {route.title}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-4 left-4 right-4 border-t pt-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">AU</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-muted-foreground">admin@example.com</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}

