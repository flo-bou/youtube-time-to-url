// console.log("Hi from content-script");

const videoEl = document.querySelector("div#movie_player video");

// function updateSoon() {
//     return new Promise(() => {
//         setTimeout(updateSearchParams(), 2000);
//     });
// }


function updateSearchParams(){
    // console.log("Hello from setInterval() !")
    const searchParams = new URLSearchParams(window.location.search.slice(1));
    searchParams.set("t", ""+Math.floor(videoEl.currentTime)+"s");
    history.replaceState({}, "", "/watch?"+searchParams.toString());
}


// async function continuousUpdates() {
//     // const videoEl = document.querySelector("div#movie_player video");
//     await updateSoon();
//     console.log(window.location.search);
// }
// continuousUpdates()


setInterval(() => {
    updateSearchParams()
}, 3000);
