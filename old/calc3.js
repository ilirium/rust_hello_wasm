const rust = import("./pkg/rust_hello_wasm.js");
function multiplyBy() {
    let numA;
    let numB;
    numA = document.getElementById("firstNumber").value;
    numB = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML =
        rust
            .then(m => m.calc_cpu_mul(numA, numB))
            .catch(console.error);
    // document.getElementById("result").innerHTML = numA * numB;
}
