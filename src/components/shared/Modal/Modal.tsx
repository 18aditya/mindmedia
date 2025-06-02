'use client'
import { createPortal } from 'react-dom';
import useModal from './hook';
import { ModalProps } from './type';

export default function Modal({ children }: ModalProps) {
  const { mounted } = useModal()

  if (!mounted) return null;

  return createPortal(children, document.body);
} 