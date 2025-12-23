// export default function Home() {
//     return (
//         <div>
//             {/* hero section */}
//             <section className="hero-section">
//                 <p>Welcome to </p>
//                 <h1>SMVITA SITE</h1>

//             </section>
//         </div>
//     )
// }
// ContactUs.js
// import React from 'react';
// import MapComponent from './MapComponent';
// import GetInTouch from './GetInTouch';
// import './ContactUs.css';

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


// const ContactUs = () => {
//   return (
//     <div className="contact-page">
//       <header>
//         <h1>Contact Us</h1>
//       </header>

//       <div className="content-container">
//         <div className="left-section">
//           <MapComponent
//             locations={[
//               { name: 'CDAC Location 1', coordinates: [51.505, -0.09] },
//               { name: 'CDAC Location 2', coordinates: [48.8566, 2.3522] },
//             ]}
//           />
//         </div>

//         <div className="right-section">
//           <GetInTouch />
//         </div>
//       </div>

    
//     </div>
//   );
// };

// export default ContactUs;

// ContactUs.js

import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log('Form data submitted:', formData);
    // Reset form fields after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
