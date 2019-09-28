var num01 = document.getElementById('num-1');
var num02 = document.getElementById('num-2');
var answer = document.getElementById('answer');

function math01() {
    var first = Number(num01.value) + Number(num02.value);
    answer.innerHTML = first;

}

function math02() {
    var first = Number(num01.value) - Number(num02.value);
    answer.innerHTML = first;

}

function math03() {
    var first = Number(num01.value) * Number(num02.value);
    answer.innerHTML = first;

}

function math04() {
    var first = Number(num01.value) / Number(num02.value);
    answer.innerHTML = first;

}