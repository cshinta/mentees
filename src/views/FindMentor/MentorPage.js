import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Divider,
  Tag,
  Collapse,
  Avatar,
  message,
  Skeleton,
} from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  PaperClipOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MenteeLayout from "../../components/layout/index";
import api from "../../api";
import "./index.scss";

const Page = () => {
  let idx = 0;
  const { Panel } = Collapse;
  const [mentees, setMentees] = useState([]);
  const [currMentee, setCurrMentee] = useState(null);
  const [menteeList, setMenteeList] = useState([]);

  useEffect(() => {
    const fetchPendingRequest = async () => {
      try {
        const { status, data } = await api.getWithToken(
          "/mentor/request/mentee"
        );

        if (status === 200) {
          setMentees(data.data);
          setCurrMentee(data.data[0]);
        } else {
          message.error("Something wrong happened");
          console.log(data.errorStack);
        }
      } catch (error) {
        message.error("Something wrong happened");
        console.log(error);
      }
    };

    fetchPendingRequest();
  }, []);

  useEffect(() => {
    const fetchMenteeList = async () => {
      try {
        const { status, data } = await api.getWithToken("/mentor/list-mentee");

        if (status === 200) {
          setMenteeList(data.data);
        } else {
          message.error("Something wrong happened");
          console.log(data.errorStack);
        }
      } catch (error) {
        message.error("Something wrong happened");
        console.log(error);
      }
    };

    fetchMenteeList();
  }, []);

  const handleNext = () => {
    if (++idx <= mentees.length) {
      setCurrMentee(mentees[idx]);
    }
  };

  const handleAnswerRequest = async (id, status) => {
    try {
      const { status } = await api.postWithToken("/mentor/answer", {
        mentee_id: id,
        status: status,
      });

      if (status === 200) {
        message.success("Request send successfully");
        handleNext();
      }
    } catch (error) {
      console.log(error);
      message.error("Something wrong");
    }
  };

  return (
    <MenteeLayout>
      <Row style={{ padding: "0 0 0 4vw" }} id="find-mentor">
        <Col span={14} style={{ padding: "3vh 0" }}>
          <Skeleton loading={!currMentee}>
            <Card className="card-detail-profile">
              <Row style={{ padding: "2vh 0" }}>
                <Col
                  span={10}
                  style={{ textAlign: "center", padding: "0 3vw" }}
                >
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
                    {`${currMentee?.first_name} ${currMentee?.last_name}`}
                  </div>
                  {/* <span style={{ fontSize: "18px" }}>{currMentor?.}</span> */}
                  <Divider type="vertical" />
                  <span style={{ fontSize: "20px" }}>{currMentee?.major}</span>
                  <Card
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      borderRadius: "10px",
                    }}
                  >
                    <span className="text-default">{currMentee?.bio}</span>
                  </Card>
                </Col>
                <Divider type="vertical" style={{ minHeight: "70vh" }} />
                <Col style={{ padding: "0 2vw" }}>
                  <div style={{ padding: "10px 0" }}>
                    <div style={{ fontSize: "23px" }} className="text-bold">
                      Area of Expertises
                    </div>
                    <div>
                      {currMentee?.interest?.split("|").map((e) => (
                        <Tag>{e}</Tag>
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: "10px 0" }}>
                    <div style={{ fontSize: "23px" }} className="text-bold">
                      Skills
                    </div>
                    <div>
                      {currMentee?.skill?.split("|").map((e) => (
                        <Tag>{e}</Tag>
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: "10px 0" }}>
                    <div style={{ fontSize: "23px" }} className="text-bold">
                      CV/Resume
                    </div>
                    <div style={{ padding: "0 10px", fontSize: "15px" }}>
                      <a>
                        <PaperClipOutlined /> Link{" "}
                      </a>
                    </div>
                  </div>
                </Col>
                <Col
                  span={24}
                  className="card-button-accept"
                  style={{ textAlign: "center", padding: "10px" }}
                >
                  <Button
                    className="button-mentor"
                    onClick={() => {
                      handleAnswerRequest(currMentee?.id, "Decline");
                    }}
                  >
                    <CloseOutlined className="gradient-color" />
                    <div>Decline Request</div>
                  </Button>
                  <Button
                    className="btn-primary"
                    style={{
                      height: 100,
                    }}
                    onClick={() => {
                      handleAnswerRequest(currMentee?.id, "Accept");
                    }}
                  >
                    <CheckOutlined className="gradient-color" />{" "}
                    <div>Accept Request</div>
                  </Button>
                </Col>
              </Row>
            </Card>
          </Skeleton>
          <Row style={{ textAlign: "center" }}></Row>
        </Col>
        <Col span={10} style={{ paddingLeft: "2vw" }}>
          <Card
            className="text-bold"
            style={{
              backgroundColor: "#6246EA",
              borderRadius: "10px",
              color: "#fff",
              textAlign: "right",
            }}
          >
            <span style={{ fontSize: "50px", paddingRight: "10px" }}>
              Mentee
            </span>
            <span style={{ fontSize: "32px" }}>List</span>
          </Card>
          <Card style={{ borderRadius: "10px" }}>
            <Collapse
              defaultActiveKey={["1", "2"]}
              ghost
              style={{ fontSize: "32px" }}
            >
              <Panel
                header={
                  <span className="text-bold">
                    Mentee's Request{" "}
                    <span style={{ color: "#ADADAD", fontSize: "25px" }}>
                      (4)
                    </span>
                  </span>
                }
                key="1"
              >
                <div>
                  <Row>
                    {mentees?.map((e) => (
                      <>
                        <Col style={{ padding: "0 10px" }}>
                          <Avatar icon={<UserOutlined />} size={64} />
                        </Col>
                        <Col style={{ fontSize: "22px" }} span={8}>
                          <div className="text-bold">{`${e?.first_name} ${e?.last_name}`}</div>
                          <div>{e?.major}</div>
                        </Col>
                        <Col>
                          <Button
                            style={{ marginRight: "5px" }}
                            onClick={() => {
                              handleAnswerRequest(currMentee?.id, "Decline");
                            }}
                          >
                            Decline
                          </Button>
                          <Button
                            className="btn-primary"
                            onClick={() => {
                              handleAnswerRequest(currMentee?.id, "Accept");
                            }}
                          >
                            Accept
                          </Button>
                        </Col>
                      </>
                    ))}
                  </Row>
                </div>
                <div style={{ textAlign: "center" }}>
                  {" "}
                  <Button style={{ borderColor: "#fff" }}>Load More</Button>
                </div>
              </Panel>
              <Panel
                header={
                  <span className="text-bold">
                    Your Mentee{" "}
                    <span style={{ color: "#ADADAD", fontSize: "25px" }}>
                      (4)
                    </span>
                  </span>
                }
                key="2"
              >
                <div>
                  <Row>
                    {menteeList?.map((e) => (
                      <>
                        <Col style={{ padding: "0 10px" }}>
                          <Avatar icon={<UserOutlined />} size={64} />
                        </Col>
                        <Col style={{ fontSize: "22px" }} span={8}>
                          <div className="text-bold">{`${e?.first_name} ${e?.last_name}`}</div>
                          <div>{e?.major}</div>
                        </Col>
                        <Col offset={6}>
                          <Button style={{ borderColor: "#fff" }}>
                            Cancel
                          </Button>
                        </Col>
                      </>
                    ))}
                  </Row>
                </div>
                <div style={{ textAlign: "center" }}>
                  {" "}
                  <Button style={{ borderColor: "#fff" }}>Load More</Button>
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
