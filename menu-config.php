<?php
/**
 *
 * @package  Menu
 * @author   Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license  MIT
 */

return  array(
    'menu' =>  array(
        'page_title' => 'My Gallery Menu',
        'menu_title' => __('My Gallery', 'news-parser'),
        'capability' => 'manage_options',
        'menu_slug' => MYGALLERY_PLUGIN_SLUG . '-main-menu',
        'template' => MYGALLERY_PLUGIN_DIR . 'template/menu/main-menu.php',
        'icon'=> 'dashicons-'.MYGALLERY_PLUGIN_SLUG,
        'subs' => array(
             array(
                'page_title' => 'Add gallery',
                'parent_slug' => MYGALLERY_PLUGIN_SLUG . '-main-menu',
                'menu_title' => __('Add gallery', 'news-parser'),
                'capability' => 'manage_options',
                'menu_slug' => MYGALLERY_PLUGIN_SLUG . '-main-menu',
                'template' => MYGALLERY_PLUGIN_DIR . 'template/menu/add-gallery-menu.php',
            ),
             array(
                'page_title' => 'About',
                'parent_slug' => MYGALLERY_PLUGIN_SLUG . '-main-menu',
                'menu_title' => __('About', 'news-parser'),
                'capability' => 'manage_options',
                'menu_slug' => MYGALLERY_PLUGIN_SLUG . '-menu-settings',
                'template' => MYGALLERY_PLUGIN_DIR . 'template/menu/about-menu.php',
            )
        ),
    ),
);
