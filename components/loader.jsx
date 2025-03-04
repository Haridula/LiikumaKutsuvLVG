'use client';

import { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => setIsLoading(false));

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  // Best loading thing I have ever seen in my entire life!
  return (
    <>
      {isLoading ? (
        <div className="min-h-screen flex justify-center items-center">
          <div className="loader bg-main p-5 rounded-full flex space-x-3">
            <div className="w-5 h-5 bg-cornflower-blue-400 rounded-full animate-bounce"/>
            <div className="w-5 h-5 bg-cornflower-blue-400 rounded-full animate-bounce"/>
            <div className="w-5 h-5 bg-cornflower-blue-400 rounded-full animate-bounce"/>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loader;