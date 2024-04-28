import React from "react";
import Header from "../components/Header";
import { SocialIcon } from "react-social-icons";
import "./Pages.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div>
      <Header />
      <div class="aboutcontent">
        <p class="firstline">Hello! </p>

        <p>
          {" "}
          I'm a passionate undergraduate student currently navigating the
          fascinating worlds of Computer Science and Business Economics at UCLA.
          My academic journey is a dual-degree adventure, where I strive to
          merge the precision of technology with the dynamics of the economy.{" "}
        </p>

        <p>
          {" "}
          My academic background in computer science has equipped me with a
          solid foundation in algorithms and complexities. I have delved into
          topics such as data structures, concurrent programming, and algorithms
          and complexities, which have honed my problem-solving skills.
          Additionally, my coursework has provided me with a deep understanding
          of low-level implementations of computer systems, including memory
          management, assembly language, and system architecture. I am
          proficient in C/C++ and have hands-on experience with low level
          operations and optimizations.
        </p>

        <p>
          I have also gained practical experience by participating in the design
          and implementation of multiple web applications in a professional
          setting. These projects allowed me to apply my knowledge in real-world
          business scenarios, further developing my skills in full-stack
          development, user interface design, and database management. My role
          often required me to lead cross-functional teams through the entire
          software development lifecycle, ensuring that each application was not
          only functional but also met high standards of quality and user
          experience.{" "}
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
          insights. Whether you're a fellow student, a professional in the
          field, or simply someone curious about technology and economics, I
          hope to spark discussions, forge connections, and explore the future
          of tech together.
        </p>
      </div>

      <div class="socialicons">
        <div class="socialicon">
          <SocialIcon
            url="https://github.com"
            href="https://github.com/NelsonLu21"
            style={{ height: 50, width: 50, alignItems: "right" }}
          />
        </div>

        <div class="socialicon">
          <SocialIcon
            url="https://linkedin.com"
            href="https://www.linkedin.com/in/nelson-lu-8039b4232/"
            style={{ height: 50, width: 50, alignItems: "right" }}
          />
        </div>
      </div>
    </div>
  );
}
export default About;
