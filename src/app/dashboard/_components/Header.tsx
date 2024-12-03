'use client'

import React from 'react'
// import { usePathname } from "next/navigation";

import { Menu, Bell } from 'lucide-react'
import { useSidebar } from '@/contexts/SidebarContext'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export const Header: React.FC = () => {
  const { toggle } = useSidebar()
  // const pathname = usePathname();
  // const currentPage = pathname
  //   ? pathname.split("/").filter((part) => part).slice(-1)[0]
  //   : "Home";


  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-background dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between p-4">
      <div className="flex items-center">
        <button
          onClick={toggle}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 rounded-md"
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 rounded-full p-1">
          <Bell className="h-6 w-6" />
        </button>
        {/* <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 rounded-full p-1">
          <User className="h-6 w-6" />
        </button> */}
          <div className="flex items-center gap-4">
            <Button variant="default" size="icon">
              <Plus className="h-6 w-6" />
            </Button>

          

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/dashboard/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex w-full items-center justify-between p-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
      </div>
    </header>
  )
}

