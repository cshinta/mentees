import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, Avatar, Divider, Tag, Upload } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Page = (props) => {
  const fileList = [
    {
      uid: "-1",
      name: "xxx.png",
      status: "done",
      url: "http://www.baidu.com/xxx.png",
    },
  ];
  const uploadPreview = {
    multiple: true,
  };
  return (
    <div id="mentor-registration-4" style={{ padding: "5vh 8vw" }}>
      <Card className="card-personal-mentor">
        <div style={{ fontSize: "30px" }}> Personal Information </div>
        <div style={{ textAlign: "center", padding: "3vh 3vw" }}>
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<AntDesignOutlined />}
          />
          <div style={{ textAlign: "left", padding: "3vh 0" }}>
            <Row justify="space-between">
              <Col offset={2} span={6}>
                <div className="text-secondary text-bold">Full Name</div>
                <div className="text-secondary">Brody</div>
              </Col>
              <Col span={6}>
                <div className="text-secondary text-bold">Last Name</div>
                <div className="text-secondary">Gans</div>
              </Col>
              <Divider />
              <Col offset={2} span={6}>
                <div className="text-secondary text-bold">Date of Birth</div>
                <div className="text-secondary">13/05/1997</div>
              </Col>
              <Col span={6}>
                <div className="text-secondary text-bold">Gender</div>
                <div className="text-secondary">Male</div>
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">Nationality</div>
                <div className="text-secondary">Germany</div>
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">
                  Current Level of Study
                </div>
                <div className="text-secondary">Master Degree</div>
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">
                  School/University/Company
                </div>
                <div className="text-secondary">PT. Sanjaya Putra</div>
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">
                  Major/Job Position
                </div>
                <div className="text-secondary">
                  Head Officer of Technical Division
                </div>
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">Bio</div>
                <div className="text-secondary">
                  Avalaible on 9.00 am until 4.00 pm{" "}
                </div>
              </Col>
              <Divider />
            </Row>
          </div>
        </div>
      </Card>
      <Card className="card-personal-mentor" style={{ margin: "20px 0" }}>
        <div style={{ fontSize: "30px" }}> Interests Information </div>
        <div style={{ textAlign: "center", padding: "3vh 3vw" }}>
          <div style={{ textAlign: "left", padding: "3vh 0" }}>
            <Row justify="space-between">
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">
                  Area of Interests
                </div>
                <Tag>
                  <div>Web Development</div>
                </Tag>
                <Tag>
                  <div>Mobile App Development</div>
                </Tag>
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">Skills</div>
                <Tag>
                  <div>Python</div>
                </Tag>
                <Tag>
                  <div>React.js</div>
                </Tag>
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">Achievements</div>
                <div style={{ paddingLeft: "20px", fontSize: "18px" }}>
                  <Upload {...uploadPreview} fileList={fileList} />
                </div>
              </Col>
              <Divider />
            </Row>
          </div>
        </div>
      </Card>
      <Card className="card-personal-mentor" style={{ margin: "20px 0" }}>
        <div style={{ fontSize: "30px" }}> Account Information </div>
        <div style={{ textAlign: "center", padding: "3vh 3vw" }}>
          <div style={{ textAlign: "left", padding: "3vh 0" }}>
            <Row justify="space-between">
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">Email</div>
                <div className="text-secondary">brody_bro6543@ymail.com</div>
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">Username</div>
                <div className="text-secondary">brodybr</div>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
      <Row justify="space-between">
        <Col offset={6} span={6}>
          <Button size="large" onClick={props.onBack}>
            <span>Back</span>
          </Button>
        </Col>
        <Col span={6}>
          <Button
            size="large"
            className="btn-primary"
            onClick={props.onRegister}
          >
            <span>Register</span>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Page;
