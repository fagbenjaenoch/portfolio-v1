import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";

export default function Root() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/resumé" element={<div>Hello</div>} />
			</Routes>
		</BrowserRouter>
	);
}
