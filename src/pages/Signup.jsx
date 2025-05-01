import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Eye, EyeOff } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
  });

  const navigate = useNavigate();


  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem('userData', JSON.stringify(formData)); // Save User data to localStorage
    alert('Account created and data saved to localStorage!');
    navigate('/signin');
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='w-[400px] bg-white p-6 rounded-xl shadow-lg'
      >
        <h2 className='text-2xl font-bold text-gray-900'>
          Create your <br /> PopX account
        </h2>

        
        <div className='mt-6'>
          <label className='text-sm font-medium text-[#9810fa]'>Full Name*</label>
          <input
            type='text'
            name='fullName'
            placeholder='Enter full name'
            value={formData.fullName}
            onChange={handleChange}
            className='w-full border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none'
          />
        </div>

        
        <div className='mt-4'>
          <label className='text-sm font-medium text-[#9810fa]'>Phone number*</label>
          <input
            type='text'
            name='phone'
            placeholder='Enter phone number'
            value={formData.phone}
            onChange={handleChange}
            className='w-full border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none'
          />
        </div>

        
        <div className='mt-4'>
          <label className='text-sm font-medium text-[#9810fa]'>Email address*</label>
          <input
            type='email'
            name='email'
            placeholder='Enter email address'
            value={formData.email}
            onChange={handleChange}
            className='w-full border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none'
          />
        </div>

        
        <div className='mt-4'>
          <label className='text-sm font-medium text-[#9810fa]'>Password*</label>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Enter password'
              value={formData.password}
              onChange={handleChange}
              className='w-full border border-gray-400 rounded-md px-3 py-2 mt-1 pr-10 focus:outline-none'
            />
            <div
              className='absolute inset-y-0 right-3 top-[50%] translate-y-[-50%] cursor-pointer'
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>
        </div>

    
        <div className='mt-4'>
          <label className='text-sm font-medium text-[#9810fa]'>Company name</label>
          <input
            type='text'
            name='company'
            placeholder='Enter company name'
            value={formData.company}
            onChange={handleChange}
            className='w-full border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none'
          />
        </div>

        
        <div className='mt-4'>
          <p className='text-sm font-medium text-gray-800'>
            Are you an Agency? <span className='text-red-600'>*</span>
          </p>
          <div className='mt-1 space-x-4'>
            <label className='text-sm'>
              <input
                type='radio'
                name='isAgency'
                value='yes'
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
                className='mr-1'
              />
              Yes
            </label>
            <label className='text-sm'>
              <input
                type='radio'
                name='isAgency'
                value='no'
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
                className='mr-1'
              />
              No
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          disabled={!isFormValid}
          className={`w-full mt-6 py-2 text-white font-medium rounded-md ${
            isFormValid ? 'bg-[#9810fa]' : 'bg-[#cbcbcb]'
          }`}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
