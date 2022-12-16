import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, connect, useDispatch } from "react-redux";
import { getListAirlines } from "../../actions/airlinesAction";
import { postIsiDetail } from "../../actions/formAction";

function FormDetail() {
  const {
    getListAirlinesResult,
    getListAirlinesLoading,
    getListAirlinesError,
  } = useSelector((state) => state.AirlinesReducer);

  const formDetail = useSelector((state) => state.formReducer.formDetail);
  // const { formDetail } = props;
  // const formData = getState().formReducer.formData;
  // render(formData);
  const currentPrice = getListAirlinesResult && getListAirlinesResult.filter((airline) => 
          airline.originAirport === formDetail.originAirport &&
          airline.destinationAirport === formDetail.destinationAirport &&
          airline.flightDate === formDetail.date_pergi
  ).map((airline) => {
    return airline.Price
  })

  const totalPrice = formDetail.tiket * currentPrice

  const [nama, setNama] = useState('')
  const [HP, setHP] = useState('')

  const filteredAirlines = Array.isArray(getListAirlinesResult)
    ? getListAirlinesResult.filter(
        (airline) =>
          airline.originAirport === formDetail.originAirport &&
          airline.destinationAirport === formDetail.destinationAirport &&
          airline.flightDate === formDetail.date_pergi
      )
    : [];

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    // dispatch({
    //   type: 'STORE_FORM_DETAIL',
    //   payload: formDetail,
    // });

    dispatch(getListAirlines());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postIsiDetail({
      nama: nama,
      HP: HP,
      planeClass: formDetail.tipe_class,
      flightDate: formDetail.date_pergi,
      originAirport: formDetail.originAirport,
      destinationAirport: formDetail.destinationAirport,
      totalPassenger: formDetail.tiket,
      price: totalPrice,
      tipe: formDetail.tipe
    }))

    navigate('/sukses')
  }

  // console.log(formDetail);

  return (
    <div>
      <Container className="form-detail mt-3">
        <div className="text-form-detail">
          <h3>Informasi Kontak</h3>
        </div>
        <Row>
          <Col md={7}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <FloatingLabel
                controlId="floatingInput"
                label="Nama Lengkap"
                className="mb-3"
              >
                <Form.Control 
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)} 
                />
              </FloatingLabel>
              <Row>
                <Col md={12}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="No Telepon"
                    className="mb-3"
                  >
                    <Form.Control 
                      type="number" 
                      value={HP}
                      onChange={(e) => setHP(e.target.value)} 
                      />
                  </FloatingLabel>
                </Col>
              </Row>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Lanjutkan
                </button>
            </Form>
          </Col>
          <Col md={5} className="pesanan-anda p-2">
            <div className="text-pesanan-anda text-center">
              <h5>Pesanan Anda</h5>
            </div>
            <hr className="m-0 mb-2" />
              {getListAirlinesResult ? (
                filteredAirlines.length > 0 ? (
                  filteredAirlines.map((airline) => {
                    return (
                      <div className="wrapper-form d-flex">
                        <div className="data">
                          <p>Jumlah Tiket &nbsp;</p>
                          <p>Total Harga</p>
                          <p>Tanggal</p>
                        </div>
                        <div className="value">
                          <p>: {formDetail.tiket}</p>
                          <p>: {`${airline.Price * formDetail.tiket}`}</p>
                          <p>: {airline.flightDate}</p>
                        </div>
                        </div>
                    )
                  })
                ) : (
                  <h1 className="text-center">Data Kosong</h1>
                )
              ) : getListAirlinesLoading ? (
                <h1>Loading</h1>
              ) : (
                <h1>
                  {getListAirlinesError ? getListAirlinesError : "Data Kosong"}
                </h1>
              )
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    formDetail: state.formReducer.formDetail.formData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDetail);
