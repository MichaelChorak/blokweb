// JavaScript Document
var toggleMenu = document.querySelector('.hamburgerMenu');
var menu = document.querySelector('.menuItems');
var btnScroll = document.querySelector('#scrollBtn')
var buttonDark =  document.querySelector('#btnDarkMode');
var menuKruis = document.querySelector('#kruisjeMenu');
const tabs = document.querySelectorAll('[data-tab-target]');
const tabsContent = document.querySelectorAll('[data-tab-content]')

// //hier komen de elementen die kleuren bij de btnDarkMode
// var header = document.querySelector('header');
// var btnSite = document.querySelectorAll("button");
// var headers = document.querySelectorAll("h1,h2,h3 h4,h5,h6");
// var pTekst = document.querySelectorAll("p");
// var receptKaarten =  document.querySelectorAll(".receptKaart");
// var receptTips =  document.querySelectorAll(".cardTip");
// var liStyle =  document.querySelectorAll("li");
//
//
// function activeerDarkMode(){
//
//   liStyle.classList.toggle('headerDarkMode');
//   // liStyle.classList.toggle('headerDarkMode');
//   // pTekst.classlist.toggle('headerDarkMode');
//   console.log(liStyle);
// }



 function toonMenu(){
     menu.classList.toggle('fadeIn');
 }

 function toggleTekst(){
   tabs.classList.toggle('active');
 }

 function testScroll (){
   window.scrollTo({top: 0, behavior: 'smooth'});
 }


 toggleMenu.addEventListener('click', toonMenu);
 btnScroll.addEventListener('click', testScroll);
  menuKruis.addEventListener('click', toonMenu);




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
