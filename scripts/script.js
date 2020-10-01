// JavaScript Document
var toggleMenu = document.querySelector('.hamburgerMenu');
var menu = document.querySelector('#menuItems');

 function toonMenu(){
     menu.classList.toggle('fadeIn');
 }

 toggleMenu.addEventListener('click', toonMenu);
