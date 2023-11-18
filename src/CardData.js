import { Container, Typography } from "@mui/material";
import { Col, Divider, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
let theme = createTheme();
theme = responsiveFontSizes(theme);

function CardData() {
  const navigate = useNavigate();
  const [dataLoad, setDataLoad] = useState(false);
  const [data, setData] = useState();
  const parse = require("html-react-parser");
  const { title } = useParams();
  const [body, setBody] = useState("");
  useEffect(() => {
    axios
      .get("https://centichain.org/query_param?message=" + title)
      .then((res) => {
        setData(res.data);
        setDataLoad(true);
      })
      .catch(() => navigate("/notfound"));
  }, []);

  useEffect(() => {
    if (dataLoad) {
      document.title = "Centichain - " + data.title;
      setBody(parse(data.body));
    }
  }, [dataLoad]);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        minHeight: "500px",
        backgroundColor: "white"
      }}
    >
      {dataLoad ? (
        <Container maxWidth="lg">
          <div style={{ width: "100%", backgroundColor: "white" }}>
            <ThemeProvider theme={theme}>
              <Row style={{ minHeight: "400px", marginTop: "10px" }}>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                  <img src={data.img} width="100%" />
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={16}
                  xl={16}
                  style={{ padding: "15px" }}
                >
                  <Typography variant="h2" fontWeight="bold">
                    {data.title}
                  </Typography>
                  <Typography variant="h4" style={{ lineHeight: "1.7" }}>
                    {data.desc}
                  </Typography>
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col span={24}>
                  <Typography>{body}</Typography>
                </Col>
              </Row>
            </ThemeProvider>
          </div>
        </Container>
      ) : (
        <div
          style={{
            width: "100%",
            height: "700px",
            display: "grid",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <BounceLoader color="lightorange" />
        </div>
      )}
    </div>
  );
}

export default CardData;
