document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    let day = currentDate.getDay();
    if (day == 0 || day == 6) {
        document.getElementById("letKnow").innerHTML = "It's the weekend, so you have time!"
    } else {
        document.getElementById("letKnow").innerHTML = "It'll only take a minute!"
    }

    document.getElementById("connect").addEventListener("click", saySomething);
});

function clickedImages() {
    alert("Sorry, no link yet!")
}

function saySomething() {
    document.getElementById("message").innerHTML = "Send me an email at samiah.hoss@gmail.com or find me on LinkedIn. Mention that you looked at my website!";
}

function greenTheme() {
    document.getElementById("body1").style.backgroundColor = "#97e6c1";
    document.getElementById("mainHead").style.color = "#113826"
}

function orangeTheme() {
    document.getElementById("body1").style.backgroundColor = "#e6cd97";
    document.getElementById("mainHead").style.color = "#2b2007"
}

function validateForm(event) {
    event.preventDefault();
    const type = document.getElementById("type").value;
    const lang = document.getElementById("lang").value;
    const time = document.getElementById("time").value;
    const software = document.getElementById("software").value;
    const best = document.getElementById("best").value;

    if (type.trim() == "" || isNaN((new Date(best))) || software.trim() == "" || lang.trim() == "" || best.trim() == " ") {
        alert("Please complete all required fields.");
        return;
    }

    if (!(time.endsWith("hour") || time.endsWith("hours") || time.endsWith("day") 
      || time.endsWith("days") || time.endsWith("week") || time.endsWith("weeks"))) {
         alert("Estimated time input invalid");
         return;   
    }

    alert("Submitted!");
    event.target.submit();
}