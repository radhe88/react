import { GiLion } from 'react-icons/gi';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import d2 from '../Image.png'
import Nav from 'react-bootstrap/Nav';


import React from 'react'


const Compp2 = () => {
  return (
    <>
      <div className='container'>
        <div className='rt5'>
          {/* <img src="./img/img3.png" alt="" />s */}
          <div className='rbox'>
            <Col md="auto"><i className='img' ><GiLion /></i></Col>
            <Col xs lg="12" className='auto'>
              who we are
            </Col>
            <h3>Nemo enim ipsam voluptatem quia
              voluptas in proident</h3>
            <Row className=''>
              <Col className='ddf'>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">Loooonger NavLink</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-3">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-4">Link</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <div className='bgc'>
            </div>
          </div>
        </div>
      </div>
      <div className='box2'>
        <div className='sec3'>
          <img src={d2} />
        </div>
      </div>

    </>
  )
}

export default Compp2