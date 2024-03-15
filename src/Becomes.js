import { Container, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DNA } from "react-loader-spinner";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Becomes() {
  const { title } = useParams();
  const [data, setData] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    document.title = "Centichain - " + title;
    axios
      .get("https://centichain.org/api/query_param?message=" + title)
      .then((res) => {
        setData(res.data);
        setDataLoaded(true);
        console.log(data);
      })
      .catch((e) => {
        setData(e);
        console.log(e);
      });
  }, [title]);

  return (
    <div
      style={{
        minHeight: "600px",
        width: "100%",
      }}
    >
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "white",
          paddingTop: "25px",
          boxShadow: "0px 0px 20px 3px #00000029",
        }}
      >
        <ThemeProvider theme={theme}>
          {dataLoaded ? (
            <Typography>
              <div dangerouslySetInnerHTML={{ __html: data.body }} />
            </Typography>
          ) : (
            <div
              style={{
                width: "100%",
                minHeight: "600px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
          )}
        </ThemeProvider>
      </Container>
    </div>
  );
}

export default Becomes;
