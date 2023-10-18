import { Button, CssBaseline, Typography } from "@mui/material";
import { Download } from "@mui/icons-material";
import headImg from "./Images/imageedit_9_2071507953.png";
import backImg from "./Images/_6c3f35f2-a88d-4efa-8eba-9339899eb046.jpg";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { Col, Row } from "antd";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function MyHeader() {

  return (
    <div
      style={{
        width: "100%",
        float: "left",
        padding: "25px",
        backgroundColor: "#f6f7f1",
        minHeight: "650px",
        backgroundImage: `url(${backImg})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
      }}
    >
      <CssBaseline />
      <Row>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{
            textAlign: "center",
            padding: "25px",
            justifyContent: "center",
            display: "grid",
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h1" color="#020015">
              Centichain
            </Typography>
            <Typography color="#020015">
              Without having strange hardware or a very powerful computing
              device like miners and without staking any value, easily become a
              member of the network and confirm and register blocks and get its
              reward, or even if you have a public IP address. You can help
              network communication as a relay and get rewarded again.
            </Typography>
          </ThemeProvider>
          <Row style={{ marginTop: "100px" }}>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              style={{ justifyContent: "center", padding: "10px" }}
            >
              <Button
                variant="contained"
                style={{ height: "50px", width: "100%" }}
              >
                <Download /> comming soon...
              </Button>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              style={{ justifyContent: "center", padding: "10px" }}
            >
              <Button
                variant="outlined"
                style={{
                  height: "50px",
                  width: "100%",
                }}
              >
                Learn more
              </Button>
            </Col>
          </Row>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{
            display: "grid",
            justifyContent: "center",
            height: "100%",
            paddingTop: "10%",
            marginBottom: "80px",
          }}
        >
          <img src={headImg} style={{ width: "100%" }} />
        </Col>
      </Row>
    </div>
  );
}

export default MyHeader;
