const counter = document.getElementById("counter")

function handleClick() {
    let value = parseInt(counter.textContent);
    let thing = document.getElementById("thing");
    value++;
    if (value === 1) {
        document.documentElement.requestFullscreen(); 
    }
    if (value !== 0) {
        thing.style.display = "none";
    }
    if (value === 10) {// i messed up big time with the code sorting and im too lazy so heres a bandaid be happy
        ten();
    }
    counter.textContent = value;
}

function kpanic() {
    fetch("kpanic.html")
        .then(response => response.text())
        .then(newhtml =>{
            document.documentElement.innerHTML = newhtml;

            const script = document.createElement("script")
            script.src = "kpanic.js"
            document.body.appendChild(script)
            console.log("thy bsod happened")
        });
}

function ten() {
    document.removeEventListener("click", handleClick);
    kpanic();
}

function skipahead() {
    fetch("portfolio.html")
        .then(response => response.text())
        .then(newhtml =>{
            document.exitFullscreen();
            document.documentElement.innerHTML = newhtml;
            document.title = "Portfolio";
            const script = document.createElement("script")
            script.src = "portfolio.js"
            document.body.appendChild(script)
            console.log("thy portfolio happened")
        });
}

function proceed() {
    window.addEventListener("DOMContentLoaded", () => {
        document.getElementById("gamething").style.display = "none"
        setTimeout(() => {
            document.getElementById("splash").style.display = "none"
            document.getElementById("gamething").style.display = "block"
            document.addEventListener("click", handleClick)
        }, 2000);
    });
}

if (localStorage.getItem("wentthruthing") === "bean") {
    let result = confirm("Skip ahead of the whole intro?")
    if (result) {
        skipahead()
    } else {
        proceed()
    }
} else {
    proceed()
}