const counter = document.getElementById("counter")

function handleClick() {
    let value = parseInt(counter.textContent);
    let thing = document.getElementById("thing");
    if (value !== 0) {
        thing.style.display = "none";
    }
    if (value === 10) {
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
            console.log("thy bsod happened")
        })
}

function ten() {
    document.removeEventListener("click", handleClick);
    kpanic();
}

document.addEventListener("click", handleClick)