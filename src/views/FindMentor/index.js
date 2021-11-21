import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Divider, Tag, Collapse, Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import {
  UndoOutlined,
  MailOutlined,
  DoubleRightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MenteeLayout from "../../components/layout/index";
import "./index.scss";

const Page = () => {
  const { Panel } = Collapse;
  return (
    <MenteeLayout>
      <Row style={{ padding: "0 0 0 4vw" }} id="find-mentor">
        <Col span={14} style={{ padding: "3vh 0" }}>
          <Card className="card-detail-profile">
            <Row style={{ padding: "2vh 0" }}>
              <Col span={10} style={{ textAlign: "center", padding: "0 3vw" }}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/contoh.png`}
                  alt="gambar"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "400px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: "10px",
                  }}
                />
                <div style={{ fontSize: "30px" }} className="text-bold">
                  Brody Gans
                </div>
                <span style={{ fontSize: "18px" }}>Germany</span>
                <Divider type="vertical" />
                <span style={{ fontSize: "20px" }}>Software Engineer</span>
                <Card
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: "10px",
                  }}
                >
                  <span className="text-default">
                    Available on 9.00 am until 4.00 pm .
                  </span>
                </Card>
              </Col>
              <Divider type="vertical" style={{ minHeight: "70vh" }} />
              <Col style={{ padding: "0 2vw" }}>
                <div style={{ padding: "10px 0" }}>
                  <div style={{ fontSize: "23px" }} className="text-bold">
                    Area of Expertises
                  </div>
                  <div>
                    <Tag>Tag 1</Tag>
                    <Tag>Tag 1</Tag>
                    <Tag>Tag 1</Tag>
                  </div>
                </div>
                <div style={{ padding: "10px 0" }}>
                  <div style={{ fontSize: "23px" }} className="text-bold">
                    Skills
                  </div>
                  <div>
                    <Tag>Tag 1</Tag>
                    <Tag>Tag 1</Tag>
                    <Tag>Tag 1</Tag>
                  </div>
                </div>
                <div style={{ padding: "10px 0" }}>
                  <div style={{ fontSize: "23px" }} className="text-bold">
                    Achievements
                  </div>
                  <div style={{ padding: "0 10px", fontSize: "15px" }}>
                    <div>
                      1. 1st Mobile Development on Hology Competition 2021
                    </div>
                    <div>
                      2. 1st Mobile Development on Hology Competition 2021
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                span={24}
                className="card-button-accept"
                style={{ textAlign: "center", padding: "10px 0" }}
              >
                <Button className="button-mentor">
                  <UndoOutlined className="gradient-color" />
                  <div>Back</div>
                </Button>
                <Button className="button-accept-mentor  btn-primary">
                  <MailOutlined /> <div>Send Request</div>
                </Button>
                <Button className="button-mentor">
                  <DoubleRightOutlined className="gradient-color" />{" "}
                  <div>Next</div>
                </Button>
              </Col>
            </Row>
          </Card>
          <Row style={{ textAlign: "center" }}></Row>
        </Col>
        <Col span={10} style={{ paddingLeft: "2vw" }}>
          <Card
            className="text-bold"
            style={{
              backgroundColor: "#E45858",
              borderRadius: "10px",
              color: "#fff",
              textAlign: "right",
            }}
          >
            <span style={{ fontSize: "50px", paddingRight: "10px" }}>
              Mentor
            </span>
            <span style={{ fontSize: "32px" }}>List</span>
          </Card>
          <Card style={{borderRadius: "10px"}}>
            <Collapse
              defaultActiveKey={["1", "2"]}
              ghost
              style={{ fontSize: "32px" }}
            >
              <Panel
                header={
                  <span className="text-bold">
                    Your Mentor{" "}
                    <span style={{ color: "#ADADAD", fontSize: "25px" }}>
                      (4)
                    </span>
                  </span>
                }
                key="1"
              >
                <div>
                  <Row>
                    <Col style={{ padding: "0 10px" }}>
                      <Avatar icon={<UserOutlined />} size={64} />
                    </Col>
                    <Col style={{ fontSize: "22px" }} span={8}>
                      <div className="text-bold">Brody Gans</div>
                      <div>Germany</div>
                    </Col>
                    <Col offset={6}>
                      <Button className="btn-primary">Chat</Button>
                    </Col>
                  </Row>
                  {/* for mentor page in mentee request
                  <Row>
                    <Col style={{ padding: "0 10px" }}>
                      <Avatar icon={<UserOutlined />} size={64} />
                    </Col>
                    <Col style={{ fontSize: "22px" }} span={8}>
                      <div className="text-bold">Brody Gans</div>
                      <div>Germany</div>
                    </Col>
                    <Col>
                      <Button style={{marginRight: "5px"}}>Decline</Button>
                      <Button className="btn-primary">Accept</Button>
                    </Col>
                  </Row> */}
                </div>
              </Panel>
              <Panel
                header={
                  <span className="text-bold">
                    Pending{" "}
                    <span style={{ color: "#ADADAD", fontSize: "25px" }}>
                      (4)
                    </span>
                  </span>
                }
                key="2"
              >
                <div>
                  <Row>
                    <Col style={{ padding: "0 10px" }}>
                      <Avatar icon={<UserOutlined />} size={64} />
                    </Col>
                    <Col style={{ fontSize: "22px" }} span={8}>
                      <div className="text-bold">Brody Gans</div>
                      <div>Germany</div>
                    </Col>
                    <Col offset={6}>
                      <Button style={{borderColor: "#fff"}}>Cancel</Button>
                    </Col>
                  </Row>
                </div>
              </Panel>
            </Collapse>
          </Card>
        </Col>
      </Row>
    </MenteeLayout>
  );
};

export default Page;
