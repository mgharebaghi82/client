import {
  Container,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
  Button,
} from "@mui/material";
import { Col, Divider, Row } from "antd";
import { FaDownload } from "react-icons/fa";
import { SiWindows11 } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import DownloadBoxes from "./DownloadBoxes";
import { useEffect } from "react";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Download() {

    useEffect(() => {
        document.title = "Centichain - Download"
    })

  return (
    <Container style={{ minHeight: "700px" }}>
      <ThemeProvider theme={theme}>
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <Typography variant="h2" fontWeight="bold">
              Download Centichain Node{" "}
              <div style={{ color: "#7952FF" }}>0.9.1</div>
            </Typography>
          </Col>
        </Row>

        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <Typography variant="h5">
              Release date: Monday, November 27, 2023
            </Typography>
          </Col>
        </Row>

        <DownloadBoxes appType="Windows msi-x64" icon={<SiWindows11 style={{ width: "40px", height: "40px" }} />}/>
        <DownloadBoxes appType="Windows nsis-x64" icon={<SiWindows11 style={{ width: "40px", height: "40px" }} />}/>
        <DownloadBoxes appType="Windows portable-x64" icon={<SiWindows11 style={{ width: "40px", height: "40px" }} />}/>
        <DownloadBoxes appType="Mac" icon={<FaApple style={{ width: "40px", height: "40px" }} />}/>
        <Divider />
      </ThemeProvider>
    </Container>
  );
}
export default Download;
