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
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import { Fragment } from '@wordpress/element';

import { ColorPicker, PanelBody, PanelRow, TextControl } from '@wordpress/components';

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
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Styling')}>
					<PanelRow>Background color</PanelRow>
					<PanelRow>
						<ColorPicker
							color={attributes.background_color}
							onChange={(newVal) => setAttributes({ background_color: newVal })}
							enableAlpha
							defaultValue="#000"
						/>
					</PanelRow>
					<PanelRow>Text color</PanelRow>
					<PanelRow>
						<ColorPicker
							color={attributes.text_color}
							onChange={(newVal) => setAttributes({ text_color: newVal })}
							enableAlpha
							defaultValue="#FFF"
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__('Link')}>
					<PanelRow>Link</PanelRow>
					<PanelRow>
						<TextControl
							onChange={(newval) => {
								setAttributes({ link: newval });
							}}
							value={attributes.link}
						/>
					</PanelRow>
					<PanelRow>Link Title</PanelRow>
					<PanelRow>
						<TextControl
							onChange={(newval) => {
								setAttributes({ link_title: newval });
							}}
							value={attributes.link_title}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()} style={{ backgroundColor: attributes.background_color, color: attributes.text_color }}>
				<div class="flex-container">
					<div class="text-container">
						<RichText
							value={attributes.text}
							tagName="p"
							allowedFormats={['core/bold', 'core/italic']}
							onChange={(newVal) => setAttributes({ text: newVal })}
							placeholder={__('Type something...')}
						/>
					</div>
					{attributes.link && attributes.link_title &&
						<div class="button-container">
							<a href={attributes.link} class="button">
								{attributes.link_title}
							</a>
						</div>
					}
				</div>
			</div>
		</Fragment>
	);
}
