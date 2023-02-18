import { GiLion } from 'react-icons/gi';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React from 'react'
import dog from '../img4.png'
import heart from '../heart.png'


const Comp1 = () => {
  return (
    <div className='container'>
      <div className='rt'>
        {/* <img src="./img/img3.png" alt="" />s */}
        <div className='rbox'>
          <Col md="auto"><i className='img' ><GiLion /></i></Col>
          <Col xs lg="12" className='auto'>
            who we are
          </Col>
          <h3>Nemo enim ipsam voluptatem quia
            voluptas in proident</h3>
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
        </div>
        <div className='box1'>
          <div className='sec2'>
            <img src={dog} />
          </div>
        </div>
      </div >
      <div className='rt1'>
        <Col md="rt"><i className='img2' ><GiLion /></i></Col>
        <Col xs lg="2" className='rt1'>
          our promise to you
        </Col>
      </div>
      <div className='per'>
        <h3>sed perspiciatis omnis iste natus</h3>
      </div>
      <Container>
        <Row>
          <Col>
            <div className='item p-2 col-sm'>
              <div className='client-box card '>
                <div className='client-detail'>
                  <img className='card-img-top client-img' src={heart} alt="" />
                  <div className='client-info'>
                    <h5 className='client-name'>24/7 love & care </h5>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col><div className='item p-2 col-sm'>
            <div className='client-box card '>
              <div className='client-detail'>
                <img className='card-img-top client-img' src={heart} alt="" />
                <div className='client-info'>
                  <h5 className='client-name'>24/7 love & care</h5>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.</p>
                </div>
              </div>
            </div>
          </div></Col>
          <Col>
            <div className='item p-2 col-sm'>
              <div className='client-box card '>
                <div className='client-detail'>
                  <img className='card-img-top client-img' src={heart} alt="" />
                  <div className='client-info'>
                    <h5 className='client-name'>24/7 love & care </h5>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Comp1
