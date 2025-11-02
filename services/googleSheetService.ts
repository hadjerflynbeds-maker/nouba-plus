import { FormData } from '../types';
import { GOOGLE_FORM_URL, FORM_FIELDS } from '../constants';

interface SubmitResponse {
  success: boolean;
  error?: string;
}

/**
 * Converts a standard Google Form URL (/viewform) into the correct
 * URL for programmatic submission (/formResponse).
 * @param {string} viewFormUrl The URL from the browser's address bar.
 * @returns {string} The URL needed for form submission.
 */
const getFormResponseUrl = (viewFormUrl: string): string => {
  return viewFormUrl.replace(/\/viewform\?.*$/, '/formResponse');
};


export const submitToSheet = async (data: FormData): Promise<SubmitResponse> => {
  const formData = new URLSearchParams();
  
  formData.append(FORM_FIELDS.firstName, data.firstName);
  formData.append(FORM_FIELDS.lastName, data.lastName);
  formData.append(FORM_FIELDS.email, data.email);
  formData.append(FORM_FIELDS.phone, data.phone);
  formData.append(FORM_FIELDS.city, data.city);
  formData.append(FORM_FIELDS.interests, data.interests);

  try {
    const formResponseUrl = getFormResponseUrl(GOOGLE_FORM_URL);

    // This uses 'no-cors' mode, which is a "fire and forget" request.
    // We won't get a response back, but it prevents CORS errors.
    // We assume success if the network request itself doesn't fail.
    await fetch(formResponseUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    });
    return { success: true };
  } catch (error) {
    console.error('Google Sheet submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'A network error occurred.';
    return { success: false, error: errorMessage };
  }
};

/**
 * Generates a pre-filled Google Form URL for debugging purposes.
 * This allows users to verify their entry IDs and form URL visually.
 * @param {FormData} data The data to pre-fill the form with.
 * @returns {string} The complete pre-filled Google Form URL.
 */
export const generatePrefilledUrl = (data: FormData): string => {
  // Ensure we are using the viewform URL, not formResponse
  const baseUrl = GOOGLE_FORM_URL.replace(/\/formResponse.*$/, '/viewform');
  const viewUrl = baseUrl.split('?')[0];

  const params = new URLSearchParams();
  
  if (data.firstName) params.append(FORM_FIELDS.firstName, data.firstName);
  if (data.lastName) params.append(FORM_FIELDS.lastName, data.lastName);
  if (data.email) params.append(FORM_FIELDS.email, data.email);
  if (data.phone) params.append(FORM_FIELDS.phone, data.phone);
  if (data.city) params.append(FORM_FIELDS.city, data.city);
  if (data.interests) params.append(FORM_FIELDS.interests, data.interests);

  return `${viewUrl}?${params.toString()}`;
};