/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import { useState } from "@wordpress/element";

import { Button, TextControl, TextareaControl } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return WPElement Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;

	const [items, setItems] = useState(attributes.items);

	const [addingNew, setAddingNew] = useState(items.length === 0);

	const [newItem, setNewItem] = useState({ name: "", description: "" });

	const saveNewItem = () => {
		if (newItem.name.length > 0 && newItem.description.length > 0) {
			const newItems = [
				...items,
				{ name: newItem.name, description: newItem.description },
			];

			// Update the list of items
			setItems(newItems);

			// Store the new value on the backend
			setAttributes({ items: newItems });

			// Reset the state
			setNewItem({ name: "", description: "" });
			setAddingNew(false);
		}
	};

	const deleteItem = (index) => {
		const updatedItems = [...items];
		updatedItems.splice(index, 1);

		// Update the list of items
		setItems(updatedItems);

		// Store the updated value on the backend
		setAttributes({ items: updatedItems });
	};

	return (
		<div {...useBlockProps()}>
			<header className="title">Recycling Instructions</header>
			<label>{__("Items", "category-posts-plugin")}</label>
			{items.map((item, index) => (
				<div className="item">
					<div className="details">
						<h4>{item.name}</h4>
						<p>{item.description}</p>
					</div>
					<div className="delete">
						<Button icon="trash" onClick={() => deleteItem(index)}></Button>
					</div>
				</div>
			))}

			{addingNew && (
				<div>
					<label>{__("Item", "category-posts-plugin")}</label>
					<TextControl
						onChange={(newval) => setNewItem({ ...newItem, name: newval })}
						value={newItem.name}
					/>
					<label>
						{__("Instructions on how to recycle", "category-posts-plugin")}
					</label>
					<TextareaControl
						onChange={(newval) =>
							setNewItem({ ...newItem, description: newval })
						}
						value={newItem.description}
					/>
				</div>
			)}
			<div className="new-item">
				{addingNew ? (
					<Button
						variant="secondary"
						onClick={() => {
							saveNewItem();
						}}
						disabled={
							newItem.name.length === 0 || newItem.description.length === 0
						}
					>
						Save Item
					</Button>
				) : (
					<Button
						variant="secondary"
						onClick={() => {
							setAddingNew(true);
						}}
					>
						Add New Item
					</Button>
				)}
			</div>
		</div>
	);
}
