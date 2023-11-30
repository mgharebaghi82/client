import AOS from "aos";
import "aos/dist/aos.css";
import {
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { Col, Row } from "antd";
import { useEffect } from "react";

let theme = createTheme();
theme = responsiveFontSizes(theme);
function RoadmapSection({ imagesrc, q, title, desc, bottom, titleBG, dataAos, anchor, offset, durational }) {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <Col
      xs={24}
      sm={24}
      md={24}
      lg={6}
      xl={6}
      style={{ height: "600px", padding: "1.5%" }}
    >
      <div
        style={{ position: "absolute", bottom: bottom }}
        data-aos={dataAos}
      >
        <Row>
          <Col
            span={24}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={imagesrc} style={{ width: "50%" }} />
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col
            span={24}
            style={{
              backgroundColor: titleBG,
              height: "10%",
              borderRadius: "5px",
              paddingTop:"3px"
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography
                variant="h4"
                fontWeight="bold"
                style={{
                  fontFamily: "sans-serif",
                  color: "",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                {q}
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>
        <Row style={{marginTop:"10px"}}>
          <Col span={24} style={{ textAlign: "center" }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h5" fontWeight="bold">
                {title}
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h6">{desc}</Typography>
            </ThemeProvider>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default RoadmapSection;
