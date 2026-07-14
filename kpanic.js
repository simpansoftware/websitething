const bg = document.body

function reboot() {
    document.title = "Rebooting..."
    document.body.innerHTML = 'Welcome to <span style="color: #7878d9;">simpansoftware linux</span><br>';
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Slack opened';}, 800);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Monkeys spun on the monkey bars';}, 900);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Cleaned up background services';}, 1100);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Returned guns to the police';}, 1400);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Did absolutely nothing and just laid in bed';}, 1800);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Gave my friend a plane from the Macondo shop';}, 2100);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Ran away from said plane';}, 2200);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Teached friend HTML and failing really really badly';}, 2800);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Went outsite because I had nothing better to do';}, 3200);
    setTimeout(() => {document.body.innerHTML += "<br>[ &nbsp;<span style='color: #00ff00;'>OK</span> &nbsp;] Going on a trip somewhere because it's summer break";}, 3600);
    setTimeout(() => {document.body.innerHTML += '<br>[<span style="color: #ff0000;">FAILED</span>] Being good at JS';}, 3800);
    setTimeout(() => {document.body.innerHTML += '<br>[<span style="color: #ff0000;">FAILED</span>] Updating my games website once in a while';}, 4200);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Listened to Toxicity by SOAD too many times';}, 4400);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Learned how to play American Idiot on guitar';}, 4500);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Bought one too many CDs from Bengans (you can never have too much)';}, 4750);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Broke someones brain by brute force';}, 5050);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Continued to trash on andesite as a building block in MC';}, 5400);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Fled from a donkey (it was colorblind and had a friend who was an ogre)';}, 5700);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Got rid rid of BonziBuddy';}, 6100);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Prevented site against XSS';}, 6300);
    setTimeout(() => {document.body.innerHTML += '<br>[ &nbsp;<span style="color: #00ff00;">OK</span> &nbsp;] Starting portfolio service';}, 6700);
    setTimeout(() => {document.body.innerHTML += '<br>';}, 7500);
    setTimeout(() => {document.body.innerHTML += '<br>Linux simpansoftware 7.0.14-4-pve #1 SMP PREEMPT_DYNAMIC PMX 7.0.14-4 (2026-07-07T07:27Z) x86_64';}, 7500); // fun fact, i took this directly from my real linux install on hc nest
    setTimeout(() => {document.body.innerHTML += '<br>';}, 7500);
    setTimeout(() => {document.body.innerHTML += '<br>The programs included with the simpansoftware linux system are free software;';}, 7500);
    setTimeout(() => {document.body.innerHTML += '<br>the exact distribution terms for each program are not described in the';}, 7500);
    setTimeout(() => {document.body.innerHTML += '<br>individual files in /usr/share/doc/*/copyright (I didnt bother adding a real shell)';}, 7500);
    setTimeout(() => {document.body.innerHTML += '<br><span id="prompt">root@simpansoftware:~#</span>';}, 8000);
    setTimeout(() => {document.getElementById("prompt").textContent = "root@simpansoftware:~# s";}, 9500);
    setTimeout(() => {document.getElementById("prompt").textContent = "root@simpansoftware:~# st";}, 9600);
    setTimeout(() => {document.getElementById("prompt").textContent = "root@simpansoftware:~# sta";}, 9850);
    setTimeout(() => {document.getElementById("prompt").textContent = "root@simpansoftware:~# star";}, 10000);
    setTimeout(() => {document.getElementById("prompt").textContent = "root@simpansoftware:~# start";}, 10150);
    setTimeout(() => {document.getElementById("prompt").textContent = "root@simpansoftware:~# startx";}, 10300);
    setTimeout(() => {kpanic()}, 12000);
}

function kpanic() {
    fetch("portfolio.html")
        .then(response => response.text())
        .then(newhtml =>{
            document.documentElement.innerHTML = newhtml;
            document.title = "Portfolio";
            console.log("thy portfolio happened")
        })
}

setTimeout(() => {
    bg.style.backgroundColor = "black"
    reboot()
}, 2000);