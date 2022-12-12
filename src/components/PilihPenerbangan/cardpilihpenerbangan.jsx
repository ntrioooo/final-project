import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector, connect } from "react-redux";
import { getListAirlines } from "../../actions/airlinesAction";
import arrowDown from "../../assets/images/arrow-down.png";
// import airports from "../../list-airport";

function CardPilihPenerbangan() {
  const {
    getListAirlinesResult,
    getListAirlinesLoading,
    getListAirlinesError,
  } = useSelector((state) => state.AirlinesReducer);

  const formData = useSelector((state) => state.formReducer.formData);

  // Check if getListAirlinesResult is an array, and filter it accordingly
  const filteredAirlines = Array.isArray(getListAirlinesResult)
    ? getListAirlinesResult.filter(
        (airline) =>
          airline.originAirport === formData.originAirport &&
          airline.destinationAirport === formData.destinationAirport &&
          airline.flightDate === formData.date_pergi
      )
    : [];

  // Check if getListAirlinesResult exists, and render the mapped elements or "Data Kosong" accordingly

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListAirlines());
  }, [dispatch]);

  console.log(formData);

  return (
    <div>
      <Container>
        Check redux data
        <div>
          <ul>
            {Object.entries(formData).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
        <Row className="mt-3">
          {getListAirlinesResult ? (
            filteredAirlines.length > 0 ? (
              filteredAirlines.map((airline) => {
                return (
                  <Col md={4} className="mb-3" key={airline.id}>
                    <Card className="rounded-0 penerbangan-card border-0">
                      <Card.Text className="penerbangan-text">
                        <span className="penerbangan-jam">
                          {airline.depatureHour}&nbsp;&nbsp;
                        </span>
                        <span className="penerbangan-kota">
                          &nbsp;&nbsp;{airline.originAirport}
                        </span>
                      </Card.Text>
                      <Card.Img
                        src={arrowDown}
                        variant="top"
                        style={{ width: "50px" }}
                      />
                      <Card.Text className="penerbangan-text mb-3">
                        <span className="penerbangan-jam">
                          {airline.ArrivalHour}&nbsp;&nbsp;
                        </span>
                        <span className="penerbangan-kota">
                          &nbsp;&nbsp;{airline.destinationAirport}
                        </span>
                      </Card.Text>
                      <div className="penerbangan-harga">
                        <span>
                          IDR{" "}
                          {airline.Price.toLocaleString().replaceAll(",", ".")}
                        </span>
                      </div>
                      <a
                        href="/pilih-penerbangan/isi-detail"
                        className="btn btn-booking rounded-0 mt-4"
                      >
                        BOOKING
                      </a>
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

          {/* Old Method */}
          {/* {getListAirlinesResult ? (
            getListAirlinesResult
              .filter(
                (airline) =>
                  airline.originAirport === formData.originAirport &&
                  airline.destinationAirport === formData.destinationAirport &&
                  airline.flightDate === formData.date_pergi
              )
              .map((airline) => {
                return (
                  <Col md={4} className="mb-3" key={airline.id}>
                    <Card className="rounded-0 penerbangan-card border-0">
                      <Card.Text className="penerbangan-text">
                        <span className="penerbangan-jam">
                          {airline.depatureHour}&nbsp;&nbsp;
                        </span>
                        <span className="penerbangan-kota">
                          &nbsp;&nbsp;{airline.originAirport}
                        </span>
                      </Card.Text>
                      <Card.Img
                        src={arrowDown}
                        variant="top"
                        style={{ width: "50px" }}
                      />
                      <Card.Text className="penerbangan-text mb-3">
                        <span className="penerbangan-jam">
                          {airline.ArrivalHour}&nbsp;&nbsp;
                        </span>
                        <span className="penerbangan-kota">
                          &nbsp;&nbsp;{airline.destinationAirport}
                        </span>
                      </Card.Text>
                      <div className="penerbangan-harga">
                        <span>
                          IDR{" "}
                          {airline.Price.toLocaleString().replaceAll(",", ".")}
                        </span>
                      </div>
                      <a
                        href="/pilih-penerbangan/isi-detail"
                        className="btn btn-booking rounded-0 mt-4"
                      >
                        BOOKING
                      </a>
                    </Card>
                  </Col>
                );
              })
          ) : getListAirlinesLoading ? (
            <h1>Loading</h1>
          ) : (
            <h1>
              {getListAirlinesError ? getListAirlinesError : "Data Kosong"}
            </h1>
          )} */}
        </Row>
      </Container>
    </div>
  );
}

export default connect()(CardPilihPenerbangan);
