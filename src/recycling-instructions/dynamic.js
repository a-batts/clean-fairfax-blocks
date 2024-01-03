import { Component } from "@wordpress/element";

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
					<div className="pt-6 pb-5 px-7 my-6">
						<h2>How Do I Recycle...?</h2>
						<div className="flex gap-6 pt-6">
							<div className="flex-1">
								<select
									value={this.state.selectedItem.name}
									onChange={(e) => this.setItem(e.target.value)}
									className="w-full flex-grow max-w-md mt-2"
									placeholder="Select an item..."
								>
									<option value="" disabled selected>
										Select an item
									</option>
									{items.map((item) => (
										<option value={item.name}>{item.name}</option>
									))}
								</select>
							</div>
							<div className="flex-1 min-h-[6.5rem]">
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
