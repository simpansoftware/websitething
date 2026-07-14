const bg = document.body

function reboot() {
    document.title = "Rebooting..."
    document.body.innerHTML = 'Welcome to <span style="color: #7878d9;">simpansoftware linux</span><br>';
    setTimeout(() => {document.body.innerHTML += '<br>[ <span style="color: #00ff00;">OK</span> ] Started starting Linux';}, 800);
    setTimeout(() => {document.body.innerHTML += '<br>';}, 7500);
    setTimeout(() => {document.body.innerHTML += '<br>Linux simpansoftware 7.0.14-4-pve #1 SMP PREEMPT_DYNAMIC PMX 7.0.14-4 (2026-07-07T07:27Z) x86_64';}, 7500); // fun fact, i took this directly from my real linux install on hc nest
    setTimeout(() => {document.body.innerHTML += '<br>';}, 7500);
    setTimeout(() => {document.body.innerHTML += '<br>The programs included with the simpansoftware linux system are free software;';}, 7500);
    setTimeout(() => {document.body.innerHTML += '<br>the exact distribution terms for each program are not described in the';}, 7500);
    setTimeout(() => {document.body.innerHTML += '<br>individual files in /usr/share/doc/*/copyright (i didnt bother adding a real shell)';}, 7500);
    setTimeout(() => {document.body.innerHTML += '<br><span id="prompt">root@simpansoftware:~#</span>';}, 8000);
    setTimeout(() => {document.getElementById("prompt").textContent = "root@simpansoftware:~# s";}, 9500);
    setTimeout(() => {document.getElementById("prompt").textContent = "root@simpansoftware:~# st";}, 9600);
    setTimeout(() => {document.getElementById("prompt").textContent = "root@simpansoftware:~# sta";}, 9850);
    setTimeout(() => {document.getElementById("prompt").textContent = "root@simpansoftware:~# star";}, 10000);
    setTimeout(() => {document.getElementById("prompt").textContent = "root@simpansoftware:~# start";}, 10150);
    setTimeout(() => {document.getElementById("prompt").textContent = "root@simpansoftware:~# startx";}, 10300);
    setTimeout(() => {document.title = "Portfolio";}, 12000);
}

setTimeout(() => {
    bg.style.backgroundColor = "black"
    reboot()
}, 3000);