import React from 'react';
import './skill.css';
import {BiMoviePlay} from 'react-icons/bi';
import { FaYoutube,FaGithub } from 'react-icons/fa';
import {ImBlogger} from 'react-icons/im';
import {ImImage} from 'react-icons/im';
import {AiFillChrome} from 'react-icons/ai';

function Projects(){

  return (
    <>
      <div className='project-container'>
          <h1 className='Intro-project'>This is how I spent my Time past few months..</h1>
          <div className='project'>
              <h1 className='project-name'>IMDB Clone</h1>
              <div className='breef'>
                  <BiMoviePlay className='Project-icon'/>
                  <p>An IMDB movie Clone made using Node.js,express,ejs.A simple backend that stores a movies poster,ratigs and reviews.The User has to create account
                  in order to make a review and can delete only the review he owns.</p>
              </div>
              <div className='links'>
                  <a href='#'><FaYoutube  className='project-link'/></a>
                  <a href='#'><FaGithub  className='project-link'/></a>
              </div>
          </div>

          <div className='project'>
              <h1 className='project-name'>Blogging Website Clone</h1>
              <div className='breef'>
                  <ImBlogger className='Project-icon'/>
                  <p>A blogging website where only user can post their blogs.It was made using the technologies like node.js,express.js and ejs
                  .I included TinyMCE's editor and its plugins.</p>
              </div>
              <div className='links'>
                  <a href='#'><FaYoutube  className='project-link'/></a>
                  <a href='#'><FaGithub  className='project-link'/></a>
              </div>
          </div>

          <div className='project'>
              <h1 className='project-name'>Background-image removal website </h1>
              <div className='breef'>
                  <ImImage className='Project-icon'/>
                  <p>A fun project,a website made with the implementaion of Remove.bg api using node.js and express.
                  The user has to create an account and uoload images that sends back the withou background, the Image is stored in the folder and can be deleted by the User</p>
              </div>
              <div className='links'>
                  <a href='#'><FaYoutube  className='project-link'/></a>
                  <a href='#'><FaGithub  className='project-link'/></a>
                  <a href='#'><AiFillChrome  className='project-link'/></a>
              </div>
          </div>
      </div>
    </>
  )

}

export default Projects;
