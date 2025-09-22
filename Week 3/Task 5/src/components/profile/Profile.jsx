import React, { useState, useMemo, useEffect } from 'react';

// This function creates a large array of objects.
// It is still here, but useMemo will make it more efficient.
const generateActivities = () => {
  const activities = [];
  for (let i = 0; i < 10000; i++) {
    activities.push({
      id: i,
      title: `Activity #${i + 1}`,
      description: `This is a description for a user activity.`,
    });
  }
  return activities;
};

// The main Profile component that will now render the list efficiently.
const Profile = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  // We use useMemo to ensure that activities are generated only once,
  // not on every single re-render. This is a critical performance fix.
  const activities = useMemo(() => generateActivities(), []);

  // Simple virtualization logic to show only visible items
  const itemHeight = 72; // Approximate height of each item in pixels
  const buffer = 5;      // Items to render before and after the viewport
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const startIndex = Math.max(0, Math.floor(scrollPosition / itemHeight) - buffer);
    const endIndex = Math.min(activities.length, Math.ceil((scrollPosition + window.innerHeight) / itemHeight) + buffer);
    setVisibleItems(activities.slice(startIndex, endIndex));
  }, [scrollPosition, activities]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Profile (Optimized)</h1>
        <p className="text-gray-600 mb-8">
          This is an optimized version of the profile page. It only renders a small portion of the 10,000 activities at a time, resulting in significantly better performance.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Activities</h2>
        
        <div style={{ height: activities.length * itemHeight, position: 'relative' }}>
          {visibleItems.map((activity, index) => (
            <div 
              key={activity.id} 
              className="absolute w-full"
              style={{ top: (activities.indexOf(activity)) * itemHeight }}
            >
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-800">{activity.title}</h3>
                <p className="text-sm text-gray-500">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
