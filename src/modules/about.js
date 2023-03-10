function createAbout(){
    const about = document.createElement("div")
    about.classList.add("about")

    const description = document.createElement("div")
    description.classList.add("description")

    const aboutTitle = document.createElement("h")
    aboutTitle.classList.add("aboutTitle")
    aboutTitle.textContent = "ABOUT US"

    const descriptionText = document.createElement("p")
    descriptionText.classList.add("descriptionText")
    descriptionText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam aut fugiat! Nam reiciendis illum culpa esse iste eveniet delectus voluptatem error, explicabo magnam repellat fugiat totam suscipit possimus pariatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sint eligendi quibusdam laboriosam. Quia eligendi optio dolore doloremque nostrum! Quaerat eaque illo magni autem temporibus cum recusandae vero at facilis!"

    description.appendChild(aboutTitle)
    description.appendChild(descriptionText)

    const testimonials = document.createElement("div")
    testimonials.classList.add("testimonials")

    const testimonialsTitle = document.createElement("div")
    testimonialsTitle.classList.add("testimonialsTitle")
    testimonialsTitle.textContent = "TESTIMONIALS"

    const testCards = document.createElement("div")
    testCards.classList.add("testCards")

    testCards.appendChild(createTestCard("one", false, "/src/assets/icons/woman1.png", "The sushi at this fancy Japanese restaurant was some of the freshest and most delicious Ive ever had.", "- Charlie, Editor, NY Times"))
    testCards.appendChild(createTestCard("two", false, "/src/assets/icons/woman2.png", "I highly recommend the tempura at this restaurant, it was crispy and perfectly seasoned.", "-- Martha, Chef, Nobu"))
    testCards.appendChild(createTestCard("three", true, "/src/assets/icons/man.png", "I had a great experience dining at this fancy Japanese restaurant. The menu was diverse and had a good variety of seafood.", "- Zachery, Sous Chef, Stars"))

    testimonials.appendChild(testimonialsTitle)
    testimonials.appendChild(testCards)



    about.appendChild(description)
    about.appendChild(testimonials)

    return about
}

function createTestCard(id,isInverted, personImg, dialogContent, author){
    const testCard = document.createElement("div")
    testCard.classList.add("testCard")
    testCard.setAttribute('id',`${id}`);
    

    const testCardImg = document.createElement("img")
    testCardImg.src = personImg

    const dialog = document.createElement("div")
    dialog.classList.add("dialog")

    const bubbleImg = document.createElement("img")
    bubbleImg.classList.add("bubble")
    if(isInverted === false){
        bubbleImg.src = "/src/assets/icons/dialog.svg"
    }
    else{
        bubbleImg.src = "/src/assets/icons/dialog_reverse.svg"
    }

    const dialogText = document.createElement("div")
    dialogText.classList.add("dialogText")

    const dialogTextContent = document.createElement("p")
    dialogTextContent.textContent = dialogContent

    const dialogTextAuthor = document.createElement("p")
    dialogTextAuthor.textContent = author

    dialogText.appendChild(dialogTextContent)
    dialogText.appendChild(dialogTextAuthor)

    dialog.appendChild(bubbleImg)
    dialog.appendChild(dialogText)
    
    testCard.appendChild(testCardImg)
    testCard.appendChild(dialog)

    return testCard
}

export default createAbout