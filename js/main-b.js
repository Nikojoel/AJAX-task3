// Create function 'showImages' which
// loads images.json which has links to images as an array.
'use strict';

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

showImages();
// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// After the loop print the HTML into <ul> element using innerHTML.
