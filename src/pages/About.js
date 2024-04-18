import React from "react";
import Header from "../components/Header";
import "./Pages.css";

function About() {
  return (
    <div>
      <Header />
      <div>
        <p>Hello! </p>

        <p>
          {" "}
          I'm a passionate undergraduate student currently navigating the
          fascinating worlds of Computer Science and Business Economics at UCLA.
          My academic journey is a dual-degree adventure, where I strive to
          merge the precision of technology with the dynamics of the economy.{" "}
        </p>

        <p>
          {" "}
          At the heart of my academic pursuits lies a deep-seated fascination
          with Algorithms and Complexities, alongside Artificial Intelligence.
          These areas stand as the twin pillars that fuel my curiosity and drive
          my ambition to contribute to the field of technology. The intricacies
          of how algorithms solve complex problems and the boundless
          possibilities within AI are what captivate me the most.
        </p>

        <p>
          My coding journey has been diverse, with a strong foundation in C and
          C++, which laid the groundwork for my understanding of programming
          principles. Python then introduced me to a world of simplicity and
          versatility, allowing me to explore AI and machine learning in depth.
          JavaScript has enabled me to bring my ideas to life on the web, making
          my projects accessible and interactive.{" "}
        </p>

        <p>
          As I continue on this dual-degree path, I remain committed to not only
          expanding my technical skills but also understanding the economic
          impacts and ethical considerations of technology. I believe that the
          intersection of Computer Science and Business Economics is where truly
          innovative solutions to today's challenges can be found.{" "}
        </p>

        <p>
          Through this website, I aim to share my journey, projects, and
          insights with you. Whether you're a fellow student, a professional in
          the field, or simply someone curious about technology and economics, I
          hope to spark discussions, forge connections, and explore the future
          of tech together.
        </p>

        <p> Thank you for stopping by! </p>
      </div>
    </div>
  );
}
export default About;
