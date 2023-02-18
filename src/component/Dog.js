import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import pup from '../pup.png'
import Button from 'react-bootstrap/Button';


const Dog = () => {
  return (
    <>
      <div className='dg'>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6}>
              <div className='d1'>
                <img src={pup} className='cloud' alt="" />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <h3>Nemo enim ipsam voluptatem quia voluptas in proident</h3>
              <div className="button">
                <Button variant="" className='color' size="lg">
                  MAKE AN APPOINMENT
                </Button>{' '}
              </div>
            </Col>
          </Row>
        </Container>
      </div>


    </>
  )
}

export default Dog