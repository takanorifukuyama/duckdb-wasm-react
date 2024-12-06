import { useEffect, useState } from "react";
import "./App.css";

import type { DuckDBConfig } from "@duckdb/duckdb-wasm";
import { initializeDuckDb } from "duckdb-wasm-kit";

const MyApp: React.FC = () => {
	useEffect(() => {
		const config: DuckDBConfig = {
			query: {
				/**
				 * By default, int values returned by DuckDb are Int32Array(2).
				 * This setting tells DuckDB to cast ints to double instead,
				 * so they become JS numbers.
				 */
				castBigIntToDouble: true,
			},
		};
		initializeDuckDb({ config, debug: true });
	}, []);

	return (
		<>
			<p>ぶんせき</p>
		</>
	);
};

function App() {
	return (
		<>
			<h1>duck db wasm</h1>
			<MyApp />
		</>
	);
}

export default App;
