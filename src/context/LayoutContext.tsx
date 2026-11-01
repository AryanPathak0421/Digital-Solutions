import React, { createContext, useContext } from 'react';

export interface LayoutContextType {
  openConsultationModal: (businessType?: string) => void;
  openQuoteModal: () => void;
  showToast: (message: string, type?: 'success' | 'error' | 'info', title?: string) => void;
}

export const LayoutContext = createContext<LayoutContextType | null>(null);

export function useAppLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useAppLayout must be used within a Layout component');
  }
  return context;
}

