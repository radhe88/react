import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'

const Footerl = () => {
    return (
        <div className='footr'>
            <Container>
                <Row>
                    <Col xl={6} lg={6} md={6} sm={12}>
                        <div className='footls'>
                            <h3>Tagline lorem ipsum dolor sit amet, consectetur adipiscing eiusmod</h3>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12}>
                        <div className='footlr'>
                            <h3> © 2023 Company.<span>Privacy Policy </span> | <span>Terms & Conditions</span></h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footerl