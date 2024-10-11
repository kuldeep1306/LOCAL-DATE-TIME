const clock = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

const clocks = document.getElementById('cloc');

setInterval(function () {
    let date = new Date();
    clocks.innerHTML = date.toLocaleDateString();
}, 1000);