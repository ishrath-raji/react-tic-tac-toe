import "../App.css";
import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { BellFilled, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Modal, Avatar } from "antd";

const Notification = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <Row>
        <Col className="col notify">
          <Button
            style={{ backgroundColor: "#4fc4b5" }}
            shape="circle"
            icon={<BellFilled style={{ color: "#f5f5f5" }} />}
            onClick={() => setModalVisible(true)}
          />
          <Modal
            centered
            visible={modalVisible}
            footer={null}
            width="728px"
            onCancel={() => setModalVisible(false)}
            className="modalNotify notification"
          >
            <Container>
              <Row>
                <Col className="col notify" xs={1}>
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{" "}
                </Col>
                <Col className="col notify" xs={5} style={{ fontSize: "17px" }}>
                  Naduni Ranasinghe
                </Col>
                <Col className="col notify" style={{ padding: "0" }} xs={3}>
                  <Button
                    className="notify button accept"
                    icon={<CheckOutlined />}
                  >
                    Accept
                  </Button>
                </Col>
                <Col className="col notify" style={{ padding: "0" }} xs={3}>
                  <Button
                    className="notify button decline"
                    icon={<CloseOutlined />}
                  >
                    Decline
                  </Button>
                </Col>
              </Row>
            </Container>
          </Modal>
        </Col>
        <Col className="lobby leadboard"></Col>
      </Row>
    </div>
  );
};

export default Notification;
