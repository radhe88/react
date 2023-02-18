import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NumberCounter from 'number-counter';
// import CountUp from 'react-countup';

const Adone = () => {
    return (
        <>
            <div className='header1'>
                <Container>
                    <Row>
                        <Col>< div className='containerr' >
                            <div className='title'>Make an Appoinment</div>
                            <form action="">
                                <div className='user-details'>
                                    <div className='input-box'>
                                        <span className='details'></span>
                                        <input type="text" className='cr' placeholder='Enter your name' required />
                                    </div>
                                    <div className='input-box'>
                                        <span className='details'></span>
                                        <input type="text" className='cr' placeholder='Enter your name' required />
                                    </div>
                                    <div className='input-box'>
                                        <span className='details'></span>
                                        <input type="text" className='cr' placeholder='Enter your name' required />
                                    </div>
                                    <div className='input-box'>
                                        <span className='details'></span>
                                        <input type="text" className='cr' placeholder='Enter your name' required />
                                    </div>
                                </div>
                                <label htmlFor=""></label>
                                <textarea className='cr' name="" id="" cols="75" rows="5" placeholder='Tell us about your puppers include his/her name'></textarea>

                                <div className="button4">
                                    <Button variant="" className='color' size="lg">
                                        MAKE AN APPOINMENT
                                    </Button>{' '}
                                </div>
                            </form>
                        </div >

                        </Col>
                        <Col>
                            <div className='cloudr'>
                                <h3>Maxime placeat facere possimus omnis </h3>
                            </div>
                            {/* // number counter for upward count.s */}
                            <NumberCounter end={5700} delay={2} className="add" preFix="" postFix="+" />
                            <div className='spd'>
                                <span>customersw served</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Adone


