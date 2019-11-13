// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

/*
****OLD WAY****
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
****OLD WAY****
*/

'use strict';

const showImages = async (url) => {
  try {
      const response = await fetch(url);
      const result = await response.text();
      document.querySelector("ul").innerHTML = result;
      console.log(result);
  } catch (e) {
      console.log(e)
  }
};

showImages("images.html");



