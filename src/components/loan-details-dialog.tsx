import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Land } from "../../types/land";

interface LoanDetailsDialogProps {
  land: Land | null;
  isOpen: boolean;
  onClose: () => void;
}

export function LoanDetailsDialog({ land, isOpen, onClose }: LoanDetailsDialogProps) {
  if (!land) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{land.name} - Loan Details</DialogTitle>
          <DialogDescription>Owner: {land.owner}</DialogDescription>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Loan ID</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Interest Rate</TableHead>
              <TableHead>Term (Years)</TableHead>
              <TableHead>Start Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {land.loans.map((loan) => (
              <TableRow key={loan.id}>
                <TableCell>{loan.id}</TableCell>
                <TableCell>${loan.amount.toLocaleString()}</TableCell>
                <TableCell>{loan.interestRate}%</TableCell>
                <TableCell>{loan.term}</TableCell>
                <TableCell>{loan.startDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}

