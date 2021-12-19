import React from 'react';

var moon = { BehindColor:' rgba(27,26,87,1)',CommonText:'white'};
var Sun = { BehindColor:'white',CommonText:'black' };
var Theme = document.documentElement;



export function changeColor(theme)
{
  if(theme === 'light')
  {
    Theme.style.setProperty('--mainColor',Sun.BehindColor);
    Theme.style.setProperty('--theme',Sun.CommonText);
  }else{
    Theme.style.setProperty('--mainColor',moon.BehindColor);
    Theme.style.setProperty('--theme',moon.CommonText);
  }
}

export function textColor3(){
    localStorage.setItem('color','orange');
    ColorFull();
}

export function ColorFull(){
  Theme.style.setProperty('--textColor',localStorage.color);
}

export function textColor1(){
  localStorage.setItem('color','rgba(50,187,142,1)');
  ColorFull();
}
export function textColor2(){
  localStorage.setItem('color','rgba(141,11,201,1)');
  ColorFull();
}
export function textColor4(){
  localStorage.setItem('color','rgba(171,17,68,1)');
  ColorFull();
}
export function textColor5(){
  localStorage.setItem('color','rgba(1,136,136,1)');
  ColorFull();
}
