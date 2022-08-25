<div class="rounded-xl" style="background-color: <?php echo $attributes['background_color'] ?? '#000' ?>; color: <?php echo $attributes['text_color'] ?? '#FFF' ?>">
    <div class="flex flex-wrap justify-center w-full px-5 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 md:justify-start gap-y-3 gap-x-4">
        <div class="flex items-center justify-center flex-grow md:justify-start">
            <span class="inline-block m-0 text-lg font-semibold truncate"><?php echo $attributes['text'] ?></span>
        </div>
        <?php if (!empty($attributes['link']) && !empty($attributes['link_title'])) : ?>
            <div class="">
                <a href="<?php echo $attributes['link'] ?>" class="flex items-center justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50">
                    <?php echo $attributes['link_title'] ?>
                </a>
            </div>
        <?php endif; ?>
    </div>
</div>