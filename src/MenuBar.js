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
import {
  RiNewspaperLine,
  RiPassValidLine,
  RiCodeSSlashFill,
} from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
import { SiRelay } from "react-icons/si";
import headImg from "./Images/C-Logo.png";
import RemainingCoins from "./RemainingCoins";
import { Col } from "antd";

function MenuBar() {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const match = useMediaQuery("(min-width: 600px)");
  const [toggle, setToggle] = useState(false);
  const validator = "Become A Validator";
  const relay = "Become A Relay";

  useEffect(() => {
    if (location.pathname === "/") {
      setValue(null);
    }
    if (decodeURI(location.pathname).split("/")[1] === "dev") {
      setValue(4);
    }
    if (location.pathname === "/dl") {
      setValue(3);
    }
    if (location.pathname === "/whitepaper") {
      setValue(2);
    }
    if (decodeURI(location.pathname).split("/")[2] === relay) {
      setValue(1);
    }
    if (decodeURI(location.pathname).split("/")[2] === validator) {
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
        <div
          style={{
            marginLeft: "20px",
            paddingTop: "10px",
            userSelect: "none",
          }}
        >
          <RemainingCoins />
        </div>
        {match ? (
          <Tabs
            key={0}
            sx={{ marginLeft: "auto" }}
            textColor="white"
            value={value}
            TabIndicatorProps={{ style: { backgroundColor: "white" } }}
            indicatorColor="secondary"
          >
            <Tab
              key={1}
              label="Validator"
              onClick={() => {
                navigate(`/becomes/${validator}`);
                window.scroll(0, 0);
              }}
              icon={<RiPassValidLine />}
            />
            <Tab
              key={2}
              label="Relay"
              onClick={() => {
                navigate(`/becomes/${relay}`);
                window.scroll(0, 0);
              }}
              icon={<SiRelay />}
            />
            <Tab
              key={3}
              label="WhitePaper"
              onClick={() => {
                navigate("/whitepaper");
                window.scroll(0, 0);
              }}
              icon={<RiNewspaperLine />}
            />
            <Tab
              key={4}
              label="Download"
              onClick={() => {
                navigate("/dl");
                window.scroll(0, 0);
              }}
              icon={<FaDownload />}
            />
            <Tab
              key={5}
              label="DEV"
              onClick={() => {
                let title = "API Providers";
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
                    navigate(`/becomes/${validator}`);
                    window.scroll(0, 0);
                  }}
                >
                  <ListItemText>
                    <div style={{ width: "100%" }}>
                      <RiPassValidLine
                        style={{ float: "left", marginTop: "3px" }}
                      />
                      <p style={{ float: "left", paddingLeft: "10px" }}>
                        Validator
                      </p>
                    </div>
                  </ListItemText>
                </ListItem>

                <ListItem
                  key={2}
                  onClick={() => {
                    setToggle(!toggle);
                    navigate(`/becomes/${relay}`);
                    window.scroll(0, 0);
                  }}
                >
                  <ListItemText>
                    <div style={{ width: "100%" }}>
                      <SiRelay style={{ float: "left", marginTop: "3px" }} />
                      <p style={{ float: "left", paddingLeft: "10px" }}>
                        Relay
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
                    let title = "API Providers";
                    navigate(`/dev/${title}`);
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
              <div
                style={{
                  position: "absolute",
                  bottom: "7%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  paddingBottom: "20px",
                }}
              >
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
