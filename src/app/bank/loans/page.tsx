'use client'

import { useState } from 'react';
import { LandCard } from '@/components/land-card';
import { LoanDetailsDialog } from '@/components/loan-details-dialog';
import { mockLands } from '../../data/mockLands';
import { Land } from '../../../../types/land';

export default function LandLoansPage() {
  const [selectedLand, setSelectedLand] = useState<Land | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewDetails = (land: Land) => {
    setSelectedLand(land);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Land Loans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockLands.map((land) => (
          <LandCard key={land.id} land={land} onViewDetails={handleViewDetails} />
        ))}
      </div>
      <LoanDetailsDialog
        land={selectedLand}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
}

