

import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './BatchwisePlacementPage.css'; 
const BatchwisePlacementPage = () => {
  const batchData = [
    { id: 1, name: 'Evengers e-DAC Sep 2020', image: '/Images/BatchwisePlacements/Evengers.png', link: '/CampusLife'  },
    { id: 2, name: 'Comrades PG-DAC Feb 2020', image: '/Images/BatchwisePlacements/Comrades.png', link: '/CampusLife' },
    { id: 3, name: 'Spartan PG-DAC Aug 2019', image: '/Images/BatchwisePlacements/Spartan.png', link: '/CampusLife' },
    { id: 4, name: 'Commanders e-DAC Feb 2019', image: '/Images/BatchwisePlacements/Commanders.png', link: '/CampusLife' },
    { id: 5, name: 'Maverics PG-DAC Aug 2018', image: '/Images/BatchwisePlacements/Maverics.png', link: '/CampusLife' },
    { id: 6, name: 'V PG-DAC Feb 2018', image: '/Images/BatchwisePlacements/V.png', link: '/CampusLife' },
    { id: 7, name: 'Captains PG-DAC Aug 2017', image: '/Images/BatchwisePlacements/Captains.png', link: '/CampusLife' },
    { id: 8, name: 'Celestials PG-DAC Feb 2017', image: '/Images/BatchwisePlacements/Celestials.png', link: '/CampusLife' },
    { id: 9, name: 'Creators PG-DAC Aug 2016', image: '/Images/BatchwisePlacements/Creators.png', link: '/CampusLife' },
  ];

  return (
    <Container>
      <Container>
      <h2 className="mt-4 mb-4">Batchwise Placements</h2>
      <h2 className="mt-4 mb-4">PG-DAC</h2>

      <Row>
        {batchData.map(batch => (
          <Col key={batch.id} lg={4} md={4} sm={4} className="mb-4">
            <Card className="batch-card">
            <a href={batch.link}>
              <Card.Img className="card-image" variant="top" src={batch.image} alt={batch.name} />
              </a>
              <Card.Body>
                <Card.Title>{batch.name}</Card.Title>
                {/* Add the position property if it's part of your data */}
                {/* {batch.position && <Card.Subtitle className="mb-2 text-muted">{batch.position}</Card.Subtitle>} */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
      <Container>
      <h2 className="mt-4 mb-4">Batchwise Placements</h2>
      <h2 className="mt-4 mb-4">PG-DBDAC</h2>

      <Row>
        {batchData.map(batch => (
          <Col key={batch.id} lg={4} md={4} sm={4} className="mb-4">
            <Card className="batch-card">
            <a href={batch.link}>
              <Card.Img className="card-image" variant="top" src={batch.image} alt={batch.name} />
              </a>
              <Card.Body>
                <Card.Title>{batch.name}</Card.Title>
                {/* Add the position property if it's part of your data */}
                {/* {batch.position && <Card.Subtitle className="mb-2 text-muted">{batch.position}</Card.Subtitle>} */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
    </Container>
    
  );
}

export default BatchwisePlacementPage;
