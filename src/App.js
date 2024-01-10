import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./First";
import InsertData from "./InsertData";
import CardData from "./CardData";
import Docs from "./Docs";
import { Layout } from "antd";
import MenuBar from "./MenuBar";
import { CssBaseline } from "@mui/material";
import MyFooter from "./Footer";
import Notfound from "./Notfound";
import Download from "./Download";
import API from "./API";
const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <CssBaseline />
      <BrowserRouter>
        <Header>
          <MenuBar />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/post_data" element={<InsertData />} />
            <Route path="/:title" element={<CardData />}/>
            <Route path="/whitepaper" element={<Docs />} />
            <Route path="/dl" element={<Download />} />
            <Route path="/RPC" element={<API />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </Content>
        <MyFooter />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
