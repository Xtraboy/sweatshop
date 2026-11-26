const xtra = document.querySelector("#thanksXtra")
const gallbladder = new Audio("https://file.garden/adyAfhdfCBC6CnKb/Shipwrecked%2064%20OST%20-%20%EF%BC%82Plaza%EF%BC%82%20-%20lithoan.mp3")
gallbladder.loop = true;
function jumpscare() {
    document.body.style.backgroundImage = "url('https://file.garden/adyAfhdfCBC6CnKb/test%20backgroundjpg.jpg')";
    xtra.src ="./img/novembericon.jpg";
    document.querySelector('.greeting').innerHTML = '<a id="shakey" href="./pageTwoer/pageTwoer.html" style="color: inherit; text-decoration: none;">Why must you feed your disgusting rotted curiosity. Why do you need to make further spectacle out of me. Why is it that I must heed in wary of your footsteps. Why can I hear your breathing. Why do you keep so close to me when I run away.  </a>';
    xtra.style.cursor = "default"
    gallbladder.play()
    gallbladder.volume = 0.99

}

xtra.onclick = () => jumpscare()

