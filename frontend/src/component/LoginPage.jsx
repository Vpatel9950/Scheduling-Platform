import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'vishaladmin@gmail.com' && password === 'admin123') {
      localStorage.setItem("userEmail","vishaladmin@gmail.com")
      navigate('/admin');
    } else if (email === 'vishaluser@gmail.com' && password === 'user123') {
      localStorage.setItem("userEmail","vishaluser@gmail.com")
      navigate('/user/meeting');
    } else {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div className="login-wrapper">
      {/* Top Chrome Extension Link */}
      <div className="chrome-ext-link">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg" alt="chrome" />
        <span>Get the Chrome extension</span>
        <span className="arrow">→</span>
      </div>

      <div className="login-container">
        <h1 className="login-title">Log in to your account</h1>
        
        <div className="login-card">
          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <input 
                type="password" 
                placeholder="Enter password" 
                className="password-input"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            
            <button type="submit" className="login-submit-btn">Continue</button>
          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="social-logins">
            <button className="social-btn">
              <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="google" />
              Continue with Google
            </button>
            <button className="social-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="microsoft" />
              Continue with Microsoft
            </button>
          </div>
        </div>

        <p className="signup-footer">
          Don't have an account? <a href="/signup">Sign up for free <span>→</span></a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;