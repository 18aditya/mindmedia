'use client'
import { useEffect } from 'react';
import { useBestDealModalProps } from './type';

export default function useModal({ isOpen }: useBestDealModalProps) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return {
    isOpen,
  };
}