import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import oip from "./Images/imageedit_15_4347028470.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function CentiExp() {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        float: "left",
        minHeight: "600px",
        backgroundColor:"lightgray",
        display: "grid",
        alignContent: "center",
      }}
      data-aos="fade-up"
    >
      <Container maxWidth="lg">
        <Row>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={16}
            xl={16}
            style={{ whiteSpace: "break-spaces", padding: "25px" }}
            data-aos="zoom-in"
          >
            <ThemeProvider theme={theme}>
              <Typography style={{ fontWeight: "bold" }} variant="h3">
                What is CENTI?
              </Typography>
              <Typography variant="h5">
                CENTI is the name of the value in the blockchain network of
                decentralized Centichain. CENTI, in fact, is a digital asset
                which can be kept or spent as a value. The reward for being in
                Centichain network and the cost for any transactions is paid by
                CENTI. Having Centichain wallet, you can also do all your
                transactions by Centi if your other party has a CENTI wallet
                address. CENTI is verily a new self-generated value.
              </Typography>
            </ThemeProvider>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            style={{
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
            }}
            data-aos="flip-right"
          >
            <img src={oip} width="100%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CentiExp;
