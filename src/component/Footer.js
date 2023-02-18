import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className='foot1'>
                        </div>
                        <div className='footp'>
                            <p>This is a blurb about the company sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua. </p>
                        </div>
                        <div className='icon'>
                            <ul>
                                <i><FaFacebookF /></i>
                                <i><FaTwitter /></i>
                                <i><FaInstagram /></i>
                                <i><FaYoutube /></i>
                            </ul>
                        </div>

                    </Col>
                    <Col lg={2}>
                        <div className='f2'>
                            <h3>EXPLORE LINKS</h3>
                        </div>
                        <div className='f3'>
                            <ul>
                                <li><a href=""></a>about</li>
                                <li><a href=""></a>service</li>
                                <li><a href=""></a>specials</li>
                                <li><a href=""></a>estimates</li>
                            </ul>
                        </div>

                    </Col>
                    <Col lg={2}> <div className='f4'>
                        <ul>
                            <li><a href=""></a>review</li>
                            <li><a href=""></a>shop</li>
                            <li><a href=""></a>carees</li>
                            <li><a href=""></a>FAQs</li>
                        </ul>
                    </div></Col>
                    <Col lg={4}>
                        <div className='f2'>
                            <h3>CONTACT</h3>
                        </div>
                        <div>

                        </div>



                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer
// < div className = '' >
{/* <Row xs="auto d-flex" >
                                        <Col>1 of 3</Col>
                                        <Col>2 of 3</Col>
                                        <Col>3 of 3</Col>
                                        <Col>3 of 3</Col>
                                    </Row> */}
                                // </div >