
const videoEl = document.querySelector("div#movie_player video");

function updateSearchParams(){
    const searchParams = new URLSearchParams(window.location.search.slice(1));
    searchParams.set("t", ""+Math.floor(videoEl.currentTime)+"s");
    window.history.replaceState({}, "", "/watch?"+searchParams.toString());
}

setInterval(() => {
    updateSearchParams();
}, 1000);
