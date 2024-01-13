import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Col, Divider, Row } from "antd";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const cardsStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  width: "90%",
  marginTop: "10px",
  marginBottom: "10px",
};

function CardsSection({ mainData }) {
  const navigate = useNavigate();

  function showCard(msg) {
    navigate(`/cards/${msg}`);
  }

  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div style={{ width: "100%", float: "left", paddingTop: "20px" }}>
      <Container maxWidth="lg">
        <Row>
          {mainData[0] ? (mainData[0].map((data, i) => {
            let myImg = data.img + '';
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
                          image={myImg}
                          alt=""
                          style={{ height: "350px" }}
                        />
                        <CardContent style={{minHeight:"auto"}}>
                          <Typography gutterBottom variant="h5" component="div">
                            <span>{data.title}</span>
                          </Typography>
                          <Divider />
                          <Typography variant="body2" color="text.secondary">
                            {data.desc.length > 150 ? <><span>{data.desc.slice(0, 150)}</span><span style={{color:"blue"}}>... (click to see more)</span></> : data.desc}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Col>
                ) : null}
              </>
            );
          })) : <span>loading</span>}
        </Row>
      </Container>
    </div>
  );
}

export default CardsSection;
