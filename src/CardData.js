import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import MyHeader from "./MyHeader";
let theme = createTheme();
theme = responsiveFontSizes(theme);

function CardData() {
  const [dataLoad, setDataLoad] = useState(false);
  const location = useLocation();
  const [data, setData] = useState();
  const parse = require("html-react-parser");

  useEffect(() => {
    axios
      .get("https://centichain.org:3002/query_param?message=" + location.state.msg)
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
                <MyHeader title={data.title}/>
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
