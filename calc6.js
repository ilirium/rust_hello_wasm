import init, { calc_cpu_mul } from "./pkg/rust_hello_wasm.js";

export async function waMultiply(a, b) {
    await init();
    return calc_cpu_mul(a, b);
}

export function jsMultiply(a, b) {
    return a * b;
}
