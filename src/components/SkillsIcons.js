import React from "react";
import {
  FaHtml5,
  FaBootstrap,
  FaWordpress,
  FaSass,
  FaReact,
  FaCodeBranch,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  DiCss3,
  DiJavascript1,
  DiFirebase,
  DiVisualstudio,
  DiResponsive,
  DiMongodb,
} from "react-icons/di";
import { AiFillCode } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";

const SkillsIcons = () => (
  <div className='skills-container'>
    <div className='skills-inner-container'>
      <div className='skill-wraper'>
        <div className='skill'>
          <FaHtml5 className='icon' />
        </div>
        <h3>HTML</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <DiCss3 className='icon' />
        </div>
        <h3>CSS</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <FaBootstrap className='icon' />
        </div>
        <h3>Bootstrap</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <FaSass className='icon' />
        </div>
        <h3>SASS</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <DiJavascript1 className='icon' />
        </div>
        <h3>JavaScript</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <FaReact className='icon' />
        </div>
        <h3>React</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <FaNodeJs className='icon' />
        </div>
        <h3>NodeJs</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <DiMongodb className='icon' />
        </div>
        <h3>MongoDB</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <FaCodeBranch className='icon' />
        </div>
        <h3>Git</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <FaGithub className='icon' />
        </div>
        <h3>Github</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <DiFirebase className='icon' />
        </div>
        <h3>FireBase</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <AiFillCode className='icon' />
        </div>
        <h3>CMD Line</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <DiVisualstudio className='icon' />
        </div>
        <h3>VS Code</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <FaWordpress className='icon' />
        </div>
        <h3>Wordpress</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <FiFigma className='icon' />
        </div>
        <h3>Figma</h3>
      </div>
      <div className='skill-wraper'>
        <div className='skill'>
          <DiResponsive className='icon' />
        </div>
        <h3>Responsive Websites</h3>
      </div>
    </div>
  </div>
);

export default SkillsIcons;
