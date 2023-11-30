import {
  Container,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
  Button,
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
    "wget https://centichain.org/downloads/relay-service && chmod 777 relay-service && ./relay-service";
  const validatorCmd =
    "wget https://centichain.org/Downloads/centichain && chmod +x centichain && ./centichain";

  useEffect(() => {
    document.title = "Centichain - Download";
  });

  return (
    <Container style={{ minHeight: "700px", overflowWrap:"break-word" }}>
      <ThemeProvider theme={theme}>
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <Typography variant="h2" fontWeight="bold">
              Validator Node
            </Typography>
            <Typography variant="h3" color="#493393">
              0.9.1
            </Typography>
          </Col>
        </Row>

        <Row>
          <Col span={24} style={{ textAlign: "center", color:"darkgray" }}>
            <Typography >
              Release date: Monday, November 27, 2023
            </Typography>
          </Col>
        </Row>

        <DownloadBoxes
          appType="Windows msi-x64"
          icon={<SiWindows11 style={{ width: "40px", height: "40px" }} />}
        />
        <DownloadBoxes
          appType="Windows nsis-x64"
          icon={<SiWindows11 style={{ width: "40px", height: "40px" }} />}
        />
        <DownloadBoxes
          appType="Windows portable-x64"
          icon={<SiWindows11 style={{ width: "40px", height: "40px" }} />}
        />
        <DownloadBoxes
          appType="Mac"
          icon={<FaApple style={{ width: "40px", height: "40px" }} />}
        />
        <LinuxDlBox
          icon={<FaLinux style={{ width: "40px", height: "40px" }} />}
          text={validatorCmd}
        />
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
          <Col span={24} style={{ textAlign: "center", color:"darkgray" }}>
            <Typography>
              Release date: Monday, November 27, 2023
            </Typography>
          </Col>
        </Row>

        <LinuxDlBox
          icon={<FaLinux style={{ width: "40px", height: "40px" }} />}
          text={relayCmd}
        />
      </ThemeProvider>
    </Container>
  );
}
export default Download;
