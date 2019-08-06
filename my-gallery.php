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

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


define("MYGALLERY_PLUGIN_VERSION", "1.1.3");
define("MYGALLERY_PLUGIN_SLUG", "myGallery");
define("MYGALLERY_PLUGIN_SHORTCODE", "my-gallery");
define("MYGALLERY_PLUGIN_NAMESPACE", __NAMESPACE__);
define("MYGALLERY_PLUGIN_URL", plugins_url("", __FILE__));
define("MYGALLERY_PLUGIN_DIR", plugin_dir_path(__FILE__));

require "autoload.php";
$default_gallery_settings=require MYGALLERY_PLUGIN_DIR.'defaultGallerySettings.php';
Factories\ShortcodeFactory::setDefaultSettings($default_gallery_settings);

$modules = [];

$modules['menu_config']=new Utils\MenuConfig(MYGALLERY_PLUGIN_DIR.'menu-config.php');
//---Admin menu modules
$modules['menu_page'] = new Menu\Admin\MenuPage();
$modules["template"] = new View\Slider(MYGALLERY_PLUGIN_DIR . "/template/slider/content-slider.php");
$modules["main"] = new Core\Main($modules["template"],$modules['menu_page'],$modules['menu_config']);
$modules["rest_posts_list"] = new Rest\PostsListController();
$modules["rest_shortcodes_get"] = new Rest\ShortcodeController();
