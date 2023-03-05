import {jsMul, jsDiv, jsSum, jsSub} from './math_js.js';
import {waMul, waDiv, waSum, waSub} from './math_wasm.js';

export function jsMulClick() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let result = jsMul(a, b);
    document.getElementById('jsResult').textContent = result;
}

export function jsDivClick() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let result = jsDiv(a, b);
    document.getElementById('jsResult').textContent = result;
}

export function jsSumClick() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let result = jsSum(a, b);
    document.getElementById('jsResult').textContent = result;
}

export function jsSubClick() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let result = jsSub(a, b);
    document.getElementById('jsResult').textContent = result;
}

export function waMulClick() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    waMul(a, b).then(function (result) {
        document.getElementById('waResult').textContent = result;
    });
}

export function waDivClick() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    waDiv(a, b).then(function (result) {
        document.getElementById('waResult').textContent = result;
    });
}

export function waSumClick() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    waSum(a, b).then(function (result) {
        document.getElementById('waResult').textContent = result;
    });
}

export function waSubClick() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    waSub(a, b).then(function (result) {
        document.getElementById('waResult').textContent = result;
    });
}

window.jsMulClick = jsMulClick;
window.jsDivClick = jsDivClick;
window.jsSumClick = jsSumClick;
window.jsSubClick = jsSubClick;

window.waMulClick = waMulClick;
window.waDivClick = waDivClick;
window.waSumClick = waSumClick;
window.waSubClick = waSubClick;