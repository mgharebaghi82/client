import "./prism.css";
import {
  Button,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Col, Menu, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { DNA } from "react-loader-spinner";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function API() {
  const [apis, setApis] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [err, setErr] = useState(false);
  const [items, setItems] = useState([]);
  const [key, setKey] = useState("0");
  const match = useMediaQuery("(min-width: 600px)");
  const [toggel, setToggle] = useState(false);
  const navigate = useNavigate();
  const { title } = useParams();
  const [defaultItem, setDefaultItem] = useState("");

  useEffect(() => {
    document.title = "Centichain - DEV";
    axios
      .get("https://centichain.org/api/apis")
      .then((res) => {
        setApis(res.data);
        setDataLoaded(true);
      })
      .catch((_) => {
        setErr(true);
      });
  }, []);

  useEffect(() => {
    apis.map((item, index) => {
      let itemData = { label: item.title, key: index };
      setItems((prevData) => prevData.concat(itemData));
    });
  }, [apis]);

  useEffect(() => {
    items.map((item) => {
      if (item.label === decodeURI(title)) {
        setDefaultItem(item.key + "");
        setKey(item.key.toString());
      }
    });
    let findItem = items.find((item) => item.label === title);
    if (dataLoaded) {
      if (items.length > 0 && findItem) {
      } else {
        navigate("/notFound");
      }
    }
  }, [items, title]);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="The REST API allows you to communicate directly with the Centichain network."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Centichain" />
        <meta
          itemprop="description"
          content="The REST API allows you to communicate directly with the Centichain network."
        />
        <meta
          itemprop="image"
          content="http://centichain.org/static/media/C-Logo.a2c978f558ee73e0eac5.png"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://centichain.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Centichain" />
        <meta
          property="og:description"
          content="The REST API allows you to communicate directly with the Centichain network."
        />
        <meta
          property="og:image"
          content="http://centichain.org/static/media/C-Logo.a2c978f558ee73e0eac5.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Centichain" />
        <meta
          name="twitter:description"
          content="The REST API allows you to communicate directly with the Centichain network."
        />
        <meta
          name="twitter:image"
          content="http://centichain.org/static/media/C-Logo.a2c978f558ee73e0eac5.png"
        />
      </Helmet>
      {dataLoaded && apis.length > 0 ? (
        <div
          style={{
            width: "100%",
          }}
        >
          {match ? (
            <Row>
              <Col span={4} style={{ userSelect: "none" }}>
                <Menu
                  style={{ paddingTop: "15px", width: "100%", height: "100%" }}
                  onClick={(menuInfo) => {
                    setKey(menuInfo.key);
                    navigate(`/dev/${items[menuInfo.key].label}`);
                    window.scroll(0, 0);
                  }}
                  mode="vertical"
                  className="ant-menu-item"
                  items={items}
                  selectedKeys={defaultItem}
                ></Menu>
              </Col>
              <Col span={20} style={{ paddingRight: "2%" }}>
                <Row>
                  <Col span={24}>
                    <Typography>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: apis[Number(key)].body,
                        }}
                        style={{
                          paddingTop: "25px",
                          paddingLeft: "15px",
                          width: "100%",
                          minHeight: "600px",
                        }}
                      />
                    </Typography>
                  </Col>
                </Row>
                <Row>
                  <Col
                    span={12}
                    style={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingLeft: "5%",
                    }}
                  >
                    <Button
                      variant="outlined"
                      style={{
                        width: "90%",
                        display: apis[Number(key) - 1]
                          ? "inline-block"
                          : "none",
                      }}
                      onClick={() => {
                        let newKey =
                          Number(key) > 0 ? Number(key) - 1 : Number(key);
                        setKey(newKey.toString());
                        navigate(`/dev/${items[newKey].label}`);
                        window.scroll(0, 0);
                      }}
                    >
                      <IoArrowBack style={{ marginRight: "3%" }} />{" "}
                      <span>
                        Prev{" "}
                        {apis[Number(key) - 1]
                          ? "| " + apis[Number(key) - 1].title
                          : null}
                      </span>
                    </Button>
                  </Col>
                  <Col
                    span={12}
                    style={{
                      textAlign: "right",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingRight: "5%",
                    }}
                  >
                    <Button
                      style={{
                        width: "90%",
                        display: apis[Number(key) + 1]
                          ? "inline-block"
                          : "none",
                      }}
                      variant="outlined"
                      onClick={() => {
                        let newKey =
                          Number(key) < apis.length - 1
                            ? Number(key) + 1
                            : Number(key);
                        setKey(newKey.toString());
                        navigate(`/dev/${items[newKey].label}`);
                        window.scroll(0, 0);
                      }}
                    >
                      <span style={{ marginRight: "3%" }}>
                        Next
                        {apis[Number(key) + 1]
                          ? " | " + apis[Number(key) + 1].title
                          : null}
                      </span>{" "}
                      <IoArrowForward />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          ) : (
            <>
              <IconButton
                edge="end"
                aria-label="menu"
                sx={{ marginLeft: "auto" }}
                onClick={() => setToggle(!toggel)}
              >
                <FaList />
              </IconButton>
              <Drawer
                anchor="left"
                open={toggel}
                onClose={() => setToggle(!toggel)}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    width: "65%",
                    position: "absolute",
                    backgroundColor: "white",
                    top: "64px",
                    userSelect: "none",
                  },
                }}
              >
                <Menu
                  style={{ paddingTop: "5px", width: "100%", height: "100%" }}
                  onClick={(menuInfo) => {
                    setKey(menuInfo.key);
                    navigate(`/dev/${items[menuInfo.key].label}`);
                    setToggle(!toggel);
                    window.scroll(0, 0);
                  }}
                  mode="vertical"
                  className="ant-menu-item"
                  items={items}
                  selectedKeys={defaultItem}
                ></Menu>
              </Drawer>
              <Row>
                <Col span={24}>
                  <Typography>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: apis[Number(key)].body,
                      }}
                      style={{
                        paddingTop: "25px",
                        paddingLeft: "15px",
                        width: "100%",
                        minHeight: "650px",
                        paddingRight: "2%",
                      }}
                    />
                  </Typography>
                </Col>
              </Row>
              <Row>
                <Col
                  span={12}
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "1%",
                  }}
                >
                  <Button
                    variant="outlined"
                    style={{
                      width: "95%",
                      height: "60px",
                      display: apis[Number(key) - 1] ? "inline-block" : "none",
                    }}
                    onClick={() => {
                      let newKey =
                        Number(key) > 0 ? Number(key) - 1 : Number(key);
                      setKey(newKey.toString());
                      navigate(`/dev/${items[newKey].label}`);
                      window.scroll(0, 0);
                    }}
                  >
                    <IoArrowBack style={{ marginRight: "3%" }} />{" "}
                    <span>
                      Prev{" "}
                      {apis[Number(key) - 1]
                        ? " | " + apis[Number(key) - 1].title
                        : null}
                    </span>
                  </Button>
                </Col>
                <Col
                  span={12}
                  style={{
                    textAlign: "right",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingRight: "1%",
                  }}
                >
                  <Button
                    style={{
                      width: "100%",
                      height: "60px",
                      display: apis[Number(key) + 1] ? "inline-block" : "none",
                    }}
                    variant="outlined"
                    onClick={() => {
                      let newKey =
                        Number(key) < apis.length - 1
                          ? Number(key) + 1
                          : Number(key);
                      setKey(newKey.toString());
                      navigate(`/dev/${items[newKey].label}`);
                      window.scroll(0, 0);
                    }}
                  >
                    <span style={{ marginRight: "3%" }}>
                      Next
                      {apis[Number(key) + 1]
                        ? "| " + apis[Number(key) + 1].title
                        : null}
                    </span>{" "}
                    <IoArrowForward />
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </div>
      ) : err ? (
        <div
          style={{
            width: "100%",
            minHeight: "650px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color="orange">
            Get data problem, please try later
          </Typography>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            minHeight: "650px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
    </>
  );
}

export default API;
