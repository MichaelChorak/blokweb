// JavaScript Document
var toggleMenu = document.querySelector('.hamburgerMenu');
var menu = document.querySelector('#menuItems');

 function toonMenu(){
     menu.classList.toggle('fadeIn');
 }

 toggleMenu.addEventListener('click', toonMenu);


//tab-content script

const tabs = document.querySelectorAll('[data-tab-target]');
const tabsContent = document.querySelectorAll('[data-tab-content]')

tabs.forEach( tabs => {
  tabs.addEventListener('click', () => {
    const target = document.querySelector(tabs.dataset.tabTarget)
    tabsContent.forEach(tabsContent => {
      tabsContent.classList.remove('active')
    })
    target.classList.add('active');
  })
})
