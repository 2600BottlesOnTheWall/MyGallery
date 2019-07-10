<?php

namespace MyGallery\Core;
use MyGallery\Interfaces\MenuPageInterface;
use MyGallery\View\Slider;
use MyGallery\Utils\MenuConfig;
/**
 * Initialize scripts and styles.
 *
 * @package Core
 * @author  Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license MIT https://opensource.org/licenses/MIT
 */

class Main
{
    protected $config_menu;
    /**
     * Function constructor
     *
     * @param \MyGallery\Render\Slider $templateRender 
     */
    public function __construct(Slider $templateRender,MenuPageInterface $menu_page,MenuConfig $config)
    {
        $this->template = $templateRender;
        $this->registerActions();
        $this->config_menu=$config->get();
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
        \wp_enqueue_style(MYGALLERY_PLUGIN_SLUG . '-style', MYGALLERY_PLUGIN_URL . '/public/css/my-gallery.css');
        if ('post.php' == $hook) {
            wp_enqueue_script(MYGALLERY_PLUGIN_SLUG.'-post-edit-script');
        }
        if (strrpos($hook, $this->config_menu->menu->subs[0]->menu_slug) != false) {
            \wp_enqueue_style(MYGALLERY_PLUGIN_SLUG . 'add-gallery-style', MYGALLERY_PLUGIN_URL . '/public/css/add-gallery.css');
            \wp_enqueue_style(MYGALLERY_PLUGIN_SLUG . 'add-gallery-font', MYGALLERY_PLUGIN_URL . '/public/css/font.css');
            \wp_enqueue_style(MYGALLERY_PLUGIN_SLUG . 'bootstrap', MYGALLERY_PLUGIN_URL . '/public/css/bootstrap.css');
            wp_enqueue_media( array('id'=>1995) );
            wp_enqueue_script(MYGALLERY_PLUGIN_SLUG.'add-gallery');
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
        wp_enqueue_style('my_gallery_style', MYGALLERY_PLUGIN_URL . '/public/css/1.css');
    }

    /**
     * Register scripts and their dependencies.
     * 
     * @return void
     */
    public function registerScripts()
    {
        wp_register_script(MYGALLERY_PLUGIN_SLUG.'-post-edit-script', MYGALLERY_PLUGIN_URL . '/public/js/0.bundle.js', array('react', 'react-dom', 'lodash', 'media-models'), MYGALLERY_PLUGIN_VERSION);
      
        wp_register_script(MYGALLERY_PLUGIN_SLUG.'add-gallery', MYGALLERY_PLUGIN_URL .'/public/js/2.bundle.js', array('react', 'react-dom', 'lodash','underscore','backbone','jquery','media-models'), MYGALLERY_PLUGIN_VERSION);
        wp_register_script(MYGALLERY_PLUGIN_SLUG.'-slider-script', MYGALLERY_PLUGIN_URL . '/public/js/1.bundle.js', array('jquery'), MYGALLERY_PLUGIN_VERSION);
       
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
        add_shortcode('my-gallery', array($this, 'renderSlider'));
    }
    /**
     * Facade for render function.
     *
     * @param array $shortcodeParameters params for slider
     *
     * @return string
     */
    public function renderSlider($shortcodeParameters)
    {
        return $this->template->render($shortcodeParameters);
    }
}
