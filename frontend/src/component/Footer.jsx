import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  const footerSections = [
    {
      title: "Product",
      links: ["Scheduling automation", "Meeting Notetaker", "Payments", "Customizable availability", "Mobile apps", "Browser extensions", "Meeting routing", "Event Types", "Email & website embeds", "Reminders & follow-ups", "Meeting polls", "Analytics", "Admin management"]
    },
    {
      title: "Integrations",
      links: ["Google ecosystem", "Microsoft ecosystem", "Calendars", "Video conferencing", "Payment processors", "Sales & CRM", "Recruiting & ATS", "Email messaging", "Embed Calendly", "Analytics", "API & connectors", "Security & compliance"]
    },
    {
      title: "Calendly",
      links: ["Pricing", "Product overview", "Solutions", "For individuals", "For small businesses", "For large companies", "Compare", "Security", "Sign up for free", "Talk to sales", "Get a demo"]
    },
    {
      title: "Resources",
      links: ["Help center", "Resource center", "Blog", "Customer stories", "Calendly community", "Developer tools", "Release notes"]
    },
    {
      title: "Company",
      links: ["About us", "Leadership", "Careers", "Newsroom", "Become a partner", "Contact us"],
      hasBadge: "Careers"
    }
  ];
function startHandler(){
  navigate('/login');
}
  return (
    <footer className="footer-container">
      {/* Top Section: CTA */}
      <div className="footer-cta-section">
        <h2 className="footer-cta-title">Power up your <br /> scheduling</h2>
        <div className="footer-cta-right">
          <p>Get started in seconds — for free.</p>
          <div className="footer-cta-btns">
            <button className="btn-blue" onClick={startHandler}>Start for free</button>
            <button className="btn-outline">Get a demo</button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Links Grid */}
      <div className="footer-links-grid">
        {footerSections.map((section, idx) => (
          <div key={idx} className="footer-column">
            <h4 className="footer-col-title">{section.title}</h4>
            <ul className="footer-list">
              {section.links.map((link, lIdx) => (
                <li key={lIdx} className="footer-link-item">
                  <a href={`#${link}`}>{link}</a>
                  {section.hasBadge === link && (
                    <span className="career-badge">We're hiring!</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* --- Downloads & Social Section --- */}
<div className="footer-downloads-section">
  <div className="downloads-container">
    <h4 className="downloads-title">Downloads</h4>
    <div className="download-buttons">
      <div className="dl-btn"><span></span> App Store</div>
      <div className="dl-btn"><span className="gplay-icon">▶</span> Google Play</div>
      <div className="dl-btn"><span>🌐</span> Chrome extension</div>
      <div className="dl-btn"><span>🌐</span> Edge extension</div>
      <div className="dl-btn"><span>🦊</span> Firefox extension</div>
      <div className="dl-btn"><span>🧭</span> Safari extension</div>
      <div className="dl-btn"><span>📧</span> Outlook add-in</div>
    </div>
  </div>
  
  
</div>

<hr className="footer-divider" />

{/* --- Bottom Legal Bar --- */}
<div className="footer-bottom-bar">
  <div className="language-selector">
    <span>🌐</span> English <span>⌄</span>
  </div>
  
  <div className="legal-links">
    <a href="#">Privacy Policy</a>
    <a href="#">Legal</a>
    <a href="#">Status</a>
    <a href="#">Cookie Settings</a>
    <a href="#" className="privacy-choices">
      <span className="check-icon"></span> Your Privacy Choices
    </a>
  </div>
  
  <p className="copyright-text">Copyright Calendly 2026</p>
</div>
    </footer>
  );
};

export default Footer;