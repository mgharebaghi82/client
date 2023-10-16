import {Button, Typography } from "@mui/material";
import {Download} from '@mui/icons-material';
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
        backgroundPositionY:"center",
        backgroundPositionX:"center",
        backgroundRepeat: "no-repeat",
        height: "600px",
        backgroundColor: "#020015",
        float: "left",
        userSelect: "none",
      }}
    >
      <Row style={{display:"grid", height:"100%", width:"100%"}}>
        <Col span={24} style={{ textAlign: "center", height:"100%", marginTop:"5px" }}>
          <ThemeProvider theme={theme}>
            <Typography variant="h2" style={{ color: "white", textShadow:"0px 0px 5px white" }}>
              {title}
            </Typography>
          </ThemeProvider>
        </Col>
        <Col span={24} style={{display:"grid",justifyContent:"center",alignContent:"end",  height:"100%"}}>
          <Button variant="contained" style={{marginBottom:"25px"}}><Download />coming soon...</Button>
        </Col>
      </Row>
    </div>
  );
}

export default MyHeader;
