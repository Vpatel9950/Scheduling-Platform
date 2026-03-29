import React from 'react';
import './LandingPage4.css';

const LandingPage4 = () => {
  // Integration icons list (Aap inki jagah images ya SVGs use kar sakte hain)
  const integrations = [
    { name: 'Zoom', color: '#2D8CFF' , img: 'https://images.ctfassets.net/k0lk9kiuza3o/64o3ZzxmDZ2RvV36K0PCwc/b8b2993bc4f37beb3eaecdf8b68af6df/Zoom.svg' },
    { name: 'Salesforce', color: '#00A1E0' , img:'https://images.ctfassets.net/k0lk9kiuza3o/6OTuIytCbtNByiPPLwTDLD/9250192af735c5ccf3e6a19334643d11/saleforce.svg' },
    { name: 'Google Calendar', color: '#4285F4' , img:'https://images.ctfassets.net/k0lk9kiuza3o/6W5mnZM4eNVK6Y8cBCnTu5/a0d70a3a38423e2b206e3dbf50503da5/google-calendar.svg' },
    { name: 'Slack', color: '#4A154B' , img : 'https://images.ctfassets.net/k0lk9kiuza3o/4UQZOyPUNAjKf3x7tV7WZh/874072c0fdc4485bf305e1ac5a8a6c26/slack-logo-icon.svg' },
    { name: 'Microsoft Teams', color: '#6264A7' , img : 'https://images.ctfassets.net/k0lk9kiuza3o/2rhQcGrSRD5qeBzfsUresc/d2ed5280c9c0279be9d943c85faf959e/teams.svg'},
    { name: 'Gmail', color: '#EA4335' ,img : 'https://images.ctfassets.net/k0lk9kiuza3o/3x97SWL0ydKgcqT412HGr8/ed9ea1d8dea332dd74b125c89d689288/gmail-icon.svg' },
    { name: 'Outlook', color: '#0078D4' ,img : 'https://images.ctfassets.net/k0lk9kiuza3o/7bQs7qA7sp83HJuE7EUETv/ac34c04b2206d7e049f38f41178ef9b2/outlook.svg' },
    { name: 'Chrome', color: '#4285F4' , img : 'https://images.ctfassets.net/k0lk9kiuza3o/1iXaOfSTG4LH14hl3jhgLV/9c262e7842e1e78a9e595a4477ecde7d/Chrome.svg' },
    { name: 'Webex', color: '#000000' , img : 'https://images.ctfassets.net/k0lk9kiuza3o/4DaLXMiJ2kwAv3qpPblkwG/3e2dcf1bf1a4b80858cd321ad67691b8/webex-logomark-01.svg' },
    { name: 'HubSpot', color: '#FF7A59' , img : 'https://images.ctfassets.net/k0lk9kiuza3o/2APzJ2NNOwzzKC0mZam9mB/3158e0780a9db488ff243f5f08a48cef/hubspot.svg' },
    { name: 'Zapier', color: '#FF4F00' , img : 'https://images.ctfassets.net/k0lk9kiuza3o/42r0sVudnFRBVKsZH5MKRv/e71cb6443dc2ffe75a4f990ce0af5ead/zapier-icon.svg' },
    { name: 'Greenhouse', color: '#112F41' , img : 'https://images.ctfassets.net/k0lk9kiuza3o/3L8hrM2H4gJLD7s2UFhhxE/75734eb6c87362ba5386ef33c4760d3d/Logomark.svg' },
    { name: 'LinkedIn', color: '#0077B5' , img : 'https://images.ctfassets.net/k0lk9kiuza3o/nirfrq5tMDzXegZJxZHYr/626c4f558a197d841e926a6f53603aa3/linkedin.svg' },
    { name: 'Stripe', color: '#635BFF'  , img : 'https://images.ctfassets.net/k0lk9kiuza3o/68QvXpmECJZjUTvmk1Qbxk/7c2198e75bf4761ccf6677fdb960a14d/stripe-logo.svg'},
    { name: 'Intercom', color: '#1F8DED'  , img : 'https://images.ctfassets.net/k0lk9kiuza3o/5iPdwT125pfQPNafr27mny/e866d175ee0169c23f90a3e438b65b21/intercom.svg'},
    { name: 'ActiveCampaign', color: '#356AE6'  , img : 'https://images.ctfassets.net/k0lk9kiuza3o/5f4urpcDfUzxVFsvqHeuC/24ce8cc6a9e5269f5f749e4de21ad03b/activecampaign-logo-icon.svg' },
    { name: 'PayPal', color: '#003087' , img : 'https://images.ctfassets.net/k0lk9kiuza3o/263kzYvoG2EGkeRpsrnkrA/90dd1ddda05b6fe9a4e5010f99308c0d/paypal-icon.svg'}
  ];

  return (
    <section className="lp4-section">
      <div className="lp4-container">
        
        {/* Header Section */}
        <div className="lp4-header">
          <h2 className="lp4-title">Connect Calendly to the tools you already use</h2>
          <div className="lp4-header-right">
            <p className="lp4-header-text">Boost productivity with 100+ integrations</p>
            <a href="#" className="lp4-link">View all integrations <span>→</span></a>
          </div>
        </div>

        {/* Icons Grid */}
        <div className="lp4-icons-grid">
          {integrations.map((item, index) => (
            <div key={index} className="lp4-icon-card">
              {/* Placeholder for Icons - Real project me yahan <img> aayegi */}
              <div className="lp4-icon-placeholder" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Large Cards */}
        <div className="lp4-suite-grid">
          
          {/* Google Suite Card */}
          <div className="lp4-suite-card">
            <div className="lp4-suite-header">
              <div className="lp4-suite-icon google">G</div>
              <span className="lp4-arrow">↗</span>
            </div>
            <h3 className="lp4-suite-title">Google suite</h3>
            <p className="lp4-suite-desc">
              Get your job done faster by connecting Calendly to Google Calendar, Meet, Analytics, and more.
            </p>
          </div>

          {/* Microsoft Suite Card */}
          <div className="lp4-suite-card">
            <div className="lp4-suite-header">
              <div className="lp4-suite-icon microsoft">M</div>
              <span className="lp4-arrow">↗</span>
            </div>
            <h3 className="lp4-suite-title">Microsoft suite</h3>
            <p className="lp4-suite-desc">
              Make your day easier with Calendly integrations for Microsoft Teams, Outlook, Azure SSO, and more.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LandingPage4;