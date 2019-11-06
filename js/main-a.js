// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

'use strict';

const ul = document.querySelector("ul");

const address = "images.html";

function showImages() {
    fetch(address).then(function (result) {
        return result.text();
    }).then(function (text) {
        console.log(text);
        ul.innerHTML = text;
    });
}

showImages();



