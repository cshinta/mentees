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
  UndoOutlined,
  MailOutlined,
  DoubleRightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MenteeLayout from "../../components/layout/index";
import api from "../../api";
import "./index.scss";

const Page = () => {
  let idx = 0;
  const { Panel } = Collapse;
  const [mentors, setMentors] = useState([]);
  const [currMentor, setCurrMentor] = useState(null);
  const [mentorList, setMentorList] = useState([]);

  useEffect(() => {
    const fetchRecomMentor = async () => {
      try {
        const { status, data } = await api.getWithToken("/mentor");

        if (status === 200) {
          setMentors(data.data);
          setCurrMentor(data.data[0]);
        } else {
          message.error("Something wrong happened");
          console.log(data.errorStack);
        }
      } catch (error) {
        message.error("Something wrong happened");
        console.log(error);
      }
    };

    fetchRecomMentor();
  }, []);

  useEffect(() => {
    const fetchMentorList = async () => {
      try {
        const { status, data } = await api.getWithToken("/mentor/list-mentor");

        if (status === 200) {
          setMentorList(data.data);
        } else {
          message.error("Something wrong happened");
          console.log(data.errorStack);
        }
      } catch (error) {
        message.error("Something wrong happened");
        console.log(error);
      }
    };

    fetchMentorList();
  }, []);

  const handleNext = () => {
    if (++idx <= mentors.length) {
      setCurrMentor(mentors[idx]);
    }
  };

  const handleSendRequest = async (id) => {
    try {
      const { status } = await api.postWithToken("/mentor/send", {
        mentor_id: id,
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
          <Skeleton loading={!currMentor}>
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
                    {`${currMentor?.first_name} ${currMentor?.last_name}`}
                  </div>
                  {/* <span style={{ fontSize: "18px" }}>{currMentor?.}</span> */}
                  <Divider type="vertical" />
                  <span style={{ fontSize: "20px" }}>{currMentor?.major}</span>
                  <Card
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      borderRadius: "10px",
                    }}
                  >
                    <span className="text-default">{currMentor?.bio}</span>
                  </Card>
                </Col>
                <Divider type="vertical" style={{ minHeight: "70vh" }} />
                <Col style={{ padding: "0 2vw" }}>
                  <div style={{ padding: "10px 0" }}>
                    <div style={{ fontSize: "23px" }} className="text-bold">
                      Area of Expertises
                    </div>
                    <div>
                      {currMentor?.interest?.split("|").map((e) => (
                        <Tag>{e}</Tag>
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: "10px 0" }}>
                    <div style={{ fontSize: "23px" }} className="text-bold">
                      Skills
                    </div>
                    <div>
                      {currMentor?.skill?.split("|").map((e) => (
                        <Tag>{e}</Tag>
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: "10px 0" }}>
                    <div style={{ fontSize: "23px" }} className="text-bold">
                      Achievements
                    </div>
                    <div style={{ padding: "0 10px", fontSize: "15px" }}>
                      {currMentor?.achievement?.split("|").map((e) => (
                        <div>{e}</div>
                      ))}
                    </div>
                  </div>
                </Col>
                <Col
                  span={24}
                  className="card-button-accept"
                  style={{ textAlign: "center", padding: "10px" }}
                >
                  <Button className="button-mentor" onClick={handleNext}>
                    <UndoOutlined className="gradient-color" />
                    <div>Back</div>
                  </Button>
                  <Button
                    className="button-accept-mentor  btn-primary"
                    onClick={() => {
                      handleSendRequest(currMentor?.id);
                    }}
                    key={currMentor?.id}
                  >
                    <MailOutlined /> <div>Send Request</div>
                  </Button>
                  <Button className="button-mentor" onClick={handleNext}>
                    <DoubleRightOutlined className="gradient-color" />{" "}
                    <div>Next</div>
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
          <Card style={{ borderRadius: "10px" }}>
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
                    {mentorList?.map((e) => (
                      <>
                        <Col style={{ padding: "0 10px" }}>
                          <Avatar icon={<UserOutlined />} size={64} />
                        </Col>
                        <Col style={{ fontSize: "22px" }} span={8}>
                          <div className="text-bold">{`${e?.first_name} ${e?.last_name}`}</div>
                          <div>{e.major}</div>
                        </Col>
                        <Col offset={6}>
                          <Button className="btn-primary">Chat</Button>
                        </Col>
                      </>
                    ))}
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
                <div style={{ textAlign: "center" }}>
                  {" "}
                  <Button style={{ borderColor: "#fff" }}>Load More</Button>
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
                      <Button style={{ borderColor: "#fff" }}>Cancel</Button>
                    </Col>
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
