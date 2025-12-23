

// import React, { useState } from 'react';

// const PagingComponent = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 10; // Replace with the total number of pages

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     // Add your logic to fetch and display data for the selected page
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];

//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(
//         <span
//           key={i}
//           onClick={() => handlePageChange(i)}
//           style={{
//             margin: '0.2em',
//             padding: '0.5em',
//             cursor: 'pointer',
//             border: i === currentPage ? '1px solid #333' : '1px solid #ddd',
//             borderRadius: '4px',
//             backgroundColor: i === currentPage ? '#333' : '#fff',
//             color: i === currentPage ? '#fff' : '#333',
//           }}
//         >
//           {i}
//         </span>
//       );
//     }

//     return pageNumbers;
//   };

//   return (
//     <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
//       {renderPageNumbers()}
//     </div>
//   );
// };

// export default PagingComponent;



// import React, { useState } from 'react';

// const PagingComponent = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 10; // Replace with the total number of pages

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     // Add your logic to fetch and display data for the selected page
//   };

//   const handleBeginClick = () => {
//     handlePageChange(1);
//   };

//   const handlePreviousClick = () => {
//     if (currentPage > 1) {
//       handlePageChange(currentPage - 1);
//     }
//   };

//   const handleNextClick = () => {
//     if (currentPage < totalPages) {
//       handlePageChange(currentPage + 1);
//     }
//   };

//   const handleLastClick = () => {
//     handlePageChange(totalPages);
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];

//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(
//         <span
//           key={i}
//           onClick={() => handlePageChange(i)}
//           style={{
//             margin: '0.2em',
//             padding: '0.5em',
//             cursor: 'pointer',
//             border: i === currentPage ? '1px solid #333' : '1px solid #ddd',
//             borderRadius: '4px',
//             backgroundColor: i === currentPage ? '#333' : '#fff',
//             color: i === currentPage ? '#fff' : '#333',
//           }}
//         >
//           {i}
//         </span>
//       );
//     }

//     return pageNumbers;
//   };

//   return (
//     <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
//       <button onClick={handleBeginClick}>Begin</button>
//       <button onClick={handlePreviousClick}>Previous</button>
//       {renderPageNumbers()}
//       <button onClick={handleNextClick}>Next</button>
//       <button onClick={handleLastClick}>Last</button>
//     </div>
//   );
// };

// export default PagingComponent;


import React, { useState } from 'react';
import './PagingComponent.css'; // Import the external CSS file

const PagingComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Replace with the total number of pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Add your logic to fetch and display data for the selected page
  };

  const handleBeginClick = () => {
    handlePageChange(1);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleLastClick = () => {
    handlePageChange(totalPages);
  };

  return (
    <div className="paging-buttons">
      <button onClick={handleBeginClick}>Begin</button>
      <button onClick={handlePreviousClick}>Previous</button>
      <span>{currentPage}</span>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handleLastClick}>Last</button>
    </div>
  );
};

export default PagingComponent;
