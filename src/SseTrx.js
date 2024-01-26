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
        wordBreak: "break-all",
      }}
    >
      {trx.length > 0 ? (
        trx.map((transaction) => {
          return (
            <Row>
              <Col span={24}>
                {/* <Typography>hash: {transaction.block_number}</Typography> */}
                <Typography>hash: {transaction.tx_hash}</Typography>
                {/* <Typography>from: {transaction.tx_hash}</Typography>
                <Typography>to: {transaction.tx_hash}</Typography>
                <Typography>value: {transaction.tx_hash}</Typography>
                <Typography>fee: {transaction.tx_hash}</Typography>
                <Typography>fee: {transaction.tx_hash}</Typography>
                <Typography>status: {transaction.tx_hash}</Typography>
                <Typography>description: {transaction.tx_hash}</Typography> */}
                <Divider />
              </Col>
            </Row>
          );
        })
      ) : (
        <span>no data</span>
      )}
    </div>
  );
}

export default SseTrx;
