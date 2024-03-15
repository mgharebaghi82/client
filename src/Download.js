import {
  Container,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Col, Divider, Row } from "antd";
import { SiWindows11 } from "react-icons/si";
import { FaApple, FaLinux, FaDownload } from "react-icons/fa";
import DownloadBoxes from "./DownloadBoxes";
import { useEffect } from "react";
import LinuxDlBox from "./LinuxDlBox";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Download() {
  const relayCmd =
    "wget -N https://centichain.org/downloads/relay-service && chmod 777 relay-service && ./relay-service";
  // const validatorCmd = "Comming soon...";
  // const walletCmd = "Comming soon...";

  useEffect(() => {
    document.title = "Centichain - Download";
  });

  return (
    <>
      <Container style={{ minHeight: "700px", overflowWrap: "break-word" }}>
        <ThemeProvider theme={theme}>
          <Row>
            <Col span={24} style={{ textAlign: "center", marginTop: "50px" }}>
              <Typography variant="h2" fontWeight="bold">
                Validator Node
              </Typography>
              <Typography variant="h3" color="#E05757">
                0.9.2
              </Typography>
            </Col>
          </Row>

          <Row>
            <Col span={24} style={{ textAlign: "center", color: "darkgray" }}>
              <Typography>Release date: Monday, March 04, 2024</Typography>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <DownloadBoxes
                appType="Windows msi-x64"
                icon={<SiWindows11 style={{ width: "40px", height: "40px" }} />}
              />
            </Col>

            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <DownloadBoxes
                appType="Linux"
                icon={<SiWindows11 style={{ width: "40px", height: "40px" }} />}
              />
            </Col>

            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <DownloadBoxes
                appType="Mac OS"
                icon={<SiWindows11 style={{ width: "40px", height: "40px" }} />}
              />
            </Col>
          </Row>
          <Divider />
          {/* ---------------------------------------------------------------------- */}
          <Row>
            <Col span={24} style={{ textAlign: "center" }}>
              <Typography variant="h2" fontWeight="bold">
                Relay Node
              </Typography>
              <Typography variant="h3" color="#493393">
                1.0.0
              </Typography>
            </Col>
          </Row>

          <Row>
            <Col span={24} style={{ textAlign: "center", color: "darkgray" }}>
              <Typography>Release date: Monday, March 04, 2024</Typography>
            </Col>
          </Row>

          <LinuxDlBox
            icon={<FaLinux style={{ width: "40px", height: "40px" }} />}
            text={relayCmd}
          />
          {/* ---------------------------------------------------------------------- */}
        </ThemeProvider>
      </Container>
    </>
  );
}
export default Download;
