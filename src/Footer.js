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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const validator = "Become a Validator";
  const relay = "Become a Relay";
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
            <div
              onClick={() => {
                navigate("/");
                window.scroll(0, 0);
              }}
              style={{ cursor: "pointer" }}
            >
              <Typography color="white">Home</Typography>
            </div>
            <div
              onClick={() => {
                navigate("/whitepaper");
                window.scroll(0, 0);
              }}
              style={{ cursor: "pointer" }}
            >
              <Typography color="white">Whitepaper</Typography>
            </div>
            <div
              onClick={() => {
                navigate("/dl");
                window.scroll(0, 0);
              }}
              style={{ cursor: "pointer" }}
            >
              <Typography color="white">Download</Typography>
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} style={topCols}>
          <div
              onClick={() => {
                navigate(`/cards/${validator}`);
                window.scroll(0, 0);
              }}
              style={{cursor:"pointer"}}
            >
              <Typography color="white">Validator</Typography>
            </div>
            <div
              onClick={() => {
                navigate(`/cards/${relay}`);
                window.scroll(0, 0);
              }}
              style={{cursor:"pointer"}}
            >
              <Typography color="white">Relay</Typography>
            </div>
            <div
              onClick={() => {
                navigate(`/dev/API Providers`);
                window.scroll(0, 0);
              }}
              style={{cursor:"pointer"}}
            >
              <Typography color="white">DEV</Typography>
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} style={topCols}>
            <a href="https://twitter.com/centichain" target="_blank"><RiTwitterXFill color="white" style={icons} /></a>
            <br />
            <a href="https://t.me/centichain" target="_blank"><RiTelegramFill color="white" style={icons} /></a>
            <br />
            <RiInstagramFill color="gray" style={icons} />
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} style={topCols}>
            <RiGithubFill color="gray" style={icons} />
            <br />
            <RiDiscordFill color="gray" style={icons} />
            <br />
            <MdEmail color="gray" style={icons} />
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "25px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <Col span={24} style={{ display: "grid", justifyContent: "center" }}>
            <Typography color="lightgray">
              Copyright © 2024 Centichain - No Mining, No Staking, No Problem. All rights reserved.
            </Typography>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyFooter;
