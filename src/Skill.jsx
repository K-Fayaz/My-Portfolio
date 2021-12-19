import React from 'react';
import './skill.css';
import { FaCss3Alt } from "react-icons/fa";
import {SiExpress} from "react-icons/si";
import {FaNodeJs} from 'react-icons/fa';
import {ImHtmlFive} from 'react-icons/im';
import { FaBootstrap } from 'react-icons/fa';
import {RiReactjsLine} from 'react-icons/ri';

function Skill(){
  return (
    <>
    <h1 className="heading">My Skills </h1>
      <div className='skillContainer'>
          <div className='skillCard'>
          <ImHtmlFive className='Icon'/>
          <h2 className='tech'>HTML</h2>
          </div>
          <div className='skillCard'>
              <FaCss3Alt className='Icon'/>
              <h2 className='tech'>CSS</h2>
          </div>
          <div className='skillCard'>
          <RiReactjsLine className='Icon'/>
          <h2 className='tech'>React</h2>
          </div>
          <div className='skillCard'>
              <SiExpress className='Icon'/>
              <h2 className='tech'>Express</h2>
          </div>
          <div className='skillCard'>
              <FaNodeJs className='Icon'/>
              <h2 className='tech'>Node js</h2>
          </div>
          <div className='skillCard'>
              <FaBootstrap className='Icon'/>
              <h2 className='tech'>Bootstrap</h2>
          </div>
      </div>
    </>
  )
}


export default Skill;
