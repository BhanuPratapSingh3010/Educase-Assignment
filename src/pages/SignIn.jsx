import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('userData'));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
      navigate('/account-setting');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='w-96 bg-white rounded-xl shadow-xl p-6 h-[95vh]'>
        <h1 className='text-2xl font-bold text-gray-900'>Sign in to your <br /> PopX account</h1>
        <p className='text-sm text-gray-500 mt-2'>
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
        </p>

        <form onSubmit={handleLogin}>
          <div className='mt-6'>
            <label className='block text-sm font-medium text-[#9810fa] mb-1'>Email Address</label>
            <input
              type='email'
              placeholder='Enter email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none'
            />
          </div>

          <div className='mt-4'>
            <label className='block text-sm font-medium text-[#9810fa] mb-1'>Password</label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full border border-gray-400 rounded-md px-3 py-2 pr-10 focus:outline-none'
              />
              <div
                className='absolute inset-y-0 right-3 flex items-center cursor-pointer'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
          </div>

          <button
            type='submit'
            disabled={!isFormValid}
            className={`w-full mt-6 py-2 rounded-md text-white text-sm font-medium ${
              isFormValid ? 'bg-[#9810fa]' : 'bg-[#cbcbcb]'
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

