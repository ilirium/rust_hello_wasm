/* tslint:disable */
/* eslint-disable */
/**
* @param {string} name
*/
export function greet(name: string): void;
/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function calc_cpu_mul(a: number, b: number): number;
/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function calc_cpu_div(a: number, b: number): number;
/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function calc_cpu_sum(a: number, b: number): number;
/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function calc_cpu_sub(a: number, b: number): number;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly greet: (a: number, b: number) => void;
  readonly calc_cpu_mul: (a: number, b: number) => number;
  readonly calc_cpu_div: (a: number, b: number) => number;
  readonly calc_cpu_sum: (a: number, b: number) => number;
  readonly calc_cpu_sub: (a: number, b: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;