import React from 'react';
import { Camera } from 'lucide-react';

const AccountSetting = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fafafa]">
      <div className="w-[350px] bg-white shadow-md rounded-md border h-[90vh] overflow-hidden">
        <div className="border-b p-4">
          <h2 className="text-lg font-semibold text-gray-800">Account Settings</h2>
        </div>

        <div className="p-4 flex gap-3">
          
          <div className="relative w-14 h-14">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute bottom-0 right-0 bg-[#9810fa] p-[2px] rounded-full">
              <Camera size={14} color="#fff" />
            </div>
          </div>

          
          <div className="flex flex-col">
            <span className="font-medium text-sm text-gray-900">Marry Doe</span>
            <span className="text-sm text-gray-500">Marry@Gmail.Com</span>
          </div>
        </div>

        <div className="border-t p-4 text-sm text-gray-600 leading-snug">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
