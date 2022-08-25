<?php
?>

<div class="h-full rounded-lg shadow-md wp-block-item">

    <img class="object-cover object-top w-full transition-all rounded-t-lg max-h-64 hover:brightness-90" src="<?php echo $attributes['image_url'] ?>">
    <div class="pt-6 pb-5 px-7">
        <a href="<?php echo $attributes['link_url'] ?>" class="no-underline" target="<?php $attributes['opens_in_new_tab'] == true ? '' : '_blank' ?>">
            <p class="mt-1 text-2xl font-bold text-black wp-block-text hover:underline"><?php echo $attributes['title'] ?></p>
        </a>
        <p class="h-full text-lg text-gray-600 wp-block-text"><?php echo $attributes['caption'] ?></p>
    </div>
    <div class="bottom-0 px-8 text-right">
        <a href="<?php echo $attributes['link_url'] ?>" class="no-underline" target="<?php $attributes['opens_in_new_tab'] == true ? '' : '_blank' ?>">
            <button type=" button" class="inline-flex items-center px-4 py-2 mt-2 mb-8 space-x-4 font-medium text-white transition-all border border-transparent rounded-md shadow-sm bg-primary hover:brightness-105 focus:outline-none">
                <?php echo ($attributes['link_title'] != null ? $attributes['link_title'] : 'Read more') ?>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </a>
    </div>

</div>