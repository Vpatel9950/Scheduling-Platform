import React, { useState, useEffect } from 'react';
import './LandingPage3.css';
import img1 from '../assets/landingpage3Image/image.png'
import img2 from '../assets/landingpage3Image/image2.png'
import img3 from '../assets/landingpage3Image/image3.png'
import img4 from '../assets/landingpage3Image/image4.png'
import img5 from '../assets/landingpage3Image/image5.png'
const tabsData = [
  {
    id: 1,
    title: 'Connect your calendars',
    description: 'Calendly connects up to six calendars to automate scheduling with real-time availability.',
    color: '#006BFF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    image : (<img src={img1}/>)
  },
  {
    id: 2,
    title: 'Add your availability',
    description: 'Keep invitees informed of your availability. Take control of your calendar with detailed availability settings, scheduling rules, buffers, and more.',
    color: '#8A2BE2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    image : (<img src={img2}/>)
  },
  {
    id: 3,
    title: 'Connect conferencing tools',
    description: 'Sync your video conferencing tools and set preferences for in-person meetings or calls.',
    color: '#D136F6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    image : (<img src={img3}/>)
  },
  {
    id: 4,
    title: 'Customize your event types',
    description: 'Choose from pre-built templates or quickly create custom event types for any meeting you need to schedule.',
    color: '#F9A01B',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    image : (<img src={img4}/>)
  },
  {
    id: 5,
    title: 'Share your scheduling link',
    description: 'Easily book meetings by embedding scheduling links on your website, landing pages, or emails.',
    color: '#00A550',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    image : (<img src={img5}/>)
  }
];

const LandingPage3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Timer logic for auto-switching tabs
useEffect(() => {
  const timerInterval = 50
  const totalDuration = 5000
  const step = (timerInterval / totalDuration) * 100

  const timer = setInterval(() => {
    setProgress((prevProgress) => {
      if (prevProgress >= 100) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % tabsData.length)
        return 0
      }
      return prevProgress + step
    })
  }, timerInterval)

  return () => clearInterval(timer)
}, [])   // ✅ sirf ek baar chalega

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setProgress(0); // Reset progress on manual click
  };

  return (
    <div className="landing-container">
      {/* Left Column: Tabs */}
      <div className="tabs-column">
        {tabsData.map((tab, index) => {
          const isActive = index === activeIndex;
          
          return (
            <div 
              key={tab.id} 
              className={`tab-item ${isActive ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              <div className="tab-header">
                <div 
                  className="tab-icon" 
                  style={{ 
                    color: isActive ? tab.color : '#a0aab2',
                    fill: isActive ? tab.color : 'transparent'
                  }}
                >
                  {tab.icon}
                </div>
                <h3 
                  className="tab-title"
                  style={{ color: isActive ? '#0f1c35' : '#8da2b5' }}
                >
                  {tab.title}
                </h3>
              </div>
              
              {isActive && (
                <div className="tab-content">
                  <p>{tab.description}</p>
                </div>
              )}

              {/* Progress Bar / Bottom Border */}
              <div className="tab-border">
                {isActive && (
                  <div 
                    className="tab-progress" 
                    style={{ 
                      width: `${progress}%`,
                      backgroundColor: tab.color
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Column: Dynamic Visuals */}
      <div className="visuals-column">
        <div 
          className="visual-container"
          style={{ 
            /* Subtle background tint based on active tab color */
            backgroundColor: `${tabsData[activeIndex].color}15` 
          }}
        >
          {/* PLACEHOLDER: Replace this div with your actual right-side images */}
          <div className="visual-mockup">
            <h2 style={{ color: tabsData[activeIndex].color }}>
              {tabsData[activeIndex].title} Image
            </h2>
            <>{tabsData[activeIndex].image}</>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default LandingPage3;