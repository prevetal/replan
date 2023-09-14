<div class="project">
    <div class="thumb">
        <div class="swiper">
            <div class="swiper-wrapper">
                <?php 
                $images = get_field('gallery');
                if( $images ): ?>
                <?php foreach( $images as $image ): ?>
                <div class="swiper-slide">
                    <div class="img">
                        <a href="<?php the_permalink(); ?>"><img src="<?php echo esc_url($image['sizes']['project']); ?>" alt="<?php echo esc_attr($image['alt']); ?>"></a>
                    </div>
                </div>
                <?php endforeach; ?>
                <?php endif; ?>
            </div>

            <div class="swiper-button-prev">
                <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_arr_ver"></use></svg>
            </div>

            <div class="swiper-button-next">
                <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_arr_ver"></use></svg>
            </div>

            <div class="swiper-pagination"></div>
        </div>
        <?php $stickers = get_field("stickers"); ?>
        <div class="stickers" <?php if(!$stickers): ?>style="visibility: hidden;"<?php endif; ?>>
            <a href="<?php the_field("link_sticker"); ?>" target="_blank" class="sticker <?php if($stickers==2) {echo "blue";} if($stickers==3) {echo "yellow";} ?>">
                <?php if($stickers==1): ?>
                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_fire"></use></svg>
                    <span>Популярное</span>
                <?php endif; ?>

                <?php if($stickers==2): ?>
                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_new"></use></svg>
                    <span>Новое</span>
                <?php endif; ?>

                <?php if($stickers==3): ?>
                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_sale"></use></svg>
                    <span>Скидка</span>
                <?php endif; ?>
            </a>
        </div>
    </div>

    <div class="name">
        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
    </div>
    <?php if(get_field("serial")): ?>
    <div class="duration">
        <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_serial"></use></svg>
        <span><?php the_field("serial"); ?></span>
    </div>
    <?php endif; ?>
    <?php if(get_field("srok")): ?>
    <div class="duration">
        <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_time"></use></svg>
        <span><?php the_field("srok"); ?></span>
    </div>
    <?php endif; ?>
    <?php if(get_field("price")): ?>
    <div class="price">
        <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_price"></use></svg>
        <span><?php the_field("price"); ?> ₽</span>
    </div>
    <?php endif; ?>
    <div class="link">
        <a href="<?php the_permalink(); ?>">
            <span>Подробнее</span>
            <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_link_arrow"></use></svg>
        </a>
    </div>
</div>