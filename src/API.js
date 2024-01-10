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

function API() {
  const [apis, setApis] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [err, setErr] = useState(false);
  const [items, setItems] = useState([]);
  const [key, setKey] = useState("0");
  const match = useMediaQuery("(min-width: 600px)");
  const [toggel, setToggle] = useState(false);

  useEffect(() => {
    document.title = "Centichain - RPC";
    axios
      .get("https://centichain.org/api/apis")
      .then((res) => {
        setApis(res.data);
        setDataLoaded(true);
        console.log(apis);
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

  return (
    <>
      {dataLoaded ? (
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
                    window.scroll(0, 0);
                  }}
                  mode="vertical"
                  className="ant-menu-item"
                  items={items}
                  selectedKeys={key}
                  defaultSelectedKeys={["0"]}
                ></Menu>
              </Col>
              <Col span={20}>
                <Row>
                  <Col span={24}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: apis[Number(key)].body,
                      }}
                      style={{
                        paddingTop: "25px",
                        paddingLeft: "15px",
                        width: "100%",
                        minHeight: "650px",
                      }}
                    />
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
                        width: "50%",
                        display: apis[Number(key) - 1]
                          ? "inline-block"
                          : "none",
                      }}
                      onClick={() => {
                        let newKey =
                          Number(key) > 0 ? Number(key) - 1 : Number(key);
                        setKey(newKey.toString());
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
                      paddingRight: "10%",
                    }}
                  >
                    <Button
                      style={{
                        width: "50%",
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
                    setToggle(!toggel);
                    window.scroll(0, 0);
                  }}
                  mode="vertical"
                  className="ant-menu-item"
                  items={items}
                  selectedKeys={key}
                  defaultSelectedKeys={[key]}
                ></Menu>
              </Drawer>
              <div
                dangerouslySetInnerHTML={{ __html: apis[Number(key)].body }}
                style={{
                  paddingTop: "25px",
                  paddingLeft: "15px",
                  width: "100%",
                  minHeight: "650px",
                }}
              />
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
                      display: apis[Number(key) - 1] ? "inline-block" : "none",
                    }}
                    onClick={() => {
                      let newKey =
                        Number(key) > 0 ? Number(key) - 1 : Number(key);
                      setKey(newKey.toString());
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
                      display: apis[Number(key) + 1] ? "inline-block" : "none",
                    }}
                    variant="outlined"
                    onClick={() => {
                      let newKey =
                        Number(key) < apis.length - 1
                          ? Number(key) + 1
                          : Number(key);
                      setKey(newKey.toString());
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
