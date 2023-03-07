import './style.css'

import createHeader from "./modules/loadpage.js"
// import createHome from "./modules/home.js"
import createMenu from "./modules/menu.js"

const content = document.querySelector(".content")
content.appendChild(createHeader())
// content.appendChild(createHome())
content.appendChild(createMenu())

