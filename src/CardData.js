import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import headImg from "./Images/_8d95dcfd-0ab4-48a5-a00f-62bda94d84b4.jpg";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
let theme = createTheme();
theme = responsiveFontSizes(theme);

function CardData() {
  const [dataLoad, setDataLoad] = useState(false);
  const location = useLocation();
  const [data, setData] = useState();
  const parse = require("html-react-parser");

  useEffect(() => {
    axios
      .get("http://localhost:3002/query_param?message=" + location.state.msg)
      .then((res) => {
        console.log(res);
        setData(res.data);
        setDataLoad(true);
      });
  }, []);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {dataLoad ? (
        <div>
          <ThemeProvider theme={theme}>
            <Row>
              <Col span={24}>
                <div
                  style={{
                    width: "100%",
                    backgroundImage: `url(${headImg})`,
                    backgroundSize: "contain",
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    height: "500px",
                    backgroundColor: "#000522",
                    display: "grid",
                    justifyContent: "center",
                    alignContent: "center",
                    float: "left",
                    userSelect: "none",
                    overflowWrap: "break-word",
                    top: "0",
                  }}
                >
                  <Typography
                    variant="h2"
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      textShadow: "2px 0px 10px white",
                    }}
                  >
                    {data.title}
                  </Typography>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                span={24}
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
              >
                <Container maxWidth="lg">
                  <ThemeProvider theme={theme}>
                    <Col span={24}>
                      <Typography>{parse(data.body)}</Typography>
                    </Col>
                  </ThemeProvider>
                </Container>
              </Col>
            </Row>
          </ThemeProvider>
        </div>
      ) : (
        <div style={{width:"100%", height:"700px", display:"grid", justifyContent:"center", alignContent:"center"}}>
          <BounceLoader color="lightorange"/>
        </div>
      )}
    </div>
  );
}

export default CardData;
