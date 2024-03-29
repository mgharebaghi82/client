import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import oip from "./Images/imageedit_22_8809966090.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function ConsensusExp() {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div className="consensus">
      <Container maxWidth="lg" className="sections-dark">
        <Row>
          <Col
            xs={24}
            sm={24}
            md={16}
            lg={16}
            xl={16}
            style={{ whiteSpace: "break-spaces", padding: "25px" }}
          >
            <ThemeProvider theme={theme}>
              <Typography style={{ fontWeight: "bold" }} variant="h3">
                A fair consensus
              </Typography>
              <Typography variant="h5">
                It has repeatedly been mentioned that Centichain brings a new
                consensus mechanism. Contrary to Proof of Work (POW) which has a
                high energy consumption and Proof of Stake (POS) which needs to
                lock a part of the network members’ assets, Centichain uses this
                novel and creative mechanism. An inexpensive, fair and clear
                mechanism which is based on a civilized consensus among all the
                network members to select the next block generator.
              </Typography>
            </ThemeProvider>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}
            style={{
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
            }}
            data-aos="fade-left"
          >
            <img src={oip} width="100%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ConsensusExp;
