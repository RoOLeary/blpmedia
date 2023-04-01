import React, { useState } from 'react';


const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    console.log(tabs.index)
  };

  return (
    // <div>
    //   <div>
    //     {tabs.map((tab, index) => (
    //       <button c onClick={() => handleTabClick(index)}>
    //         {tab.label}
    //       </button>
    //     ))}
    //   </div>
    //   <div>{tabs[activeTab].content}</div>
    // </div>
    <>
        <div className="container mx-auto border-b border-gray-200">
            <div className="flex">
                {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`${
                    activeTab === index
                        ? 'border-red-600 text-red-600 bg-gray-100'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-red-600'
                    } flex-1 inline-flex items-center px-4 py-2 border-b-2 font-medium transition-all duration-300 ease-in-out`}
                >
                    {tab.label}
                </button>
                ))}
            </div>
            <div className="mt-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {tabs[activeTab].content}
            </div>
        </div>
    </>
  );
}

export default Tabs;
