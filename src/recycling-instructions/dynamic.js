import { Component } from "@wordpress/element";

import { SelectControl } from "@wordpress/components";

export default class RecyclingInstructions extends Component {
	state = {
		selectedItem: "",
	};

	setItem = (itemName) => {
		const { items } = this.props.attributes;

		this.setState({
			selectedItem: items.find((el) => el.name === itemName) ?? "",
		});
	};

	render() {
		const { items } = this.props.attributes;

		return (
			<div>
				<div className="recycling-instructions-wrapper h-full rounded-lg shadow-md">
					<div className="pt-6 pb-5 px-7 my-4">
						<h2>How Do I Recycle...?</h2>
						<div className="flex gap-4 pt-6">
							<div className="flex-1">
								<SelectControl
									value={this.state.selectedItem.name}
									onChange={this.setItem}
									className="w-full"
								>
									<option value=""></option>
									{items.map((item) => (
										<option value={item.name}>{item.name}</option>
									))}
								</SelectControl>
							</div>
							<div className="flex-1 min-h-[9rem]">
								<p>
									{this.state.selectedItem &&
										this.state.selectedItem.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
