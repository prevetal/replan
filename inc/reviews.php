<section class="reviews block">
    <div class="cont">
        <div class="block_head">
            <h2 class="title"><?php the_field("zagolovok_reviews", 2); ?></h2>
        </div>

        <div class="swiper">
            <div class="swiper-wrapper">
                <?php if( have_rows('reviews', 2) ): ?>
                <?php while( have_rows('reviews', 2) ): the_row();
                    $data = get_sub_field('data'); 
                    $fio = get_sub_field('fio');
                    $zagolovok = get_sub_field('zagolovok');
                    $text = get_sub_field('text');
                    $foto = get_sub_field('foto');                
                    $video = get_sub_field('video');
                ?>
                <div class="swiper-slide">
                    <div class="review">
                        <a href="<?php echo $video; ?>" class="thumb" data-fancybox>
                            <img data-src="<?php echo $foto["sizes"]["review"]; ?>" alt="" class="swiper-lazy">

                            <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_video_play"></use></svg>
                        </a>

                        <div class="date">
                            <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_time"></use></svg>
                            <span><?php echo $data; ?></span>
                        </div>

                        <div class="author">
                            <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_user"></use></svg>
                            <span><?php echo $fio; ?></span>
                        </div>

                        <h5 class="name"><?php echo $zagolovok; ?></h5>

                        <div class="desc"><?php echo $text; ?></div>

                        <!-- <div class="link">
                            <a href="/">
                                <span>Узнать подробнее</span>
                                <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_link_arrow"></use></svg>
                            </a>
                        </div> -->
                    </div>
                </div>                
                <?php endwhile; ?>
                <?php endif; ?>
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

                <!-- <div class="all_link">
                    <a href="/">
                        <span><i>Смотреть все отзывы</i></span>
                    </a>
                </div> -->
            </div>
        </div>
    </div>

    <img data-src="<?php bloginfo('template_url'); ?>/images/bg_reviews.png" alt="" class="bg lazyload">
</section>