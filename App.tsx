import React, { useState, useCallback } from 'react';
import { LeadForm } from './components/LeadForm';
import { Logo } from './components/Logo';
import { CheckCircleIcon } from './components/icons/CheckCircleIcon';
import { ExclamationTriangleIcon } from './components/icons/ExclamationTriangleIcon';
import { submitToSheet, generatePrefilledUrl } from './services/googleSheetService';
import { FormData, SubmissionStatus } from './types';
import { INTEREST_FIELD_MAP, FORM_FIELDS } from './constants';
import { ConfigurationWarning } from './components/ConfigurationWarning';
import { DuplicateIdWarning } from './components/DuplicateIdWarning';
import { Footer } from './components/Footer';
import { DebugModeToggle } from './components/DebugModeToggle';

// --- Validation Checks ---
// The form is considered configured if the placeholder ID has been changed.
const isConfigured = FORM_FIELDS.firstName !== 'entry.1000000001';

// Check for duplicate entry IDs, which would cause data loss.
const fieldValues = Object.values(FORM_FIELDS);
const uniqueFieldValues = new Set(fieldValues);
const hasDuplicateIds = fieldValues.length !== uniqueFieldValues.size;
// --- End Validation Checks ---

const App: React.FC = () => {
  const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    interests: [],
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [error, setError] = useState<string>('');
  const [isDebugMode, setIsDebugMode] = useState<boolean>(false);

  const handleFormChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleInterestsChange = useCallback((interest: string) => {
    setFormData(prev => {
      const newInterests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: newInterests };
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || !isConfigured || hasDuplicateIds) return;

    if (isDebugMode) {
      try {
        const url = generatePrefilledUrl(formData);
        window.open(url, '_blank', 'noopener,noreferrer');
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to generate debug URL.';
        setError(errorMessage);
        setSubmissionStatus('error');
      }
      return;
    }
    
    setIsLoading(true);
    setError('');
    setSubmissionStatus('submitting');

    try {
      const response = await submitToSheet(formData);
      if (response.success) {
        setSubmissionStatus('success');
      } else {
        throw new Error(response.error || 'An unknown error occurred.');
      }
    } catch (err)
 {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit form. Please try again.';
      setError(errorMessage);
      setSubmissionStatus('error');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleReset = () => {
    setFormData(initialFormData);
    setSubmissionStatus('idle');
    setError('');
  }

  const isFormDisabled = !isConfigured || hasDuplicateIds;

  return (
    <div className="min-h-screen bg-gray-900 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 transition-all duration-500 my-auto">
        <div className="flex justify-center mb-6">
          <Logo className="h-16" />
        </div>

        {!isConfigured && <ConfigurationWarning />}
        {isConfigured && hasDuplicateIds && <DuplicateIdWarning />}

        {submissionStatus === 'success' ? (
          <div className="text-center transition-opacity duration-500">
            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Thank You!</h2>
            <p className="text-gray-600 mt-2">Your information has been submitted successfully. We will be in touch soon!</p>
            <button
              onClick={handleReset}
              className="mt-6 w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              Submit Another Response
            </button>
          </div>
        ) : submissionStatus === 'error' ? (
          <div className="text-center transition-opacity duration-500">
            <ExclamationTriangleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Submission Failed</h2>
            <p className="text-gray-600 mt-2">{error}</p>
             <button
              onClick={handleReset}
              className="mt-6 w-full bg-gray-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              Try Again
            </button>
          </div>
        ) : (
          <LeadForm
            formData={formData}
            isLoading={isLoading}
            interestOptions={Object.keys(INTEREST_FIELD_MAP)}
            onFormChange={handleFormChange}
            onInterestsChange={handleInterestsChange}
            onSubmit={handleSubmit}
            disabled={isFormDisabled}
          />
        )}
      </div>
       
       {isConfigured && !hasDuplicateIds && (
         <DebugModeToggle 
            isChecked={isDebugMode}
            onChange={(e) => setIsDebugMode(e.target.checked)}
          />
       )}

       <Footer />
    </div>
  );
};

export default App;
