<?php
/**
 * @author   Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license  MIT
 */

return  [
    'menu' => [
        'page_title' => __('My Gallery Menu', MYGALLERY_PLUGIN_SLUG),
        'menu_title' => __('My Gallery', MYGALLERY_PLUGIN_SLUG),
        'capability' => 'manage_options',
        'menu_slug'  => MYGALLERY_PLUGIN_SLUG.'-main-menu',
      //  'template' => MYGALLERY_PLUGIN_DIR . 'template/menu/main-menu.php',
        'icon' => 'dashicons-'.MYGALLERY_PLUGIN_SLUG,
        'subs' => [
             [
                'page_title'  => __('Add gallery', MYGALLERY_PLUGIN_SLUG),
                'parent_slug' => MYGALLERY_PLUGIN_SLUG.'-main-menu',
              // 'menu_title' => __('Add gallery', MYGALLERY_PLUGIN_SLUG),
                'capability' => 'manage_options',
                'menu_slug'  => MYGALLERY_PLUGIN_SLUG.'menu-add-shortcode',
                'template'   => MYGALLERY_PLUGIN_DIR.'template/menu/add-gallery-menu.php',
            ],
             [
                'page_title'  => __('About', MYGALLERY_PLUGIN_SLUG),
                'parent_slug' => MYGALLERY_PLUGIN_SLUG.'-main-menu',
                'menu_title'  => __('About', MYGALLERY_PLUGIN_SLUG),
                'capability'  => 'manage_options',
                'menu_slug'   => MYGALLERY_PLUGIN_SLUG.'-menu-about',
                'template'    => MYGALLERY_PLUGIN_DIR.'template/menu/about-menu.php',
            ],
        ],
    ],
];
