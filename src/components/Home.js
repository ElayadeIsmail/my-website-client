import React from "react";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import handleTheme from "../utils/handleTheme";
import { Link } from "react-scroll";

const Home = () => {
  const changeTheme = (e) => {
    const { mode } = e.target.dataset;
    if (mode) {
      handleTheme(mode);
    }
  };
  return (
    <section className='s1'>
      <div className='main-container'>
        <div className='greeting-wrapper'>
          <h1>Hi, I AM ISMAIL ELAYADE</h1>
        </div>

        <div className='intro-wrapper'>
          <div className='nav-wrapper'>
            <a href='index.html'>
              <div className='dots-wrapper'>
                <div id='dot-1' className='browser-dot'></div>
                <div id='dot-2' className='browser-dot'></div>
                <div id='dot-3' className='browser-dot'></div>
              </div>
            </a>

            <ul id='navigation'>
              <li>
                <Link
                  style={{ cursor: "pointer" }}
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className='left-column'>
            <img
              id='profile_pic'
              src={require("../images/ismail.jpg")}
              alt='profile'
            />
            <h5 style={{ textAlign: "center", lineHeight: 0 }}>
              Personalize Theme
            </h5>

            <div onClick={(e) => changeTheme(e)} id='theme-options-wrapper'>
              <div
                data-mode='light'
                id='light-mode'
                className='theme-dot'
              ></div>
              <div data-mode='blue' id='blue-mode' className='theme-dot'></div>
              <div
                data-mode='green'
                id='green-mode'
                className='theme-dot'
              ></div>
              <div
                data-mode='purple'
                id='purple-mode'
                className='theme-dot'
              ></div>
            </div>

            <p id='settings-note'>
              *Theme settings will be saved for
              <br />
              your next vist
            </p>
          </div>

          <div className='right-column'>
            <div id='preview-shadow'>
              <div id='preview'>
                <div id='corner-tl' className='corner'></div>
                <div id='corner-tr' className='corner'></div>
                <h3>What I Do</h3>
                <p>
                  I'm a fullstack developer, and i love creating new things .
                </p>
                <div id='corner-br' className='corner'></div>
                <div id='corner-bl' className='corner'></div>
              </div>
            </div>
            <div className='social'>
              <h5>Social Media</h5>
              <a
                href='https://twitter.com/ElayadeIsmail'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </a>
              <a
                href='https://www.facebook.com/ELayadeIsmail'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook />
              </a>
              <a
                href='https://github.com/ElayadeIsmail'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
