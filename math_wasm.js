import init, {calc_cpu_mul, calc_cpu_div, calc_cpu_sum, calc_cpu_sub } from "./pkg/rust_hello_wasm.js";

export async function waMul(a, b) {
    await init();
    return calc_cpu_mul(a, b);
}

export async function waDiv(a, b) {
    await init();
    return calc_cpu_div(a, b);
}

export async function waSum(a, b) {
    await init();
    return calc_cpu_sum(a, b);
}

export async function waSub(a, b) {
    await init();
    return calc_cpu_sub(a, b);
}