import { Typography } from "@mui/material";
import { Col, Row } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DevContent({key, apis}) {

  return (
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
  );
}

export default DevContent;
