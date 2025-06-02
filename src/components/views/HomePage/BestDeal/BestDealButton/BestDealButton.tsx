'use client'
import { useState } from 'react';
import IconButton from '../../../../shared/IconButton';
import BestDealModal from '../BestDealModal';
import { ShoppingBag } from 'lucide-react';

export default function BestDealButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <IconButton
        icon={
          <ShoppingBag className="h-8 w-8 text-white" />
        }
        ariaLabel="Best Deal"
        className='fixed bottom-10 right-4 z-50 bg-primary-500'
        onClick={() => setIsModalOpen(true)}
      />

      <BestDealModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Best Deal Offer"
        showCloseButton
    />
    </>
  );
} 