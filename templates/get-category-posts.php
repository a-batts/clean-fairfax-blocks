<?php
$attributes['category_name'] = strtolower($attributes['category_name']);


$args = wp_parse_args($attributes, array(
    'posts_per_page' => 9
));

$query = new WP_Query($args);

?>

<?php
//Iterate through the posts
if ($query->have_posts()) : ?>
    <div class="post-container">
        <?php while ($query->have_posts()) : ?>
            <?php $query->the_post(); ?>
            <div class="post-card">
                <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'article-thumbnail-image') ?>" class="">
                <div class="post-card-text">
                    <a class="" href="<? the_permalink() ?>">
                        <h3 class="title-link wp-block-header"><?php the_title() ?></h3>
                    </a>
                    <p class="wp-block-text"><?php echo get_the_excerpt() ?></p>
                </div>
            </div>
        <?php endwhile; ?>
    </div>
<?php else : ?>
    <div class="error-container">
        <p class="wp-block-text error-heading">Unable to load posts</p>
        <p class="wp-block-text">There are no posts categorized under "<? echo esc_html($attributes['category_name']) ?>"</p>
    </div>
<?php endif; ?>