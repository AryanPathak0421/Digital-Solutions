import React from 'react';
import { Home } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center">
        <span className="text-6xl font-black text-indigo-600">404</span>
        <h1 className="text-2xl font-extrabold text-slate-900 mt-3">Page Not Found</h1>
        <p className="text-sm text-slate-600 mt-2 mb-8 leading-relaxed">
          The page or blueprint you are looking for doesn't exist or has been relocated.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asAnchor href="/" variant="primary" leftIcon={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
          <Button asAnchor href="/pricing" variant="outline">
            View Packages
          </Button>
        </div>
      </div>
    </div>
  );
};
