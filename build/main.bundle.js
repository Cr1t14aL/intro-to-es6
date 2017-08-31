"use strict";

var isUpper = false;
var isShift = false;
function key(input) {
    var output = document.getElementById("write").textContent;
    if (isUpper) {
        output = output + String(input).toLocaleUpperCase();
        document.getElementById("write").innerHTML = output;
    } else if (isShift) {
        output = output + String(input).toLocaleUpperCase();
        document.getElementById("write").innerHTML = output;
        isShift = false;
    } else {
        output = output + input;
        document.getElementById("write").innerHTML = output;
    }
}
function del() {
    var output = document.getElementById("write").textContent;
    output = output.substring(0, output.length - 1);
    document.getElementById("write").innerHTML = output;
}
function upperCase() {
    isUpper = true;
    return isUpper;
}
function shift() {
    isShift = true;
    return isShift;
}
