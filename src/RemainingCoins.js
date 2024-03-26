import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GiTwoCoins } from "react-icons/gi";
import axios from "axios";
import { Oval } from "react-loader-spinner";

function RemainingCoins() {
  const [centies, setCenties] = useState();
  const [loading, setLoading] = useState(true);
  const socket = new WebSocket("wss://centichain.org/api/wsutxo");
  useEffect(() => {
    axios
      .get("https://centichain.org/api/remaining_coins")
      .then((res) => {
        setCenties(res.data);
        setLoading(false);
      })
      .then(async () => {
        socket.onmessage = (event) => {
          setCenties(event.data);
        };
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {!loading ? (
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
