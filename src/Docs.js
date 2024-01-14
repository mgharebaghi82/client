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
import { Helmet } from "react-helmet";

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
    <div
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Helmet>
        <meta
          name="description"
          content="This whitepaper presents a new blockchain network that offers a unique consensus mechanism and user-friendly features."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Centichain" />
        <meta
          itemprop="description"
          content="This whitepaper presents a new blockchain network that offers a unique consensus mechanism and user-friendly features."
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
          content="This whitepaper presents a new blockchain network that offers a unique consensus mechanism and user-friendly features."
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
          content="This whitepaper presents a new blockchain network that offers a unique consensus mechanism and user-friendly features."
        />
        <meta
          name="twitter:image"
          content="http://centichain.org/static/media/C-Logo.a2c978f558ee73e0eac5.png"
        />
      </Helmet>

      <div className="low-opacity-whitepaper">
        <Row style={{ userSelect: "none" }}>
          <Col
            xs={24}
            sm={24}
            md={10}
            lg={10}
            xl={10}
            style={{
              display: "grid",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              padding: "2%",
            }}
          >
            <img
              src={patience}
              data-aos="fade-right"
              style={{ borderRadius: "50%", width: "100%" }}
              alt="Proof Of Patience"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={14}
            lg={14}
            xl={14}
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              padding: "2%",
            }}
          >
            <div style={{ textAlign: "center", paddingLeft: "1%" }}>
              <ThemeProvider theme={theme}>
                <Typography variant="h3" fontWeight="bold" color="#004750">
                  Achieving High Scalability and Low Cost in a Blockchain
                  Network
                </Typography>
                <Divider />
                <Typography variant="h5">
                  This whitepaper presents a new blockchain network that offers
                  a unique consensus mechanism and user-friendly features.
                  Unlike other blockchain networks, this one does not require
                  any special or powerful hardware, or any kind of asset
                  staking, to join and participate.
                </Typography>
              </ThemeProvider>
            </div>
          </Col>
        </Row>
      </div>
      <Container maxWidth="lg">
        {/* Introduction section */}
        <Row style={{ marginTop: "25px" }}>
          <Col span={24}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4" fontWeight="bold">
                Introduction
              </Typography>
              <Typography variant="h5">
                Consensus mechanisms are used to confirm trades and generate new
                blocks in blockchain networks. Usually, these systems either
                need strong hardware with a high energy consumption, investments
                from users to enter the network, a very special hardware or a
                combination of them.{" "}
                <a
                  href="https://www.geeksforgeeks.org/blockchain-proof-of-work-pow/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Proof of Work(PoW)
                </a>
                , as an example, needs miners which are computationally powerful
                to solve complicated puzzles, leading to a high energy
                consumption and also concentration of power be in the hands of a
                few.{" "}
                <a
                  href="https://www.geeksforgeeks.org/proof-of-stake-pos-in-blockchain/?ref=lbp"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Proof of Stake(PoS)
                </a>{" "}
                needs stockholders to stake their assets in the network. That
                gives rise to inequality since having more stocks increases the
                chances of being block generators. The{" "}
                <a
                  href="https://www.geeksforgeeks.org/proof-of-elapsed-time-poet-in-blockchain/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Proof of Elapsed Time(PoET)
                </a>{" "}
                consensus mechanism has been near to a solution, but as it needs
                a very precise time computation, queue management may be
                affected – even a bit. POET is also vague and could lower the
                certainty of choosing the block generator. Having more
                processors and more memory might raise the chance of the
                generator choosing, it leads to concentration and lack of
                justice though.
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>
        <Divider />
        {/* Solution section */}
        <Row>
          <Col span={24}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4" fontWeight="bold">
                A Fair and Scalable Consensus Mechanism for Blockchain Networks
              </Typography>
              <Typography variant="h5">
                <b>Proof of Patience (PoP)</b> is a new consensus mechanism to
                overcome these weaknesses. In this mechanism, the block
                generators are chosen in turn and each node in the network has
                an equal chance of being the next. To do this, the current
                generator selects a random node as the next generator (leader)
                to create a new block, and that node cannot be the leader again
                until every other node in the network has created at least one
                block.
              </Typography>
              <br />
              <Typography variant="h5" fontWeight="bold">
                The Proof of Patience consensus mechanism has several advantages
                over other existing mechanisms;
              </Typography>
              <Typography variant="h5">
                First, the process is transparent and the current leader chooses
                the next one among all the network members. Second, the system
                is fair and every member has an equal chance of being the
                leader. Third, no node requires special hardware or has to stake
                its assets in the network, which simplifies the consensus. In
                contrast, the Proof of Elapsed Time consensus mechanism needs
                precise time computation, which may affect queue management and
                lower the certainty of choosing the leader. Moreover, having
                more processors and more memory might increase the chance of
                being the leader, but this also leads to concentration and lack
                of justice. In the Proof of Patience mechanism, the number of
                blocks matters, not the time. Therefore, each node has to wait
                until all the members create a block before it can be the leader
                again.
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
              <Typography variant="h4" fontWeight="bold">
                Possible Questions and Answers
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="#0072D8 ">
                How does the system handle new nodes joining the network?
              </Typography>
              <Typography variant="h5">
                The system’s solution is to make each new node wait for a
                complete round, meaning that the new node cannot be the leader
                until all the nodes have created a block since the newcomer’s
                arrival. This way, the new node proves its patience to get into
                the queue of eligible nodes.
              </Typography>

              <Typography variant="h5" fontWeight="bold" color="#0072D8 ">
                What happens if the next generator chosen by the current leader
                has left the network?
              </Typography>
              <Typography variant="h5">
                The current leader selects a new generator and the process
                continues until an online leader is found.
              </Typography>

              <Typography variant="h5" fontWeight="bold" color="#0072D8 ">
                How does the leader choose the next generator?
              </Typography>
              <Typography variant="h5">
                The answer is simple: randomly! Being a leader only once ensures
                the fairness of the system, because the current leader is
                removed from the queue as soon as they create a block.
              </Typography>

              <Typography variant="h5" fontWeight="bold" color="#0072D8 ">
                Who chooses the leader if the current leader has left the
                network?
              </Typography>
              <Typography variant="h5">
                In this case, Proof of Patience defines the last existing block
                generator in the network as the one who chooses the new leader
                among the eligible nodes. Remember that the chosen node only
                selects the new leader and does not have any more chances to
                create a block.
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
        <Divider />
        <Row>
          <Col span={24}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4" fontWeight="bold">
                Network Capacity
              </Typography>
              <Typography variant="h5">
                Centichain uses a separate chain as a communication relay. This
                chain consists of computers with public and accessible
                addresses, which are called relay nodes in the Centichain
                network.
                <br /> Relay nodes have no other task than to deliver messages
                to validator nodes and, of course, they also receive rewards for
                it. In fact, each validator in the network connects to a relay
                node, and the relay node sends the messages of the validator
                using the gossip protocol to other validators that are connected
                to it. Each relay node can have more than one validator
                connected. Centichain does not use port forwarding at all, which
                preserves the security of the participants and makes it easier
                to become a validator. Therefore, there is no need to configure
                the modem for port forwarding or use a VPN to bypass NAT to be a
                validator in the Centichain network, and it is easy to become a
                validator without any special configuration and with a home
                internet. In addition, a user with a public IP address or even a
                Virtual Private Server (VPS) or dedicated server can also be a
                relay node, in addition to being a validator, to help expand the
                network and receive more rewards for their role as a relay node.
              </Typography>

              <Typography variant="h5" fontWeight="bold" color="#0072D8 ">
                If a relay node leaves the network, what happens to the
                validators that are connected to it?
              </Typography>
              <Typography variant="h5">
                In this case, Centichain immediately forces the validator to
                contact other relay nodes and reconnect to the network.
                Therefore, validators always keep a list of available relay
                nodes in the network, so that they can connect to another relay
                node as soon as their connection is interrupted and synchronize
                with the network.
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
              <Typography variant="h4" fontWeight="bold">
                Transaction Legitimacy
              </Typography>
              <Typography variant="h5">
                Centichain uses common cryptography to secure transactions on
                the network. Centichain uses the ECDSA public key encryption
                model to secure transactions in the presence of relay nodes and
                prevent MITM attacks. In fact, every message sent on the network
                has a digital signature. Hashing Also, for hashing blocks and
                transactions, Centichain uses the SHA-256 algorithm to ensure
                the immutability of information.
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>
        <Row style={{ marginTop: "40px" }}>
          <Col span={24}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4" fontWeight="bold">
                CENTI, Supply, Halving, UTXO
              </Typography>
              <Typography variant="h5">
                CENTI is a cryptocurrency that uses Centichain to record and
                verify its transactions. In fact, CENTI is the native coin of
                the Centichain network. All rewards and transaction fees are
                paid in CENTI.
                <br />
                The total supply of CENTI will be 21 million, as a tribute to
                Bitcoin. Also, initially, the reward for each validator who
                verifies and records transactions on the ledger is 50 CENTI. Of
                course, it should be noted that Centichain has a halving
                schedule, and the reward for validators is halved after the
                production of every 150,000 blocks. Centichain uses 150,000 as
                the halving interval because it does not require computational
                puzzles for block production. It should also be noted that the
                reward for relay nodes is one percent of the fee for each
                transaction that is included in the block produced by the
                validators connected to it.
                <br />
                to prevent the double-spending problem, Centichain uses the UTXO
                model for its transactions. In the UTXO model, each transaction
                spends some of the UTXOs (unspent transaction outputs) that the
                sender has. The receiver then receives new UTXOs as a result of
                the transaction. This model ensures that each UTXO can only be
                spent once.
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>
        <Divider />
        <Row style={{ marginBottom: "40px" }}>
          <Col span={24}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4" fontWeight="bold">
                Advantages
              </Typography>
              <Typography
                variant="h5"
                style={{ lineHeight: "1.7", color: "#004750" }}
              >
                <b>
                  Bearing the foregoing in mind, Centichain has these benefits:
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
              <Typography variant="h4" fontWeight="bold">
                Conclusion
              </Typography>
              <Typography variant="h5">
                In summary, this paper has presented a new consensus mechanism
                and a new blockchain network that offer several benefits over
                existing ones. Proof of Patience is a promising consensus
                mechanism that solves the problems of other consensus mechanisms
                and is suitable for blockchain networks that seek high safety,
                effectiveness, and stability. Centichain is also easy to use,
                and anyone with a simple computer and home internet can use it
                without the need for any specialized knowledge or skills. In
                addition, Centichain is anti-inflationary and affordable because
                of the limited supply of CENTI. Centichain uses the UTXO model
                for its transactions. In the UTXO model, each transaction spends
                some of the UTXOs (unspent transaction outputs) that the sender
                has. The receiver then receives new UTXOs as a result of the
                transaction. This model ensures that each UTXO can only be spent
                once.
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Docs;
