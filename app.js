"use strict";

console.log("Hello Fetch API!");

// Program State
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "2CeJQqAKEJZk0k3h4jg33Exovy7ky9y7";

// Select Elements
let feedbackEle = document.querySelector("#feedback");
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gifEle = document.querySelector("#imageContainer > img");

// Event Handler
searchBtn.addEventListener("click", (event) => {
    getGif(searchInput.value);
});

function getGif(searchTerm) {
    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`)
    .then((res) => res.json())
    .then((body) => {
        // show the gif on the dom
        gifEle.src = body.data.images.original.url;
    })
    .catch((err) => {
        console.error(err);
        // show the error message on the dom
        feedbackEle.textContent = error.message;
    });
}


// Async/Await methods

// async function getGif(searchTerm) {
//     try {
//         let res = await  fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`);
//         let body = await res.json();
//         // show the gif on the dom
//         gifEle.src = body.data.images.original.url;
//     } catch (err) {
//         console.error(err);
//         // show the error message on the dom
//         feedbackEle.textContent = err.message;
//     }
// }