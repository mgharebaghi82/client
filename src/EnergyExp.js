import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import oip from "./Images/imageedit_19_7819543889.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function EnergyExp() {
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
      }}
      data-aos="fade-up"
    >
      <Container maxWidth="lg">
        <Row>
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
          >
            <img src={oip} width="100%" />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={16}
            xl={16}
            style={{ whiteSpace: "break-spaces", padding: "25px" }}
          >
            <ThemeProvider theme={theme}>
              <Typography style={{ fontWeight: "bold" }} variant="h3">
                How does Centichain consume energy?
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
                Centichain energy consumption is the same as usual PCs. As
                mentioned earlier, by presenting a new consensus mechanism,
                there would be no need of high power-consuming computers to
                solve complicated mathematical equations and you can be a member
                of the network via a customary PC. Therefore, Centichain solves
                the concerns about energy consumption without locking
                inter-network members’ values nor losing safety and speed.
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EnergyExp;
