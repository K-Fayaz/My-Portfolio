import React,{useState} from 'react';
import './NavBar.css';
import $ from 'jquery';

import {changeColor} from './function';
import {textColor3,ColorFull,textColor1,textColor2,textColor4,textColor5} from './function'
var theme;

let Theme = document.documentElement;

if(!localStorage.color){
  localStorage.setItem('color','rgba(50,187,142,1)');
}
ColorFull();


let NavBar = ()=>{
  if(!localStorage.theme){
    localStorage.setItem('theme','light');
    localStorage.setItem('time','🌙');
  }else{
    changeColor(localStorage.theme);
  }
  if(!localStorage.time){
    localStorage.setItem('time','☀️');
  }
  let [newTheme,Change] = useState(localStorage.time);
  function ChangeTheme()
  {
    if(localStorage.theme === 'light')
    {
      localStorage.setItem('theme','dark');
      changeColor(localStorage.theme);
      localStorage.setItem('time','☀️');
      newTheme = '☀️';
      Change(newTheme);
    }
    else{
      localStorage.setItem('theme','light');
      changeColor(localStorage.theme);
      localStorage.setItem('time','🌙');
      newTheme = '🌙';
      Change(newTheme);
    }
    console.log(localStorage.theme);
  }

  return (
    <>
      <div className='navbar'>
          <h1 className='Logo'>Fayaz</h1>
          <div id="name" className='all-buttons'>
            <button onClick={textColor1} className="color color-1"></button>
            <button onClick={textColor2} className="color color-2"></button>
            <button onClick={textColor3} className="color color-3"></button>
            <button onClick={textColor4} className="color color-4"></button>
            <button onClick={textColor5} className="color color-5"></button>
            <div onClick={ChangeTheme} className='Theme'>{newTheme}</div>
          </div>
      </div>
    </>
  )
};


export default NavBar;
