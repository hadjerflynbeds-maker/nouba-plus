import React from 'react';
import { FormData } from '../types';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { UserIcon } from './icons/UserIcon';
import { EnvelopeIcon } from './icons/EnvelopeIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { MapPinIcon } from './icons/MapPinIcon';


interface LeadFormProps {
  formData: FormData;
  isLoading: boolean;
  interestOptions: string[];
  onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInterestsChange: (interest: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  disabled: boolean;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  formData,
  isLoading,
  interestOptions,
  onFormChange,
  onInterestsChange,
  onSubmit,
  disabled,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">Join Our Travel List!</h1>
      <p className="text-center text-gray-600 -mt-4">Get exclusive offers and updates on your favorite destinations.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField id="firstName" name="firstName" label="First Name" value={formData.firstName} onChange={onFormChange} required disabled={disabled} icon={<UserIcon />} />
        <InputField id="lastName" name="lastName" label="Last Name" value={formData.lastName} onChange={onFormChange} required disabled={disabled} icon={<UserIcon />} />
      </div>
      
      <InputField id="email" name="email" label="Email Address" type="email" value={formData.email} onChange={onFormChange} required disabled={disabled} icon={<EnvelopeIcon />} />
      <InputField id="phone" name="phone" label="Phone / WhatsApp" type="tel" value={formData.phone} onChange={onFormChange} required disabled={disabled} icon={<PhoneIcon />} />
      <InputField id="city" name="city" label="City" value={formData.city} onChange={onFormChange} required disabled={disabled} icon={<MapPinIcon />} />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Offers of Interest (Select all that apply)</label>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 max-h-48 overflow-y-auto pr-2">
          {interestOptions.map((interest) => (
            <CheckboxField
              key={interest}
              id={interest}
              name="interest"
              label={interest}
              checked={formData.interests.includes(interest)}
              onChange={() => onInterestsChange(interest)}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
      
      <button
        type="submit"
        disabled={isLoading || disabled}
        className="w-full flex justify-center items-center bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transform hover:scale-105 shadow-lg"
      >
        {isLoading ? <SpinnerIcon className="w-6 h-6" /> : 'Send Information'}
      </button>
    </form>
  );
};

// --- Helper Sub-components ---

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  icon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, icon, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="relative mt-1">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-500 sm:text-sm">
          {icon}
        </span>
      </div>
      <input
        id={id}
        {...props}
        className="block w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
      />
    </div>
  </div>
);


interface CheckboxFieldProps {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ id, name, label, checked, onChange, disabled }) => (
  <div className="flex items-center">
    <input
      id={id}
      name={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 disabled:bg-gray-200 disabled:cursor-not-allowed"
    />
    <label htmlFor={id} className={`ml-2 block text-sm text-gray-900 ${disabled ? 'text-gray-500 cursor-not-allowed' : ''}`}>
      {label}
    </label>
  </div>
);