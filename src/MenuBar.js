import { Home } from "@mui/icons-material";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiNewspaperLine, RiPassValidLine,RiCodeSSlashFill  } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
import { SiRelay  } from "react-icons/si";
import headImg from "./Images/C-Logo.png";

function MenuBar() {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const match = useMediaQuery("(min-width: 600px)");
  const [toggle, setToggle] = useState(false);
  const validator = "Become a Validator";
  const relay = "Become a Relay";
  const {title} = useParams();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/card_data") {
      setValue(null);
    }
    if (decodeURI(location.pathname) === `/dev/API Providers`) {
      setValue(4);
    }
    if (location.pathname === "/dl") {
      setValue(3);
    }
    if (location.pathname === "/whitepaper") {
      setValue(2);
    }
    if (location.pathname === "/Become%20a%20Relay") {
      setValue(1);
    }
    if (location.pathname === "/Become%20a%20Validator") {
      setValue(0);
    }
  }, [location]);

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "#011422" }}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
            if (toggle) {
              setToggle(false);
            }
            window.scroll(0, 0);
          }}
        >
          <Home />
        </div>
        {match ? (
          <Tabs
            sx={{ marginLeft: "auto" }}
            textColor="white"
            value={value}
            TabIndicatorProps={{ style: { backgroundColor: "white" } }}
            indicatorColor="secondary"
          >
            <Tab
              label="Become a Validator"
              onClick={() => {
                navigate(`/${validator}`);
                window.scroll(0, 0);
              }}
              icon={<RiPassValidLine />}
            />
            <Tab
              label="Become a Relay"
              onClick={() => {
                navigate(`/${relay}`);
                window.scroll(0, 0);
              }}
              icon={<SiRelay />}
            />
            <Tab
              label="WhitePaper"
              onClick={() => {
                navigate("/whitepaper");
                window.scroll(0, 0);
              }}
              icon={<RiNewspaperLine />}
            />
            <Tab
              label="Download"
              onClick={() => {
                navigate("/dl");
                window.scroll(0, 0);
              }}
              icon={<FaDownload />}
            />
            <Tab
              label="DEV"
              onClick={() => {
                let title = "API Providers"
                navigate(`/dev/${title}`);
                window.scroll(0, 0);
              }}
              icon={<RiCodeSSlashFill />}
            />
          </Tabs>
        ) : (
          <>
            <IconButton
              edge="end"
              aria-label="menu"
              sx={{ marginLeft: "auto" }}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <GiHamburgerMenu color="white" />
            </IconButton>
            <Drawer
              PaperProps={{
                elevation: 0,
                sx: {
                  width: "65%",
                  position: "absolute",
                  top: "64px",
                  backgroundColor: "#011422",
                  color: "white",
                },
              }}
              anchor="right"
              open={toggle}
              onClose={() => setToggle(!toggle)}
            >
              <List>
                <ListItem
                  key={1}
                  onClick={() => {
                    setToggle(!toggle);
                    navigate(`/${validator}`);
                    window.scroll(0, 0);
                  }}
                >
                  <ListItemText>
                    <div style={{ width: "100%" }}>
                      <RiPassValidLine
                        style={{ float: "left", marginTop: "3px" }}
                      />
                      <p style={{ float: "left", paddingLeft: "10px" }}>
                        Become a Validator
                      </p>
                    </div>
                  </ListItemText>
                </ListItem>

                <ListItem
                  key={2}
                  onClick={() => {
                    setToggle(!toggle);
                    navigate(`/${relay}`);
                    window.scroll(0, 0);
                  }}
                >
                  <ListItemText>
                    <div style={{ width: "100%" }}>
                      <SiRelay style={{ float: "left", marginTop: "3px" }} />
                      <p style={{ float: "left", paddingLeft: "10px" }}>
                        Become a Relay
                      </p>
                    </div>
                  </ListItemText>
                </ListItem>

                <ListItem
                  key={3}
                  onClick={() => {
                    setToggle(!toggle);
                    navigate("/whitepaper");
                    window.scroll(0, 0);
                  }}
                >
                  <ListItemText>
                    <div style={{ width: "100%" }}>
                      <RiNewspaperLine
                        style={{ float: "left", marginTop: "3px" }}
                      />
                      <p style={{ float: "left", paddingLeft: "10px" }}>
                        Whitepaper
                      </p>
                    </div>
                  </ListItemText>
                </ListItem>

                <ListItem
                  key={4}
                  onClick={() => {
                    setToggle(!toggle);
                    navigate("/dl");
                    window.scroll(0, 0);
                  }}
                >
                  <ListItemText>
                    <div style={{ width: "100%" }}>
                      <FaDownload
                        style={{
                          float: "left",
                          marginTop: "3px",
                          color: "white",
                        }}
                      />
                      <p
                        style={{
                          float: "left",
                          paddingLeft: "10px",
                          color: "white",
                        }}
                      >
                        Download
                      </p>
                    </div>
                  </ListItemText>
                </ListItem>

                <ListItem
                  key={5}
                  onClick={() => {
                    setToggle(!toggle);
                    navigate("/dev");
                    window.scroll(0, 0);
                  }}
                >
                  <ListItemText>
                    <div style={{ width: "100%" }}>
                      <RiCodeSSlashFill
                        style={{
                          float: "left",
                          marginTop: "3px",
                          color: "white",
                        }}
                      />
                      <p
                        style={{
                          float: "left",
                          paddingLeft: "10px",
                          color: "white",
                        }}
                      >
                        DEV
                      </p>
                    </div>
                  </ListItemText>
                </ListItem>
              </List>
              <div style={{ position: "absolute", bottom: "7%", width:"100%", display:"flex",justifyContent:"center", paddingBottom:"20px" }}>
                <img src={headImg} width="50%" />
              </div>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default MenuBar;
