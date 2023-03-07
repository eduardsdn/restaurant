function createHome(){

    const main = document.createElement("div")
    main.classList.add("main")

    // Top section of home
    const mainTop = document.createElement("div")
    mainTop.classList.add("main-top")
    
    const backgroundImg1 = document.createElement("img")
    backgroundImg1.classList.add("backgroundImg1")
    backgroundImg1.src = "/src/assets/images/background1.png"

    const backgroundImg2 = document.createElement("img")
    backgroundImg2.classList.add("backgroundImg2")
    backgroundImg2.src = "/src/assets/images/background2.png"

    const homeTitle = document.createElement("h")
    homeTitle.classList.add("title")
    homeTitle.innerHTML = "TASTE THE TRADITION<br>OF JAPAN"

    const description = document.createElement("description")
    description.classList.add("description")
    description.textContent ="Lorem ipsum dolor sit amet consectetur. Turpis diam id nulla libero at faucibus libero eget. Ornare tincidunt tempor sed egestas pulvinar facilisis."

    mainTop.appendChild(backgroundImg1)
    mainTop.appendChild(backgroundImg2)
    mainTop.appendChild(homeTitle)
    mainTop.appendChild(description)



    // Bottom section of home
    const mainBottom = document.createElement("div")
    mainBottom.classList.add("main-bottom")

    const orderBtn = document.createElement("button")
    orderBtn.textContent = "ORDER NOW"
    orderBtn.classList.add("orderBtn")

    const mainImg = document.createElement("img")
    mainImg.classList.add("mainImg")
    mainImg.src = "/src/assets/images/main_ramen.png"

    mainBottom.appendChild(orderBtn)
    mainBottom.appendChild(mainImg)

    // Adding both sections to main

    main.appendChild(mainTop)
    main.appendChild(mainBottom)

    return main
}

export default createHome