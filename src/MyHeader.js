import {Typography } from "@mui/material";
import headImg from "./Images/_f85cb894-2b32-4d19-addf-8940222426b2.jpg";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { Col, Row } from "antd";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function MyHeader({title}) {
  return (
    <div
      style={{
        width: "100%",
        backgroundImage: `url(${headImg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundPositionY: "50px",
        backgroundRepeat: "no-repeat",
        height: "500px",
        backgroundColor: "#020015",
        float: "left",
        userSelect: "none",
      }}
    >
      <Row>
        <Col span={24} style={{ textAlign: "center", marginTop: "30px" }}>
          <ThemeProvider theme={theme}>
            <Typography variant="h2" style={{ color: "white", textShadow:"0px 0px 10px white" }}>
              {title}
            </Typography>
          </ThemeProvider>
        </Col>
      </Row>
    </div>
  );
}

export default MyHeader;
