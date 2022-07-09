/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const { TextControl } = wp.components;

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;

	return (
		<div {...useBlockProps()}>
			<header class="title">Get Category Posts</header>
			<label>{__('Post category', 'category-posts-plugin')}</label>
			<TextControl
				onChange={(newval) => setAttributes({ category_name: newval })}
				value={attributes.category_name}
			/>
			<label>{__('Number of posts to display', 'category-posts-plugin')}</label>
			<TextControl
				type="number"
				onChange={(newval) => setAttributes({ posts_per_page: parseInt(newval) })}
				value={attributes.posts_per_page}
				min="1"
				max="25"
			/>
		</div>
	);
}
