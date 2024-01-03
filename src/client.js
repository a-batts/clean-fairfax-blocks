import { render } from "@wordpress/element";
import MyComponent from "@path_to_node_modules/MyComponent";

window.addEventListener("DOMContentLoaded", () => {
	const wrappers = document.getElementsByClassName(
		`recycling-instructions-wrapper`,
	);
	for (let wrapper of wrappers) {
		render(<MyComponent />, wrapper);
	}
});
