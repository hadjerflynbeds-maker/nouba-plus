// IMPORTANT: Replace with your actual Google Form URL and entry IDs.
// 1. Create a Google Form with fields: First Name, Last Name, Email, Phone, City, Offers of Interest.
// 2. Get a pre-filled link. The entry IDs will be in the URL parameters.
// 3. Construct the formResponse URL.
export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc0wV4x9ColLt0I22qkIESVfcx0l30Ps_jdD9OkFjjd85voZw/viewform?usp=dialog';

export const FORM_FIELDS = {
  firstName: 'entry.239427809', // Replace with your "First Name" entry ID
  lastName: 'entry.939798731',  // Replace with your "Last Name" entry ID
  email: 'entry.1928527946',     // Replace with your "Email" entry ID
  phone: 'entry.1254844136',     // Replace with your "Phone" entry ID
  city: 'entry.1085882308',      // Replace with your "City" entry ID
  interests: 'entry.351666708', // Replace with your "Offers of Interest" entry ID
};

export const INTEREST_OPTIONS: string[] = [
  "Paris, France",
  "Rome, Italy",
  "New York, USA",
  "Dubai, UAE",
  "Tokyo, Japan",
  "Istanbul, Turkey",
  "Bali, Indonesia",
];