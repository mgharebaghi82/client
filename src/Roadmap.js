import {
  Container,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Col, Row } from "antd";
import wallet from "./Images/wallet.png";
import signature from "./Images/signature.png";
import runService from "./Images/customer-service.png";
import cip from "./Images/handshake.png";
import RoadmapSection from "./RoadmapSections";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Roadmap() {
  return (
    <div
      style={{
        width: "100%",
        float: "left",
        minHeight: "600px",
        backgroundColor: "#E0E1F3",
      }}
      data-aos="fade-up"
    >
      <Container maxWidth="lg" style={{ padding: "10px" }}>
        <Row>
          <Col span={24} style={{ textAlign: "left" }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h2" fontWeight="bold">
                Centichain Roadmap - 2024
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>

        <Row>
          <RoadmapSection
            imagesrc={wallet}
            title="Wallet:"
            q="Q1"
            desc="Create a wallet for most platforms for easier use and control of user CENTIs"
            bottom="0"
            titleBG="white"
            dataAos="fade-down-right"
          />
          <RoadmapSection
            imagesrc={signature}
            title="Multi Sig:"
            q="Q2"
            desc="Complete configuration of Node as a service in the operating system"
            bottom="15%"
            titleBG="#F79494 "
            dataAos="fade-down-right"
          />
          <RoadmapSection
            imagesrc={runService}
            title="Run as Service:"
            q="Q3"
            desc="Add multiple signatures for transactions and validate signatures by Validators"
            bottom="30%"
            titleBG="#94ECF7"
            dataAos="fade-down-right"
          />
          <RoadmapSection
            imagesrc={cip}
            title="CIP:"
            q="Q4"
            desc="Creating CIP (Centichain Improvement Proposal) and opening Centichain source code for developers"
            bottom="40%"
            titleBG="#E0F794"
            dataAos="fade-down-right"
          />
        </Row>
      </Container>
    </div>
  );
}

export default Roadmap;
