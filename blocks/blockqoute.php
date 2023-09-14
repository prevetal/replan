<?php
$template_url  = get_bloginfo("template_url");

?>
<?php if(is_admin()) { ?>
	<div style="border:10px solid black; text-align: center; font-size:30px;">Цитата</div>
<?php } else { ?>
<?php 
$avatar = get_field('avatar');
$fio = get_field('fio');
$dolzhnost = get_field('dolzhnost');
$czitata = get_field('czitata');
 ?>
<div class="quote">
    <div class="avatar">
        <img src="<?php echo $avatar; ?>" alt="">
    </div>

    <div>
        <div class="name"><?php echo $fio; ?></div>

        <div class="post"><?php echo $dolzhnost; ?></div>

        <div class="text"><?php echo $czitata; ?></div>
    </div>
</div>
<?php } ?>


