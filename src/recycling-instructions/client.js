import { render } from "@wordpress/element";
import RecyclingInstructions from "./dynamic";

window.addEventListener("DOMContentLoaded", (event) => {
	const wrappers = document.querySelectorAll(`.recycling-instructions-wrapper`);

	wrappers.forEach((el) => {
		const attributes = JSON.parse(el.dataset.attributes);

		render(<RecyclingInstructions attributes={attributes} />, el);
	});
});
