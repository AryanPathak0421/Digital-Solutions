import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { Modal } from '../common/Modal';
import { ConsultationForm } from '../forms/ConsultationForm';
import { QuoteBuilder } from '../forms/QuoteBuilder';
import { Toast } from '../common/Toast';
import { useToast } from '../../hooks/useToast';
import { LayoutContext } from '../../context/LayoutContext';

export const Layout: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationBusinessType, setConsultationBusinessType] = useState('');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const { toasts, showToast, removeToast } = useToast();

  const openConsultationModal = (businessType?: string) => {
    if (businessType) setConsultationBusinessType(businessType);
    setIsConsultationOpen(true);
  };

  const openQuoteModal = () => {
    setIsQuoteOpen(true);
  };

  return (
    <LayoutContext.Provider
      value={{
        openConsultationModal,
        openQuoteModal,
        showToast,
      }}
    >
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white">
        {/* Navigation */}
        <Navbar onOpenConsultation={() => openConsultationModal()} />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton variant="floating" />

        {/* Global Toast Notifications */}
        <Toast toasts={toasts} onRemove={removeToast} />

        {/* Global Consultation Modal */}
        <Modal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          title="Free Business Consultation"
          maxWidth="2xl"
        >
          <ConsultationForm
            defaultBusinessType={consultationBusinessType}
            onSuccess={() => {
              showToast('Consultation request received! We will contact you shortly.', 'success', 'Submitted');
            }}
          />
        </Modal>

        {/* Global Interactive Quote Builder Modal */}
        <Modal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          title="Build Your Custom Website Specification"
          maxWidth="4xl"
        >
          <QuoteBuilder
            onSuccess={() => {
              showToast('Custom quote saved & dispatched to solutions desk.', 'success', 'Quote Ready');
            }}
          />
        </Modal>
      </div>
    </LayoutContext.Provider>
  );
};
