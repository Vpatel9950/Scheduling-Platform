import React, { useEffect, useState } from 'react';
import './MeetingsPage.css';
import {  useParams } from 'react-router-dom';
import axios from 'axios';

const MeetingsPage = () => {
  const [filter, setFilter] = useState('upcoming');
  const { id } = useParams();
  const [meetings, setMeetings] = useState([]);

  // ✅ URL ko theek se define kiya (Vite ke hisab se)
  const url = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api";

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        // ✅ Correct way to use template literals with backticks
        const res = await axios.get(`${url}/meetings/${id}`); 
        
        // Backend se data check karke set karein
        if (res.data) {
          setMeetings(res.data);
        }
      } catch (error) {
        console.error("Meetings fetch karne mein error hai, bhai:", error);
      }
    };

    if (id) {
      fetchMeetings();
    }
  }, [id, url]); // dependency mein url bhi daal do safety ke liye

  const cancelMeeting = async (meetingId) => {
    if (window.confirm("Bhai, meeting sach mein cancel karni hai?")) {
      try {
        // Backend par bhi delete request bhejni padegi
        // await axios.delete(`${url}/cancel/${meetingId}`);
        setMeetings(meetings.filter(m => m.id !== meetingId));
      } catch (error) {
        alert("Cancel nahi ho payi meeting!");
        console.log(error);
      }
    }
  };


  return (
    <div className="meetings-container">
      <div className="dashboard-card">
        <div className="meetings-header">
          <div className="header-left">
            <h1>Meetings</h1>
            <p className="subtitle">View and manage your scheduled sessions</p>
          </div>
          
          <div className="filter-tabs">
            <button 
              className={filter === 'upcoming' ? 'active' : ''} 
              onClick={() => setFilter('upcoming')}
            >
              Upcoming
            </button>
            <button 
              className={filter === 'past' ? 'active' : ''} 
              onClick={() => setFilter('past')}
            >
              Past
            </button>
          </div>
        </div>

        <div className="meetings-list">
          {/* Filter safety: check if meetings is an array */}
          {Array.isArray(meetings) && meetings.filter(m => m.status === filter).map(meeting => (
            <div key={meeting.id || meeting._id} className="meeting-item">
              
              <div className="m-date">
                <strong>{meeting.date}</strong>
                <span>{meeting.time}</span>
              </div>

              <div className="m-info">
                <h3>{meeting.invitee || meeting.name}</h3>
                <p>{meeting.email}</p>
                <div className="meeting-type-tag">30 Minute Meeting</div>
              </div>

              <div className="m-actions">
                {filter === 'upcoming' && (
                  <button className="cancel-btn" onClick={() => cancelMeeting(meeting.id || meeting._id)}>
                    Cancel
                  </button>
                )}
                <button className="details-btn">View Details</button>
              </div>

            </div>
          ))}

          {meetings.filter(m => m.status === filter).length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">📂</div>
              <p>No {filter} meetings found.</p>
            </div>
          )}
        </div>
        
        <div className='book-container' style={{marginTop: '40px', textAlign: 'center'}}>
        </div>
      </div>
    </div>
  );
};

export default MeetingsPage;