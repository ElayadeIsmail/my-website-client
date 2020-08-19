import React from "react";
import SkillsIcons from "./SkillsIcons";
import { Link } from "react-scroll";

const Skills = () => {
  return (
    <section className='s2'>
      <div className='main-container'>
        <div className='skills'>
          <h1>Skills & Tools</h1>
          <SkillsIcons />
          <div className='skill-footer'>
            <h2>I'm Currently available for freelance work</h2>
            <p>
              if You have a project that you want to get Started,I Can help you
              with that{" "}
              <Link
                style={{ cursor: "pointer" }}
                to='contact'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Get In Touch !
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
