use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

#[wasm_bindgen]
pub fn calc_cpu_mul(a: f64, b: f64) -> f64 {
    a * b
}

#[wasm_bindgen]
pub fn calc_cpu_div(a: f64, b: f64) -> f64 {
    a / b
}

#[wasm_bindgen]
pub fn calc_cpu_sum(a: f64, b: f64) -> f64 {
    a + b
}

#[wasm_bindgen]
pub fn calc_cpu_sub(a: f64, b: f64) -> f64 {
    a - b
}