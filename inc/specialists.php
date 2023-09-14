<section class="specialists block">
    <div class="cont">
        <div class="block_head">
            <h2 class="title"><?php the_field("zagolovok_team", 2); ?></h2>
        </div>

        <div class="swiper">
            <div class="row">
                <?php if( have_rows('team', 2) ): ?>
                <?php while( have_rows('team', 2) ): the_row();
                    $fio = get_sub_field('fio'); 
                    $zagolovok = get_sub_field('zagolovok');
                    $opisanie = get_sub_field('opisanie');
                    $pochta = get_sub_field('pochta');
                    $foto = get_sub_field('foto');        
                ?>
                <div>
                    <div class="person">
                        <div class="photo">
                            <img data-src="<?php echo $foto["sizes"]["team"]; ?>" alt="" class="lazyload">
                        </div>

                        <div>
                            <h5 class="name"><?php echo $fio; ?></h5>

                            <div class="slogan"><?php echo $zagolovok; ?></div>

                            <div class="desc"><?php echo $opisanie; ?></div>

                            <div class="email">
                                <a href="mailto:<?php echo $pochta; ?>">
                                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_email"></use></svg>
                                    <span><?php echo $pochta; ?></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>                
                <?php endwhile; ?>
                <?php endif; ?>
            </div>

            <div class="swiper-pagination"></div>
        </div>
        <?php if(!is_page(118)): ?>
        <div class="all_link">
            <a href="<?php the_permalink(118); ?>" target="_blank">
                <span><i>Познакомиться со всей командой</i></span>
            </a>
        </div>
        <?php endif; ?>

        <?php if(is_category()): ?>
            <div class="add_question">
                <h4 class="title">Задайте свой вопрос специалисту</h4>

                <?php echo do_shortcode('[contact-form-7 id="270" title="Не нашлось ответа? Задайте вопрос напрямую специалисту"]'); ?>                
            </div>
        <?php endif; ?>
    </div>
    <?php if(is_category()): ?>
        <img data-src="<?php bloginfo('template_url'); ?>/images/bg2.png" alt="" class="bg2 lazyload">
    <?php else: ?>
        <img data-src="<?php bloginfo('template_url'); ?>/images/bg1.png" alt="" class="bg lazyload">
    <?php endif; ?>
</section>