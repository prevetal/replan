<?php
$template_url  = get_bloginfo("template_url");

?>
<?php if(is_admin()) { ?>
	<div style="border:10px solid black; text-align: center; font-size:30px;">Информационный блок</div>
<?php } else { ?>
<?php 
$images = get_field('text');
if( $images ): ?>
<div class="inform">
   <?php echo $images; ?>
</div>
<?php endif; ?>
<?php } ?>

