import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Divider,
  Pagination,
  Image,
  Avatar,
  Input,
  Badge,
  Select,
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
  const { Option } = Select;
  const [fileList, setFileList] = useState([]);

  return (
    <MenteeLayout>
      <Row
        style={{ padding: "3vh 0 2vh 2vw", backgroundColor: "#FCFCFC" }}
        id="chat"
      >
        <Col span={6}>
          <div style={{ textAlign: "center", width: "100%" }} id="search">
            <Search
              placeholder="Search your question"
              allowClear
              style={{ width: 400 }}
              size="large"
            />
          </div>
          <Row justify="space-between" style={{ padding: "10px" }}>
            <Col>
              <span
                className="text-bold"
                style={{ fontSize: "30px", textAlign: "left" }}
              >
                Chat
              </span>
            </Col>
            <Col>
              <Select defaultValue="all" style={{ width: 120 }}>
                <Option value="all">All</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
          </Row>
          <Card>
            <div style={{ fontSize: "20px" }}>Latest Chat</div>
            <div>
              <Row style={{ padding: "12px 10px" }}>
                <Col style={{ padding: "0 5px 0 0" }}>
                  <Avatar icon={<UserOutlined />} size={64} />
                </Col>
                <Col>
                  <div className="text-bold" style={{ fontSize: "20px" }}>
                    Brody Gans{" "}
                    <span style={{ fontSize: "15px", color: "#828282" }}>
                      Mentor
                    </span>
                  </div>
                  <div>Hey are you ready?</div>
                </Col>
                <Col offset={6} style={{ padding: "10px 0" }}>
                  <div style={{ fontSize: "12px" }}>9.00 AM</div>
                  <div>
                    <Badge count={2} />
                  </div>
                </Col>
                <Divider />
              </Row>
            </div>
          </Card>
        </Col>
        <Col span={10}></Col>
        <Col span={8}>
          <div style={{ textAlign: "center" }}>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              style={{ borderRadius: "100px" }}
            />
            <div className="text-bold" style={{ fontSize: "36px" }}>
              Brody Gans
            </div>
            <div className="text-bold" style={{ fontSize: "36px" }}>
              <span  style={{ fontSize: "18px" }}>Germany</span> <Divider type="vertical"/> <span  style={{ fontSize: "20px" }}>Software Engineer</span>
            </div>
          </div>
        </Col>
      </Row>
    </MenteeLayout>
  );
};

export default Page;
