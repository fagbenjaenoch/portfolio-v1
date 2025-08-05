import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";

export default function Root() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/hello" element={<div>Hello</div>} />
			</Routes>
		</BrowserRouter>
	);
}
