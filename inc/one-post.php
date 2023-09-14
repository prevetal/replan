<div class="big_article">
    <div class="date"><?php the_time("d F Y"); ?></div>

    <div class="views">
        <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_eye"></use></svg>
        <span><?php get_view(get_the_ID()); ?></span>
    </div>

    <div class="comments_count">
        <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_comments"></use></svg>
        <span><?php comments_number( '0', '1', '%'); ?></span>
    </div>

    <div class="duration">
        <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_time"></use></svg>
        <span><?php the_field("time_read"); ?></span>
    </div>

    <h4 class="name">
        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
    </h4>

    <a href="<?php the_permalink(); ?>" class="thumb">
        <?php $thumbnail_id = get_post_thumbnail_id( $post->ID );
              $alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);   
              if($thumbnail_id):
        ?>
        <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), "post"); ?>" alt="<?php echo $alt; ?>">
        <?php else : ?>
            <img src="<?php bloginfo('template_url'); ?>/images/image_default.svg" alt="<?php echo $alt; ?>">
        <?php endif; ?>
    </a>

    <div class="desc">
        <p><?php the_excerpt(); ?></p>

        <div class="link">
            <a href="<?php the_permalink(); ?>">
                <span>Читать далее</span>
                <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_link_arrow"></use></svg>
            </a>
        </div>
    </div>

    <div class="tags">
        <?php 
            $posttags = get_the_tags();
            if( $posttags ){
                foreach( $posttags as $tag ){ ?>
                    <div><a target="_blank" href="<?php echo get_category_link(1)."?tag_id=".$tag->term_id; ?>"><?php echo $tag->name; ?> <span><?php echo $tag->count; ?></span></a></div>    
                <?php }
            } ?>
        
    </div>
</div>