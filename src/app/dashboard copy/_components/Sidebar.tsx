'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  BarChart,
  Users,
  Map,
  FileText,
  DollarSign,
  Bell,
  Home,
  ChevronDown,
  Sun, Moon

} from 'lucide-react';
import { useSidebar } from '@/contexts/SidebarContext'
import { useTheme } from "next-themes";


const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: BarChart, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: Users, label: 'users', href: '/dashboard/users' },
  { icon: Map, label: 'Land Records', href: '/dashboard/land-records' },
  { icon: Home, label: 'Loan Applications', href: '/dashboard/loans' },
  { icon: FileText, label: 'Survey Reports', href: '/dashboard/survey-reports' },
  { icon: DollarSign, label: 'Payments', href: '/dashboard/payments' },
  { icon: Bell, label: 'land transfer', href: '/dashboard/land-transfer' },
];

export const Sidebar: React.FC = () => {
  const { isOpen } = useSidebar()
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  // bg-[#0A0A0B]
  return (
    <aside
      className={`bg-sidebar text-gray-300 transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-16'
      } flex flex-col border-r border-gray-800`}
    >
      <div className="p-4">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <LayoutDashboard className="h-8 w-8" />
          {isOpen && <span className="text-xl font-bold">Dashboard</span>}
        </Link>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center space-x-2 rounded-lg p-2 transition-colors ${
                  pathname === item.href
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {isOpen && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="relative border-t border-gray-800 p-4">
        <button
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-sm font-medium">
              CN
            </div>
            {isOpen && (
              <div className="flex flex-col">
                <span className="font-medium text-gray-200">shadcn</span>
                <span className="text-sm text-gray-400">m@example.com</span>
              </div>
            )}
          </div>
          {isOpen && <ChevronDown className={`h-4 w-4 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />}
        </button>
        {isUserMenuOpen && (
          <div 
            className="fixed z-50 w-56 rounded-lg border border-gray-800 bg-background shadow-lg"
            style={{
              bottom: `calc(${isOpen ? '4rem' : '5rem'})`,
              left: `${isOpen ? '240px' : '4rem'}`,
            }}
          >
            <div className="flex items-center space-x-2 border-b border-gray-800 p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-sm font-medium">
                CN
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-gray-200">shadcn</span>
                <span className="text-sm text-gray-400">m@example.com</span>
              </div>
            </div>
            <div className="p-2">
              <button className="w-full rounded-md p-2 text-left text-sm text-gray-400 hover:bg-gray-800 hover:text-white">
                Upgrade to Pro
              </button>
              <button className="w-full rounded-md p-2 text-left text-sm text-gray-400 hover:bg-gray-800 hover:text-white">
                Account
              </button>
              <button className="w-full rounded-md p-2 text-left text-sm text-gray-400 hover:bg-gray-800 hover:text-white">
                Billing
              </button>
              <button className="w-full rounded-md p-2 text-left text-sm text-gray-400 hover:bg-gray-800 hover:text-white">
                Notifications
              </button>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex w-full items-center justify-between p-2 rounded-md text-sm text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                {theme === "dark" ? (
                  <>
                    <span>Light Mode</span>
                    <Sun className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>Dark Mode</span>
                    <Moon className="h-4 w-4" />
                  </>
                )}
              </button>
              <button className="w-full rounded-md p-2 text-left text-sm text-gray-400 hover:bg-gray-800 hover:text-white">
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}

