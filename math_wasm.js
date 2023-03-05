import init, { calc_cpu_mul } from "./pkg/rust_hello_wasm.js";

export async function waMul(a, b) {
    await init();
    return calc_cpu_mul(a, b);
}