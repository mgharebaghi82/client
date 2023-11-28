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
import Roadmap from "./Roadmap";

function First() {
  const [mainData, setMainData] = useState([]);
  const [dataLoaded, setDataLoade] = useState(false);
  useEffect(() => {
    axios.get("https://centichain.org/api").then((res) => {
      mainData.push(res.data);
      setMainData(mainData);
      setDataLoade(true);
    });
    document.title = "Centichain - Home";
  }, []);

  const id = "whats?";

  function learnClick() {
    const target = document.getElementById(id);
    const rect = target.getBoundingClientRect();

    window.scrollTo({
      top: rect.top + window.scrollY,
      behavior: "smooth",
    });
  }

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <MyHeader learnClick={learnClick} />
      <WtsExp id={id} />
      <WhyUseExp />
      <WhoRunExp />
      <CentiExp />
      <EnergyExp />
      <ConsensusExp />
      {dataLoaded && <CardsSection mainData={mainData} />}
      <Roadmap />
    </div>
  );
}

export default First;
