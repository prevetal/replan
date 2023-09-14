<?php
$featured_posts = get_field('articles', 2);
if( $featured_posts ): ?>
<section class="articles block">
    <div class="cont">
        <div class="block_head">
            <h2 class="title"><?php the_field("zagolovok_articles"); ?></h2>
        </div>

        <div class="swiper">
            <div class="swiper-wrapper">
                <?php foreach( $featured_posts as $post ): 
                    setup_postdata($post); ?>
                <div class="swiper-slide">
                    <div class="article">
                        <a href="<?php the_permalink(); ?>" class="thumb" target="_blank">
                            <?php $thumbnail_id = get_post_thumbnail_id( $post->ID );
                                  $alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true); 
                                  if($thumbnail_id):  
                            ?>
                            <img data-src="<?php echo get_the_post_thumbnail_url(get_the_ID(), "post_home"); ?>" alt="<?php echo $alt; ?>" class="swiper-lazy">

                            <?php else : ?>
                                <img src="<?php bloginfo('template_url'); ?>/images/image_default.svg" alt="<?php echo $alt; ?>" class="swiper-lazy">
                            <?php endif; ?>

                            <?php if(get_field("populyarnoe")): ?>
                            <div class="stickers">
                                <div class="sticker">
                                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_fire"></use></svg>
                                    <span>Популярное</span>
                                </div>
                            </div>
                            <?php endif; ?>
                        </a>

                        <div class="info">
                            <div class="category">
                                <?php the_time("d F Y"); ?>
                            </div>

                            <div class="name">
                                <a href="<?php the_permalink(); ?>" target="_blank"><?php the_title(); ?></a>
                            </div>

                            <div class="desc"><?php the_excerpt(); ?></div>

                            <div class="link">
                                <a href="<?php the_permalink(); ?>" target="_blank">
                                    <span>Читать далее</span>
                                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_link_arrow"></use></svg>
                                </a>
                            </div>

                            <div class="views">
                                <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_eye"></use></svg>
                                <span><?php get_view(get_the_ID()); ?></span>
                            </div>

                            <div class="comments_count">
                                <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_comments"></use></svg>
                                <span><?php comments_number( '0', '1', '%'); ?></span>
                            </div>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>

            <div class="controls">
                <div class="swiper-pagination"></div>

                <div class="swiper-button-prev">
                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_slider_arr"></use></svg>
                </div>

                <div class="count">
                    <span class="current">1</span> / <span class="total">8</span>
                </div>

                <div class="swiper-button-next">
                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_slider_arr"></use></svg>
                </div>

                <div class="all_link">
                    <a href="<?php echo get_category_link(1); ?>" target="_blank">
                        <span><i>Читать все статьи</i></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<?php wp_reset_postdata(); ?>
<?php endif; ?>