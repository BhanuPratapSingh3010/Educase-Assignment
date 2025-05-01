import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {

    const navigate=useNavigate();
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='w-96 h-[90vh] bg-white shadow-xl rounded-xl overflow-hidden flex flex-col justify-end p-6'>
        <div className='mb-auto'></div> {/* Placeholder for top spacing or logo */}
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>Welcome to PopX</h1>
          <p className='text-sm text-gray-500 mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className='mt-6 w-full'>
          <button className='w-full bg-[#9810fa] text-white py-2 rounded-lg text-sm font-medium' onClick={()=>navigate('/signup')}>
            Create Account
          </button>
          <button className='w-full mt-3 bg-[#f3e8ff] text-[#9810fa] py-2 rounded-lg text-sm font-medium' onClick={()=>navigate('/signin')}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
