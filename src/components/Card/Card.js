import { Button, Modal } from "antd";
import React, { useState, useEffect, useContext } from "react";
import "./cardStyle.css";
import AOS from "aos";
import Auth from "../../context/Auth";
import { Network, Alchemy } from "alchemy-sdk";

const btnStyle = {
  border: "none",
  cursor: "pointer",
  marginRight: "-50px",
  marginLeft: "30px",
  fontSize: "12px",
  borderBottom: "1px solid red",
  padding: "0 10px 0 10px",
};

const Card = () => {
  const { nftsList } = useContext(Auth);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currItem, setCurrItem] = useState("");
  
  // Optional Config object, but defaults to demo api-key and eth-mainnet.
  const settings = {
    apiKey: "CGgYawbTv54xtR_bgntCQHFlpOV6hMYL",
    network: Network.MATIC_MAINNET,
  };

  const alchemy = new Alchemy(settings);

  const showModal = (i) => {
    setCurrItem(i);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function reportNft(item){

    fetch(`https://eth-mainnet.g.alchemy.com/nft/v2/demo/reportSpam?address=${item.contract_address}`);
    alert(`${item.name_l} is reported as spam successfully!`)
    
  }

  useEffect(() => {
    AOS.init();
    console.log(nftsList);
  }, [nftsList]);

  return (
    <div className="container2">
      {nftsList.length !== 0 ? (
        nftsList.map((item) => (
          <div className="wrapper" data-aos="flip-down" data-aos-delay="200">
            <div className="card">
              <img src={item.image_l} alt="" />

              <div className="price">
                <p>
                  <img
                    src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png"
                    alt=""
                  />{" "}
                  &nbsp; {item.price === null ? 0.0 : item.price}
                  <Button style={btnStyle} onClick={() => showModal(item)}>
                    MORE...
                  </Button>
                  <Modal
                    title={currItem.price_l}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    style={{ width: "90vw" }}
                    width={1200}
                  >
                    <div className="modal-style">
                      <img src={currItem.image_l} className="nft-img" alt="" />
                      <div>
                        {currItem.description_l} <br />
                        <br />{" "}
                        <span>
                          <img
                            src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png"
                            alt=""
                            className="eth-img"
                          />{" "}
                          &nbsp; <p>{currItem.price === null ? 0.0 : currItem.price} ETH</p>
                        </span>
                        <br />
                        <button onClick={() => reportNft(item)}>Report</button>
                      </div>
                    </div>
                  </Modal>
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div
          style={{
            textAlign: "center",
            width: "100vw",
            marginTop: "300px",
            fontSize: "2rem",
            color: "gray",
          }}
        >
          Sorry, You dont have NFTs, Collect it!
        </div>
      )}
    </div>
  );
};

export default Card;
