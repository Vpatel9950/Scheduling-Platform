import React, { useState } from "react";
import axios from "axios";
import './NewEvent.css'
const NewEventType = () => {
    const [generatedUrl, setGeneratedUrl] = useState("");
    const [formData, setFormData] = useState({
    title: "",
    duration: "",
    slug: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const url = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${url}/api/events`, formData);
      console.log("FULL RESPONSE:", res);
      console.log("DATA:", res.data);
      console.log("URL:", res.data.url);
        const id = res.data.id;
        const finalUrl = `${window.location.origin}/user-dashboard/${formData.type}${formData.slug}`;
    localStorage.setItem("eventId", id);
      console.log("FINAL URL:", finalUrl);
      setGeneratedUrl(finalUrl);
    } catch (error) {
      console.log("Something went wrong ");
      console.log(error);
    }
  };

  const copyToClipboard = () => {
  navigator.clipboard.writeText(generatedUrl);
  alert("Copied!");
};
  return (
    <div className="form-container">
      <h2>Create New Event Type</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={formData.duration}
          onChange={handleChange}
        />

        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          onChange={handleChange}
        />

        <input
          type="text"
          name="type"
          placeholder="Type"
          value={formData.type}
          onChange={handleChange}
        />

        <button type="submit">Save Event</button>

        {generatedUrl && (
  <div className="url-box">
    <p>Your Booking Link:</p>

    <div className="url-copy">
      <input type="text" value={generatedUrl} readOnly />
      <button onClick={copyToClipboard}>Copy</button>
    </div>
  </div>
)}
      </form>
    </div>
  );
};

export default NewEventType;
