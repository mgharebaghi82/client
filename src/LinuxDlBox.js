import { Alert, Button, Snackbar, Typography } from "@mui/material";
import { Col, Row, message } from "antd";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";

function LinuxDlBox({ icon, text }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason == "clickaway") {
      return;
    }
    setOpen(false);
  }

  const downloadBox = {
    backgroundColor: "white",
    borderRadius: "5px",
    minHeight: "70px",
    marginTop: "30px",
    marginBottom: "30px",
  };

  const btnBox = {
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
    minHeight: "70px",
  };

  return (
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
        style={{
          display: "grid",
          alignItems: "center",
          padding: "10px",
          wordBreak: "break-word",
        }}
      >
        <Typography variant="h5">{text}</Typography>
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
          onClick={() => {
            if (text !== "Comming soon...") {
              navigator.clipboard.writeText(text);
              handleOpen();
            }
          }}
        >
          <Typography
            variant="h4"
            color={text !== "Comming soon..." ? "white" : "gray"}
          >
            <FaCopy />
          </Typography>
        </Button>
      </Col>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Commands copied!
        </Alert>
      </Snackbar>
    </Row>
  );
}

export default LinuxDlBox;
