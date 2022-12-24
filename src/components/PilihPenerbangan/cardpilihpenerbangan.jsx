import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector, connect } from "react-redux";
import { getListAirlines } from "../../actions/airlinesAction";
import { Link, useNavigate } from "react-router-dom";
import { submitForm } from "../../actions/formAction";
import arrowDown from "../../assets/images/arrow-down.png";
import { getListSchedule } from "../../actions/scheduleAction";
import { useState } from "react";
// import airports from "../../list-airport";

function CardPilihPenerbangan() {
  const {
    getListAirlinesResult,
    getListAirlinesLoading,
    getListAirlinesError,
  } = useSelector((state) => state.AirlinesReducer);

  const { getListScheduleResult } = useSelector(
    (state) => state.ScheduleReducer
  );

  const [value, setValue] = useState(null)

  const handleClick = (price) => {
    setValue(price)
  }
  const formData = useSelector((state) => state.formReducer.formData);

  const filteredSchedule = Array.isArray(getListScheduleResult)
    ? getListScheduleResult.filter(
        (schedule) =>
          schedule.Origin_Airport === formData.originAirport &&
          schedule.Destination_Airport === formData.destinationAirport &&
          schedule.flight_Date.slice(0, 10) === formData.date_pergi &&
          schedule.Plane_class === formData.tipe_class
      )
    : [];

  const pricex = filteredSchedule.map((price) => price.Price)

  console.log(pricex);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getListSchedule());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getListAirlines());
  }, [dispatch]);

  useEffect(() => {
    if (value) {
      navigate('/isi-detail', { state: { price: value } });
    }
  }, [value, navigate]);

  return (
    <div>
      <Container>
        <Row className="mt-3">
          {getListScheduleResult ? (
            filteredSchedule.length > 0 ? (
              filteredSchedule.map((airline) => {
                return (
                  <Col md={4} className="mb-3" key={airline.id}>
                    <Card className="rounded-0 penerbangan-card border-0">
                      <Card.Text className="penerbangan-text">
                        <span className="penerbangan-jam">
                          {airline.Departure_Hour.slice(0,5)}&nbsp;&nbsp;
                        </span>
                        <span className="penerbangan-kota">
                          &nbsp;&nbsp;{airline.Origin_Airport}
                        </span>
                      </Card.Text>
                      <Card.Img
                        src={arrowDown}
                        variant="top"
                        style={{ width: "50px" }}
                      />
                      <Card.Text className="penerbangan-text mb-3">
                        <span className="penerbangan-jam">
                          {airline.Arrival_Hour.slice(0,5)}&nbsp;&nbsp;
                        </span>
                        <span className="penerbangan-kota">
                          &nbsp;&nbsp;{airline.Destination_Airport}
                        </span>
                      </Card.Text>
                      <div className="penerbangan-harga">
                        <span
                        >
                          IDR{" "}
                          {airline.Price}
                        </span>
                      </div>
                      {/* <Link to = '/isi-detail'> */}
                        <a
                          className="btn btn-booking rounded-0 mt-4 ms-3"
                          onClick={() => handleClick(airline.Price)}
                        >
                          BOOKING
                        </a>
                      {/* </Link> */}
                    </Card>
                  </Col>
                );
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
          )}
        </Row>
      </Container>
    </div>
  );
}

export default connect()(CardPilihPenerbangan);
