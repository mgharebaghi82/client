import axios from "axios";
import { Col, Input, Row, Select } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { Container, Button, Typography } from "@mui/material";
import { HashLoader } from "react-spinners";
import "bootstrap/dist/css/bootstrap.min.css";

function InsertData() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [cat, setCat] = useState("None");
  const [loading, setLoading] = useState(false);
  const [dataSent, setDataSent] = useState(false);
  const [err, setErr] = useState(false);

  function send() {
    if (cat != "None") {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("body", body);
      formData.append("desc", desc);
      formData.append("img", img);
      formData.append("category", cat);
      axios
        .post("http://centichain.org:3002/post_data", formData)
        .then((res) => {
          setLoading(false);
          setDataSent(true);
        })
        .catch((err) => console.log(err));
    } else {
      setErr(true);
    }
  }

  function handleImage(e) {
    setImg(e.target.files[0]);
  }

  function handleSelect(value) {
    setCat(value);
  }

  return (
    <Container
      maxWidth="lg"
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        paddingTop: "50px",
      }}
    >
      <div style={{ width: "100%" }}>
        <Row>
          <Col span={3}>
            <Typography variant="h5">Title: </Typography>
          </Col>
          <Col span={17}>
            <Input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Col>
          <Col span={4}>
            <Select
              defaultValue="None"
              style={{ width: "98%", float: "right" }}
              onChange={handleSelect}
              options={[
                { value: "None", label: "None" },
                { value: "whitepaper", label: "whitepaper" },
                { value: "mainpage", label: "mainpage" },
              ]}
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col span={3}>
            <Typography variant="h5">Image: </Typography>
          </Col>
          <Col span={21}>
            <Input type="file" name="file" onChange={handleImage} />
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col span={3}>
            <Typography variant="h5">description: </Typography>
          </Col>
          <Col span={21}>
            <textarea
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              style={{
                width: "100%",
                height: "200px",
                resize: "none",
                borderColor: "lightgray",
                borderRadius: "5px",
                fontFamily: "sans-serif",
              }}
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col span={24}>
            <Editor
              apiKey="2xuwpiwtg6dpym37fkznj8mvxvgl0yknv717zz9p0jpyffrx"
              init={{
                plugins: "image code codesample",
                max_width: "100%",
                max_height: "700",
                image_class_list: [
                  // Bootstrap class
                  { title: "Responsive", value: "img-fluid" }, // Materialize class
                ],
              }}
              onEditorChange={(newValue) => {
                setBody(newValue);
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={send}
              style={{ marginTop: "20px", width: "300px" }}
            >
              Send Data
            </Button>
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            {loading ? (
              <>
                <HashLoader color="orange" />
              </>
            ) : dataSent ? (
              <span style={{ color: "green" }}>Card data sent</span>
            ) : err ? (
              <span style={{ color: "red" }}>Please choose a categore!</span>
            ) : null}
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default InsertData;
