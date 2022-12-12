import React from "react";
import { Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

function FormDetail() {
  return (
    <div>
      <Container className="form-detail mt-3">
        <div className="text-form-detail">
          <h3>Informasi Kontak</h3>
        </div>

        <Row>
          <Col md={7}>
            <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="Nama Lengkap"
                className="mb-3"
              >
                <Form.Control type="text" />
              </FloatingLabel>
              <Row>
                <Col md={12}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="No Telepon"
                    className="mb-3"
                  >
                    <Form.Control type="number" />
                  </FloatingLabel>
                </Col>
              </Row>
              <NavLink to = '/sukses'>
                <button className="w-100 btn btn-lg btn-primary">Lanjutkan</button>
              </NavLink>
            </Form>
          </Col>
          <Col md={5} className='pesanan-anda p-2'>
            <div className="text-pesanan-anda text-center">
                <h5>Pesanan Anda</h5>
            </div>
            <hr className="m-0 mb-2"/>
            <div className="wrapper-form d-flex">
              <div className="data">
                <p>Jumlah Tiket &nbsp;</p>
                <p>Total Harga </p>
                <p>Tanggal </p>
              </div>
              <div className="value">
                <p>: 2</p>
                <p>: IDR 1.650.000</p>
                <p>: 24 November 2022</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FormDetail;
