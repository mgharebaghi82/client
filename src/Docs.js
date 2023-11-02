import { Button, Col, Divider, Tabs, Row } from "antd";
import Item from "antd/es/list/Item";
import { useEffect, useState } from "react";
import axios from "axios";
import { BounceLoader } from "react-spinners";
import { Container } from "@mui/material";

function Docs() {
  const [whitepaper, setWhitepaper] = useState([]);
  const [dataLoad, setDataLoad] = useState(false);
  const parse = require("html-react-parser");
  const [activeKey, setActiveKey] = useState("0");
  const [nextDisable, setNextDisable] = useState(0);
  const [prevDisable, setPrevDisable] = useState(0);

  //   get whitepapers data from backend after component loaded
  useEffect(() => {
    axios.get("https://centichain.org:3002/whitepaper").then((res) => {
    //   whitepaper.push(res.data);
      setWhitepaper((prevData) => prevData.concat(res.data));
      setDataLoad(true);
    });

    document.title = "Centichain - Whitepaper"
  }, []);

  useEffect(() => {
    let akey = parseInt(activeKey);
    if (whitepaper.length > 0 && akey + 1 >= whitepaper.length) {
      setNextDisable(1);
    } else {
      setNextDisable(0);
    }

    if (akey == 0) {
        setPrevDisable(1)
    } else {
        setPrevDisable(0)
    }
  }, [activeKey]);

  //   handle next button
  const nextHandle = () => {
    let akey = parseInt(activeKey) + 1;
    if (akey <= whitepaper.length) {
      setActiveKey(akey.toString());
      window.scroll(0, 0);
    }
  };

  //   handle prev butoon
  const prevHandle = () => {
    let akey = parseInt(activeKey) - 1;
    if (akey >= 0) {
      setActiveKey(akey.toString());
      window.scroll(0, 0);
    }
  };

  //   handle change tabs
  const onChange = (key) => {
    setActiveKey(key + "");
  };

  return (
    <div style={{ width: "100%", paddingTop: "20px", paddingBottom: "20px" }}>
      {dataLoad ? (
        <Container maxWidth="lg">
          <Tabs
            type="line"
            tabPosition="left"
            style={{ minHeight: "500px" }}
            activeKey={activeKey}
            onChange={onChange}
          >
            {whitepaper.map((data, i) => (
              <Item key={i + ""} tab={data.title}>
                <Row>
                  <Col span={24}>{parse(data.body)}</Col>
                </Row>
                <Divider />
                <Row>
                  <Col span={3}>
                    <Button onClick={prevHandle} disabled={prevDisable}>
                      Prev
                    </Button>
                  </Col>
                  <Col span={16}></Col>
                  <Col span={3}>
                    <Button
                      onClick={nextHandle}
                      disabled={nextDisable}
                    >
                      Next
                    </Button>
                  </Col>
                </Row>
              </Item>
            ))}
          </Tabs>
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
