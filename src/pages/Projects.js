import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import { Button } from "antd";
import { ProCard } from "@ant-design/pro-components";
import "./Pages.css";

function Projects() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <Header />
      <p class="title">Projects</p>
      <div class="procard">
        <ProCard
          title="Second Hand Marketplace for UCLA Students"
          headerBordered
          collapsible
          defaultCollapsed
          onCollapse={(collapse) => console.log(collapse)}
        >
          <div class="cardcontent">
            As the team leader, I spearheaded the development of an online
            marketplace tailored for UCLA students. This platform enables
            students to buy and sell second-hand books, lab equipment, and other
            items. We designed the frontend using React.js and crafted the
            backend with Express.js, ensuring a robust and user-friendly
            interface.
          </div>
        </ProCard>

        <ProCard
          title="Simple Brick Breaker Implementation using OpenGL"
          headerBordered
          collapsible
          defaultCollapsed
          onCollapse={(collapse) => console.log(collapse)}
        >
          As a part of my Computer Graphics class, we implemented a simple
          version of the classic Brick Breaker game using low level OpenGL for
          graphics rendering and JavaScript for programming logic. Despite its
          simple appearance, the project was a valuable learning experience that
          provided me with a deep understanding of fundamental computer graphics
          concepts.
        </ProCard>
      </div>
    </div>
  );
}

export default Projects;
