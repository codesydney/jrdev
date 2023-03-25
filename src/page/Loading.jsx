import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="border-t-8 border-b-8 border-blue-200 h-16 w-16 rounded-full animate-spin"></div>
        <div className="mt-8 text-center">
          <p className="text-blue-200 text-lg font-semibold">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
