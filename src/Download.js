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
import { Helmet } from "react-helmet";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Download() {
  const relayCmd =
    "wget https://centichain.org/downloads/relay-service && chmod 777 relay-service && ./relay-service";
  const validatorCmd = "Comming soon...";
  const walletCmd = "Comming soon...";

  useEffect(() => {
    document.title = "Centichain - Download";
  });

  return (
    <Container style={{ minHeight: "700px", overflowWrap: "break-word" }}>
      <Helmet>
        <meta
          name="description"
          content="Centichain is a blockchain network that allows anyone to join and participate without any special requirements."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Centichain" />
        <meta
          itemprop="description"
          content="Centichain is a blockchain network that allows anyone to join and participate without any special requirements."
        />
        <meta
          itemprop="image"
          content="http://centichain.org/static/media/C-Logo.a2c978f558ee73e0eac5.png"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://centichain.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Centichain" />
        <meta
          property="og:description"
          content="Centichain is a blockchain network that allows anyone to join and participate without any special requirements."
        />
        <meta
          property="og:image"
          content="http://centichain.org/static/media/C-Logo.a2c978f558ee73e0eac5.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Centichain" />
        <meta
          name="twitter:description"
          content="Centichain is a blockchain network that allows anyone to join and participate without any special requirements."
        />
        <meta
          name="twitter:image"
          content="http://centichain.org/static/media/C-Logo.a2c978f558ee73e0eac5.png"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <Typography variant="h2" fontWeight="bold">
              Validator Node
            </Typography>
            <Typography variant="h3" color="#493393">
              0.8.5
            </Typography>
          </Col>
        </Row>

        <Row>
          <Col span={24} style={{ textAlign: "center", color: "darkgray" }}>
            <Typography>Release date: Monday, December 18, 2023</Typography>
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
          <Col span={24} style={{ textAlign: "center", color: "darkgray" }}>
            <Typography>Release date: Monday, December 18, 2023</Typography>
          </Col>
        </Row>

        <LinuxDlBox
          icon={<FaLinux style={{ width: "40px", height: "40px" }} />}
          text={relayCmd}
        />
        <Divider />
        {/* ---------------------------------------------------------------------- */}
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <Typography variant="h2" fontWeight="bold">
              Wallet
            </Typography>
            <Typography variant="h3" color="#493393"></Typography>
          </Col>
        </Row>

        <Row>
          <Col span={24} style={{ textAlign: "center", color: "darkgray" }}>
            <Typography>Comming soon...</Typography>
          </Col>
        </Row>

        <DownloadBoxes
          appType="Comming soon..."
          icon={<SiWindows11 style={{ width: "40px", height: "40px" }} />}
        />
        <DownloadBoxes
          appType="Comming soon..."
          icon={<SiWindows11 style={{ width: "40px", height: "40px" }} />}
        />
        <LinuxDlBox
          icon={<FaLinux style={{ width: "40px", height: "40px" }} />}
          text={walletCmd}
        />
      </ThemeProvider>
    </Container>
  );
}
export default Download;
