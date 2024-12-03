'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { mockPayments } from '@/lib/mock-data'
import { formatDate, formatCurrency } from '@/lib/utils'
import { PaymentDialog } from './payment-dialog'

export default function LandPayments() {
  const [selectedPayment, setSelectedPayment] = useState(null);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Payer</TableHead>
            <TableHead>Recipient</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockPayments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{formatDate(payment.transactionDate)}</TableCell>
              <TableCell>{payment.payer.name}</TableCell>
              <TableCell>{payment.recipient.name}</TableCell>
              <TableCell>{formatCurrency(payment.amount)}</TableCell>
              <TableCell>{payment.land.location}</TableCell>
              <TableCell>
                <Button onClick={() => setSelectedPayment(payment)}>View Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaymentDialog
        payment={selectedPayment}
        open={!!selectedPayment}
        onOpenChange={(open) => {
          if (!open) setSelectedPayment(null)
        }}
      />
    </div>
  )
}

