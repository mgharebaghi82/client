import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import {
  RiTwitterXFill,
  RiTelegramFill,
  RiInstagramFill,
  RiGithubFill,
  RiDiscordFill,
} from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const topCols = {
  marginTop: "25px",
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
  height: "200px",
};

const icons = {
  width: "30px",
  height: "30px",
};

function MyFooter() {
  return (
    <div
      style={{
        float: "left",
        width: "100%",
        backgroundColor: "#011422",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <Container maxWidth="md">
        <Row>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} style={topCols}>
            <Typography color="white">Home</Typography>
            <Typography color="white">Whitepaper</Typography>
            <Typography color="white">Validation</Typography>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} style={topCols}>
            <Typography color="white">Security</Typography>
            <Typography color="white">Become a node</Typography>
            <Typography color="white">Become a relay</Typography>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} style={topCols}>
            <RiTwitterXFill color="white" style={icons} />
            <br />
            <RiTelegramFill color="white" style={icons} />
            <br />
            <RiInstagramFill color="white" style={icons} />
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} style={topCols}>
            <RiGithubFill color="white" style={icons} />
            <br />
            <RiDiscordFill color="white" style={icons} />
            <br />
            <MdEmail color="white" style={icons} />
          </Col>
        </Row>
        <Row style={{ marginTop: "25px", textAlign:"center", marginBottom:"20px" }}>
          <Col span={24} style={{ display: "grid", justifyContent: "center" }}>
            <Typography color="lightgray">
              Copyright © 2023 Centichain - a network for easier communication
              with digital assets. All rights reserved.
            </Typography>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyFooter;
