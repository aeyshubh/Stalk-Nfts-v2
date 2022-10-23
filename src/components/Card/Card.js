import { Button, Modal } from "antd";
import React, { useState, useEffect } from "react";
import "./cardStyle.css";
import AOS from "aos";

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
      <div className="wrapper" data-aos="flip-down" data-aos-delay="200">
        <div className="card">
          <img
            src="https://fiverrbox.com/wp-content/uploads/2022/04/cat-7022873-800332e2.png"
            alt=""
          />
          <div className="price">
            <p>
              <img
                src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png"
                alt=""
              />{" "}
              &nbsp;31 ETH
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

      <div className="wrapper" data-aos="flip-down">
        <div className="card">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960"
            alt=""
          />
          <div className="price">
            <p>
              <img
                src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png"
                alt=""
              />
              &nbsp;31 ETH
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
      <div className="wrapper" data-aos="flip-down">
        <div className="card">
          <img
            src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
            alt=""
          />
          <div className="price">
            <p>
              <img
                src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png"
                alt=""
              />
              &nbsp; 31 ETH
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
      <div className="wrapper" data-aos="flip-down">
        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000"
            alt=""
          />
          <div className="price">
            <p>
              <img
                src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png"
                alt=""
              />
              &nbsp; 31 ETH
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
      <div className="wrapper" data-aos="flip-down">
        <div className="card">
          <img
            src="https://www.cnet.com/a/img/resize/c5b48e90abe8b7fe339fc0139f3834dbe434fee5/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200"
            alt=""
          />
          <div className="price">
            <p>
              <img
                src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png"
                alt=""
              />
              &nbsp; 31 ETH
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
      <div className="wrapper" data-aos="flip-down">
        <div className="card">
          <img
            src="https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=400x300"
            alt=""
          />
          <div className="price">
            <p>
              <img
                src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png"
                alt=""
              />
              &nbsp; 31 ETH
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
      <div className="wrapper" data-aos="flip-down">
        <div className="card">
          <img
            src="https://i.pinimg.com/736x/10/d2/31/10d2313d6f321909c93b61c332371d0a.jpg"
            alt=""
          />
          <div className="price">
            <p>
              <img
                src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png"
                alt=""
              />
              &nbsp; 31 ETH
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
    </div>
  );
};

export default Card;
