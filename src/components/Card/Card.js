import { Button, Modal } from "antd";
import React, { useState, useEffect, useContext } from "react";
import "./cardStyle.css";
import AOS from "aos";
import Auth from "../../context/Auth";
import LazyLoad  from "react-lazy-load";

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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    AOS.init();  
  }, []);

  return (
    <div className="container2">
      {
        nftsList.map((item) => (
          <div className="wrapper" data-aos="flip-down" data-aos-delay="200">
            <div className="card">
              <LazyLoad>
                <img
                  src={item.image_l}
                  alt=""
                />
              </LazyLoad> 
              
              <div className="price">
                <p>
                  <img
                    src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png"
                    alt=""
                  />{" "}
                  &nbsp; {item.price === null ? 0.00 : item.price}
                  <Button style={btnStyle} onClick={showModal}>
                    MORE...
                  </Button>
                  <Modal
                    title="Basic Modal"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Modal>
                </p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Card;
