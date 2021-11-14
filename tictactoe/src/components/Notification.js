import "../App.css";
import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { BellFilled, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Modal, Avatar } from "antd";
import { Link } from "react-router-dom";

const style = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const notifications = [
  {
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    name: "Naduni Ranasinghe",
  },
  {
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    name: "Jude Bandara",
  },
  {
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    name: "Ishrath Raji",
  },
];

const Notification = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [invitations, updateInvitations] = useState(notifications);

  const deleteEl = (name) => {
    updateInvitations(invitations.filter((item) => item.name !== name));
  };

  const listItems = invitations.map((invitation, index) => {
    return (
      <Row key={invitation.name} className="notify modal-row">
        <Col className="col notify" xs={1}>
          <Avatar src={invitation.avatar} />{" "}
        </Col>
        <Col className="col notify" xs={5} style={{ fontSize: "17px" }}>
          {invitation.name}
        </Col>
        <Col className="col notify" style={{ padding: "0" }} xs={3}>
          <Button className="notify-button accept" icon={<CheckOutlined />}>
            <Link style={style} to="/gamehub/tictactoe/play/lobby/multiplayer">
              Accept
            </Link>
          </Button>
        </Col>
        <Col className="col notify" style={{ padding: "0" }} xs={3}>
          <Button
            className="notify-button decline"
            icon={<CloseOutlined />}
            onClick={() => deleteEl(invitation.name)}
          >
            Decline
          </Button>
        </Col>
      </Row>
    );
  });

  return (
    <div>
      <Row>
        <Col className="col notify">
          <Button
            style={{
              backgroundColor: "#4fc4b5",
              width: "50px",
              height: "50px",
            }}
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
            <Container>{listItems}</Container>
          </Modal>
        </Col>
        <Col className="lobby leadboard"></Col>
      </Row>
    </div>
  );
};

export default Notification;
