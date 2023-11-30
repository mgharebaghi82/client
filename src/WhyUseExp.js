import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import oip from "./Images/imageedit_26_3216878462.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function WhyUseExp() {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        float: "left",
        minHeight: "600px",
        display: "grid",
        alignContent: "center",
        backgroundColor: "#FFBE88",
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
            // data-aos="fade-right"
          >
            <ThemeProvider theme={theme}>
              <Typography style={{ fontWeight: "bold" }} variant="h3">
                Why should we use Centichain?
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
                If you think maintaining mining machines is hard, participating
                in mining pools is unsafe, paying to be in a blockchain network,
                named stake, is unfair and costly or if you intend to set your
                computer in a blockchain bed decentralizedly as a member in a
                digital-asset keeping network, or even if you believe it is
                important to create a new independent and self-generated
                non-inflating value without any complicated structures and
                devices, Centichain could be gainful.
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
            // data-aos="fade-left"
          >
            <img src={oip} width="100%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhyUseExp;
