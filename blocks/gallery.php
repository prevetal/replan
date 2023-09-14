<?php
$template_url  = get_bloginfo("template_url");

?>
<?php if(is_admin()) { ?>
	<div style="border:10px solid black; text-align: center; font-size:30px;">Галерея</div>
<?php } else { ?>
<?php 
$images = get_field('galereya');
if( $images ): ?>
<div class="slider <?php if(get_post_type()=="portfolio") {echo 'default_w';} ?>">
    <div class="swiper">
        <div class="swiper-wrapper">
            <?php foreach( $images as $image ): ?>
            <div class="swiper-slide">
                <figure>
                    <a href="<?php echo esc_url($image['url']); ?>" class="fancy_img" data-fancybox="single_gallery">
                        <img data-src="<?php echo esc_url($image['url']); ?>" alt="" class="swiper-lazy" width="776" height="320">

                        <div class="zoom">
                            <svg><use xlink:href="<?php echo $template_url; ?>/images/sprite.svg#ic_zoom"></use></svg>
                        </div>
                    </a>

                    <figcaption><?php echo esc_html($image['caption']); ?></figcaption>
                </figure>
            </div>
            <?php endforeach; ?>
        </div>

        <div class="swiper-button-prev">
            <svg class="icon"><use xlink:href="<?php echo $template_url; ?>/images/sprite.svg#ic_arr_hor"></use></svg>
        </div>

        <div class="swiper-button-next">
            <svg class="icon"><use xlink:href="<?php echo $template_url; ?>/images/sprite.svg#ic_arr_hor"></use></svg>
        </div>

        <div class="swiper-pagination"></div>
    </div>
    <figcaption class="podpis"><?php the_field("podpis");?></figcaption>
</div>
<?php endif; ?>
<?php } ?>

