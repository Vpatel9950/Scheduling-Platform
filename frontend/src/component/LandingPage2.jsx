import React from 'react';
import './LandingPage2.css';

const LandingPage2 = () => {

    const logos = [
    { name: 'zendesk', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#0b3558"><path d="M22 2L12 12L2 2H22ZM2 22L12 12L22 22H2Z" /></svg> },
    { name: 'Dropbox', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#0b3558"><path d="M12 2L2 8L12 14L22 8L12 2ZM2 16L12 22L22 16L12 10L2 16Z" /></svg> },
    { name: 'GONG', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#0b3558"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" /></svg> },
    { name: 'Carnival', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#0b3558"><path d="M22 20H2L10 4H14L22 20Z" /></svg> },
    { name: 'INDIANA UNIVERSITY', icon: <svg width="20" height="24" viewBox="0 0 24 24" fill="#0b3558"><path d="M10 2H14V22H10V2ZM4 8H8V22H4V8ZM16 8H20V22H16V8Z" /></svg> },
    { name: 'DOORDASH', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#0b3558"><path d="M20 12C20 16.418 16.418 20 12 20C7.582 20 4 16.418 4 12H8C8 14.209 9.791 16 12 16C14.209 16 16 14.209 16 12H20Z" /><path d="M12 4C16.418 4 20 7.582 20 12H16C16 9.791 14.209 8 12 8C9.791 8 8 9.791 8 12H4C4 7.582 7.582 4 12 4Z" /></svg> },
    { name: 'lyft', isText: true },
    { name: 'COMPASS', isText: true },
    { name: "L'Oreal", isText: true },
  ];
  return (
    <section className="trusted-section">
      <div className="trusted-container">
        
        {/* Trusted By Text */}
        <p className="trusted-text">
          Trusted by more than <strong>100,000</strong> of the world’s leading organizations
        </p>

        {/* Logos Section */}
           <div className="logos-wrapper">
         {/* Logos ko do baar render kar rahe hain (...) duplicate karke */}
        <div className="logos-grid">
       {[...logos, ...logos].map((logo, index) => (
           <div className="logo-item" key={index} style={logo.name === 'INDIANA UNIVERSITY' ? {fontFamily: 'serif'} : {}}>
            {logo.icon && logo.icon}
            <span style={logo.isText ? {fontSize: '1.5rem', letterSpacing: '-1px'} : {}}>
              {logo.name}
            </span>
          </div>
        ))}
         </div>
       </div>


        {/* Text and CTA Section */}
        <div className="main-content">
          <h2 className="main-heading">
            Calendly makes<br />scheduling simple
          </h2>
          <p className="sub-heading">
            Calendly’s easy enough for individual users, and powerful enough to meet the needs of enterprise organizations — including 86% of the Fortune 500 companies.
          </p>
          <button className="signup-btn">
            Sign up for free
          </button>
        </div>

      </div>
    </section>
  );
};

export default LandingPage2;

