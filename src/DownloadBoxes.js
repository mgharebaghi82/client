import { Button, Typography } from "@mui/material";
import { Col, Row } from "antd";
import { FaDownload } from "react-icons/fa";
import { SiWindows11 } from "react-icons/si";

function DownloadBoxes({ appType, icon }) {
  const downloadBox = {
    backgroundColor: "white",
    borderRadius: "5px",
    minHeight: "70px",
    marginTop: "30px",
  };

  const btnBox = {
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
    minHeight: "70px",
  };

  return (
    <>
      <Row style={downloadBox}>
        <Col
          xs={24}
          sm={24}
          md={1}
          lg={1}
          xl={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5px",
          }}
        >
          {icon}
        </Col>
        <Col
          xs={24}
          sm={24}
          md={21}
          lg={21}
          xl={21}
          style={{ display: "grid", alignItems: "center", padding: "10px", wordBreak:"break-word" }}
        >
          <Typography variant="h4">{appType}</Typography>
        </Col>
        <Col xs={24} sm={24} md={2} lg={2} xl={2} style={btnBox}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#011422",
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          >
            <Typography variant="h4" color="gray"><FaDownload /></Typography>
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default DownloadBoxes;
