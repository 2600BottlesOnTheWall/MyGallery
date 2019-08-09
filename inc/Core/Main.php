<?php

namespace MyGallery\Core;

use MyGallery\Interfaces\MenuPageInterface;
use MyGallery\Utils\MenuConfig;
use MyGallery\View\Slider;

/**
 * Initialize scripts and styles.
 *
 * @package Core
 * @author  Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license MIT https://opensource.org/licenses/MIT
 */

class Main
{
    protected $configMenu;
    protected $originalShortcode;
    protected $template;

    /**
     * Function constructor
     *
     * @param MyGallery\Interfaces\MenuPageInterface $menu_page
     * @param MyGallery\Utils\MenuConfig $config
     */
    public function __construct(MenuPageInterface $menu_page, MenuConfig $config)
    {

        $this->registerActions();
        $this->configMenu = $config->get();
        $menu_page->init($config);
    }

    /**
     * Add script to Post Edit section of admin menu.
     *
     * @param mixed $hook name of page passed by the hook
     *
     * @return void
     */
    public function enqueueAdminScripts($hook)
    {
        wp_enqueue_style('my_gallery_additional_style', MYGALLERY_PLUGIN_URL . '/public/css/my-gallery.css');
        if ('post.php' == $hook) {
            wp_enqueue_script(MYGALLERY_PLUGIN_SLUG . '-post-edit-script');
        }

        if ('post-new.php' == $hook) {
            wp_enqueue_script(MYGALLERY_PLUGIN_SLUG . '-post-new-script');
        }

        if (strrpos($hook, $this->configMenu->menu->subs[0]->menu_slug) !== false) {
            \wp_enqueue_style(MYGALLERY_PLUGIN_SLUG . 'add-gallery-style', MYGALLERY_PLUGIN_URL . '/public/css/add-gallery.css');
            \wp_enqueue_style(MYGALLERY_PLUGIN_SLUG . 'add-gallery-font', MYGALLERY_PLUGIN_URL . '/public/css/font.css');
            \wp_enqueue_style(MYGALLERY_PLUGIN_SLUG . 'bootstrap', MYGALLERY_PLUGIN_URL . '/public/css/bootstrap.css');
            $post_id = $this->getCustomQueryVar('post');
            if ($post_id) {
                wp_enqueue_media(array('id' => $post_id));
            }
            wp_enqueue_script(MYGALLERY_PLUGIN_SLUG . 'add-gallery');
        }
    }

    /**
     * Add slider and gallery scripts to the post page.
     *
     * @return void
     */
    public function enqueueScripts()
    {
        wp_enqueue_script(MYGALLERY_PLUGIN_SLUG . '-slider-script');
    }

    /**
     * Add styles for slider and gallery to the post page.
     *
     * @return void
     */
    public function enqueueStyles()
    {
        wp_enqueue_style('my_gallery_style', MYGALLERY_PLUGIN_URL . '/public/css/1.css');
        wp_enqueue_style('my_gallery_additional_style', MYGALLERY_PLUGIN_URL . '/public/css/my-gallery.css');
    }

    /**
     * Register scripts and their dependencies.
     *
     * @return void
     */
    public function registerScripts()
    {
        wp_register_script(MYGALLERY_PLUGIN_SLUG . '-post-edit-script', MYGALLERY_PLUGIN_URL . '/public/js/post-edit.bundle.js', array('react', 'react-dom', 'lodash', 'media-models'), MYGALLERY_PLUGIN_VERSION);
        wp_register_script(MYGALLERY_PLUGIN_SLUG . '-post-new-script', MYGALLERY_PLUGIN_URL . '/public/js/post-new.bundle.js', array('react', 'react-dom', 'lodash', 'media-models'), MYGALLERY_PLUGIN_VERSION);
        wp_register_script(MYGALLERY_PLUGIN_SLUG . 'add-gallery', MYGALLERY_PLUGIN_URL . '/public/js/add-gallery.bundle.js', array('react', 'react-dom', 'lodash', 'underscore', 'backbone', 'jquery', 'media-models'), MYGALLERY_PLUGIN_VERSION);
        wp_register_script(MYGALLERY_PLUGIN_SLUG . '-slider-script', MYGALLERY_PLUGIN_URL . '/public/js/slider.bundle.js', array('jquery'), MYGALLERY_PLUGIN_VERSION);

    }

    /**
     * Register actions and shortcode.
     *
     * @return void
     */
    private function registerActions()
    {
        add_action('wp_loaded', array($this, 'registerScripts'));
        add_action('admin_enqueue_scripts', array($this, 'enqueueAdminScripts'));
        add_action('wp_enqueue_scripts', array($this, 'enqueueStyles'));
        add_action('wp_enqueue_scripts', array($this, 'enqueueScripts'));

    }
    /**
     * Get query params
     *
     * @param string $var parameter name
     * @return boolean|int
     */
    public function getCustomQueryVar(string $var)
    {
        switch ($var) {
            case 'post':
                if (isset($_GET['post'])) {
                    $post = $_GET['post'];
                    $filtered_post = preg_filter('/[\d]/', '$0', $post);
                    return (int) $filtered_post;
                }
                return false;
        }
    }

}
