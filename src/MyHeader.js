import { Button, Typography, useMediaQuery } from "@mui/material";
import { Download } from "@mui/icons-material";
import headImg from "./Images/LOGO-Transparent.png";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { Col, Row } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function MyHeader({ learnClick }) {
  const navigate = useNavigate();
  const match = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "700px" }}>
      <div className="low-opacity-main">
        <Row style={{ userSelect: "none" }}>
          <Col
            xs={24}
            sm={24}
            md={14}
            lg={14}
            xl={14}
            style={{
              textAlign: "center",
              padding: "25px",
              justifyContent: "center",
              display: "grid",
            }}
          >
            <Row style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"10%"}}>
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
                  <Typography color="lightgray">
                    Centichain is a blockchain network that allows anyone to
                    join and participate without any special requirements. You
                    do not need specialized hardware or high-performance
                    computing devices like miners, nor do you need to stake any
                    value in the network. Therefore, you can easily become a
                    member of the network, confirm and register blocks, and get
                    rewarded. In addition, if you have a public IP address, you
                    can help network communication as a relay and get rewarded
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
                    window.scroll(0, 0);
                  }}
                >
                  <Download /> <Typography>Download</Typography>
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
                  onClick={learnClick}
                >
                  <Typography>learn more</Typography>
                </Button>
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={10}
            lg={10}
            xl={10}
            style={{
              height: "100%",
            }}
          >
            <div
              style={{
                height: !match ? "auto" : "700px",
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={headImg}
                data-aos="fade-zoom-in"
                style={{ width: "100%" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MyHeader;
