import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import heart from '../heart.png'
import Button from 'react-bootstrap/Button';


const Comp2 = (props) => {
  return (
    <div className='container'>
      <div className='traning-item'>
        <img className='card-img-top1 client-img1' src={heart} alt="" />
        <h3>pet boarding(no)</h3>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.</p>
      </div>
    </div>
  )
}

export default Comp2