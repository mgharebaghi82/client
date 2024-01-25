import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { Col, Divider, Row } from "antd";

function SseTrx() {
  const [trx, setTrx] = useState([]);

  useEffect(async () => {
    await fetchEventSource("http://45.15.157.62:3390/trxsse", {
      onmessage(ev) {
        console.log(ev.data);
        setTrx((prevData) => prevData.concat(JSON.parse(ev.data)));
      },
    });
  }, []);

  return (
    <div
      style={{
        minHeight: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        wordBreak: "break-all"
      }}
    >
      {trx.length > 0
        ? trx.map((transaction) => {
            return (
              <Row>
                <Col span={24}>
                  <Typography>{transaction.tx_hash}</Typography>
                  <Divider />
                </Col>
              </Row>
            );
          })
        : <span>no data</span>}
    </div>
  );
}

export default SseTrx;
