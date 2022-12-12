import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import airTakeOff from '../../assets/images/air-takeoff.png'
import arrowRight from '../../assets/images/arrow-right.png'

function PenerbanganTujuan(props) {
  return (
    <div>
        <Container className='penerbangan-tujuan mt-4'>
            <div className="penerbangan-tujuan-text">
                <p>{props.text}</p>
            </div>
            <Row>
                <Col md={1}>
                    <img src={airTakeOff} alt="" className='img-fluid'/>
                </Col>
                <Col md={4} className='mt-2'>
                    <p className='text-airport'>BEKASI</p>
                    <p className='text-city'>Tambun Selatan (TSN)</p>
                </Col>
                <Col md={1}>
                    <img src={arrowRight} alt="" className='img-fluid'/>
                </Col>
                <Col md={4} className='mt-2'>
                    <p className='text-airport'>JAKARTA</p>
                    <p className='text-city'>Bandara International Soekarno Hatta (GBK)</p>
                </Col>
                <Col md={2} className='mt-auto pe-5'>
                    <p className='ms-3 tanggal'>24 November 2022</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PenerbanganTujuan