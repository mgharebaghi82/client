import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const cardsStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  width: "95%",
  marginTop: "10px",
  marginBottom: "10px",
};

function CardsSection({ mainData }) {
  const navigate = useNavigate();

  function showCard(msg) {
    navigate("/card_data", { state: { msg: msg }, replace: false });
  }

  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div style={{ width: "100%", float: "left", paddingTop: "20px" }}>
      <Container maxWidth="lg">
        <Row>
          {mainData[0].map((data, i) => {
            const myimg = require(data.img + "");
            return (
              <>
                {data.category === "mainpage" ? (
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card
                      style={cardsStyle}
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <CardActionArea
                        onClick={() => {
                          showCard(data.title + "");
                          window.scroll(0,0);
                        }}
                      >
                        <CardMedia
                          key={i}
                          component="img"
                          image={myimg}
                          alt=""
                          style={{ height: "400px" }}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            <span>{data.title}</span>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {data.desc}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Col>
                ) : null}
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default CardsSection;
