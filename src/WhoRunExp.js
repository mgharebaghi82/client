import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import oip from "./Images/imageedit_3_9547080008.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function WhoRunExp() {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        float: "left",
        minHeight: "500px",
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
            data-aos="fade-down-right"
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
                Who runs Centichain?
              </Typography>
              <Typography variant="h5">
                No official institution or center runs Centichain. As long as
                there are linked computers which follow Centichain protocols to
                add data, Centichain will work. Such network computers are
                divided into two groups of relay and node. In fact, relays are
                to preserve a rapid and safe connection between nodes in the
                network. They are actually a connected computer, like the nodes,
                which should have a public address and relay the communications
                and messages. Here, you can choose being a node or a relay or
                both!
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhoRunExp;
