<?php

/*
Plugin Name: MyGallery
Plugin URI: https://github.com/zalevsk1y/MyGallery
Description: Add slider and gallery to your post fast and easy.
Version: 1.1.2
Author: Evgeny S.Zalevskiy <2600@ukr.net>
Author URI: https://github.com/zalevsk1y/
License: MIT
 */
?>
<?php
namespace MyGallery;

include "autoload.php";


define("MYGALLERY_VERSION", "1.1.2");
define("MYGALLERY_SLUG", "myGallery");
define("MYGALLERY_NAMESPACE", __NAMESPACE__);
define("MYGALLERY_PLUGIN_URL", plugins_url("", __FILE__));
define("MYGALLERY_PLUGIN_DIR", plugin_dir_path(__FILE__));

$modules = [];
$modules["template"] = new Render\Slider(MYGALLERY_PLUGIN_DIR . "/templates/content-slider.php");
$modules["main"] = new Core\Main($modules["template"]);
