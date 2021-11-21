import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, Avatar, Divider, Tag, Upload } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";

const Page = ({ onNext, onBack, form }) => {
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
                <div className="text-secondary text-bold">First Name</div>
                <div className="text-secondary">{form.first_name}</div>
              </Col>
              <Col span={6}>
                <div className="text-secondary text-bold">Last Name</div>
                <div className="text-secondary">{form.first_name}</div>
              </Col>
              <Divider />
              <Col offset={2} span={6}>
                <div className="text-secondary text-bold">Date of Birth</div>
                <div className="text-secondary">{form.birth_date}</div>
              </Col>
              <Col span={6}>
                <div className="text-secondary text-bold">Gender</div>
                <div className="text-secondary">{form.gender}</div>
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">Nationality</div>
                <div className="text-secondary">{form.nationality}</div>
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">
                  Current Level of Study
                </div>
                <div className="text-secondary">{form.current_study}</div>
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">
                  School/University/Company
                </div>
                <div className="text-secondary">{form.university}</div>
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">
                  Major/Job Position
                </div>
                <div className="text-secondary">{form.major}</div>
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">Bio</div>
                <div className="text-secondary">{form.bio}</div>
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
                {form?.interest.split("|").map((e) => (
                  <Tag>{e}</Tag>
                ))}
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">Skills</div>
                {form?.skill.split("|").map((e) => (
                  <Tag>{e}</Tag>
                ))}
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">CV</div>
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
                <div className="text-secondary">{form.email}</div>
              </Col>
              <Divider />
              <Col offset={2} span={12}>
                <div className="text-secondary text-bold">Username</div>
                <div className="text-secondary">{form.username}</div>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
      <Row justify="space-between">
        <Col offset={6} span={6}>
          <Button size="large" onClick={onBack}>
            <span>Back</span>
          </Button>
        </Col>
        <Col span={6}>
          <Button size="large" className="btn-primary" onClick={onNext}>
            <span>Register</span>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Page;
