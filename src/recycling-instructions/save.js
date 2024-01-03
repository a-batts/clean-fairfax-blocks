/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { items } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div
				className="recycling-instructions-wrapper h-full rounded-lg shadow-md"
				data-attributes={JSON.stringify(attributes)}
			>
				<div className="pt-6 pb-5 px-7 my-6">
					<h2>How Do I Recycle...?</h2>
					<div className="flex gap-6 pt-6">
						<div className="flex-1">
							<select className="w-full">
								{items.map((item) => (
									<option value={item.name}>{item.name}</option>
								))}
							</select>
						</div>
						<div className="flex-1 min-h-[6rem]"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
