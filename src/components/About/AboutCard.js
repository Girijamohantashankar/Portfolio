import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Girija Shankar Mohanta </span>
            from <span className="purple"> Mayurbhanj, India.</span>
            <br /> I have Completed My MCA From Lovely Prodessional University Punjab(LPU)
            <br />
            Additionally, I am currently looking for a job as Frontend Developer // Web Developer // Web Designer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Assembled PC
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Girija Shankar Mohanta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
