<?php

/*
Plugin Name: MyGallery
Plugin URI: http://bestplugin.com
Description: Add slider and gallery to your post. 
Version: 1.0.0
Author: Evgeny S.Zalevskiy <2600@ukr.net>
Author URI: https://github.com/2600BottlesOnTheWall
License: MIT
 */
?>
<?php
namespace MyGallery;

include "autoload.php";
//include "vendor/autoload.php";

define("MYGALLERY_VERSION",   "1.0.0");
define("MYGALLERY_SLUG",      "myGallery");
define("MYGALLERY_NAMESPACE",  __NAMESPACE__);
define("MYGALLERY_PLUGIN_URL", plugins_url("", __FILE__));
define("MYGALLERY_PLUGIN_DIR", plugin_dir_path(__FILE__));

$modules = [];
$modules["template"] = new Render\Slider(MYGALLERY_PLUGIN_DIR . "/templates/content-slider.php");
$modules["main"]     = new Core\Main($modules["template"]);


\register_activation_hook(__FILE__,array($modules["main"],'activatePlugin'));

