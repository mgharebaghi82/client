import "./App.css";
import "./prism.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./First";
import InsertData from "./InsertData";
import Whitepaper from "./Whitepaper";
import { Layout } from "antd";
import MenuBar from "./MenuBar";
import { CssBaseline } from "@mui/material";
import MyFooter from "./Footer";
import Notfound from "./Notfound";
import Download from "./Download";
import API from "./API";
import Becomes from "./Becomes";
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
            <Route path="/becomes/:title" element={<Becomes />} />
            <Route path="/post_data" element={<InsertData />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/dl" element={<Download />} />
            <Route path="/dev/:title" element={<API />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Content>
        <MyFooter />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
