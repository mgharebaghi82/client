import { Button, Typography } from "@mui/material";
import { Download } from "@mui/icons-material";
import headImg from "./Images/C-Logo.png";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { Col, Row } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


let theme = createTheme();
theme = responsiveFontSizes(theme);

function MyHeader() {

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        float: "left",
        padding: "25px",
        backgroundColor: "#011422",
        minHeight: "600px",
        userSelect: "none",
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
            minHeight:"600px"
          }}
        >
          <Row>
            <Col span={24}>
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h1"
                  fontWeight="bold"
                  color="white"
                  style={{ textShadow: "0px 0px 25px #AEC9FF" }}
                >
                  Centichain
                </Typography>
                <br />
                <Typography
                  color="lightgray"
                  style={{ lineHeight: "2" }}
                >
                  Without having strange hardware or a very powerful computing
                  device like miners and without staking any value, easily
                  become a member of the network and confirm and register blocks
                  and get its reward, or even if you have a public IP address,
                  You can help network communication as a relay and get rewarded
                  again.
                </Typography>
              </ThemeProvider>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
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
                onClick={() => {
                  navigate("/dl");
                  window.scroll(0, 0)
                }}
              >
                <Download /> Download
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
                  color: "white",
                  borderColor: "white",
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
          }}
        >
          <img
            src={headImg}
            data-aos="zoom-in"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default MyHeader;
