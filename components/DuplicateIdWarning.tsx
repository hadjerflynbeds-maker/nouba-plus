import React from 'react';
import { ExclamationTriangleIcon } from './icons/ExclamationTriangleIcon';

export const DuplicateIdWarning: React.FC = () => (
  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg" role="alert">
    <div className="flex">
      <div className="flex-shrink-0">
        <ExclamationTriangleIcon className="h-5 w-5 text-red-400" />
      </div>
      <div className="ml-3">
        <p className="text-sm font-bold text-red-800">Configuration Error: Duplicate Field IDs</p>
        <div className="mt-2 text-sm text-red-700 space-y-2">
          <p>
            Two or more fields in your <strong>`constants.ts`</strong> file are using the same entry ID. This will cause data to be overwritten.
          </p>
          <p>
            Please review the `FORM_FIELDS` object and ensure every field has its own unique `entry.xxxx` ID from your Google Form.
          </p>
        </div>
      </div>
    </div>
  </div>
);
