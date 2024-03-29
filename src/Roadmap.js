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
      className="road-map"
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
            q="First"
            desc="Create a wallet for most platforms for easier use and control of user CENTIs"
            bottom="0"
            titleBG="white"
            dataAos="fade-down-right"
          />
          <RoadmapSection
            imagesrc={wOpenSource}
            title="Open-sourcing the wallet:"
            q="Second"
            desc="Open-sourcing the wallet for more interaction with developers"
            bottom="15%"
            titleBG="#F79494 "
            dataAos="fade-down-right"
          />
          <RoadmapSection
            imagesrc={rOpenSource}
            title="Open-sourcing the Relay node:"
            q="Third"
            desc="Open source Relay node for more interaction with developers"
            bottom="30%"
            titleBG="#94ECF7"
            dataAos="fade-down-right"
          />
          <RoadmapSection
            imagesrc={cip}
            title="CIP:"
            q="Last"
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
