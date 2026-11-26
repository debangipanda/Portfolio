// ---- About tabs (Experience / Skills / Education) ----
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname){
    for (var tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ---- Mobile menu ----
var menu = document.getElementById("sidemenu");

function openmenu(){
    menu.style.right = "0";
}
function closemenu(){
    menu.style.right = "-240px";
}

// Close the mobile menu when a nav link is tapped
menu.querySelectorAll("a").forEach(function(link){
    link.addEventListener("click", closemenu);
});

// ---- Contact form -> Google Sheet ----
const scriptURL = 'https://script.google.com/macros/s/AKfycbwFJVLPrZXUl7aWd9bF0Oph8I4fzRP04M932ltTm4REmXVK4a3bLTG2n35Pi80dhyrrmQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    msg.innerHTML = "Sending...";
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function(){ msg.innerHTML = ""; }, 5000);
            form.reset();
        })
        .catch(error => {
            msg.innerHTML = "Something went wrong. Please email me directly.";
            console.error('Error!', error.message);
        });
});
