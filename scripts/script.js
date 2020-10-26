// JavaScript Document
var toggleMenu = document.querySelector('.hamburgerMenu');
var menu = document.querySelector('#menuItems');

const tabs = document.querySelectorAll('[data-tab-target]');
const tabsContent = document.querySelectorAll('[data-tab-content]')

 function toonMenu(){
     menu.classList.toggle('fadeIn');
 }

 function toggleTekst(){
   tabs.classList.toggle('active');
 }

 toggleMenu.addEventListener('click', toonMenu);


//tab-content script


tabs.forEach( tabs => {
  tabs.addEventListener('click', () => {
    const target = document.querySelector(tabs.dataset.tabTarget)
    tabsContent.forEach(tabsContent => {
      tabsContent.classList.remove('active')
    })
    target.classList.add('active');
  })
})
