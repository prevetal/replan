<?php
$template_url  = get_bloginfo("template_url");

?>
<?php if(is_admin()) { ?>
	<div style="border:10px solid black; text-align: center; font-size:30px;">Форма быстрой консультации</div>
<?php } else { ?>

<div class="get_quike_consult">
    <div class="title">Получите быструю консультацию</div>

    <?php echo do_shortcode('[contact-form-7 id="276" title="Получите быструю консультацию"]'); ?>    
</div>
<?php } ?>

