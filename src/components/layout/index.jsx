import React from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

const MenteeLayout = ({ children }) => {
  const { Content } = Layout;
  return (
    <Layout
      className="layout"
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Navbar />
      <Content
        style={{ minHeight: "100vh !important" }}
      >
        {children}
      </Content>
    </Layout>
  );
};

MenteeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenteeLayout;
