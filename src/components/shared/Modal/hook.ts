'use client'
import { useState, useEffect } from 'react';

export default function useModal() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

  return {
    mounted
  };
}