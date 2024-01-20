import { Typography } from "@mui/material";
import { Card, Divider, Row } from "antd";
import windowsImg from "./Images/microsoft.png";
import appleImg from "./Images/apple.png";
import linuxImg from "./Images/linux.png";

function DownloadBoxes({ appType, icon }) {
  return (
    <>
      <Row style={{ padding: "2%" }}>
        <Card
          style={{ width: "100%", textAlign: "center" }}
          hoverable={true}
          onClick={() => {
            if (appType.includes("Windows")) {
              window.open("https://centichain.org/downloads/Centichain_0.9.1_x64_en-US.msi")
            }
          }}
        >
          <img
            src={
              appType.includes("Windows")
                ? windowsImg
                : appType.includes("Linux")
                ? linuxImg
                : appleImg
            }
            style={{ height: "200px" }}
          />
          <Divider />
          <Typography variant="h4">
            {appType.includes("Mac") || appType.includes("Linux") ? (
              <span style={{ color: "gray" }}>Comming soon...</span>
            ) : (
              appType
            )}
          </Typography>
        </Card>
      </Row>
    </>
  );
}

export default DownloadBoxes;
