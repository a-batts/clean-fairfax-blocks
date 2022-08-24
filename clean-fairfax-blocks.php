<?php

/**
 * Plugin Name:       Clean Fairfax Blocks
 * Description:       A collection of blocks specifically designed for the Clean Fairfax site.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Alex Batts
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       clean-fairfax-blocks
 *
 * @package           cleanfairfax-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function cleanfairfax_block_category($categories) {
	return array_merge(
		$categories,
		[
			[
				'slug'  => 'clean-fairfax',
				'title' => __('Clean Fairfax', 'clean-fairfax-domain'),
			],
		]
	);
}
add_action('block_categories', 'cleanfairfax_block_category', 10, 2);
function cleanfairfax_blocks_init() {
	register_block_type(
		__DIR__ . '/build/get-category-posts',
		[
			'render_callback' => 'cleanfairfax_get_category_posts_render'
		]
	);

	register_block_type(
		__DIR__ . '/build/post-preview-card',
		[
			'render_callback' => 'cleanfairfax_post_preview_card_render'
		]
	);

	register_block_type(
		__DIR__ . '/build/link-preview-card',
		[
			'render_callback' => 'cleanfairfax_link_preview_card_render'
		]
	);

	register_block_type(
		__DIR__ . '/build/inline-banner',
		[
			'render_callback' => 'cleanfairfax_inline_banner_render'
		]
	);
}
add_action('init', 'cleanfairfax_blocks_init');

function cleanfairfax_get_category_posts_render($attributes) {
	ob_start();

	include(__DIR__ . '/templates/get-category-posts.php');

	$output = ob_get_clean();

	return $output;
}


function cleanfairfax_post_preview_card_render($attributes) {
	ob_start();

	include(__DIR__ . '/templates/post-preview-card.php');

	$output = ob_get_clean();

	return $output;
}

function cleanfairfax_link_preview_card_render($attributes) {
	ob_start();

	include(__DIR__ . '/templates/link-preview-card.php');

	$output = ob_get_clean();

	return $output;
}

function cleanfairfax_inline_banner_render($attributes) {
	ob_start();

	include(__DIR__ . '/templates/inline-banner.php');

	$output = ob_get_clean();

	return $output;
}
