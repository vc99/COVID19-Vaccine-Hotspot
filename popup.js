const URL = "https://news.google.com/search?q=covid19%20vaccine&hl=en-US&gl=US&ceid=US%3Aen"

function linkToNews() {
    setTimeout(() => {
        window.location.href = URL;
    }, 20);
    return false;
}


document.getElementById("launchButton").addEventListener('click', linkToNews);

