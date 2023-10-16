import { Col, Row } from "antd";
function MyFooter() {
  return (
    <div style={{ float: "left", width: "100%" }}>
        <Row>
          <Col
            span={24}
            style={{ backgroundColor: "#020015", height: "400px", display:"grid", justifyContent:"center", alignContent:"center", color:"white" }}
          >
            <span style={{fontSize:"50px"}}>
                Footer
            </span>
          </Col>
        </Row>
    </div>
  );
}

export default MyFooter;
