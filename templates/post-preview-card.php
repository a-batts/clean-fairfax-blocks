<?php
$selected_post = get_post($attributes['post_id']);
?>

<div class="h-full rounded-lg shadow-md wp-block-item">
    <?php if ($selected_post != null) : ?>
        <img class="object-cover object-top w-full transition-all rounded-t-lg max-h-64 hover:brightness-90" src="<?php echo get_the_post_thumbnail_url($selected_post->ID, 'article-thumbnail-image');  ?>">
        <div class="pt-6 pb-5 px-7">
            <a href="<?php echo get_the_permalink($selected_post) ?>" class="no-underline">
                <p class="mt-1 text-2xl font-bold text-black wp-block-text hover:underline"><?php echo get_the_title($selected_post) ?></p>
            </a>
            <p class="h-full text-lg text-gray-600 wp-block-text"><?php echo get_the_excerpt($selected_post) ?></p>
        </div>
        <div class="bottom-0 px-8 text-right">
            <a href="<?php echo get_the_permalink($selected_post) ?>" class="no-underline">
                <button type="button" class="inline-flex items-center px-4 py-2 mt-2 mb-8 space-x-4 font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-secondary focus:outline-none">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </a>
        </div>
    <?php else : ?>
        <div class="px-2 py-6 text-xl font-bold text-center">
            Invalid Post
        </div>
    <?php endif; ?>

</div>