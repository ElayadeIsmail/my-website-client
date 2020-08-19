import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb, DiFirebase, DiSass } from "react-icons/di";
import Pingram from "../images/pingram.png";
import Ecommerce from "../images/e-commerce.jpg";
import movieLand from "../images/movieLand.jpg";

import ProjectImg from "./projects/ProjectImg";
import { AiFillApi } from "react-icons/ai";

const Projects = () => {
  return (
    <section className='s1'>
      <div className='main-container'>
        <h2 style={{ textAlign: "center", margin: "1rem auto" }}>
          Some of my past projects
        </h2>
        <div className='projects'>
          <div className='project'>
            <div className='project-info'>
              <h2>Pingram</h2>
              <p>
                Pingram, it's like Instagram you can sign up for the first time
                and make a profile with your profile picture and personal
                information like age, address, bio, etc … , you can change them
                anytime you want, you can follow and unfollow users, Post
                picture and like and unlike and comment on users posts and
                delete posts and profile if you want. pingram it uses ReactJS in
                front-end and NodeJS for the back-end and MongoDb for store data
                and Cloudinary for store the images.
              </p>
              <div className='stack'>
                Stack : <FaReact /> <FaNodeJs /> <DiMongodb /> <DiSass />
              </div>
            </div>
            <ProjectImg
              image={Pingram}
              title='Pingram'
              gitHubLink='https://github.com/ElayadeIsmail/pingram'
              demoLink='https://rocky-river-99738.herokuapp.com/'
            />
          </div>
          <div className='project'>
            <ProjectImg
              image={Ecommerce}
              title='Diamong Clothing'
              gitHubLink='https://github.com/ElayadeIsmail/diamond-clothing'
              demoLink='https://diamond-clothing-6e591.firebaseapp.com/'
            />
            <div className='project-info'>
              <h2>Diamonde Clothing</h2>
              <p>
                Diamond Clothing, it's an e-commerce website for clothes you can
                sign in and sign up with email and google account it uses
                Firebase for authentication and you can add clothes to cart and
                add quantity and remove items anytime you want and it's uses
                Stripe API to handle payment. It uses ReactJS for front-end and
                freebase for storing data and authentication.
              </p>
              <div className='stack'>
                Stack : <FaReact /> <DiFirebase /> <DiSass />
              </div>
            </div>
          </div>
          <div className='project'>
            <div className='project-info'>
              <h2>movieLand</h2>
              <p>
                Movieland, It's a movie website you can see the movies and get
                the top popular, top rated, trending, and you can search for a
                movie and get all the information about it (rating, name ...)
                and the cast for the movie. It uses ReactJS for front-ent and
                The movie Data base API for the movies Informaion.
              </p>
              <div className='stack'>
                Stack : <FaReact /> <AiFillApi /> <DiSass />
              </div>
            </div>
            <ProjectImg
              image={movieLand}
              title='movieLand'
              gitHubLink='https://github.com/ElayadeIsmail/Movie-Land'
              demoLink='https://movie-land.netlify.app/'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
