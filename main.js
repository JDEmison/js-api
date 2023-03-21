/** 
* @param img_info
* @param img_index
*/
async function clickedEven(img_info, img_index) {
    let move = document.getElementsByTagName('img')[img_info].attributes[1].value
    console.log(move)
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
    ])
    

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${move}`,
    {
        method: 'GET',
        headers : headers
    });

    let result = await fetch(request);
    let response = await result.json();

    console.log(response);
    console.log(response.data.title)

    function displayShow(data) {
        const show = data.data[0];
        const art = document.getElementsByTagName("section");
        const artist = show.artist_title;
        const heading = document.createElement("h4");
        heading.innerHTML = artist;
        art.appendChild(heading);
    }
}

/**
 * @param id
 * @param event
 */

function getMove(id,event){
    switch(id){
        case 'img1': {

            clickedEvent(0,1)

            break;
        }
        case 'img2': {

            clickedEvent(1,1)

            break;
        }
        case 'img3': {

            clickedEvent(2,1)

            break;
        }
        case 'img4': {

            clickedEvent(3,1)

            break;
        }
    }
}