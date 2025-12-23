

// import React, { useState } from 'react';
// import './GetInTouch.css'; // Import the CSS file

// const GetInTouch = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Simulating sending an email - replace this with actual API call to your server
//     try {
//       const response = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log('Email sent successfully!');
//       } else {
//         console.error('Failed to send email.');
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }

//     // Reset form fields after submission
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="get-in-touch-container">
//       <h1>Get in Touch</h1>
//       <form className="get-in-touch-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             placeholder="Your Name"
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             placeholder="Your Email"
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             placeholder="Your Message"
//           />
//         </div>
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default GetInTouch;




import { useEffect, useState } from "react"
export default function GetInTouch() {

   const[getdetails,setDetails]=useState();
   const[msgBody,setMsgBody]=useState();

   const handleOnchange = (event) => {
    setDetails((eml) => ({ ...eml, [event.target.name]: event.target.value }));
    setMsgBody((msg)=>({...msg,[event.target.name]:event.target.value}));
    console.log(getdetails);
  }
    const sendEmail=(event)=>
    {
      event.preventDefault();
        
    console.log(JSON.stringify(getdetails));

    fetch("http://localhost:8080/sendMail", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(getdetails,{msgBody:msgBody.msgBody})
    })
      .then((data) => {
        console.log(data);
        alert("Inserted");
        // navigate('/home');
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
    
    return (
        <div>
            <h2>Get In Touch</h2>
            <form onSubmit={sendEmail}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Enter your name" require onChange={handleOnchange}/><br />
                

                <label htmlFor="email">Email</label><br />
                <input type="email" name="useremail" placeholder="Enter your email" require onChange={handleOnchange}/><br />
                <br />

                <label htmlFor="query">Query</label><br />
                
                <textarea id="msgBody" name="msgBody" placeholder="Enter your query" required onChange={handleOnchange}></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}