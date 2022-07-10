import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';
import { TextControl } from '@wordpress/components';
import parse from 'html-react-parser';

import './editor.scss';

const postsPath = "/wp/v2/posts/?_embed&include[]="

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	var [posts, setPosts] = useState([]);

	const { post_id } = attributes;

	const fetchPost = async () => {
		const path = post_id ? `${postsPath}${post_id}` : postsPath;
		const fetchedPost = await apiFetch({ path });
		setPosts(fetchedPost)
	}

	useEffect(() => {
		fetchPost();
	}, [post_id]);


	return (
		<div {...useBlockProps()}>
			<header class="title">Post Preview Card</header>
			<label>{__('Post or page id', 'category-posts-plugin')}</label>
			<TextControl
				type="number"
				onChange={(newval) => {
					setAttributes({ post_id: parseInt(newval) });
				}}
				value={attributes.post_id}
				min="1"
			/>
			<div class="mt-6 border-t border-gray-300 pt-6">
				{posts.map((post) => (
					<div class="flex">
						<div class="image-container">
							<img src={post._embedded['wp:featuredmedia'][0]['source_url']}></img>
						</div>
						<div>
							<a href={post.link} target="_blank"><header class="title hover:underline">{post.title.rendered}</header></a>
							<span class="excerpt-text">{parse(post.excerpt.rendered)}</span>
						</div>
					</div>
				))}
			</div>

			{posts.length === 0 &&
				<p>Could not find a post with that ID</p>
			}

		</div >
	);
}