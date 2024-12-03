"use client"
import React, { useState } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export type Land = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  titleDeedNumber: string
  location: string
  residence: string
  area: string
  mapUrl: string
}

export const columns: ColumnDef<Land>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <div className="capitalize">{row.getValue("status")}</div>,
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Email
          <ArrowUpDown />
        </Button>
      ),
      cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));
        const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "titleDeedNumber",
      header: "Title Deed Number",
      cell: ({ row }) => <div className="text-left">{row.getValue("titleDeedNumber")}</div>,
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => <div className="text-left">{row.getValue("location")}</div>,
    },
    {
      accessorKey: "area",
      header: "Area",
      cell: ({ row }) => <div className="text-left">{row.getValue("area")}</div>,
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const [selectedLand, setSelectedLand] = useState<Land | null>(null); // Initialize selectedLand state
        const land = row.original;
  
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(land.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <Dialog>
                <DialogTrigger asChild>
                  <DropdownMenuItem onClick={() => setSelectedLand(land)}>
                    View land details
                  </DropdownMenuItem>
                </DialogTrigger>
                {/* Here you should handle the dialog rendering, passing selectedLand */}
                {selectedLand && (
                  <DialogContent>
                    {/* Dialog content here, showing land details */}
                    <div>{selectedLand.titleDeedNumber}</div>
                    {/* Add other details for the land as needed */}
                  </DialogContent>
                )}
              </Dialog>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
//   const [selectedLand, setSelectedLand] = React.useState<Land | null>(null)
  const [selectedLand, setSelectedLand] = React.useState<Land | null>(null)
  const data: Land[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
      titleDeedNumber: "ABC12345",
      location: "Nairobi, Kenya",
      residence: "Nairobi",
      area: "2 acres",
      mapUrl: "https://example.com/map.jpg",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
      titleDeedNumber: "DEF67890",
      location: "Mombasa, Kenya",
      residence: "Mombasa",
      area: "1.5 acres",
      mapUrl: "https://example.com/map2.jpg",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
      titleDeedNumber: "GHI11223",
      location: "Kisumu, Kenya",
      residence: "Kisumu",
      area: "3 acres",
      mapUrl: "https://example.com/map3.jpg",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
      titleDeedNumber: "JKL44556",
      location: "Nakuru, Kenya",
      residence: "Nakuru",
      area: "4 acres",
      mapUrl: "https://example.com/map4.jpg",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
      titleDeedNumber: "MNO77889",
      location: "Eldoret, Kenya",
      residence: "Eldoret",
      area: "5 acres",
      mapUrl: "https://example.com/map5.jpg",
    },
  ]
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table.getAllColumns().filter((column) => column.getCanHide()).map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Dialog open={Boolean(selectedLand)} onOpenChange={() => setSelectedLand(null)}>
              {selectedLand && (
                <>
                  <DialogHeader>
                    <DialogTitle>Land Details</DialogTitle>
                  </DialogHeader>
                  <DialogContent>
                    <DialogDescription>
                      <p><strong>Location:</strong> {selectedLand.location}</p>
                      <p><strong>Residence:</strong> {selectedLand.residence}</p>
                      <p><strong>Area:</strong> {selectedLand.area}</p>
                      <p><strong>Title Deed Number:</strong> {selectedLand.titleDeedNumber}</p>
                      {selectedLand.mapUrl && (
                        <img src={selectedLand.mapUrl} alt="Land Map" className="w-full mt-2" />
                      )}
                    </DialogDescription>
                  </DialogContent>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setSelectedLand(null)}>
                      Close
                    </Button>
                  </DialogFooter>
                </>
              )}
            </Dialog>
    </div>
  )
}
