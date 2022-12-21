import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector, connect } from "react-redux";
import { getListAirlines } from "../../actions/airlinesAction";
import airTakeOff from "../../assets/images/air-takeoff.png";
import arrowRight from "../../assets/images/arrow-right.png";

function PenerbanganTujuan(props) {
  const {
    getListAirlinesResult,
    getListAirlinesLoading,
    getListAirlinesError,
  } = useSelector((state) => state.AirlinesReducer);
  const formData = useSelector((state) => state.formReducer.formData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListAirlines());
  }, [dispatch]);

  const date_pergi = formData["date_pergi"];

  return (
    <div>
      <Container className="penerbangan-tujuan mt-4">
        <div className="penerbangan-tujuan-text">
          <p>{props.text}</p>
        </div>
        <Row>
          <Col md={1}>
            <img src={airTakeOff} alt="" className="img-fluid" />
          </Col>
          {getListAirlinesResult ? (
            getListAirlinesResult
              .filter(
                (airline) =>
                  airline.originAirport === formData.originAirport &&
                  airline.destinationAirport === formData.destinationAirport
              )
              .map((airline) => {
                return (
                  <Col md={4} className="mt-2" key={airline.id}>
                    <p className="text-airport">{airline.originAirport}</p>
                    <p className="text-city">{airline.city}</p>
                  </Col>
                );
              })
          ) : getListAirlinesLoading ? (
            <h1>Loading</h1>
          ) : (
            <h1>
              {getListAirlinesError ? getListAirlinesError : "Data Kosong"}
            </h1>
          )}
          <Col md={1}>
            <img src={arrowRight} alt="" className="img-fluid" />
          </Col>
          {getListAirlinesResult ? (
            getListAirlinesResult
              .filter((airline) => 
                  airline.originAirport === formData.originAirport &&
                  airline.destinationAirport === formData.destinationAirport
              )
              .map((airline) => {
                return (
                  <Col md={4} className="mt-2" key={airline.id}>
                    <p className="text-airport">{airline.destinationAirport}</p>
                    <p className="text-city">{airline.city}</p>
                  </Col>
                );
              })
          ) : getListAirlinesLoading ? (
            <h1>Loading</h1>
          ) : (
            <h1>
              {getListAirlinesError ? getListAirlinesError : "Data Kosong"}
            </h1>
          )}
          <Col md={2} className="mt-auto pe-5">
            <p className="ms-3 tanggal">{date_pergi}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default connect()(PenerbanganTujuan);
