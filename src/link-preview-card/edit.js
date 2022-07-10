import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, ResponsiveWrapper, Spinner, TextControl, TextareaControl } from '@wordpress/components';
import { select, useSelect } from '@wordpress/data';

import './editor.scss';

const { __experimentalLinkControl: LinkControl } = wp.blockEditor;

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	//Handle the addition and removal of images

	const image = useSelect(
		(select) => { return attributes.image_id ? select('core').getMedia(attributes.image_id) : undefined },
		[attributes.image_id]
	);

	const onImageSelect = (image) => {
		setAttributes({
			image_id: image.id,
			image_url: image.url,
		});
	};

	const onImageRemove = () => {
		setAttributes({
			image_id: 0,
			image_url: '',
		});
	};

	return (
		<div {...useBlockProps()}>
			<header class="title">Link Preview Card</header>

			<label>{__('Title', 'link-preview-card')}</label>
			<TextControl
				onChange={(newval) => {
					setAttributes({ title: newval });
				}}
				value={attributes.title}
			/>

			<label>{__('Caption', 'link-preview-card')}</label>
			<TextareaControl
				onChange={(newval) => {
					setAttributes({ caption: newval });
				}}
				value={attributes.caption}
			/>

			<label>{__('Image', 'link-preview-card')}</label>
			<MediaUploadCheck>
				<MediaUpload
					title={__('Background image', 'link-preview-card')}
					onSelect={onImageSelect}
					allowedTypes={['image']}
					value={attributes.image_id}
					render={({ open }) => (
						<Button
							className={image != undefined ? 'link-image-preview' : 'link-image-selector'}
							onClick={open}>
							{attributes.image_id == 0 && __('Set preview image', 'link-preview-card')}
							{!!attributes.image_id && !image && <Spinner />}
							{image != undefined &&
								<ResponsiveWrapper
									naturalWidth={image.media_details.width}
									naturalHeight={image.media_details.height}
								>
									<img src={image.source_url} alt={__('Preview image', 'link-preview-card')} />
								</ResponsiveWrapper>
							}
						</Button>
					)}
				/>
			</MediaUploadCheck>
			{attributes.image_id != 0 &&
				<MediaUploadCheck>
					<MediaUpload
						title={__('Replace image', 'awp')}
						value={attributes.mediaId}
						onSelect={onImageSelect}
						allowedTypes={['image']}
						render={({ open }) => (
							<Button onClick={open} isDefault isLarge>{__('Replace image', 'link-preview-card')}</Button>
						)}
					/>
				</MediaUploadCheck>
			}
			{attributes.image_id != 0 &&
				<MediaUploadCheck>
					<Button className="link-image-remove"
						onClick={onImageRemove} isLink isDestructive>
						{__('Removed selected image', 'link-preview-card')}
					</Button>
				</MediaUploadCheck>
			}

			<label>{__('Link URL', 'link-preview-card')}</label>
			<LinkControl
				onChange={(newval) => {
					setAttributes({ link_url: newval.url, new_tab: newval.opensInNewTab });
				}}
				value={{ url: attributes.link_url, opensInNewTab: attributes.new_tab }}
				settings={[
					{
						id: 'opensInNewTab',
						title: 'Opens in new tab',
					},
				]}
			>
			</LinkControl>

			<label>{__('Link Title', 'link-preview-card')}</label>
			<TextControl
				onChange={(newval) => {
					setAttributes({ link_title: newval });
				}}
				value={attributes.link_title}
			/>
		</div >
	);

}