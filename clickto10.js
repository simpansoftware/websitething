const counter = document.getElementById("counter")

function handleClick() {
    let value = parseInt(counter.textContent);
    let thing = document.getElementById("thing");
    if (value !== 0) {
        thing.style.display = "none";
    }
    if (value === 9) { // i messed up big time with the code sorting and im too lazy so heres a bandaid be happy
        ten();
    }
    value++;
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
        })
}

function ten() {
    document.removeEventListener("click", handleClick);
    kpanic();
}

document.addEventListener("click", handleClick)