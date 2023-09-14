<section class="projects block">
    <div class="cont">
        <div class="block_head small_m">
            <h2 class="title"><?php the_field("zagolovok_project", 2); ?></h2>

            <h4 class="sub_title">Кликните на подходящий тег для сортировки</h4>
        </div>

        <div class="tags">
            <div class="swiper">
                <div class="row">

                    <?php $args = [
                        'taxonomy'      => ['portfolio_tag'],                
                        'hierarchical'  => false,               
                    ];
                    $terms = get_terms( $args );
                    foreach( $terms as $term ){ ?>
                        <div>
                            <label data-count="<?php echo $term->count;?>">
                                <input type="checkbox" name="tags[]" data-id="<?php echo $term->term_id; ?>" <?php if($_GET["portfolio_id"]==$term->term_id) {echo "checked";} ?>>
                                <div><?php echo $term->name;?> <span><?php echo $term->count;?></span></div>
                            </label>
                        </div> 
                    <?php } ?> 

                </div>
            </div>
        </div>

         <div class="items row">
            <?php 
                $my_posts = get_posts( array(
                    'post_type' => 'portfolio',
                    'posts_per_page' => '8'
                ) );
                global $post; 
                foreach( $my_posts as $post ){
                    setup_postdata( $post );?> 
                <?php get_template_part( 'inc/one-project_new'); ?>               
            <?php } wp_reset_postdata(); // сброс ?>
        </div>

        <?php global $wp_query;?>
        <div class="all_link">            
            <button class="more_btn" data-max="<?php echo round($wp_query->found_posts/8); ?>" data-page="1" <?php if($wp_query->found_posts/8<=1) {echo "style='display:none;'";}?>>Показать ещё</button>

            <a href="<?php echo get_post_type_archive_link("portfolio"); ?>">
                <span><i>Смотреть все проекты</i></span>
            </a>
        </div>
    </div>
</section>