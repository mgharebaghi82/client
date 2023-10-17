import { Home } from "@mui/icons-material";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MenuBar() {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/card_data") {
      setValue(null);
    }
    if (location.pathname === "/whitepaper") {
      setValue(0);
    }
  }, [location]);

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#020015" }}>
      <Toolbar>
        <div style={{ cursor: "pointer" }} onClick={() => {
          navigate("/")
          window.scroll(0,0)
        }}>
          <Home />
        </div>
        <Tabs
          sx={{ marginLeft: "auto" }}
          textColor="white"
          value={value}
          TabIndicatorProps={{ style: { backgroundColor: "white" } }}
          indicatorColor="secondary"
        >
          <Tab
            label="WhitePaper"
            onClick={() => {
              navigate("/whitepaper");
              window.scroll(0, 0)
            }}
          
          />
          <Tab label="Download" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default MenuBar;
