import React, { useState, useEffect } from 'react';
import './Landing.css';

const Landing = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);

  // 4 second ka auto-slider logic smooth transitions ke liye
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => {
        setPrevSlide(current);
        return current === 0 ? 1 : 0;
      });
    }, 4000); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="hero-section">
      {/* --- LAYER 1: Abstract Background Shapes (Naya feature: Rotation) --- */}
      <div className="bg-shape-blue"></div>
      <div className="bg-shape-purple"></div>

      {/* --- LAYER 2: Frosted Glass Shadow Pane (Depth create karne ke liye) --- */}
      <div className="glass-shadow-pane"></div>

      {/* --- LAYER 3: Main Content (Container with z-index) --- */}
      <div className="hero-container">
        
        {/* Left Section: Text Content & Auth Buttons */}
        <div className="hero-content">
          <h1 className="hero-title">
            Easy<br />scheduling<br />ahead
          </h1>
          <p className="hero-subtitle">
            Join 20 million professionals who easily book meetings with the #1 scheduling tool.
          </p>
          
          <div className="oauth-buttons">
            <button className="auth-btn google">
              <div className="icon-wrapper">
                {/* Google SVG Logo Approximation */}
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              Sign up with Google
            </button>

            <button className="auth-btn microsoft">
              <div className="icon-wrapper">
                {/* Microsoft SVG Logo Approximation */}
                <svg width="20" height="20" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="9" height="9" fill="#f25022"/>
                  <rect x="11" y="1" width="9" height="9" fill="#7fba00"/>
                  <rect x="1" y="11" width="9" height="9" fill="#00a4ef"/>
                  <rect x="11" y="11" width="9" height="9" fill="#ffb900"/>
                </svg>
              </div>
              Sign up with Microsoft
            </button>
          </div>

          <div className="divider">OR</div>
          <div className="signup-link-wrapper">
            <a href="#" className="signup-link">Sign up free with email.</a> No credit card required
          </div>
        </div>

        {/* Right Section: Auto-Sliding Visuals (With slide transition logic) */}
        <div className="hero-visual">
          <div className="workflow-mockup">
            
            {/* --- SLIDE 0: Workflow Cards --- */}
            <div className={`mockup-slide ${activeSlide === 0 ? 'active' : prevSlide === 0 ? 'exit' : ''}`}>
              <h2 className="mockup-title">Reduce no-shows and stay on track</h2>
              <div className="cards-container">
                {/* Card 1: Text Reminder Approximation */}
                <div className="workflow-card">
                  <span className="badge">Workflow</span>
                  <div className="card-icon">
                    <div className="relative">
                       {/* Phone Icon Approximation */}
                       <svg width="28" height="40" viewBox="0 0 24 36" fill="#006bff" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="36" rx="4" fill="#006bff"/><rect x="4" y="4" width="16" height="24" rx="1" fill="white"/></svg>
                       {/* Clock Badge Approximation */}
                       <div className="absolute -top-2 -right-3 bg-[#10b981] rounded-full w-6 h-6 flex items-center justify-center border-2 border-white"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                    </div>
                  </div>
                  <h3 className="card-title">Send text reminder</h3>
                  <div className="action-box">24 hours before event starts</div>
                  <div className="dotted-line"></div>
                  <div className="result-box"><svg width="16" height="16" viewBox="0 0 24 24" fill="#006bff"><rect x="5" y="2" width="14" height="20" rx="2" fill="#006bff"/><rect x="8" y="6" width="8" height="12" fill="white"/></svg> Send text to invitees</div>
                </div>

                {/* Card 2: Follow-up Email Approximation */}
                <div className="workflow-card">
                  <span className="badge">Workflow</span>
                  <div className="card-icon">
                    <div className="relative">
                       {/* Envelope Icon Approximation */}
                       <svg width="40" height="28" viewBox="0 0 40 28" fill="none" stroke="#006bff" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="36" height="24" rx="2" fill="white" stroke="#006bff" strokeWidth="2"/><path d="M2 6L20 16L38 6" stroke="#006bff" strokeWidth="2"/></svg>
                       {/* Follow-up Badge Approximation */}
                       <div className="absolute -top-3 -right-2 bg-[#a855f7] rounded-full w-6 h-6 flex items-center justify-center border-2 border-white"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg></div>
                    </div>
                  </div>
                  <h3 className="card-title">Send follow-up email</h3>
                  <div className="action-box">2 hours after event ends</div>
                  <div className="dotted-line"></div>
                  <div className="result-box"><svg width="16" height="12" viewBox="0 0 24 18" fill="none" stroke="#006bff" strokeWidth="2"><rect x="2" y="2" width="20" height="14" rx="2"/><path d="M2 4L12 10L22 4"/></svg> Send email to invitees</div>
                </div>
              </div>
            </div>

            {/* --- SLIDE 1: Calendar Booking UI --- */}
            <div className={`mockup-slide ${activeSlide === 1 ? 'active' : prevSlide === 1 ? 'exit' : ''}`}>
              <h2 className="mockup-title">Share your booking page</h2>
              <div className="calendar-ui">
                {/* Left Column (Approximation) */}
                <div className="cal-col-left">
                  <div className="acme-logo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#006bff"><path d="M4 4h16v16H4z" rx="4"/></svg>
                    ACME Inc.
                  </div>
                  <div className="avatar-img">
                    <img src="https://ui-avatars.com/api/?name=Fatima+Sy&background=006bff&color=fff" alt="Fatima" width="100%" height="100%"/>
                  </div>
                  <div className="rep-name">Fatima Sy</div>
                  <div className="meeting-name">Client Check-in</div>
                  <div className="meeting-meta">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 30 min
                  </div>
                  <div className="meeting-meta" style={{marginBottom: '1.5rem'}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg> Zoom
                  </div>
                  <div className="skeleton-line" style={{width: '90%'}}></div>
                  <div className="skeleton-line" style={{width: '75%'}}></div>
                  <div className="skeleton-line" style={{width: '50%'}}></div>
                </div>

                {/* Middle Column (Approximation) */}
                <div className="cal-col-mid">
                  <div className="cal-subtitle">Select a Date & Time</div>
                  <div className="month-nav">
                    <div style={{color: '#9ca3af', cursor:'pointer'}}>&lt;</div>
                    <div>July 2024</div>
                    <div className="nav-arrow">&gt;</div>
                  </div>
                  
                  <div className="cal-grid">
                    <div className="day-name">SUN</div><div className="day-name">MON</div><div className="day-name">TUE</div><div className="day-name">WED</div><div className="day-name">THU</div><div className="day-name">FRI</div><div className="day-name">SAT</div>
                    <div className="date-num">30</div><div className="date-num">1</div><div className="date-num">2</div><div className="date-num">3</div><div className="date-num">4</div><div className="date-num">5</div><div className="date-num">6</div>
                    <div className="date-num">7</div><div className="date-num">8</div><div className="date-num">9</div><div className="date-num">10</div><div className="date-num">11</div><div className="date-num">12</div><div className="date-num">13</div>
                    <div className="date-num">14</div><div className="date-num">15</div><div className="date-num active-light">16</div><div className="date-num active-light">17</div><div className="date-num">18</div><div className="date-num active-light">19</div><div className="date-num">20</div>
                    <div className="date-num">21</div><div className="date-num active-dark">22</div><div className="date-num active-light">23</div><div className="date-num active-light">24</div><div className="date-num active-light">25</div><div className="date-num">26</div><div className="date-num">27</div>
                    <div className="date-num">28</div><div className="date-num">29</div><div className="date-num active-light">30</div><div className="date-num active-light">31</div><div className="date-num">1</div><div className="date-num">2</div><div className="date-num">3</div>
                  </div>
                  
                  <div className="timezone-info">🌎 Eastern time - US & Canada ▼</div>
                </div>

                {/* Right Column (Approximation) */}
                <div className="cal-col-right">
                  <div className="selected-date-text">Monday, July 22</div>
                  <div className="time-btn">10:00am</div>
                  
                  <div className="time-row">
                    <button className="time-btn-dark">11:00am</button>
                    <button className="confirm-btn">Confirm</button>
                    {/* Fake Mouse Cursor pointer approximation */}
                    <svg className="mouse-cursor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M5.5 2.5L11.5 19.5L14 13L20 10.5L5.5 2.5Z" fill="#1e293b" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <div className="time-btn">1:00pm</div>
                  <div className="time-btn">2:30pm</div>
                  <div className="time-btn">4:00pm</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default Landing;