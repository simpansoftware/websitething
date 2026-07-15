const button = document.getElementById("button")

button.addEventListener("click", () => {
    alert("So you pressed the button, I see")
    alert("Well that just launches click to ten again")
    alert("Have fun!")
    location.reload();
})

localStorage.setItem("wentthruthing", "bean");