function createContact(){
    const contact = document.createElement("div")
    contact.classList.add("contact")

    const reservations = document.createElement("div")
    reservations.classList.add("reservations")

    const socialMedia = document.createElement("div")
    socialMedia.classList.add("reservations")

    const review = document.createElement("div")
    review.classList.add("review")

    const reservationsTitle = document.createElement("h")
    reservationsTitle.textContent = "For reservations call:"

    const phone = document.createElement("p")
    phone.textContent = "+34 111 22 33"

    reservations.appendChild(reservationsTitle)
    reservations.appendChild(phone)

    const socialTitle = document.createElement("h")
    socialTitle.textContent = "Contact us on social media:"

    const mediaIcons = document.createElement("div")
    
    const icon1 = document.createElement("img")
    icon1.src = "/src/assets/icons/facebook.png"
    const icon2 = document.createElement("img")
    icon2.src = "/src/assets/icons/instagram.png"
    const icon3 = document.createElement("img")
    icon3.src = "/src/assets/icons/whatsapp.png"
    const icon4 = document.createElement("img")
    icon4.src = "/src/assets/icons/telegram.png"

    mediaIcons.appendChild(icon1)
    mediaIcons.appendChild(icon2)
    mediaIcons.appendChild(icon3)
    mediaIcons.appendChild(icon4)

    socialMedia.appendChild(socialTitle)
    socialMedia.appendChild(mediaIcons)

    const reviewText = document.createElement("p")
    reviewText.innerHTML = `Click <a href="" class="here">here</a> to leave a review`

    review.appendChild(reviewText)

    
    contact.appendChild(reservations)
    contact.appendChild(socialMedia)
    contact.appendChild(review)

    return contact
}

export default createContact