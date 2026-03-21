function generateTravel(event) {
  event.preventDefault()

  let resultsElement = document.querySelector(".results-cards")

  const tips = [
    "1. The 1st top must visit place",
    "2. The 2nd top must visit place",
    "3. The 3rd top must visit place",
    "4. The 4th top must visit place",
    "5. The 5th top must visit place",
    "Bonus: Explore the hidden gems of the city",
  ]

  resultsElement.innerHTML = ""

  const typewriter = new Typewriter(resultsElement, {
    autoStart: false,
    delay: 40,
    cursor: "",
    loop: false,
  })

  tips.forEach((tip) => {
    typewriter.typeString(tip).typeString("<br />").pauseFor(250)
  })

  typewriter.start()
}

let travelFormElement = document.querySelector("#travel-form")
travelFormElement.addEventListener("submit", generateTravel)
