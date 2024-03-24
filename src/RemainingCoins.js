import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GiTwoCoins } from "react-icons/gi";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { fetchEventSource } from "@microsoft/fetch-event-source";

function RemainingCoins() {
  const [centies, setCenties] = useState([]);
  useEffect(() => {
    axios
      .get("https://centichain.org/api/remaining_coins")
      .then((res) => {
        setCenties(res.data);
      })
      .then(async () => {
        await fetchEventSource("https://centichain.org/api/utxosse", {
          onmessage(ev) {
            console.log(ev)
            // setCenties(ev.data);
          },
        })
      }).catch((e) => console.log(e));
  }, []);

  // useEffect(async () => {
  //   await fetchEventSource("https://centichain.org/api/utxosse", {
  //     onmessage: (ev) => {
  //       console.log(ev.data);
  //     }
  //   })
  // }, [centies])

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
