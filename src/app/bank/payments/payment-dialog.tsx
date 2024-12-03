'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { MapComponent } from './map-component'

import { formatDate, formatCurrency } from '@/lib/utils'

export function PaymentDialog({ payment, open, onOpenChange }) {
  if (!payment) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Payment Details</DialogTitle>
          <DialogDescription>Transaction ID: {payment.id}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <section>
            <h3 className="font-semibold text-lg">Transaction Information</h3>
            <p>Date: {formatDate(payment.transactionDate)}</p>
            <p>Amount: {formatCurrency(payment.amount)}</p>
          </section>
          <section>
            <h3 className="font-semibold text-lg">Land Details</h3>
            <p>Size: {payment.land.size} acres</p>
            <p>Location: {payment.land.location}</p>
            <p>Coordinates: {payment.land.coordinates.lat}, {payment.land.coordinates.lng}</p>
          </section>
          <section>
            <h3 className="font-semibold text-lg">Payer Information</h3>
            <p>Name: {payment.payer.name}</p>
            <p>Contact: {payment.payer.contact}</p>
          </section>
          <section>
            <h3 className="font-semibold text-lg">Recipient Information</h3>
            <p>Name: {payment.recipient.name}</p>
            <p>Contact: {payment.recipient.contact}</p>
          </section>
          <section>
            <h3 className="font-semibold text-lg">Witness Information</h3>
            <p>Name: {payment.witness.name}</p>
            <p>Contact: {payment.witness.contact}</p>
          </section>
          <section>
            <h3 className="font-semibold text-lg">Location Map</h3>
            <div className="h-48 w-full">
              <MapComponent coordinates={payment.land.coordinates} />
            </div>
          </section>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

