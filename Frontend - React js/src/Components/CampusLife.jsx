

// import React, { useEffect, useState } from 'react';

// const CampusLife = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = () => {
//       fetch('http://localhost:8080/campus-life/getall')
//         .then(response => response.json())
//         .then(result => {
//             console.log(result);
//           setData(result);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Campus Life Data</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Campus Life ID</th>
//               <th>Batch ID</th>
//               <th>Photo</th>
//               <th>Staff ID</th>
//               <th>Video</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr key={item.campusLifeId}>
//                 <td>{item.campusLifeId}</td>
//                 <td>{item.batchId}</td>
//                 <td>{item.photo}</td>
//                 <td>{item.staffId}</td>
//                 <td>{item.video}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default CampusLife;


import React from 'react';
import './CampusLife.css'; // Import your custom CSS file for styling

const CampusLife = () => {
  // Replace the image paths with your actual image paths
  const imagePaths = [
    '/Images/Campus_Life/Soft_Skill2.jpg',
    '/Images/Campus_Life/Soft_Skill.jpg',
    '/Images/Campus_Life/Halloween.jpg',
    '/Images/Campus_Life/Monsoon_Trek.jpg',
    '/Images/Campus_Life/Library.jpg',
    '/Images/Campus_Life/Mock_Interview.jpg',
    '/Images/Campus_Life/Group_Discussion.jpg',
    '/Images/Campus_Life/Library.jpg',
    '/Images/Campus_Life/Guest_Lecture.jpg',
    '/Images/Campus_Life/Lab.jpg',
  ];

  return (
    <div className="image-gallery">
      <h2>Campus Life</h2>
      <div className="image-container">
        {imagePaths.map((path, index) => (
          <div key={index} className="image-item">
            <img src={path} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusLife;
