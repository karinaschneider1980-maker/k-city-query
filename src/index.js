function displayTravel(response) {
  let resultsElement = document.querySelector(".results-cards")
  resultsElement.innerHTML = ""

  let answer = response.data.answer
  answer = answer.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  answer = answer.replace(/###/g, "")
  answer = answer.replace(/\d\./g, "<br /><br />$&")
  answer = answer.replace(/Bonus/g, "<br /><br /><strong>Bonus</strong>")

  const typewriter = new Typewriter(resultsElement, {
    autoStart: false,
    delay: 20,
    cursor: "",
    loop: false,
  })

  typewriter.typeString(answer).start()
}
function generateTravel(event) {
  event.preventDefault()

  let apiKey = "d37caee084ftd6c3baf32ae334oca1bf"
  let cityInput = document.querySelector(".city").value
  let prompt = `What are the top 5 must visit places in ${cityInput} in South Korea? Also give 1 bonus hidden gem. For each place include the address in hangul`
  let context =
    "You are a South Korea travel expert. Give a numbered list of 5 must visit places with a very short description per place."
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

  let resultsElement = document.querySelector(".results-cards")
  resultsElement.innerHTML = "Loading..."

  axios.get(apiUrl).then(displayTravel)
}

let travelFormElement = document.querySelector("#travel-form")
travelFormElement.addEventListener("submit", generateTravel)
