var karta1 = document.getElementById('card-1');
var karta2 = document.getElementById('card-2');
var karta3 = document.getElementById('card-3');
var karta4 = document.getElementById('card-4');
var karta5 = document.getElementById('card-5');
var karta6 = document.getElementById('card-6');
var karta7 = document.getElementById('card-7');
var karta8 = document.getElementById('card-8');
var karta9 = document.getElementById('card-9');
var karta10 = document.getElementById('card-10');
var karta11 = document.getElementById('card-11');
var karta12 = document.getElementById('card-12');

karta1.dataset.obrazek = 'k3.jpg';
karta2.dataset.obrazek = 'k2.jpeg';
karta3.dataset.obrazek = 'k1.jpg';
karta4.dataset.obrazek = 'k4.jpg';
karta5.dataset.obrazek = 'k6.jpeg';
karta6.dataset.obrazek = 'k5.jpg';
karta7.dataset.obrazek = 'k2.jpeg';
karta8.dataset.obrazek = 'k3.jpg';
karta9.dataset.obrazek = 'k4.jpg';
karta10.dataset.obrazek = 'k1.jpg';
karta11.dataset.obrazek = 'k6.jpeg';
karta12.dataset.obrazek = 'k5.jpg';

var otoceneKarty = [];
var muzemeOtacet = true;

function clickCard(index) {
    var karta = document.getElementById('card-' + index);

    if (!muzemeOtacet) return;

    otocKartu(karta);

    otoceneKarty.push(karta);
    if (otoceneKarty.length === 2) {
        muzemeOtacet = false;
        zkontrolujShodu();
    }
}

function otocKartu(karta) {
    var img = karta.getElementsByTagName('img')[0];
    if (img.src.endsWith('mandala.png')) {
        img.src = 'img/' + karta.dataset.obrazek;
    } else {
        img.src = 'img/mandala.png';
    }
}

function zkontrolujShodu() {
    if (otoceneKarty[0].dataset.obrazek === otoceneKarty[1].dataset.obrazek) {
        otoceneKarty = [];
        muzemeOtacet = true;
    } else {
        setTimeout(function() {
            otocKartu(otoceneKarty[0]);
            otocKartu(otoceneKarty[1]);
            otoceneKarty = [];
            muzemeOtacet = true;
        }, 1000);
    }
}

karta1.onclick = function() { clickCard(1); };
karta2.onclick = function() { clickCard(2); };
karta3.onclick = function() { clickCard(3); };
karta4.onclick = function() { clickCard(4); };
karta5.onclick = function() { clickCard(5); };
karta6.onclick = function() { clickCard(6); };
karta7.onclick = function() { clickCard(7); };
karta8.onclick = function() { clickCard(8); };
karta9.onclick = function() { clickCard(9); };
karta10.onclick = function() { clickCard(10); };
karta11.onclick = function() { clickCard(11); };
karta12.onclick = function() { clickCard(12); };
