

import React, { useEffect, useState } from 'react';

const FollowUp = () => {
  const [follow, setFollow] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:8080/api/FollowUp/ListAll')
        .then(response => response.json())
        .then(result => {
            console.log(result);
          setFollow(result);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Follow Up Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead>
          <tr>
                    <th>Follow Up Id</th>
                    <th>Enquiry Id</th>
                    <th>Date</th>
                    <th>No. of Attempts</th>
                    <th>Staff Id</th>

                </tr>
          </thead>
          <tbody>
          {follow.map(fol =>(
                        <tr key={fol.followUp_id}>
                            <td>{fol.followUp_id}</td>
                            <td>{fol.enquiry_id}</td>
                            <td>{fol.followUp_date}</td>
                            <td>{fol.attempts}</td>
                            <td>{fol.staff_id}</td>

                            {/* <td> <a href={'/emp/' + emp.id}>display</a></td>
                            <td> <a href={'/empup/' + emp.id}>Edit</a></td>
                            <td> <a href={'/empdel/' + emp.id}>delete</a></td> */}
                        </tr>
                     ))
            }
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FollowUp;
