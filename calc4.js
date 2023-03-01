// import init, { calc_cpu_mul } from "./pkg/rust_hello_wasm.js";
// console.log("*** debug: test 1");

function multiplyBy() {
    // await init();
    let numA;
    let numB;
    numA = document.getElementById("firstNumber").value;
    numB = document.getElementById("secondNumber").value;
    // document.getElementById("result").innerHTML = calc_cpu_mul(numA, numB);
    document.getElementById("result").innerHTML = numA * numB;
}