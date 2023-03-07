import './style.css'

import createHeader from "./modules/loadpage.js"
import createHome from "./modules/home.js"

const content = document.querySelector(".content")
content.appendChild(createHeader())
content.appendChild(createHome())