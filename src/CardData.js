import { Container, Typography, useMediaQuery } from "@mui/material";
import { Col, Divider, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import banner from "./Images/banner.png";
import AOS from "aos";
import "aos/dist/aos.css";
let theme = createTheme();
theme = responsiveFontSizes(theme);

function CardData() {
  const navigate = useNavigate();
  const [dataLoad, setDataLoad] = useState(false);
  const [data, setData] = useState();
  const parse = require("html-react-parser");
  const { title } = useParams();
  const [body, setBody] = useState("");
  const match = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  useEffect(() => {
    axios
      .get("https://centichain.org/api/query_param?message=" + title)
      .then((res) => {
        setData(res.data);
        setDataLoad(true);
        document.title = "Centichain - " + res.data.title;
        setBody(parse(res.data.body));
      })
      .catch(() => navigate("/notFound"));
  }, [title]);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        minHeight: "500px",
        backgroundColor: "white",
      }}
    >
      {dataLoad ? (
        <>
          <div className="low-opacity-become">
            <Row>
              <Col
                xs={24}
                sm={24}
                md={14}
                lg={14}
                xl={14}
                style={{
                  padding: "2%",
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <ThemeProvider theme={theme}>
                    <Typography variant="h2" fontWeight="bold" color="#004750">
                      {data.title}
                    </Typography>
                    <Divider />
                    <Typography variant="h5">{data.desc}</Typography>
                  </ThemeProvider>
                </div>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={10}
                lg={10}
                xl={10}
                style={{
                  padding: "2%",
                  justifyContent: "center",
                  display: "grid",
                }}
              >
                <div
                  style={{
                    height: !match ? "auto" : "600px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={data.img}
                    data-aos="fade-zoom-in"
                    style={{
                      width: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>

          <Container maxWidth="lg">
            <div
              style={{
                width: "100%",
                backgroundColor: "white",
                marginTop: "15px",
              }}
            >
              <ThemeProvider theme={theme}>
                <Row>
                  <Col span={24}>
                    <Typography>{body}</Typography>
                  </Col>
                </Row>
              </ThemeProvider>
            </div>
          </Container>
        </>
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
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
    </div>
  );
}

export default CardData;
