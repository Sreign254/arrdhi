"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Home,
  MapPin,
  History,
  Command,
  Settings2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
// const base_url = process.env.base_url;

// Updated data for the land management system
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Land",
      logo: MapPin,
      plan: "Enterprise",
    },
    {
      name: "City Planners",
      logo: Command,
      plan: "Startup",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "http://localhost:3000/u",
      icon: Home,
      isActive: true,
      items: [],
    },
    {
      title: "History",
      url: "#",
      icon: History,
      items: [
        {
          title: "Land Purchase",
          url: "http://localhost:3000/u/land-purchase",
        },
        {
          title: "Transaction Logs",
          url: "http://localhost:3000/u/transaction-logs",
        },
      ],
    },
    {
      title: "Transact",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Buy Land",
          url: "http://localhost:3000/u/buy-land",
        },
        {
          title: "Sell Land",
          url: "http://localhost:3000/u/sell-land",
        },
      ],
    },
    {
      title: "Properties",
      url: "#",
      icon: MapPin,
      items: [
        {
          title: "My Lands",
          url: "http://localhost:3000/u/my-land",
        },
        {
          title: "Shared Properties",
          url: "http://localhost:3000/u/properties",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General Settings",
          url: "http://localhost:3000/u/settings",
        },
        {
          title: "User Preferences",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Land Surveys",
      url: "#",
      icon: MapPin,
    },
    {
      name: "Property Listings",
      url: "#",
      icon: BookOpen,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
