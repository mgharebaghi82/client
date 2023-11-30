import {
  Container,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Col, Row } from "antd";
import wallet from "./Images/wallet.png";
import wOpenSource from "./Images/coding.png";
import rOpenSource from "./Images/developer.png";
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
                Centichain Roadmap
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>

        <Row>
          <RoadmapSection
            imagesrc={wallet}
            title="Wallet:"
            q="Stage 1"
            desc="Create a wallet for most platforms for easier use and control of user CENTIs"
            bottom="0"
            titleBG="white"
            dataAos="fade-down-right"
          />
          <RoadmapSection
            imagesrc={wOpenSource}
            title="Open-sourcing the wallet:"
            q="Stage 2"
            desc="Open-sourcing the wallet for more interaction with developers"
            bottom="15%"
            titleBG="#F79494 "
            dataAos="fade-down-right"
          />
          <RoadmapSection
            imagesrc={rOpenSource}
            title="Run as Service:"
            q="Stage 3"
            desc="Open source relay node for more interaction with developers"
            bottom="30%"
            titleBG="#94ECF7"
            dataAos="fade-down-right"
          />
          <RoadmapSection
            imagesrc={cip}
            title="CIP:"
            q="Stage 4"
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
