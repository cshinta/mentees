import React, { useState } from "react";
import { Row, Col, Form, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { WithContext as ReactTags } from "react-tag-input";

const Page = ({ onNext, onBack, setForm, form }) => {
  const [interestTags, setInterestTags] = useState([]);
  const [skillTags, setSkillTags] = useState([]);

  const handleInterestDelete = (i) => {
    setInterestTags(interestTags.filter((_, index) => index !== i));
  };

  const handleInterestAddition = (tag) => {
    setInterestTags([...interestTags, tag]);
  };

  const handleInterestDrag = (tag, currPos, newPos) => {
    const temp = [...interestTags];

    temp.splice(currPos, 1);
    temp.splice(newPos, 0, tag);

    setInterestTags({ temp });
  };

  const handleSkillDelete = (i) => {
    setSkillTags(skillTags.filter((_, index) => index !== i));
  };

  const handleSkillAddition = (tag) => {
    setSkillTags([...skillTags, tag]);
  };

  const handleSkillDrag = (tag, currPos, newPos) => {
    const temp = [...skillTags];

    temp.splice(currPos, 1);
    temp.splice(newPos, 0, tag);

    setSkillTags({ temp });
  };

  const handleFinish = (values) => {
    console.log(values);
    setForm((form) => ({
      ...form,
      interest: interestTags.map((e) => e.text).join("|"),
      skill: skillTags.map((e) => e.text).join("|"),
    }));

    onNext()
  };

  return (
    <div id="mentor-registration-2" style={{ padding: "5vh 8vw" }}>
      <Form layout="vertical" wrapperCol={{ span: 24 }} onFinish={handleFinish} initialValues={form}>
        <Form.Item
          name="interest"
          label={
            <span className="text-bold text-secondary">Area of Interests</span>
          }
          rules={[{ required: true, message: "Please enter your interests!" }]}
        >
          <div>
            <ReactTags
              inline
              placeholder="Enter your interest"
              tags={interestTags}
              handleDelete={handleInterestDelete}
              handleAddition={handleInterestAddition}
              handleDrag={handleInterestDrag}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="skill"
          label={<span className="text-bold text-secondary">Skills</span>}
          rules={[
            {
              required: true,
              message: "Please input your skills!",
            },
          ]}
        >
          <div>
            <ReactTags
              inline
              placeholder="Enter your skill"
              tags={skillTags}
              handleDelete={handleSkillDelete}
              handleAddition={handleSkillAddition}
              handleDrag={handleSkillDrag}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="resume"
          label={<span className="text-bold text-secondary">CV/Resume</span>}
          valuePropName="fileList"
          extra=".pdf max. 2 MB"
          accept=".pdf"
        >
          <div className="text-secondary">
            This requirement is used as consideration for the mentor to accept
            you as their mentee or not.
          </div>
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Row justify="center" gutter={[80, 80]}>
          <Col>
            <Button size="large" onClick={onBack}>
              <span>Back</span>
            </Button>
          </Col>
          <Col>
            <Form.Item
              wrapperCol={{
                span: 12,
              }}
            >
              <Button size="large" className="btn-primary" htmlType="submit">
                <span>Next</span>
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Page;
