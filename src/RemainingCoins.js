import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GiTwoCoins } from "react-icons/gi";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { Col, Row } from "antd";

function RemainingCoins() {
  const [centies, setCenties] = useState();
  useEffect(() => {
    axios
      .get("https://centichain.org/api/remaining_coins")
      .then((res) => {
        setCenties(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {centies ? (
        <Typography style={{ fontSize: "12px", color: "#858585" }}>
          <GiTwoCoins /> Remaining CENTIs: {centies}
        </Typography>
      ) : (
        <Oval
          visible={true}
          height="20"
          width="20"
          color="white"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
    </div>
  );
}

export default RemainingCoins;
