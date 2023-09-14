<section class="certs block">
    <div class="cont">
        <div class="block_head">
            <h2 class="title"><?php the_field("zagolovok_lic",2); ?></h2>
        </div>

        <div class="swiper">
            <div class="swiper-wrapper">
                <?php if( have_rows('lic',2) ): $k=0; ?>
                <?php while( have_rows('lic',2) ): the_row(); $k++;
                    $zagolovok = get_sub_field('zagolovok'); 
                    $opisanie = get_sub_field('opisanie');
                    $sert = get_sub_field('sert');
                    $fon = get_sub_field('fon');
                ?>
                <div class="swiper-slide">
                    <div class="data">
                        <div class="row">
                            <div class="info">
                                <h4 class="name"><?php echo $zagolovok; ?></h4>

                                <div class="desc"><?php echo $opisanie; ?></div>
                            </div>

                            <div class="thumb">
                                <img data-src="<?php echo $sert["sizes"]["lic"]; ?>" alt="" class="swiper-lazy">
                            </div>
                        </div>

                        <div class="bg color<?php echo $k; ?>"></div>
                    </div>
                </div>                
                <?php endwhile; ?>
                <?php endif; ?>
            </div>

            <?php if( have_rows('lic',2) ): $k=0; ?>
            <?php while( have_rows('lic',2) ): the_row(); $k++;
                $fon = get_sub_field('fon');
            ?>
            <style>
                .certs .bg.color<?php echo $k; ?>{
                    background: <?php echo $fon; ?>;
                }
            </style>
            <div class="bg bg<?php echo $k; ?> color<?php echo $k; ?>"></div>            
            <?php endwhile; ?>
            <?php endif; ?>
            <div class="controls">
                <div class="swiper-button-prev">
                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_arr_hor"></use></svg>
                </div>

                <div class="count">
                    <span class="current">1</span> / <span class="total">7</span>
                </div>

                <div class="swiper-button-next">
                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_arr_hor"></use></svg>
                </div>
            </div>

            <div class="swiper-pagination"></div>
        </div>
    </div>
</section>