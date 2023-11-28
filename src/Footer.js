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
                // navigate("/");
                // window.scroll(0, 0);
              }}
              style={{ cursor: "pointer" }}
            >
              <Typography color="white">Download</Typography>
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} style={topCols}>
          <div
              onClick={() => {
                navigate(`/${validator}`);
                window.location.reload();
                window.scroll(0, 0);
              }}
              style={{cursor:"pointer"}}
            >
              <Typography color="white">Become a Validator</Typography>
            </div>
            <div
              onClick={() => {
                navigate(`/${relay}`);
                window.location.reload();
                window.scroll(0, 0);
              }}
              style={{cursor:"pointer"}}
            >
              <Typography color="white">Become a Relay</Typography>
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} style={topCols}>
            <RiTwitterXFill color="gray" style={icons} />
            <br />
            <RiTelegramFill color="gray" style={icons} />
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
