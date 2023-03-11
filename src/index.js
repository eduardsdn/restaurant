import './style.css'

import createHeader from "./modules/header.js"
import createHome from "./modules/home.js"
import createMenu from "./modules/menu.js"
import createAbout from "./modules/about.js"



const content = document.querySelector(".content")

// content.appendChild(createHeader())



// content.appendChild(createHome())



const homeTab = document.querySelector(".Home")
const menuTab = document.querySelector(".Menu")
const aboutTab = document.querySelector(".About")
// const contactsTab = document.querySelector("Contacts")



homeTab.addEventListener('click', function(){
    content.removeChild(content.children[1]);
    content.appendChild(createHome())
})


menuTab.addEventListener('click', function(){
    content.removeChild(content.children[1]);
    content.appendChild(createMenu())
})

aboutTab.addEventListener('click', function(){
    content.removeChild(content.children[1]);
    content.appendChild(createAbout())
})



