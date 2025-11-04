export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  interests: string[];
  suggestions: string;
}

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';
