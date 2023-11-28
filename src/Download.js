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
    "wget https://centichain.org/Downloads/relay-node && chmod 777 relay-node && ./relay-node";
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
              Validator Node <div style={{ color: "#7952FF" }}>0.9.1</div>
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
              Relay Node <div style={{ color: "#7952FF" }}>1.0.0</div>
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

        <LinuxDlBox
          icon={<FaLinux style={{ width: "40px", height: "40px" }} />}
          text={relayCmd}
        />
      </ThemeProvider>
    </Container>
  );
}
export default Download;
