import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MyHeader from "./MyHeader";
import CardsSection from "./CardsSection";
import WtsExp from "./WtsExp";
import { useEffect, useState } from "react";
import axios from "axios";
import WhyUseExp from "./WhyUseExp";
import WhoRunExp from "./WhoRunExp";
import CentiExp from "./CentiExp";
import EnergyExp from "./EnergyExp";
import ConsensusExp from "./ConsensusExp";
import { Helmet } from "react-helmet";
import headImg from "./Images/C-Logo.png";

function First() {
  const [mainData, setMainData] = useState([]);
  const [dataLoaded, setDataLoade] = useState(false);
  useEffect(() => {
    axios.get("https://centichain.org:3002/").then((res) => {
      mainData.push(res.data);
      setMainData(mainData);
      setDataLoade(true);
    });
    document.title = "Centichain - Home";
  }, []);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Centichain is a decentralized digital asset which you can use as money or store of value. Like other decentralized digital assets, Centichain does not need a reliable third person (middlemen like the banks). However, it technically presents dissimilitude to others, something like a consensus mechanism, and so can be more effective for network participants with regard to energy consumption and cost. In fact, Centichain is a blockchain network for a safe value saving and transferring, both energy-wise and financial-wise."
        />
        <meta
          name="og:description"
          content="Centichain is a decentralized digital asset which you can use as money or store of value. Like other decentralized digital assets, Centichain does not need a reliable third person (middlemen like the banks). However, it technically presents dissimilitude to others, something like a consensus mechanism, and so can be more effective for network participants with regard to energy consumption and cost. In fact, Centichain is a blockchain network for a safe value saving and transferring, both energy-wise and financial-wise."
        />
        <meta property="og:image" content={headImg} />
        <meta property="twitter:image" content={headImg} />
        <meta property="og:site_name" content="Centichain"/>
        <meta property="og:url" content="https://centichain.org"/>
        <meta name="twitter:description" content="Centichain is a decentralized digital asset which you can use as money or store of value. Like other decentralized digital assets, Centichain does not need a reliable third person (middlemen like the banks). However, it technically presents dissimilitude to others, something like a consensus mechanism, and so can be more effective for network participants with regard to energy consumption and cost. In fact, Centichain is a blockchain network for a safe value saving and transferring, both energy-wise and financial-wise." />
        <meta name="twitter:card" content="summary_large_image"/>
      </Helmet>
      <MyHeader />
      <WtsExp />
      <WhyUseExp />
      <WhoRunExp />
      <CentiExp />
      <EnergyExp />
      <ConsensusExp />
      {dataLoaded && <CardsSection mainData={mainData} />}
    </div>
  );
}

export default First;
