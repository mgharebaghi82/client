import { Button, Col, Divider, Tabs, Row } from "antd";
import Item from "antd/es/list/Item";
import { useEffect, useState } from "react";
import axios from "axios";
import { BounceLoader } from "react-spinners";
import { Container, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Docs() {
  const [whitepaper, setWhitepaper] = useState([]);
  const [dataLoad, setDataLoad] = useState(false);
  const parse = require("html-react-parser");

  //   get whitepapers data from backend after component loaded
  useEffect(() => {
    document.title = "Centichain - Whitepaper";

    axios.get("https://centichain.org:3002/whitepaper").then((res) => {
      //   whitepaper.push(res.data);
      setWhitepaper((prevData) => prevData.concat(res.data));
      setDataLoad(true);
    });
  }, []);

  return (
    <div style={{ width: "100%", paddingTop: "20px", paddingBottom: "20px" }}>
      {dataLoad ? (
        <Container maxWidth="lg">
          <ThemeProvider theme={theme}>
            <Row>
              <Col span={24}>
                <Typography variant="h4" fontWeight="bold">
                    {whitepaper[0].title}
                </Typography>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Typography>
                  {parse(whitepaper[0].body)}
                </Typography>
              </Col>
            </Row>
          </ThemeProvider>
        </Container>
      ) : (
        <div
          style={{
            width: "100%",
            height: "700px",
            display: "grid",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <BounceLoader />
        </div>
      )}
    </div>
  );
}

export default Docs;
