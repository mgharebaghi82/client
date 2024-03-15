import { Col, Row } from "antd";
import validatorMonitor from "./Images/ValidatorMonitor.png";
import relayLaptop from "./Images/RelayLaptop.png";
import { Button, Container, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DNA } from "react-loader-spinner";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function RelayValidator() {
  const naviate = useNavigate();
  const title = "Become A Relay";
  return (
    <div style={{ width: "100%", backgroundColor: "white" }}>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{ backgroundColor: "white" }}
        >
          <Container maxWidth="lg">
            <Row
              style={{
                height: "400px",
                backgroundColor: "gray",
                width: "100%",
              }}
            >
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              >
                <img
                  src={relayLaptop}
                  style={{ maxWidth: "100%%", maxHeight: "100%" }}
                  alt="Become A Relay On Centichain Network"
                />
              </Col>
            </Row>
            <Row>
              <ThemeProvider theme={theme}>
                <Col span={24} style={{ textAlign: "center", color: "black" }}>
                  <Typography variant="h3" fontWeight="bold">
                    Become A Relay
                  </Typography>
                  <Typography>
                    You can become a relay node on the Centichain network and
                    earn rewards. More relay nodes on the Centichain network
                    mean a more secure, faster, and more decentralized network.
                    By becoming a relay node, you will contribute to the
                    improvement of the network.
                  </Typography>
                </Col>
                <Col
                  span={24}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{ width: "250px", height: "40px" }}
                    onClick={() => {
                      window.scroll(0, 0);
                      naviate(`/becomes/Become A Relay`);
                    }}
                  >
                    Read more
                  </Button>
                </Col>
              </ThemeProvider>
            </Row>
          </Container>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{
            minHeight: "600px",
            backgroundColor: "#A67CFF",
            display: "flex",
            justifyContent: "center",
            borderTopLeftRadius: "50px",
          }}
        >
          <Container maxWidth="lg">
            <Row
              style={{
                height: "400px",
                width: "100%",
              }}
            >
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={validatorMonitor}
                  style={{ maxWidth: "100%%", maxHeight: "100%" }}
                  alt="Become A Validator On Centichain Network"
                />
              </Col>
            </Row>
            <Row>
              <ThemeProvider theme={theme}>
                <Col span={24} style={{ textAlign: "center", color: "white" }}>
                  <Typography variant="h3" fontWeight="bold">
                    Become A Validator
                  </Typography>
                  <Typography>
                    You can become a relay node on the Centichain network and
                    earn rewards. More relay nodes on the Centichain network
                    mean a more secure, faster, and more decentralized network.
                    By becoming a relay node, you will contribute to the
                    improvement of the network.
                  </Typography>
                </Col>
                <Col
                  span={24}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{ width: "250px", height: "40px" }}
                  >
                    Read more
                  </Button>
                </Col>
              </ThemeProvider>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default RelayValidator;
