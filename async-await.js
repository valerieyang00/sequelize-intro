const axios = require("axios")

const url = 'https://swapi.dev/api/people/?search=Leia'

//async/await and dot then are interchangeable in JS

//axios call handling the promise with dot then syntax
axios.get(url)
    .then(response => {
        console.log(response.data)
    })
    .catch(console.warn)

//axios call handling the promise with async/await syntax to prevent CB hell
// async/await is a JS thing
// await tells JS to literally just wait -- but it has to happen in an async function
async function myFunction () {console.log("this works too")}
const fetchStarWars = async () => {
    try {
    // this is async function
    const response = await axios.get(url)
    console.log(response.data)
    } catch(err) {
        console.warn(err)
    }
}
// try catch works with anything -
fetchStarWars()


