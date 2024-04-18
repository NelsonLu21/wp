import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import { Button, Divider } from "antd";
import { PageHeader } from "@ant-design/pro-layout";
import "./Header.css";
function Header() {
  return (
    <div class="header">
      <div class="header_left">
        <div class="title_name">NELSON LU</div>
        <div class="subtitle">Software Engineer</div>
      </div>
      <div class="header_right">
        <Link class="link" to="/">
          About
        </Link>
        <Link class="link" to="/projects">
          Projects
        </Link>
      </div>
    </div>
  );
  /*
  return (
    <div>
      <PageHeader
        title="Nelson Lu"
        subTitle="Software Engineer"
        style={{}}
        extra={[
          <Link to="/">
            <Button key="1">Home</Button>
          </Link>,
          <Link to="/projects">
            <Button key="2">Projects</Button>
          </Link>,
        ]}
      />
      <Divider />
    </div>
  );
*/
}

export default Header;
