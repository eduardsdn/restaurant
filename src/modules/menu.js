function createMenu(){
    const menu = document.createElement("div")
    menu.classList.add("menu")

    const title = document.createElement("div")
    title.classList.add("title")
    title.textContent = "OUR SPECIALTIES"

    const menuItemCards = document.createElement("div")
    menuItemCards.classList.add("menuItemCards") 

    menuItemCards.appendChild(createMenuCard("SUSHI", "/src/assets/images/menu_sushi.png", "Sushi is a traditional Japanese dish consisting of small rolls or balls of vinegar-flavored cold cooked rice, usually served with raw fish or other seafood, vegetables, and often wrapped in seaweed."))
    menuItemCards.appendChild(createMenuCard("ONIGIRI", "/src/assets/images/menu_onigiri.png","Onigiri is a Japanese snack or light meal made of rice shaped into a triangle, ball or cylinder, and typically filled with savory ingredients such as pickled plum, grilled salmon, tuna, or seaweed."))
    menuItemCards.appendChild(createMenuCard("RAMEN", "/src/assets/images/menu_ramen.png", "Ramen is a Japanese noodle dish made with Chinese-style wheat noodles served in a meat or fish-based broth, flavored with soy sauce or miso, and topped with various ingredients such as sliced pork, seaweed, eggs, and green onions."))
    menuItemCards.appendChild(createMenuCard("MOCHI", "/src/assets/images/menu_sweet.png", "Mochi is a Japanese sticky rice cake made from glutinous rice that has been pounded into a paste and molded into various shapes. It can be sweet or savory and is often filled with sweet red bean paste or ice cream."))

    menu.appendChild(title)
    menu.appendChild(menuItemCards)

    return menu
}

function createMenuCard(itemName, itemImg, itemDescr){
    const menuItemCard = document.createElement("div")
    menuItemCard.classList.add("menuItemCard") 

    const menuItemCardImg = document.createElement("img")
    menuItemCardImg.classList.add("menuItemImg")
    menuItemCardImg.src = itemImg

    const menuItemCardName = document.createElement("h")
    menuItemCardName.classList.add("menuItemName")
    menuItemCardName.textContent = itemName

    const menuItemDescription = document.createElement("div")
    menuItemDescription.classList.add("description")
    menuItemDescription.textContent = itemDescr

    const menuItemBtn = document.createElement("button")
    menuItemBtn.classList.add("cardOrderBtn")
    menuItemBtn.textContent = "ORDER NOW"

    menuItemCard.appendChild(menuItemCardImg)
    menuItemCard.appendChild(menuItemCardName)
    menuItemCard.appendChild(menuItemDescription)
    menuItemCard.appendChild(menuItemBtn)

    return menuItemCard
}

export default createMenu