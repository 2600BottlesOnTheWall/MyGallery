<?php

namespace MyGallery\Core;

use MyGallery\Utils\MenuConfig;

/**
 * Initialize scripts and styles.
 *
 * @author  Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license MIT https://opensource.org/licenses/MIT
 */
class Main
{
    protected $configMenu;
    protected $originalShortcode;
    protected $template;

    /**
     * Function constructor.
     */
    public function __construct(MenuConfig $adminConfig)
    {
        $this->configMenu = $adminConfig->get();
        $this->registerActions();
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
        wp_enqueue_style(MYGALLERY_PLUGIN_SLUG.'-main-style', MYGALLERY_PLUGIN_URL.'/public/css/my-gallery.css');
        if ('post.php' == $hook) {
            wp_enqueue_script(MYGALLERY_PLUGIN_SLUG.'-post-edit-script');
        }

        if ('post-new.php' == $hook) {
            wp_enqueue_script(MYGALLERY_PLUGIN_SLUG.'-post-new-script');
        }

        if (strrpos($hook, $this->configMenu->menu->subs[0]->menu_slug) !== false) {
            \wp_enqueue_style(MYGALLERY_PLUGIN_SLUG.'-add-gallery-style', MYGALLERY_PLUGIN_URL.'/public/css/add-gallery.css');
            \wp_enqueue_style(MYGALLERY_PLUGIN_SLUG.'-add-gallery-font', MYGALLERY_PLUGIN_URL.'/public/css/font.css');
            \wp_enqueue_style(MYGALLERY_PLUGIN_SLUG.'-bootstrap', MYGALLERY_PLUGIN_URL.'/public/css/bootstrap.css');
            $post_id = $this->getCustomQueryVar('post');
            if ($post_id) {
                wp_enqueue_media(['id' => $post_id]);
            }
            wp_enqueue_script(MYGALLERY_PLUGIN_SLUG.'-add-gallery');
        }
    }

    /**
     * Add slider and gallery scripts to the post page.
     *
     * @return void
     */
    public function enqueueScripts()
    {
        wp_enqueue_script(MYGALLERY_PLUGIN_SLUG.'-slider-script');
    }

    /**
     * Add styles for slider and gallery to the post page.
     *
     * @return void
     */
    public function enqueueStyles()
    {
        $default_style_path = MYGALLERY_PLUGIN_URL.'/public/css/my-gallery-slider.css';
        $style_path = apply_filters('my_gallery_style', $default_style_path);
        wp_enqueue_style(MYGALLERY_PLUGIN_SLUG.'-slider-style', MYGALLERY_PLUGIN_URL.'/public/css/slider.css');
        wp_enqueue_style(MYGALLERY_PLUGIN_SLUG.'-additional-slider-style', $style_path);
    }

    /**
     * Register scripts and their dependencies.
     *
     * @return void
     */
    public function registerScripts()
    {
        wp_register_script(MYGALLERY_PLUGIN_SLUG.'-post-edit-script', MYGALLERY_PLUGIN_URL.'/public/js/post-edit.bundle.js', ['react', 'react-dom', 'lodash', 'media-models'], MYGALLERY_PLUGIN_VERSION);
        wp_register_script(MYGALLERY_PLUGIN_SLUG.'-post-new-script', MYGALLERY_PLUGIN_URL.'/public/js/post-new.bundle.js', ['react', 'react-dom', 'lodash', 'media-models'], MYGALLERY_PLUGIN_VERSION);
        wp_register_script(MYGALLERY_PLUGIN_SLUG.'-add-gallery', MYGALLERY_PLUGIN_URL.'/public/js/add-gallery.bundle.js', ['react', 'react-dom', 'lodash', 'underscore', 'backbone', 'jquery', 'media-models'], MYGALLERY_PLUGIN_VERSION);
        wp_register_script(MYGALLERY_PLUGIN_SLUG.'-slider-script', MYGALLERY_PLUGIN_URL.'/public/js/slider.bundle.js', ['jquery'], MYGALLERY_PLUGIN_VERSION);
    }

    /**
     * Register actions and shortcode.
     *
     * @return void
     */
    private function registerActions()
    {
        add_action('wp_loaded', [$this, 'registerScripts']);
        add_action('admin_enqueue_scripts', [$this, 'enqueueAdminScripts']);
        add_action('wp_enqueue_scripts', [$this, 'enqueueStyles']);
        add_action('wp_enqueue_scripts', [$this, 'enqueueScripts']);
    }

    /**
     * Get query params.
     *
     * @param string $var parameter name
     *
     * @return bool|int
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
