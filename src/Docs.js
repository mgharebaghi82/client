import { Col, Divider, Row, Table } from "antd";
import { Container, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import patience from "./Images/Patience_beside_computer.png";
import pop from "./Images/proof_of_patience.png";
import rd from "./Images/relays-diagram.png";
import { TiPencil } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { ImCancelCircle } from "react-icons/im";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Docs() {

  useEffect(() => {
    document.title = "Centichain - Whitepaper"
  }, [])

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
        paddingTop: "20px",
        paddingBottom: "20px",
        overflow: "hidden",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="This whitepaper introduces a new blockchain network with a novel consensus mechanism and easy-to-use functionality. In fact, to participate in this blockchain network, you do not need any specific or powerful hardware, nor do you need to stake any type of asset."
        />
        <meta property="og:image" content={pop} />
        <meta name="twitter:card" content="summary_large" />
      </Helmet>
      <Container maxWidth="lg">
        {/* title section */}
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h3">
                A Blockchain network with high scalability and very low cost is
                established
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>
        <Divider />
        {/* Abstract section */}
        <Row style={{ marginTop: "30px" }}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            style={{
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img src={patience} width="100%" />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={16}
            xl={16}
            style={{ padding: "25px" }}
          >
            <ThemeProvider theme={theme}>
              <Typography variant="h3" fontWeight="bold">
                Abstract
              </Typography>
              <Typography variant="h4" style={{ lineHeight: "1.7" }}>
                This whitepaper introduces a new blockchain network with a novel
                consensus mechanism and easy-to-use functionality. In fact, to
                participate in this blockchain network, you do not need any
                specific or powerful hardware, nor do you need to stake any type
                of asset.
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>
        <Divider />
        {/* Introduction section */}
        <Row>
          <Col span={24}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4" fontWeight="bold">
                Introduction
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
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
        {/* Solution section */}
        <Row style={{ marginTop: "40px" }}>
          <Col span={24}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4" fontWeight="bold">
                Transactional Consensus
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
                <b>Proof of Patience</b> is a new consensus mechanism to
                overcome these weak points. In this mechanism choosing the block
                generators happens in turn and each node in the network has an
                equal chance of being the next. To do so, the prevailing
                generator selects a random node as the next generator (leader)
                to create a new block and that node cannot be the leader again
                as long as every other node in the network has not created at
                least one block.
              </Typography>
              <br />
              <Typography variant="h5" fontWeight="bold">
                Some points are worth to be mentioned here:
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
                <b>First</b> of all, everything is completely clear and all the
                network members behold choosing the next leader by the current
                one.
                <b>Second</b>, it is totally fair and no member in the network
                has more chances than the others. <b>Third</b>, no node needs to
                use a special hardware or keep the value in the network due to
                the simplicity in the consensus. Unlike POET consensus
                mechanism, there would be no call for a time computation as each
                node has to wait until all the members create a block. In fact,
                the number of the blocks matters, not the time!
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
        <Row style={{ marginTop: "40px" }}>
          <Col span={24}>
            <ThemeProvider theme={theme}>
              <Typography variant="h5" fontWeight="bold" color="#0072D8 ">
                A question might arise now that by joining new nodes, would the
                line for choosing the leader get longer and would the members
                have to wait for the newcomers to create a block?
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
                <b style={{ color: "green" }}>This mechanism’s solution:</b>{" "}
                Each new node to the network has to wait a complete round,
                meaning the new node cannot be the leader until all the members
                have created a block since the newcomer’s arrival. It in fact
                should prove its patience to get into the list of leaders.
              </Typography>
              <br />
              <Typography variant="h5" fontWeight="bold" color="#0072D8 ">
                Another possible question: What if the next generator chosen by
                the current one has left the network?
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
                <b style={{ color: "green" }}>The answer:</b> The existing
                leader would select a new leader and it continues to an online
                leader be found.
              </Typography>
              <br />
              <Typography variant="h5" fontWeight="bold" color="#0072D8 ">
                Another question to be asked is on what basis the leader chooses
                the next?
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
                <b style={{ color: "green" }}>The answer is simple:</b>{" "}
                Randomly! Only once to be a leader would make the fairness in
                the network unaffected for the reason that the existing leader
                will be removed from the queue as soon as they create a block.
              </Typography>
              <br />
              <Typography variant="h5" fontWeight="bold" color="#0072D8 ">
                There is still one important question. Who would choose the
                leader if the prevailing leader has left the network?
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
                <b style={{ color: "green" }}>In this case,</b> Proof of
                Patience defines the last existing block generator in the
                network. Remember that the agreed-upon node just chooses the new
                leader among the eligible nodes and does not have any more
                chances to create a block.
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
        <Row style={{ marginTop: "40px" }}>
          <Col span={24}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4" fontWeight="bold">
                Network Capacity
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
                For efficient and secure communication, Centichain uses a
                separate chain as a communication relay. This chain is composed
                of computers with public and accessible addresses, which are
                called relay nodes in the Centichain network. Relay nodes have
                no other task than to deliver messages to validator nodes and of
                course, they also receive rewards for it. In fact, each
                validator in the network connects to a relay node, and the relay
                node sends the messages of the validator using the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Gossip_protocol"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  gossip protocol
                </a>{" "}
                to other validators that are connected to it. Each relay node
                can have more than one validator connected. Centichain does not
                use{" "}
                <a
                  href="https://portforward.com/help/portforwarding.htm"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  port forwarding
                </a>{" "}
                at all to preserve the security of the participants in the
                network and to make it easier to be a validator in the network.
                In fact, there is no need to configure the modem for port
                forwarding or use a VPN to bypass NAT to be a validator in the
                Centichain network, and it is easy to become a validator without
                any special configuration and with a home internet. Also, if
                someone has a public and accessible internet address or even a{" "}
                <a
                  href="https://www.ibm.com/topics/vps"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Virtual Private Server(VPS)
                </a>{" "}
                or dedicated server, in addition to being a validator, they can
                also be a relay node to help expand the network and receive more
                rewards for their activities within their network.
              </Typography>
              <br />
              <Typography variant="h5" fontWeight="bold" color="#0072D8 ">
                Here, the question arises that what happens to the validators
                that are connected to it if a relay node leaves the network?
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
                In this case, Centichain immediately forces the validator to
                contact other relay nodes to reconnect to the network. In fact,
                validators always have a list of existing relay nodes in the
                network so that as soon as their connection with a relay node is
                interrupted, they can connect to another relay node to
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
              <Typography variant="h4" fontWeight="bold">
                Transaction Legitimacy
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
                Like common blockchain networks, Centichain uses common
                cryptography to perform secure transactions on the network.
                Centichain uses the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  ECDSA
                </a>{" "}
                public key encryption model for the security of transactions in
                the presence of relay nodes, and also to prevent{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  MITM
                </a>{" "}
                attacks. In fact, every message sent on the network will have a
                signature. <br />
                Also, for hashing blocks and transactions, Centichain uses the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Secure_Hash_Algorithms"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  SHA-256
                </a>{" "}
                algorithm for the immutability of information.
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
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
                <b>CENTI</b> is a cryptocurrency that uses Centichain to record
                and verify its transactions. In fact, CENTI is the native coin
                of the Centichain network. All rewards and transaction fees are
                paid in CENTI.
                <br />
                The total <b>supply</b> of CENTI will be 21 million, as a
                tribute to Bitcoin. Also, initially, the reward for each
                validator for verifying and recording transactions on the ledger
                will be 50 CENTI.Of course, it should be noted that Centichain
                has a <b>halving</b> schedule, and after the production of every
                150,000 blocks, the reward for validators will be halved. The
                number 150,000 is used in Centichain due to the lack of
                computational puzzles for block production. It should also be
                noted that the reward for relay nodes will be one percent of the
                fee for each transaction that is included in the block produced
                by the validators connected to it. Also, to prevent the
                double-spending problem, Centichain uses the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Unspent_transaction_output#:~:text=In%20cryptocurrencies%2C%20an%20unspent%20transaction%20output%20%28%20UTXO%29,their%20UTXO%20to%20the%20receiver%27s%20Public%20Key%20."
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <b>UTXO</b>
                </a>{" "}
                model for its transactions. In the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Unspent_transaction_output#:~:text=In%20cryptocurrencies%2C%20an%20unspent%20transaction%20output%20%28%20UTXO%29,their%20UTXO%20to%20the%20receiver%27s%20Public%20Key%20."
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <b>UTXO</b>
                </a>{" "}
                model, each transaction spends some of the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Unspent_transaction_output#:~:text=In%20cryptocurrencies%2C%20an%20unspent%20transaction%20output%20%28%20UTXO%29,their%20UTXO%20to%20the%20receiver%27s%20Public%20Key%20."
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <b>UTXOs (unspent transaction outputs)</b>
                </a>{" "}
                that the sender has. The receiver then receives new UTXOs as a
                result of the transaction. This model ensures that each{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Unspent_transaction_output#:~:text=In%20cryptocurrencies%2C%20an%20unspent%20transaction%20output%20%28%20UTXO%29,their%20UTXO%20to%20the%20receiver%27s%20Public%20Key%20."
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <b>UTXO</b>
                </a>{" "}
                can only be spent once.
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>
        <Divider />
        <Row style={{ marginTop: "40px" }}>
          <Col span={24}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4" fontWeight="bold">
                Advantages
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
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
              <br />
              <Typography variant="h4" fontWeight="bold">
                Conclusion
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
                Proof of Patience is a new promising consensus mechanism that
                resolves other consensus mechanisms problems and is apt for
                blockchain networks which seek high safety, effectiveness and
                stability.
                <br />
                Centichain is also easy to use, and anyone with a simple
                computer and home internet can use it without the need for any
                specialized knowledge or skills.
                <br />
                Centichain remains anti-inflationary and affordable due to the
                limited supply of CENTI.
                <br />
                Centichain uses the UTXO model for its transactions. In the UTXO
                model, each transaction spends some of the UTXOs (unspent
                transaction outputs) that the sender has. The receiver then
                receives new UTXOs as a result of the transaction. This model
                ensures that each UTXO can only be spent once.
              </Typography>
            </ThemeProvider>
          </Col>
        </Row>
        {/* <Row style={{ marginTop: "25px" }}>
          <Col span={24}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4" fontWeight="bold">
                Future
              </Typography>
              <Typography variant="h5" style={{ lineHeight: "1.7" }}>
                Proof of patience has great potential to improve safety,
                effectiveness and stability in blockchain networks. This
                mechanism is at the early stages of development, but is probable
                to be the dominant consensus mechanism in the future.
              </Typography>
            </ThemeProvider>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Docs;
