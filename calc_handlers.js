import {jsMul} from './math_js.js';
import {waMul} from './math_wasm.js';

export function jsMulClick() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let result = jsMul(a, b);
    document.getElementById('jsResult').textContent = result;
}

export function waMulClick() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    waMul(a, b).then(function (result) {
        document.getElementById('waResult').textContent = result;
    });
}

window.jsMulClick = jsMulClick;
window.waMulClick = waMulClick;