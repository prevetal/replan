<section class="order_block block">
    <div class="cont">
        <div class="data" style="background: <?php echo $args[2]; ?>; ">
        	<div class="order_block_body">        		
	            <h3 class="title"><?php  if($args[0]) {echo  $args[0];} else {echo "Пора согласовывать!"; } ?></h3>
	            <div class="order_block_desc"><?php if($args[1]) {echo  $args[1];} else {echo "Оставьте ваш номер телефона и получите бесплатную консультацию от нашего специалист";} ?></div>
        	</div>
            <?php echo do_shortcode('[contact-form-7 id="277" title="Пора согласовывать форма"]'); ?>
        </div>
    </div>
</section>