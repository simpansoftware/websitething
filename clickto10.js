const counter = document.getElementById("counter")

function handleClick() {
    let value = parseInt(counter.textContent);
    let thing = document.getElementById("thing");
    value++;
    counter.textContent = value;
    if (value !== 0) {
        thing.style.display = "none";
    }
    if (value === 10) {
        ten();
    }
}

function ten() {
    document.removeEventListener("click", handleClick)
}

document.addEventListener("click", handleClick)
