
var dataStart = new Date("Jul 06, 2020 00:00:00").getTime();
var numără = setInterval(function() {
  let acum = new Date().getTime();
  let t = acum - dataStart;

  if (t >= 0) {
    let zile = Math.floor(t / (1000 * 60 * 60 * 24));
    let ore = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secunde = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById('numără-zile').innerHTML = zile + "<span id='font'>Zile</span>";
    document.getElementById('numără-ore').innerHTML = ("0"+ore).slice(-2) + "<span id='font'>Ore</span>";
    document.getElementById('numără-minute').innerHTML = ("0"+minute).slice(-2) + "<span id='font'>Minute</span>";
    document.getElementById('numără-secunde').innerHTML = ("0"+secunde).slice(-2) + "<span id='font'>Secunde</span>";
  }
}, 1000);
