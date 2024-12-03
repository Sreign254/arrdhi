'use client'

import React from 'react'
import { SidebarProvider } from '@/contexts/SidebarContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Sidebar } from './_components/Sidebar'
import { Header } from './_components/Header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <main className="flex-1 overflow-auto p-6">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

