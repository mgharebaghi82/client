import { Button, Typography } from "@mui/material";
import { Download } from "@mui/icons-material";
import headImg from "./Images/Logo.png";
import backImg from "./Images/imageedit_8_7256968585.png";
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
        backgroundColor: "#e2e7ed",
        minHeight: "650px",
        backgroundImage: `url(${backImg})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        userSelect:"none"
      }}
    >
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
            <br />
            <Typography variant="h5" color="#020015" style={{ lineHeight: "1.7" }}>
              Without having strange hardware or a very powerful computing
              device like miners and without staking any value, easily become a
              member of the network and confirm and register blocks and get its
              reward, or even if you have a public IP address. You can help
              network communication as a relay and get rewarded again.
            </Typography>
          </ThemeProvider>
          <Row style={{ marginTop: "80px" }}>
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
