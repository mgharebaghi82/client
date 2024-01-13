import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import oip from "./Images/imageedit_33_9932298212.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function WtsExp({ id }) {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div
      id={id}
      style={{
        width: "100%",
        float: "left",
        minHeight: "600px",
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
            lg={9}
            xl={9}
            style={{
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img src={oip} width="100%" />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={15}
            xl={15}
            style={{ whiteSpace: "break-spaces", padding: "25px" }}
          >
            <ThemeProvider theme={theme}>
              <Typography style={{ fontWeight: "bold" }} variant="h3">
                What is Centichain?
              </Typography>
              <Typography variant="h5">
                Centichain is a decentralized digital asset that can be used as
                money or a store of value. Unlike traditional currencies that
                rely on trusted intermediaries (such as banks), Centichain
                operates on a peer-to-peer network that does not need a central
                authority. Centichain also has a unique consensus mechanism that
                makes it more efficient and cost-effective for network
                participants in terms of energy consumption and transaction
                fees. Centichain is a blockchain network that provides a secure
                and sustainable way of saving and transferring value.
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WtsExp;
