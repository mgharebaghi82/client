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
      <MyHeader />
      <WtsExp/>
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
