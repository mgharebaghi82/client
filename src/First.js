import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MyHeader from "./MyHeader";
import CardsSection from "./CardsSection";
import IntroduceComp from "./IntroduceComp";
import { useEffect, useState } from "react";
import axios from "axios";
import ExplainFair from "./ExplainFair";
import BecomeAnode from "./BecomeAnode";
import SafeConnectionExplain from "./SafeConnetionExplain";

function First() {
  const [mainData, setMainData] = useState([]);
  const [dataLoaded, setDataLoade] = useState(false);
  useEffect(() => {
    axios.get("http://79.137.203.173:3002/").then((res) => {
      mainData.push(res.data);
      setMainData(mainData);
      setDataLoade(true);
      console.log(mainData);
    });
  }, []);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
          <MyHeader />
          <IntroduceComp />
          <ExplainFair />
          <BecomeAnode />
          <SafeConnectionExplain />
          {dataLoaded && <CardsSection mainData={mainData} />}
    </div>
  );
}

export default First;
