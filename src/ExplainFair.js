import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import oip from "./Images/_a2bc4fee-46e4-43cd-bf87-a9f4d848cf88.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function ExplainFair() {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        float: "left",
        padding: "25px",
        backgroundColor: "#fcfef9",
      }}
      data-aos="fade-left"
    >
      <Container maxWidth="lg">
        <Row>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h5"
                style={{
                  marginTop: "25px",
                  marginBottom: "25px",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="h3" style={{ fontWeight: "bold" }}>
                  A fairer consensus system
                </Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Netus et malesuada fames ac turpis egestas sed tempus urna.
                Interdum posuere lorem ipsum dolor. Nunc eget lorem dolor sed
                viverra ipsum nunc aliquet bibendum. Lorem dolor sed viverra
                ipsum. Vitae semper quis lectus nulla at volutpat diam. Enim
                tortor at auctor urna nunc id. Faucibus in ornare quam viverra
                orci sagittis.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Netus et malesuada fames ac turpis egestas sed tempus urna.
                Interdum posuere lorem ipsum dolor.
              </Typography>
            </ThemeProvider>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <img src={oip} style={{ width: "100%", height: "100%" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ExplainFair;
