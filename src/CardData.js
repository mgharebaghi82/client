import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import {useNavigate, useParams} from 'react-router-dom';
let theme = createTheme();
theme = responsiveFontSizes(theme);

function CardData() {
  const navigate = useNavigate();
  const [dataLoad, setDataLoad] = useState(false);
  const [data, setData] = useState();
  const parse = require("html-react-parser");
  const {title} = useParams();
  useEffect(() => {
    axios
      .get("https://centichain.org:3002/query_param?message=" + title)
      .then((res) => {
        setData(res.data);
        setDataLoad(true);
      }).catch(() => navigate('/notfound'));
  }, []);

  useEffect(() => {
    if (dataLoad) {
      document.title = "Centichain - " + data.title
    }
  }, [dataLoad])

  return (
    <div style={{ width: "100%", overflow: "hidden", minHeight:"500px" }}>
      {dataLoad ? (
        <div>
          <ThemeProvider theme={theme}>
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
