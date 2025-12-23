// // Login.js
// import React, { useState } from 'react';
// import './LoginPage.css'; // Import the CSS file for styling

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Add your login logic here
//     console.log('Username:', username);
//     console.log('Password:', password);
//     // You may want to perform authentication with a backend service here
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form>
//         <label>
//           <span>Username:</span>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           <span>Password:</span>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="button" onClick={handleLogin}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;



// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    // State to manage form data
    const [formData, setFormData] = useState({ });
    
    // Hook for programmatic navigation
    const navigate = useNavigate();

    // Function to handle input changes and update formData
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(values => ({ ...values, [name]: value }));
    };

    // Function to navigate based on user role
    const handleRoleNavigation = (role) => {
        // if (role === 1) {
        //     navigate('/dashboard'); // Navigate to dashboard for role 1
        // } else if (role === 2) {
        //     navigate('/FacultyDashBoard'); // Navigate to FacultyDashboard for role 2
        // } else {
        //     alert('Invalid username or password'); // Display alert for other roles
        // }

    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // let demo = JSON.stringify(formData);
        // console.log(JSON.parse(demo));
        navigate('/Dashboard');

        // try {
            // Send a POST request to the server for authentication
            // const response = await fetch('http://localhost:8080/api/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: demo
            // });

            // Check if the response is successful (HTTP status 200)
    //         if (response.ok) {
    //             // Parse the response as JSON to get the user's role
    //             let role = await response.json();
    //             // Convert role to a number explicitly
    //             role = parseInt(role);
    //             alert(role);
                
    //             // Call the function to navigate based on role
    //             handleRoleNavigation(role);
    //         } else {
    //             throw new Error('Failed to authenticate');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         alert('Failed to authenticate. Please try again.');
    //     }
    };

    // Render the login form
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                {/* Email input */}
                <label>Email:</label>
                <input type="text" name="username" onChange={handleChange} />
                <br />
                {/* Password input */}
                <label>Password:</label>
                <input type="password" name="password" onChange={handleChange} />
                <br />
                {/* Submit button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginPage;
