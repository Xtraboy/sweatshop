const xtra = document.querySelector("#thanksXtra")

function jumpscare() {
    document.body.style.backgroundImage = "url('./img/scream1.png')";
    document.querySelector('.greeting').innerHTML = '<a href="./pageTwoer/pageTwoer.html">BOO!</a>'
    xtra.style.cursor = "default"

}

xtra.onclick = () => jumpscare()