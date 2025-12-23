import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ScrollingText from "./ScrollingText";
function Home()
{
    return(

    <Container>
      <div>
        <ScrollingText/>
      </div>
      <Row>
        <Col xs={6} md={12}>
          <Image src="/Images/HomePhoto.png" thumbnail />
        </Col>
      </Row>
    </Container>

    );
}
export default Home;