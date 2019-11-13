// Create function 'showImages' which
// loads images.json which has links to images as an array.


/*
****OLD WAY****
const address = "images.json";
const ul = document.querySelector("ul");
let html = "";

function showImages() {
    try {
        fetch(address).then(function (result) {
            return result.json();
        }).then(function (json) {
            console.log(json);
            json.forEach(it => {
                console.log(it);
                html += `<li>
                            <figure>
                            <a href="img/original/${it.mediaUrl}"><img src="img/thumbs/${it.mediaThumb}"></a>
                                <figcaption>
                                    <h3>${it.mediaTitle}</h3>
                                </figcaption>
                            </figure>
                        </li>`
            });
            console.log(html);
            ul.innerHTML = html;
        });
    } catch (e) {
        console.log(e);
    }
}
****OLD WAY****
*/
'use strict';
let html = "";

const showImages = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        result.forEach(it => {
            html += `<li>
                        <figure>
                        <a href="img/original/${it.mediaUrl}"><img src="img/thumbs/${it.mediaThumb}"></a>
                            <figcaption>
                                <h3>${it.mediaTitle}</h3>
                            </figcaption>
                        </figure>
                    </li>`
        });
        document.querySelector("ul").innerHTML = html;
    } catch (e) {
        console.log(e)
    }
};

showImages("images.json");

