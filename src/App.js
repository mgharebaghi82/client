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
            <Route path="/card_data" element={<CardData />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </Content>
        <MyFooter />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
