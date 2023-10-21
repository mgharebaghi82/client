import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import oip from "./Images/imageedit_33_9932298212.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function WtsExp() {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        float: "left",
        minHeight:"600px",
        display:"grid",
        alignContent:"center"
      }}
      data-aos="fade-up"
    >
      <Container maxWidth="lg">
        <Row>
          <Col xs={24} sm={24} md={24} lg={9} xl={9} style={{display:"grid", justifyContent:"center", alignContent:"center"}}>
            <img src={oip} width="100%"/>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={15}
            xl={15}
            style={{whiteSpace:"break-spaces", padding:"25px"}}
          >
            <ThemeProvider theme={theme}>
              <Typography style={{ fontWeight: "bold" }} variant="h3">
                What is Centichain?
              </Typography>
              <Typography variant="h5" style={{lineHeight:"1.7"}}>
                Centichain is a decentralized digital asset which you can use as
                money or store of value. Like other decentralized digital
                assets, Centichain does not need a reliable third person
                (middlemen like the banks). However, it technically presents
                dissimilitude to others, something like a consensus mechanism,
                and so can be more effective for network participants with
                regard to energy consumption and cost. In fact, Centichain is a
                blockchain network for a safe value saving and transferring,
                both energy-wise and financial-wise.
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WtsExp;
