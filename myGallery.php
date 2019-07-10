<?php

/*
Plugin Name: MyGallery
Plugin URI: https://github.com/zalevsk1y/MyGallery
Description: Add slider and gallery to your post fast and easy.
Version: 1.1.3
Author: Evgeny S.Zalevskiy <2600@ukr.net>
Author URI: https://github.com/zalevsk1y/
License: MIT
 */
?>
<?php
namespace MyGallery;




define("MYGALLERY_PLUGIN_VERSION", "1.1.3");
define("MYGALLERY_PLUGIN_SLUG", "myGallery");
define("MYGALLERY_PLUGIN_NAMESPACE", __NAMESPACE__);
define("MYGALLERY_PLUGIN_URL", plugins_url("", __FILE__));
define("MYGALLERY_PLUGIN_DIR", plugin_dir_path(__FILE__));

require "autoload.php";

$modules = [];
$modules['menu_config']=new Utils\MenuConfig(MYGALLERY_PLUGIN_DIR.'menu-config.php');
//---Admin menu modules
$modules['menu_page'] = new Menu\Admin\MenuPage();
$modules["template"] = new View\Slider(MYGALLERY_PLUGIN_DIR . "/templates/content-slider.php");
$modules["main"] = new Core\Main($modules["template"],$modules['menu_page'],$modules['menu_config']);
