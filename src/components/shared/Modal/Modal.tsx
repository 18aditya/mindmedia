'use client'
import { createPortal } from 'react-dom';
import useModal from './hook';

export default function Modal({ children }: ModalProps) {
  const { mounted } = useModal()

  if (!mounted) return null;

  return createPortal(children, document.body);
} 