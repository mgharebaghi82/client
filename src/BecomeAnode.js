import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import oip from "./Images/_50480bd3-c26f-4bdc-bfbf-fd618f6a256d.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function BecomeAnode() {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        float: "left",
        padding: "25px",
        backgroundColor: "#ffdf7a",
      }}
      data-aos="fade-right"
    >
      <Container maxWidth="lg">
        <Row>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <img src={oip} style={{ width: "100%", height: "100%" }} />
          </Col>
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
                  Become a node easily
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
        </Row>
      </Container>
    </div>
  );
}

export default BecomeAnode;
