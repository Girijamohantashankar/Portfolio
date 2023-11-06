import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import adventure from "../../Assets/Projects/adventure.jpg";
import Hrmaven from "../../Assets/Projects/Hrmaven.jpg";
import lpu from "../../Assets/Projects/lpu.jpg";
import arsha from "../../Assets/Projects/arsha.jpg";
import bootstrap from "../../Assets/Projects/bootstrap.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adventure}
              isBlog={false}
              title="Adventure Trip"
              description="
              Adventure Trip is an exhilarating journey that offers thrill-seekers an unforgettable outdoor experience. Explore the beauty of nature, conquer challenging terrain, and bond with fellow adventurers. From hiking and rock climbing to kayaking and camping, this project promises a diverse range of adrenaline-pumping activities in stunning destinations. Get ready to embark on the adventure of a lifetime!"
              ghLink="https://github.com/Girijamohantashankar/Adventuretrip.git"
              demoLink="https://adventuretrip.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hrmaven}
              isBlog={false}
              title="HrMaven"
              description="
              HrMaven is a comprehensive HR management system designed to streamline and simplify human resource processes within organizations. It offers features for employee data management, recruitment, performance evaluation, payroll, and more. HrMaven aims to enhance HR efficiency and improve workforce management, making it a valuable tool for businesses of all sizes."
              ghLink="https://github.com/Girijamohantashankar/HrMaven.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lpu}
              isBlog={false}
              title="LPU Placement Portal"
              description="LPU (Lovely Professional University) Placement Portal is an online platform provided by the university to facilitate the placement and job search process for its students. It connects LPU students with job opportunities, internships, and career resources offered by various companies and organizations. The portal enables students to upload their resumes, browse job listings, and participate in recruitment drives, helping them transition smoothly from academia to the professional world."
              ghLink="https://github.com/Girijamohantashankar/LPU-Placement-website.git"
              demoLink="https://girijamohantashankar.github.io/LPU-Placement-website/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arsha}
              isBlog={false}
              title="Arsha Demo"
              description="Arsha Demo is a responsive website built with HTML, CSS, and JavaScript. HTML structures content, CSS styles elements, and JavaScript adds interactivity. A responsive design ensures it adapts to various screen sizes for a seamless user experience on desktops, tablets, and mobile devices."
              ghLink="https://github.com/Girijamohantashankar/Arsha.Bootstrap.Demo.github.io.git"
              demoLink="https://girijamohantashankar.github.io/Arsha.Bootstrap.Demo.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bootstrap}
              isBlog={false}
              title="Responsive Bootstrap"
              description="
              A responsive Bootstrap demo website showcases the capabilities of the Bootstrap framework, a popular front-end technology. Bootstrap simplifies website development, offering pre-designed components and responsive grids for seamless display on different devices. This demo illustrates how Bootstrap can create a mobile-friendly and visually appealing website, ideal for modern web development."
              ghLink="https://github.com/Girijamohantashankar/bootstrap.github.io.git"
              demoLink="https://girijamohantashankar.github.io/bootstrap.github.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
