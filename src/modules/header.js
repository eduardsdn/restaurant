function createHeader(){
    const header = document.createElement("div")
    header.classList.add("header")

    const logo = document.createElement("div")
    logo.textContent = "MIYABI HOUSE"
    logo.classList.add("logo")

    const links = document.createElement("ul")
    links.classList.add("links")
    const linksNamesArr = ["Home","Menu","About","Contacts"]
    for(let i = 0; i < linksNamesArr.length; i++){
        const link = document.createElement("a")
        link.textContent = linksNamesArr[i]
        link.classList.add(linksNamesArr[i])
        links.appendChild(link)
    }

    const icons = document.createElement("div")

    icons.classList.add("icons")

    const iconImgArr = ["/src/assets/icons/bag-happy.svg", "/src/assets/icons/profile-circle.svg"]
    for(let i = 0; i < iconImgArr.length; i++){
        const iconLink = document.createElement("a")
        const iconLinkImg = document.createElement("img")
        iconLinkImg.src = iconImgArr[i]
        iconLink.appendChild(iconLinkImg)
        icons.appendChild(iconLink)
    }

    header.appendChild(logo)
    header.appendChild(links)
    header.appendChild(icons)

    return header
}

export default createHeader;