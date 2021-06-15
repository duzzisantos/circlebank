function success() {
    if (document.getElementById("textSend").value === "") {
        document.getElementById("myButton").disabled = true;
    } else {
        document.getElementById("myButton").disabled = false;
    }
}

function logIn() {
    var userLenght = document.getElementById("username").value.length;
    var passLength = document.getElementById("password").value.length;
    if (document.getElementById("username").value === "" || document.getElementById("password").value === ""
        || userLenght < 6 || userLenght > 15 || passLength < 6 || passLength > 15) {
        document.getElementById("button1").disabled = true;
    } else {
        document.getElementById("button1").disabled = false;
    }
}

// THIS IS THE FUNCTION FOR THE COLLAPSED NAVIGATION

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("toggle");
    })
});


//THESE APPS ARE FOR THE FINANCIAL CALCULATOR ON THE HOME PAGE

//AN APP THAT CALCULATES SIMPLE INTEREST
function compute() {
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("time").value;
    var answer = (p * r * t) / 100;
    document.getElementById("answer").value = answer;
}

//AN APP THAT CALCULATES MONTHLY MORTGAGE 

function mGage(){
    var loan = document.getElementById("loan").value;
    var iRates = document.getElementById("iRates").value;
    var mLeft = document.getElementById("monthsLeft").value;
    var mortGages = +loan * +iRates / +mLeft;
    document.getElementById("mortGages").value = Math.round(mortGages);
}

function cd() {
    var pr4 = document.getElementById("principal4").value;
    var ra4 = document.getElementById("rate4").value;
    var t4 = document.getElementById("time4").value;
    var fr4 = document.getElementById("frequency4").value;
    var int3 = +1 + (+ra4 / +fr4);
    var int4 = +fr4 * +t4
    var intFreq = Math.pow(+int3, +int4);
    let cod = +pr4 * (+intFreq);
    document.getElementById("result4").value = Math.round(cod);
}


