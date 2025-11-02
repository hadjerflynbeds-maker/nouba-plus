import React from 'react';
import { InformationCircleIcon } from './icons/InformationCircleIcon';

export const ConfigurationWarning: React.FC = () => (
  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg" role="alert">
    <div className="flex">
      <div className="flex-shrink-0">
        <InformationCircleIcon className="h-5 w-5 text-yellow-400" />
      </div>
      <div className="ml-3">
        <p className="text-sm font-bold text-yellow-800">Configuration Required</p>
        <div className="mt-2 text-sm text-yellow-700 space-y-3">
          <p>This form is not yet linked to a Google Sheet. Follow the steps below.</p>

          <div>
            <p className="font-semibold">Step 1: Update the Form URL</p>
            <ol className="list-decimal list-inside space-y-1 mt-1">
              <li>Open your Google Form and copy the URL from your browser's address bar.</li>
              <li>Open the <strong>`constants.ts`</strong> file in the editor.</li>
              <li>Paste the URL to replace the placeholder value for `GOOGLE_FORM_URL`.</li>
            </ol>
          </div>

          <div>
            <p className="font-semibold mt-3">Step 2: Get your Field IDs</p>
            <ol className="list-decimal list-inside space-y-2 mt-1">
              <li>
                In your Google Form editor, click the three-dot menu (<strong>⋮</strong>) and select <strong>"Get pre-filled link"</strong>.
              </li>
              <li>
                Fill in <strong>every field</strong> with sample text (e.g., "test").
              </li>
              <li>
                Click <strong>"Get link"</strong>, then click <strong>"COPY LINK"</strong>.
              </li>
              <li>
                Paste the copied link into a text editor. The <code className="text-xs">entry.xxxx</code> parts are your field IDs.
              </li>
              <li>
                In <strong>`constants.ts`</strong>, replace the placeholder IDs in `FORM_FIELDS` with your real entry IDs.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
);