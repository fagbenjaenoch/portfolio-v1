import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import About from "./components/pages/About";

export default function Root() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/about" element={<About />} />
				<Route path="/hello" element={<div>Hello</div>} />
			</Routes>
		</BrowserRouter>
	);
}
