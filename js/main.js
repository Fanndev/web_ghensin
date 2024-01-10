// Ganti image
document.addEventListener('DOMContentLoaded', function() {
    const imgArch = document.querySelector('.img-arch');
    const charButtons = document.querySelectorAll('.char-button');
  
    charButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        const imagePath = event.currentTarget.getAttribute('data-image');
        imgArch.style.backgroundImage = `url(${imagePath})`;
      });
    });
  });

function ExternalLinksEnter(sosmed){
    let destinedSosmed = document.getElementById(sosmed);

    // Animation
    destinedSosmed.classList.add(`animation-sosmed`);
}

function ExternalLinksLeave(){
    let allSosmed = ["instagram", "github", "facebook2", "instagram2", "twitter2"];
    allSosmed.forEach(element =>{
        document.getElementById(element).className = '';
    });
}

function Checkform(form) {
    // get all the inputs within the submitted form
    let inputs = form.getElementsByTagName('input');
    let textarea = document.getElementById('MESSAGE');
    for (var i = 0; i < inputs.length; i++) {
        // only validate the inputs that have the required attribute
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                // found an empty field that is required
                alert("Please fill all required fields");
                return false;
            }
        }
    }
    if (textarea.value == ""){
        // found an empty field that is required
        alert("Please fill all required fields");
        return false;
    }

    return true;
}

function SendEmail(){
    // Form
    let form = document.getElementById("FORM");

    if (Checkform(form)){
        // Email sent confirmation animation
        let emailSent = document.querySelector(".email-not-sent");
        emailSent.classList.add("email-sent");

        // Send form
        form.action = "https://formsubmit.co/fanndev@gmail.com";
        form.method = "POST"
        form.submit();

        //
        function SendEmailComplete(){
            emailSent.classList.remove("email-sent");
        }

        setTimeout(SendEmailComplete, 5000)
        form.reset();
    }
    
}

if (window.innerWidth < 800)
        document.querySelector(":root").style.setProperty("--x-offset", '25vw');
if (window.attachEvent) {
    window.attachEvent('onresize', function() {
        if (window.innerWidth < 800)
        document.querySelector(":root").style.setProperty("--x-offset", '25vw');
        else
        document.querySelector(":root").style.setProperty("--x-offset", '8vw');
    });
}
else if (window.addEventListener) {
    window.addEventListener('resize', function() {
        if (window.innerWidth < 800)
        document.querySelector(":root").style.setProperty("--x-offset", '25vw');
        else
        document.querySelector(":root").style.setProperty("--x-offset", '8vw');
    });
}

let bg;
let onceBg = true;
window.addEventListener('scroll',function(){
    if (onceBg) {onceBg = false; bg=document.getElementById("header-img");}
    let value = window.scrollY;

    bg.style.top = value*0.5 + 'px';
})