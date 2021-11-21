import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Divider,
  Pagination,
  Upload,
  Avatar,
  Input,
  Checkbox,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
  UndoOutlined,
  MailOutlined,
  FileImageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MenteeLayout from "../../components/layout/index";
import "./index.scss";

const Page = () => {
  const { Search, TextArea } = Input;
  const [fileList, setFileList] = useState([]);

  return (
    <MenteeLayout>
      <Row style={{ padding: "5vh 4vw" }} id="forum">
        <div style={{ textAlign: "center", width: "100%" }} id="search">
          <Search
            placeholder="Search your question"
            allowClear
            style={{ width: 400 }}
            size="large"
          />
        </div>
        <div style={{ width: "100%", padding: "3vh 0" }} id="search">
          <Card>
            <Row justify="space-around">
              <Col>
                <Avatar icon={<UserOutlined />} size={64} />
              </Col>
              <Col span={22}>
                <TextArea
                  placeholder="What do you want to ask, Brody?"
                  autoSize
                  bordered={false}
                  style={{ fontSize: "20px" }}
                />
                <Divider />
                <Row justify="start">
                  <Col span={12}>
                    <Upload
                      listType="picture"
                      defaultFileList={[...fileList]}
                      className="upload-list-inline"
                    >
                      <Button
                        icon={<FileImageOutlined />}
                        style={{ fontSize: "12px", color: "#828282" }}
                      >
                        Add Image
                      </Button>
                    </Upload>
                  </Col>
                  <Col span={12} style={{ paddingTop: "10px" }}>
                    <Checkbox>
                      <span style={{ fontSize: "14px", color: "#828282" }}>
                        Anonymous
                      </span>
                    </Checkbox>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </div>
        <div style={{ width: "100%", padding: "3vh 0" }}>
          <Card className="recommended-card">
            <div
              className="text-bold"
              style={{ fontSize: "30px", color: "#fff" }}
            >
              Recommended
            </div>
            <div>
              <Card
                style={{
                  maxWidth: "15vw",
                  borderRadius: "10px",
                  height: "22vh",
                }}
              >
                <Row style={{ padding: "5px 10px" }}>
                  <Col style={{ padding: "0 5px 0 0" }}>
                    <Avatar icon={<UserOutlined />} size="large" />
                  </Col>
                  <Col>
                    <div className="text-bold" style={{ fontSize: "20px" }}>
                      Brody Gans
                    </div>
                    <div style={{ fontSize: "12px" }}>2 hours ago</div>
                  </Col>
                  <Col span={24}>
                    <p>I am using react and styled-components.</p>
                  </Col>
                  <Col span={24} id="search" style={{ textAlign: "center" }}>
                    <Button style={{ fontSize: "12px" }}>Show More</Button>
                  </Col>
                </Row>
              </Card>
            </div>
          </Card>
        </div>

        <div style={{ padding: "3vh 0" }}>
          <Row>
            <Col span={12}>
              <div className="text-bold" style={{ fontSize: "30px" }}>
                Newest
              </div>
              <Card
                style={{ backgroundColor: "#D1D1E9", padding: "10px 10px" }}
              >
                <div>
                  <Card>
                    <Row style={{ padding: "5px 10px" }}>
                      <Col style={{ padding: "0 5px 0 0" }}>
                        <Avatar icon={<UserOutlined />} size={64} />
                      </Col>
                      <Col>
                        <div className="text-bold" style={{ fontSize: "20px" }}>
                          Brody Gans
                        </div>
                        <div style={{ fontSize: "12px" }}>2 hours ago</div>
                      </Col>
                      <Col span={24} style={{ padding: "20px 0" }}>
                        <p>I am using react and styled-components.</p>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/pertanyaan.png`}
                          alt="picture"
                          style={{ maxWidth: "100%" }}
                        />
                      </Col>
                      <Col span={24} id="search" style={{ textAlign: "right" }}>
                        <Button className="btn-primary">Answer</Button>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Card>
              <div style={{ textAlign: "center", padding: "10px 0" }}>
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </Col>
            <Col offset={2} span={10}>
              <Card>
                <div className="text-bold" style={{ fontSize: "30px" }}>
                  Your Question
                </div>
                <div>
                  <Row style={{ padding: "10px" }}>
                    <Col style={{ padding: "0 5px 0 0" }}>
                      <Avatar icon={<UserOutlined />} size={64} />
                    </Col>
                    <Col>
                      <div className="text-bold" style={{ fontSize: "20px" }}>
                        Brody Gans
                      </div>
                      <div style={{ fontSize: "12px" }}>2 hours ago</div>
                    </Col>
                    <Col span={24} style={{ padding: "20px 0" }}>
                      <p>I am using react and styled-components.</p>
                    </Col>
                    <Col offset={12}span={6} style={{ textAlign: "right" }} id="search">
                      <Button
                        style={{ borderColor: "#fff", fontWeight: "300", fontSize: "12px" }}
                      >
                        Show More
                      </Button>
                    </Col>
                    <Col span={6} style={{ textAlign: "right" }} id="search">
                      <Button  style={{fontSize: "12px", borderColor: "#6246EA"}}>View Answer</Button>
                    </Col>
                  </Row>
                  <Divider />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Row>
    </MenteeLayout>
  );
};

export default Page;
