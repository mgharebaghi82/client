import { Button, Typography } from "@mui/material";
import headImg from "./Images/_8d95dcfd-0ab4-48a5-a00f-62bda94d84b4.jpg";
import { Download } from "@mui/icons-material";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function MyHeader() {
  return (
    <div
      style={{
        width: "100%",
        backgroundImage: `url(${headImg})`,
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        height: "700px",
        backgroundColor: "#000522",
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        float: "left",
        userSelect: "none",
        overflowWrap: "break-word",
      }}
    >
      <div
        style={{
          color: "white",
          position: "relative",
          width: "60%",
          top: "5%",
          textAlign: "center",
          margin: "auto",
          padding: "5px",
          overflowWrap: "break-word",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h3" style={{ textShadow: "2px 0px 10px white" }}>
            Centipede Core
          </Typography>
          <br />
          <Typography
            variant="overline"
            style={{
              marginTop: "20px",
              color: "yellow",
              overflowWrap: "break-word",
            }}
          >
            Without having a strange system or a very powerful computer, you can
            operate in the network and receive the reward of being in the
            network.
          </Typography>
        </ThemeProvider>
        <br />
        <br />
        <Button variant="contained">
          <Download /> Comming soon...
        </Button>
      </div>
    </div>
  );
}

export default MyHeader;
