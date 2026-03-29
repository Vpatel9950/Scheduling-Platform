import React, { useState } from 'react';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('events'); // 'events' or 'availability'
  const navigate = useNavigate();
  // --- Event Types State ---
//   const [eventTypes, setEventTypes] = useState([
//     { id: 1, name: '15 Min Meeting', duration: 15, slug: '15-min', active: true },
//     { id: 2, name: '30 Min Strategy', duration: 30, slug: 'strategy', active: true }
//   ]);

  // --- Availability State ---
  const [availability, setAvailability] = useState({
    timezone: 'Asia/Kolkata',
    days: {
      Monday: { active: true, slots: [{ start: '09:00', end: '17:00' }] },
      Tuesday: { active: true, slots: [{ start: '09:00', end: '17:00' }] },
      Wednesday: { active: true, slots: [{ start: '09:00', end: '17:00' }] },
      Thursday: { active: true, slots: [{ start: '09:00', end: '17:00' }] },
      Friday: { active: true, slots: [{ start: '09:00', end: '17:00' }] },
      Saturday: { active: false, slots: [] },
      Sunday: { active: false, slots: [] },
    }
  });

  function NewHandler(){
    navigate('/make-event')
  }
  return (
    <div className="admin-wrapper">
      <div className="admin-container">
        {/* Sidebar/Top Nav */}
        <div className="admin-nav">
          <button 
            className={`nav-btn ${activeSection === 'events' ? 'active' : ''}`}
            onClick={() => setActiveSection('events')}
          >
            Event Types
          </button>
          <button 
            className={`nav-btn ${activeSection === 'availability' ? 'active' : ''}`}
            onClick={() => setActiveSection('availability')}
          >
            Availability
          </button>
        </div>

        <div className="admin-content">
          {activeSection === 'events' ? (
            <div className="section-card">
              <div className="section-header">
                <h2>Event Types</h2>
                <button className="add-btn" onClick={NewHandler}>+ New Event Type</button>
              </div>
              <div className="event-list">
                {/* {eventTypes.map(event => (
                  <div key={event.id} className="event-item">
                    <div className="event-info">
                      <strong>{event.name}</strong>
                      <span>{event.duration} mins | /{event.slug}</span>
                    </div>
                    <div className="event-actions">
                      <button className="edit-link">Edit</button>
                      <button className="delete-link">Delete</button>
                      <button className="copy-link">Copy Link</button>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          ) : (
            <div className="section-card">
              <div className="section-header">
                <h2>Set your availability</h2>
                <select 
                  className="tz-select" 
                  value={availability.timezone}
                  onChange={(e) => setAvailability({...availability, timezone: e.target.value})}
                >
                  <option value="Asia/Kolkata">India (IST)</option>
                  <option value="UTC">UTC</option>
                </select>
              </div>
              
              <div className="availability-list">
                {Object.keys(availability.days).map(day => (
                  <div key={day} className="day-row">
                    <div className="day-label">
                      <input 
                        type="checkbox" 
                        checked={availability.days[day].active}
                        onChange={() => {}} // Handle toggle logic
                      />
                      <span>{day}</span>
                    </div>
                    <div className="time-slots">
                      {availability.days[day].active ? (
                        <div className="slot-inputs">
                          <input type="time" defaultValue="09:00" />
                          <span>-</span>
                          <input type="time" defaultValue="17:00" />
                        </div>
                      ) : (
                        <span className="unavailable">Unavailable</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <button className="save-btn">Save Changes</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;