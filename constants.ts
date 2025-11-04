// IMPORTANT: The values below have been automatically configured based on the URL you provided.

// 1. Create a Google Form with fields for First Name, Last Name, Email, Phone, and City.
// 2. For your "Offers of Interest", you can structure it in two ways:
//    a) ONE Checkbox Question: "Offers of Interest" with multiple options (Paris, Rome, etc.).
//    b) MULTIPLE Checkbox Questions: One question for each destination (e.g., a question "Paris?" with one checkbox).
// 3. Get a pre-filled link. The entry IDs will be in the URL parameters.
// 4. Construct the formResponse URL.
export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc0wV4x9ColLt0I22qkIESVfcx0l30Ps_jdD9OkFjjd85voZw/viewform';

// For standard text fields
export const FORM_FIELDS = {
  firstName: 'entry.239427809',
  lastName: 'entry.939798731',
  email: 'entry.1928527946',
  phone: 'entry.1254844136',
  city: 'entry.1085882308',
};

// --- OFFERS OF INTEREST ---
// Map each destination name to its unique entry ID from your Google Form.
// The text on the left (e.g., "Paris, France") MUST EXACTLY MATCH the label of the checkbox in your form.
export const INTEREST_FIELD_MAP: { [key: string]: string } = {
  "Paris, France": "entry.351666708",
  "Rome, Italy": "entry.351666708",
  "New York, USA": "entry.351666708",
  "Dubai, UAE": "entry.351666708",
  "Tokyo, Japan": "entry.351666708",
  "Istanbul, Turkey": "entry.351666708",
  "Bali, Indonesia": "entry.351666708",
  "Thailand": "entry.351666708",
  "Malaysia": "entry.351666708",
  "Barcelona, Spain": "entry.351666708",
  "Tunis, Tunisia": "entry.351666708",
  "Morocco": "entry.351666708",
  "Egypt": "entry.351666708",
  "Baku, Azerbaijan": "entry.351666708",
  "Beijing, China": "entry.351666708",
  "Netherlands": "entry.351666708",
  "Doha, Qatar": "entry.351666708",
};
// Note: Your form uses ONE checkbox question for all interests. This is why all entry IDs
// above are the SAME. The code is designed to handle this correctly.