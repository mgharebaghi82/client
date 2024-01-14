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
import { Helmet } from "react-helmet";
const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <CssBaseline />
      <BrowserRouter>
        <Header>
          <Helmet>
            <meta
              name="description"
              content="Centichain is a blockchain network that allows anyone to join and participate without any special requirements."
            />

            {/* <!-- Google / Search Engine Tags --> */}
            <meta itemprop="name" content="Centichain" />
            <meta
              itemprop="description"
              content="Centichain is a blockchain network that allows anyone to join and participate without any special requirements."
            />
            <meta
              itemprop="image"
              content="http://centichain.org/static/media/C-Logo.a2c978f558ee73e0eac5.png"
            />

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content="https://centichain.org" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Centichain" />
            <meta
              property="og:description"
              content="Centichain is a blockchain network that allows anyone to join and participate without any special requirements."
            />
            <meta
              property="og:image"
              content="http://centichain.org/static/media/C-Logo.a2c978f558ee73e0eac5.png"
            />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Centichain" />
            <meta
              name="twitter:description"
              content="Centichain is a blockchain network that allows anyone to join and participate without any special requirements."
            />
            <meta
              name="twitter:image"
              content="http://centichain.org/static/media/C-Logo.a2c978f558ee73e0eac5.png"
            />
          </Helmet>
          <MenuBar />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/post_data" element={<InsertData />} />
            <Route path="/cards/:title" element={<CardData />} />
            <Route path="/whitepaper" element={<Docs />} />
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
