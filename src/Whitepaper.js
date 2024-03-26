import { Col, Divider, Row, Table } from "antd";
import { Container, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import patience from "./Images/Patience-beside_computer.png";
import pop from "./Images/proof_of_patience.png";
import rd from "./Images/relays-diagram.png";
import { TiPencil } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { ImCancelCircle } from "react-icons/im";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdDownload } from "react-icons/io";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Docs() {
  useEffect(() => {
    document.title = "Centichain - Whitepaper";
    AOS.init({ duration: "1000" });
  }, []);

  const dataSource = [
    {
      key: "1",
      need: (
        <ThemeProvider theme={theme}>
          <Typography fontWeight="bold">Needing a special hardware</Typography>
        </ThemeProvider>
      ),
      PoP: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
      PoW: <TiTick color="green" style={{ width: "25px", height: "25px" }} />,
      PoS: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
      PoET: <TiTick color="green" style={{ width: "25px", height: "25px" }} />,
    },
    {
      key: "2",
      need: (
        <ThemeProvider theme={theme}>
          <Typography fontWeight="bold">Needing to stake assets</Typography>
        </ThemeProvider>
      ),
      PoP: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
      PoW: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
      PoS: <TiTick color="green" style={{ width: "25px", height: "25px" }} />,
      PoET: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
    },
    {
      key: "3",
      need: (
        <ThemeProvider theme={theme}>
          <Typography fontWeight="bold">
            Preventing concentration of power
          </Typography>
        </ThemeProvider>
      ),
      PoP: <TiTick color="green" style={{ width: "25px", height: "25px" }} />,
      PoW: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
      PoS: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
      PoET: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
    },
    {
      key: "4",
      need: (
        <ThemeProvider theme={theme}>
          <Typography fontWeight="bold">
            Being impervious to 51% attacks
          </Typography>
        </ThemeProvider>
      ),
      PoP: <TiTick color="green" style={{ width: "25px", height: "25px" }} />,
      PoW: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
      PoS: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
      PoET: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
    },
    {
      key: "5",
      need: (
        <ThemeProvider theme={theme}>
          <Typography fontWeight="bold">Effectiveness</Typography>
        </ThemeProvider>
      ),
      PoP: <TiTick color="green" style={{ width: "25px", height: "25px" }} />,
      PoW: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
      PoS: <TiTick color="green" style={{ width: "25px", height: "25px" }} />,
      PoET: <TiTick color="green" style={{ width: "25px", height: "25px" }} />,
    },
    {
      key: "6",
      need: (
        <ThemeProvider theme={theme}>
          <Typography fontWeight="bold">Stability</Typography>
        </ThemeProvider>
      ),
      PoP: <TiTick color="green" style={{ width: "25px", height: "25px" }} />,
      PoW: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
      PoS: <TiTick color="green" style={{ width: "25px", height: "25px" }} />,
      PoET: <TiTick color="green" style={{ width: "25px", height: "25px" }} />,
    },
    {
      key: "7",
      need: (
        <ThemeProvider theme={theme}>
          <Typography fontWeight="bold">Clarity</Typography>
        </ThemeProvider>
      ),
      PoP: <TiTick color="green" style={{ width: "25px", height: "25px" }} />,
      PoW: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
      PoS: <TiTick color="green" style={{ width: "25px", height: "25px" }} />,
      PoET: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
    },
    {
      key: "8",
      need: (
        <ThemeProvider theme={theme}>
          <Typography fontWeight="bold">Justice</Typography>
        </ThemeProvider>
      ),
      PoP: <TiTick color="green" style={{ width: "25px", height: "25px" }} />,
      PoW: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
      PoS: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
      PoET: (
        <ImCancelCircle color="red" style={{ width: "20px", height: "20px" }} />
      ),
    },
  ];

  const columns = [
    {
      title: null,
      dataIndex: "need",
      key: "key",
    },
    {
      title: "PoP",
      dataIndex: "PoP",
      key: "key",
    },
    {
      title: "PoW",
      dataIndex: "PoW",
      key: "key",
    },
    {
      title: "PoS",
      dataIndex: "PoS",
      key: "key",
    },
    {
      title: "PoET",
      dataIndex: "PoET",
      key: "key",
    },
  ];

  return (
    <>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="lg"
          style={{
            backgroundColor: "white",
            paddingTop: "25px",
            boxShadow: "0px 0px 20px 3px #00000029",
          }}
        >
          {/* Introduction section */}
          <Row>
            <Col span={24}>
              <ThemeProvider theme={theme}>
                <Typography variant="h4" fontWeight="bold" color="#004750">
                  Achieving High Scalability and Low Cost in a Blockchain
                  Network
                </Typography>
                <Typography variant="h6">
                  This whitepaper presents a new blockchain network that offers
                  a unique consensus mechanism and user-friendly features.
                  Unlike other blockchain networks, this one does not require
                  any special or powerful hardware, or any kind of asset
                  staking, to join and participate.
                </Typography>
              </ThemeProvider>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={24}>
              <ThemeProvider theme={theme}>
                <Typography variant="h5" fontWeight="bold">
                  Introduction
                </Typography>
                <Typography>
                  Consensus mechanisms are used to confirm trades and generate
                  new blocks in blockchain networks. Usually, these systems
                  either need strong hardware with a high energy consumption,
                  investments from users to enter the network, a very special
                  hardware or a combination of them. <b>Proof of Work(PoW)</b>
                  <sup>[1]</sup>, as an example, needs miners which are
                  computationally powerful to solve complicated puzzles, leading
                  to a high energy consumption and also concentration of power
                  be in the hands of a few. <b>Proof of Stake(PoS)</b>
                  <sup>[2]</sup> needs stockholders to stake their assets in the
                  network. That gives rise to inequality since having more
                  stocks increases the chances of being block generators. The{" "}
                  <b>Proof of Elapsed Time(PoET)</b>
                  <sup>[3]</sup> consensus mechanism has been near to a
                  solution, but as it needs a very precise time computation,
                  queue management may be affected – even a bit. POET is also
                  vague and could lower the certainty of choosing the block
                  generator. Having more processors and more memory might raise
                  the chance of the generator choosing, it leads to
                  concentration and lack of justice though.
                </Typography>
              </ThemeProvider>
            </Col>
          </Row>
          <Divider />
          {/* Solution section */}
          <Row>
            <Col span={24}>
              <ThemeProvider theme={theme}>
                <Typography variant="h5" fontWeight="bold">
                  A Fair and Scalable Consensus Mechanism for Blockchain
                  Networks
                </Typography>
                <Typography>
                  <b>Proof of Patience (PoP)</b> is a new consensus mechanism to
                  overcome these weaknesses. In this mechanism, the block
                  generators are chosen in turn and each node in the network has
                  an equal chance of being the next. To do this, the current
                  generator selects a random node as the next generator (leader)
                  to create a new block, and that node cannot be the leader
                  again until every other node in the network has created at
                  least one block.
                </Typography>
                <br />
                <Typography variant="h5" fontWeight="bold">
                  The Proof of Patience consensus mechanism has several
                  advantages over other existing mechanisms;
                </Typography>
                <Typography>
                  First, the process is transparent and the current leader
                  chooses the next one among all the network members. Second,
                  the system is fair and every member has an equal chance of
                  being the leader. Third, no node requires special hardware or
                  has to stake its assets in the network, which simplifies the
                  consensus. In contrast, the Proof of Elapsed Time consensus
                  mechanism needs precise time computation, which may affect
                  queue management and lower the certainty of choosing the
                  leader. Moreover, having more processors and more memory might
                  increase the chance of being the leader, but this also leads
                  to concentration and lack of justice. In the Proof of Patience
                  mechanism, the number of blocks matters, not the time.
                  Therefore, each node has to wait until all the members create
                  a block before it can be the leader again.
                </Typography>
              </ThemeProvider>
            </Col>
          </Row>
          <Row style={{ marginTop: "25px" }}>
            <Col
              span={24}
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img
                alt="Proof of Patience"
                src={pop}
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={24}>
              <ThemeProvider theme={theme}>
                <Typography variant="h5" fontWeight="bold">
                  Possible Questions and Answers
                </Typography>
                <Typography fontWeight="bold" color="#0072D8 ">
                  How does the system handle new nodes joining the network?
                </Typography>
                <Typography>
                  The system’s solution is to make each new node wait for a
                  complete round, meaning that the new node cannot be the leader
                  until all the nodes have created a block since the newcomer’s
                  arrival. This way, the new node proves its patience to get
                  into the queue of eligible nodes.
                </Typography>

                <Typography fontWeight="bold" color="#0072D8 ">
                  What happens if the next generator chosen by the current
                  leader has left the network?
                </Typography>
                <Typography>
                  The current leader selects a new generator and the process
                  continues until an online leader is found.
                </Typography>

                <Typography fontWeight="bold" color="#0072D8 ">
                  How does the leader choose the next generator?
                </Typography>
                <Typography>
                  The answer is simple: randomly! Being a leader only once
                  ensures the fairness of the system, because the current leader
                  is removed from the queue as soon as they create a block.
                </Typography>

                <Typography fontWeight="bold" color="#0072D8 ">
                  Who chooses the leader if the current leader has left the
                  network?
                </Typography>
                <Typography>
                  In this case, Proof of Patience defines the last existing
                  block generator in the network as the one who chooses the new
                  leader among the eligible nodes. Remember that the chosen node
                  only selects the new leader and does not have any more chances
                  to create a block.
                </Typography>
              </ThemeProvider>
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col span={24} style={{ textAlign: "center" }}>
              <ThemeProvider theme={theme}>
                <Typography variant="h4" fontWeight="bold">
                  A general comparison
                </Typography>
              </ThemeProvider>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              style={{ marginTop: "25px" }}
            >
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                style={{ maxWidth: "100%" }}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col span={24}>
              <ThemeProvider theme={theme}>
                <Typography variant="h5" fontWeight="bold">
                  Network Capacity
                </Typography>
                <Typography>
                  Centichain uses a separate chain as a communication relay.
                  This chain consists of computers with public and accessible
                  addresses, which are called relay nodes in the Centichain
                  network.
                  <br /> Relay nodes have no other task than to deliver messages
                  to validator nodes and, of course, they also receive rewards
                  for it. In fact, each validator in the network connects to a
                  relay node, and the relay node sends the messages of the
                  validator using the <b>gossip protocol</b>
                  <sup>[4]</sup> to other validators that are connected to it.
                  Each relay node can have more than one validator connected.
                  Centichain does not use <b>port forwarding</b>
                  <sup>[5]</sup>
                  at all, which preserves the security of the participants and
                  makes it easier to become a validator. Therefore, there is no
                  need to configure the modem for port forwarding or use a VPN
                  to bypass <b>NAT</b>
                  <sup>[6]</sup> to be a validator in the Centichain network,
                  and it is easy to become a validator without any special
                  configuration and with a home internet. In addition, a user
                  with a public IP address or even a Virtual Private Server
                  (VPS) or dedicated server can also be a relay node, in
                  addition to being a validator, to help expand the network and
                  receive more rewards for their role as a relay node.
                </Typography>

                <Typography fontWeight="bold" color="#0072D8 ">
                  If a relay node leaves the network, what happens to the
                  validators that are connected to it?
                </Typography>
                <Typography>
                  In this case, Centichain immediately forces the validator to
                  contact other relay nodes and reconnect to the network.
                  Therefore, validators always keep a list of available relay
                  nodes in the network, so that they can connect to another
                  relay node as soon as their connection is interrupted and
                  synchronize with the network.
                </Typography>
              </ThemeProvider>
            </Col>
          </Row>
          <Row style={{ marginTop: "25px" }}>
            <Col
              span={24}
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img
                alt="Proof of Patience"
                src={rd}
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col span={24}>
              <ThemeProvider theme={theme}>
                <Typography variant="h5" fontWeight="bold">
                  Transaction Legitimacy
                </Typography>
                <Typography>
                  Centichain uses common cryptography to secure transactions on
                  the network. Centichain uses the{" "}
                  <b>ECDSA public key encryption</b>
                  <sup>[7]</sup>
                  model to secure transactions in the presence of relay nodes
                  and prevent <b>MITM attack</b>
                  <sup>[8]</sup>. In fact, every message sent on the network has
                  a digital signature. Hashing Also, for hashing blocks and
                  transactions, Centichain uses the <b>SHA-256 algorithm</b>
                  <sup>[9]</sup>
                  to ensure the immutability of information.
                </Typography>
              </ThemeProvider>
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col span={24}>
              <ThemeProvider theme={theme}>
                <Typography variant="h5" fontWeight="bold">
                  CENTI, Supply, Halving, UTXO
                </Typography>
                <Typography>
                  CENTI is a cryptocurrency that uses Centichain to record and
                  verify its transactions. In fact, CENTI is the native coin of
                  the Centichain network. All rewards and transaction fees are
                  paid in CENTI.
                  <br />
                  The total supply of CENTI will be 21 million, as a tribute to
                  Bitcoin. Also, initially, the reward for each validator who
                  verifies and records transactions on the ledger is 50 CENTI.
                  Of course, it should be noted that Centichain has a{" "}
                  <b>halving</b>
                  <sup>[10]</sup>
                  schedule, and the reward for validators is halved after the
                  production of every 150,000 blocks. Centichain uses 150,000 as
                  the halving interval because it does not require computational
                  puzzles for block production. It should also be noted that the
                  reward for relay nodes is one percent of the fee for each
                  transaction that is included in the block produced by the
                  validators connected to it.
                  <br />
                  to prevent the double-spending problem, Centichain uses the
                  <b>UTXO</b>
                  <sup>[11]</sup> model for its transactions. In the UTXO model,
                  each transaction spends some of the UTXOs (unspent transaction
                  outputs) that the sender has. The receiver then receives new
                  UTXOs as a result of the transaction. This model ensures that
                  each UTXO can only be spent once.
                </Typography>
              </ThemeProvider>
            </Col>
          </Row>
          <Divider />
          <Row style={{ marginBottom: "40px" }}>
            <Col span={24}>
              <ThemeProvider theme={theme}>
                <Typography variant="h5" fontWeight="bold">
                  Advantages
                </Typography>
                <Typography style={{ lineHeight: "1.7", color: "#004750" }}>
                  <b>
                    Bearing the foregoing in mind, Centichain has these
                    benefits:
                  </b>
                  <br />
                  <TiPencil color="green" /> It does not need to have a special
                  hardware nor stake assets.
                  <br />
                  <TiPencil color="green" /> It prevents the concentration of
                  power.
                  <br />
                  <TiPencil color="green" /> It is impervious to 51% attacks.
                  <br />
                  <TiPencil color="green" /> It is effective and stable.
                  <br />
                  <TiPencil color="green" /> It is decentralized completely.
                  <br />
                  <TiPencil color="green" /> It is totally clear.
                  <br />
                  <TiPencil color="green" /> It is easy to use.
                  <br />
                  <TiPencil color="green" /> It is safe.
                  <br />
                  <TiPencil color="green" /> It is anti-inflammatory.
                  <br />
                  <TiPencil color="green" /> It is fast.
                </Typography>
                <Divider />
                <Typography variant="h5" fontWeight="bold">
                  Conclusion
                </Typography>
                <Typography>
                  In summary, this paper has presented a new consensus mechanism
                  and a new blockchain network that offer several benefits over
                  existing ones. Proof of Patience is a promising consensus
                  mechanism that solves the problems of other consensus
                  mechanisms and is suitable for blockchain networks that seek
                  high safety, effectiveness, and stability. Centichain is also
                  easy to use, and anyone with a simple computer and home
                  internet can use it without the need for any specialized
                  knowledge or skills. In addition, Centichain is
                  anti-inflationary and affordable because of the limited supply
                  of CENTI. Centichain uses the UTXO model for its transactions.
                  In the UTXO model, each transaction spends some of the UTXOs
                  (unspent transaction outputs) that the sender has. The
                  receiver then receives new UTXOs as a result of the
                  transaction. This model ensures that each UTXO can only be
                  spent once.
                </Typography>
                <Divider />
                <Typography>
                  <a
                    href="https://centichain.org/downloads/CentichainWhitepaper01.pdf"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <IoMdDownload /> Download the whitepaper in PDF format
                  </a>
                </Typography>
                <Divider />
                <Typography variant="h5">References</Typography>
                <Typography>
                  [1]{" "}
                  <a
                    href="https://www.geeksforgeeks.org/blockchain-proof-of-work-pow/"
                    target="_blank"
                  >
                    https://www.geeksforgeeks.org/blockchain-proof-of-work-pow/
                  </a>
                </Typography>
                <Typography>
                  [2]{" "}
                  <a
                    href="https://www.geeksforgeeks.org/proof-of-stake-pos-in-blockchain/?ref=lbp"
                    target="_blank"
                  >
                    https://www.geeksforgeeks.org/proof-of-stake-pos-in-blockchain/?ref=lbp
                  </a>
                </Typography>
                <Typography>
                  [3]{" "}
                  <a
                    href="https://www.geeksforgeeks.org/proof-of-elapsed-time-poet-in-blockchain/"
                    target="_blank"
                  >
                    https://www.geeksforgeeks.org/proof-of-elapsed-time-poet-in-blockchain/
                  </a>
                </Typography>
                <Typography>
                  [4]{" "}
                  <a
                    href="https://systemdesign.one/gossip-protocol/"
                    target="_blank"
                  >
                    https://systemdesign.one/gossip-protocol/
                  </a>
                </Typography>
                <Typography>
                  [5]{" "}
                  <a href="https://portforward.com/" target="_blank">
                    https://portforward.com/
                  </a>
                </Typography>
                <Typography>
                  [6]{" "}
                  <a
                    href="https://www.cisco.com/c/en/us/products/routers/network-address-translation.html"
                    target="_blank"
                  >
                    https://www.cisco.com/c/en/us/products/routers/network-address-translation.html
                  </a>
                </Typography>
                <Typography>
                  [7]{" "}
                  <a
                    href="https://www.encryptionconsulting.com/education-center/what-is-ecdsa/"
                    target="_blank"
                  >
                    https://www.encryptionconsulting.com/education-center/what-is-ecdsa/
                  </a>
                </Typography>
                <Typography>
                  [8]{" "}
                  <a
                    href="https://www.fortinet.com/resources/cyberglossary/man-in-the-middle-attack"
                    target="_blank"
                  >
                    https://www.fortinet.com/resources/cyberglossary/man-in-the-middle-attack
                  </a>
                </Typography>
                <Typography>
                  [9]{" "}
                  <a
                    href="https://www.simplilearn.com/tutorials/cyber-security-tutorial/sha-256-algorithm"
                    target="_blank"
                  >
                    https://www.simplilearn.com/tutorials/cyber-security-tutorial/sha-256-algorithm
                  </a>
                </Typography>
                <Typography>
                  [10]{" "}
                  <a
                    href="https://www.investopedia.com/bitcoin-halving-4843769"
                    target="_blank"
                  >
                    https://www.investopedia.com/bitcoin-halving-4843769
                  </a>
                </Typography>
                <Typography style={{ marginBottom: "40px" }}>
                  [11]{" "}
                  <a
                    href="https://www.investopedia.com/terms/u/utxo.asp"
                    target="_blank"
                  >
                    https://www.investopedia.com/terms/u/utxo.asp
                  </a>
                </Typography>
              </ThemeProvider>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Docs;