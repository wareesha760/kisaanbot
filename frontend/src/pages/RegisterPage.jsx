// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import OwnerForm from '../components/owner';
import RenterForm from '../components/renter';

const RegisterPage = () => {
  const [activeTab, setActiveTab] = useState('owner');

  return (
    <div className="min-h-screen  p-30">
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab('owner')}
          className={`px-6 py-2 border-b-2 ${
            activeTab === 'owner' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500'
          }`}
        >
          مشینری کا مالک
        </button>
        <button
          onClick={() => setActiveTab('renter')}
          className={`px-6 py-2 border-b-2 ${
            activeTab === 'renter' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500'
          }`}
        >
          مشینری کرایہ دار
        </button>
      </div>

      {activeTab === 'owner' ? <OwnerForm /> : <RenterForm />}
    </div>
  );
};

export default RegisterPage;

