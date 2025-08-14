import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root.tsx";

// biome-ignore lint/style/noNonNullAssertion: It's fine in this case
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Root />
	</StrictMode>,
);
