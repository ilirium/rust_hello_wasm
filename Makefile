install_dependencies:
	cargo install wasm-pack

compile_to_wasm:
	wasm-pack build --target web