import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
        <div className="mx-auto border-b border-gray-200">
            <div className="flex flex-col md:flex-row">
                {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`${
                    activeTab === index
                        ? 'border-red-600 text-red-600 bg-gray-100'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-red-600'
                    } flex-1 inline-flex items-center p-4 border-b-2 font-medium transition-all duration-300 ease-in-out`}
                >
                    {tab.label}
                </button>
                ))}
            </div>
            <div className="mt-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-2xl">{tabs[activeTab].content}</h2>
                <p className='block mt-4 text-base leading-relaxed text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    </>
  );
}

export default Tabs;
