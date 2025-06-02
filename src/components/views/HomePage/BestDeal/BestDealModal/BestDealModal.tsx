'use client'
import { X } from 'lucide-react';
import useBestDealModal from './hook';
import Modal from '@/components/shared/Modal';
import { BestDealModalProps } from './type';

export default function BestDealModal(props: BestDealModalProps) {
  const { isOpen } = useBestDealModal(props);

  const {
    onClose,
    showCloseButton,
    title,
    className
  } = props

  return (
    <Modal>
        {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
          >
          <div
            className={`relative w-full max-w-2xl bg-white rounded-lg shadow-xl p-6 m-4 animate-scale-in ${className}`}
              onClick={(e) => e.stopPropagation()}
            >
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              )}

              {title && (
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-light text-gray-900 mb-2">{title}</h2>
                </div>
              )}

              <div className="space-y-6">
                <p className="text-gray-600 text-center">Limited Time Special Offer</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Deluxe Room Package</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Luxury accommodation</li>
                      <li>• Daily breakfast buffet</li>
                      <li>• Spa credit</li>
                      <li>• Airport transfers</li>
                    </ul>
                    <div className="mt-4">
                      <span className="text-2xl font-bold text-blue-900">$299</span>
                      <span className="text-gray-500 ml-2">/night</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Suite Package</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Spacious suite</li>
                      <li>• Premium breakfast</li>
                      <li>• Spa treatment</li>
                      <li>• Private pool access</li>
                    </ul>
                    <div className="mt-4">
                      <span className="text-2xl font-bold text-blue-900">$499</span>
                      <span className="text-gray-500 ml-2">/night</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={onClose}
                    className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
          </div>
        </div>
        )}
    </Modal>
  );
} 