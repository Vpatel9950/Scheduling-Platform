import React, { useState, useEffect } from "react";
import "./PublicBookingPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PublicBookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    notes: "",
  });

  const [timeSlots, setTimeSlots] = useState([]);

  const navigate = useNavigate();

  const url = import.meta.env.VITE_BACKEND_URL;
  const id = localStorage.getItem("eventId");

  

  // normalize function (important 🔥)
  // FETCH SLOTS
 useEffect(() => {
  const fetchSlots = async () => {
    try {
      const res = await axios.get(
        `${url}/api/bookings/slots?date=2026-04-01&eventId=${id}`
      );

      console.log("FULL RESPONSE:", res.data);

      setTimeSlots(res.data || []);

      if (res.data.availableSlots) {
        setTimeSlots(res.data);
      }

    } catch (err) {
      console.log("Slot Fetch Error:", err);
    }
  };

  if (id) fetchSlots();
}, [id, selectedDate, url]);

  // BOOKING API
  const handleBooking = async (e) => {
    e.preventDefault();

    setLoading(true); // 🔥 loading ON

    try {
      await axios.post(`${url}/api/bookings`, {
        name: formData.name,
        email: formData.email,
        date: selectedDate,
        time: selectedSlot,
        eventId: id
      });

      setStep(3);
    } catch (err) {
      console.log("Booking Error:", err);
      alert("Booking failed!");
    } finally {
      setLoading(false); // 🔥 loading OFF
    }
  };

  function handleClick() {
    navigate("/user/meeting");
  }

  return (
    <div className="booking-page-container">
      <div className="booking-card">

        {/* LEFT SIDE */}
        {step < 3 && (
          <div className="event-info-sidebar">
            <p className="user-label">Vishal User</p>
            <h2>30 Minute Meeting</h2>
            <p className="duration">🕒 30 min</p>

            {selectedSlot && (
              <p className="details">
                📅 {selectedSlot}, {selectedDate}
              </p>
            )}

            <button className="confirm-btn" onClick={handleClick}>
              Your Meetings
            </button>
          </div>
        )}

        {/* MAIN CONTENT */}
        <div className="booking-main-content">

          {/* STEP 1 */}
          {step === 1 && (
            <div className="date-time-picker">
              <h3>Select a Date & Time</h3>

              <input
                type="date"
                value={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                  setSelectedSlot(null);
                }}
                min={new Date().toISOString().split("T")[0]}
              />

              <div className="slots-grid">
                {timeSlots.map((slot) => (
                  <button className="slot-btn"
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <button
                className="confirm-btn"
                disabled={!selectedSlot}
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <form className="booking-form" onSubmit={handleBooking}>
              <h3>Enter Details</h3>

              <input
                type="text"
                placeholder="Full Name"
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <textarea
                placeholder="Notes"
                rows="4"
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
              />

              <div className="form-actions">
                <button
                  type="button"
                  className="back-btn"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="confirm-btn"
                  disabled={loading}
                >
                  {loading ? "Scheduling..." : "Schedule Event"}
                </button>
              </div>
            </form>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="confirmation-view">
              <div className="success-icon">✅</div>
              <h1>You are scheduled</h1>

              <div className="conf-details">
                <strong>{formData.name}</strong>
                <p>30 Minute Meeting</p>
                <p>
                  📅 {selectedSlot}, {selectedDate}
                </p>

                <button className="back-btn" onClick={handleClick}>
                  Back
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PublicBookingPage;