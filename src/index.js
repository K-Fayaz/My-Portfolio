import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import Mainbody from './MainBody';
import Skill from './Skill';
import Projects from './Projects';
import Footer from './Footer';
import Email from './Email';



ReactDOM.render(
  <>
    <NavBar />
    <Mainbody/>
    <Skill/>
    <Projects/>
    <Email/>
    <Footer/>
  </>,document.getElementById('root'));
