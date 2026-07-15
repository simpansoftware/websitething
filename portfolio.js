const button = document.getElementById("button")
const app1 = document.getElementsByClassName("app1")[0]
const app2 = document.getElementsByClassName("app2")[0]
const app3 = document.getElementsByClassName("app3")[0]
const app4 = document.getElementsByClassName("app4")[0]
const app5 = document.getElementsByClassName("app5")[0]
const app6 = document.getElementsByClassName("app6")[0]

button.addEventListener("click", () => {
    if (app1.classList.contains("shaking")) {
        app1.classList.remove("shaking")
        app2.classList.remove("shaking")
        app3.classList.remove("shaking")
        app4.classList.remove("shaking")
        app5.classList.remove("shaking")
        app6.classList.remove("shaking")
    } else {
        setTimeout(() => {app1.classList.add("shaking");}, 0);
        setTimeout(() => {app2.classList.add("shaking");}, 10);
        setTimeout(() => {app3.classList.add("shaking");}, 20);
        setTimeout(() => {app4.classList.add("shaking");}, 30);
        setTimeout(() => {app5.classList.add("shaking");}, 40);
        setTimeout(() => {app6.classList.add("shaking");}, 50);
    }
})

localStorage.setItem("wentthruthing", "bean");