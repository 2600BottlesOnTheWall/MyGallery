<?php
namespace MyGallery\Models;

use MyGallery\Traits\ConfigParse;
use MyGallery\Traits\Helpers;
use MyGallery\Traits\Images;

/**
 * Operates with shortcode object
 *
 * @package Models
 * @author  Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license MIT
 */

class ShortcodeModel
{
    // setConfig()
    use ConfigParse;
    // createImageObject()
    use Images;
    // removeBrackets()
    use Helpers;
    protected $shortcodeNamePattern = '/(?P<name>my\-gallery)/i';
    protected $idsPattern = '/(?P<ids>ids\=[\d|,]+)/i';
    protected $imageIdsPattern = '/(?P<ids>\d+)/i';
    protected $galleryTitlePattern = '/title=(\&quot\;|\")(?P<title>.+)(\&quot\;|\")/i';
    protected $galleryClassesPattern = '/classes\=(?P<classes>[^\s]*)/i';
    protected $galleryConfigPattern = '/ config\=(?P<config>\d{5})/i';
    protected $originalCode;
    protected $imagesIds = array();
    protected $title = '';
    protected $classes = array();
    public $images;
    public $code;
    public $settings;

    public function __construct($code, $default_settings)
    {   $replace_quotes_code=preg_replace('/(&quot;)/i', '"', $code);
        $this->originalCode = substr_replace($replace_quotes_code,' ',-1,0);
        $this->settings = $default_settings;
        $this->code = (object) array(
            'ids' => '',
            'config' => '',
            'misc' => '',
        );
        $this->init();
    }
    /**
     * Initialize.
     *
     * @return void
     */
    protected function init()
    {

        $this->parseCode();
    }
    /**
     * Creates shortcode object in proper format for front end
     *
     * @return object
     */
    public function toObject()
    {
        return (object) array(
            'code' => $this->code,
            'images' => $this->images,
            'settings' => $this->settings,
            '_originalCode' => $this->originalCode,
        );
    }
    /**
     * Parse shortcode attributes with shortcode_parse_atts() wp function.
     *
     * @return void
     */
    protected function parseCode()
    {
        //parse image ids

        $attr = \shortcode_parse_atts($this->originalCode);

        if (isset($attr['ids'])) {
            $ids = $this->removeBrackets($attr['ids']);
            $this->images = $this->setImage(explode(',', $ids));
        }
        $this->code->ids = isset($ids) ? 'ids=' . $ids : '';
        //parsing and escaping gallery title

        if (isset($attr['title'])) {
            $title = $this->removeBrackets($attr['title']);
            $this->title = esc_html($title);
            $this->settings->misc->title = $this->title;
        }
        $this->code->misc .= !empty($this->title) ? 'title="' . $this->title . '"' : '';

        //parsing and escaping gallery classes

        if (isset($attr['classes'])) {
            $classes = $this->removeBrackets($attr['classes']);
            $this->classes = $this->setCustomClassNames($classes);
            $this->settings->misc->classes = implode(',', $this->classes);
        }
        $classesString = implode(',', $this->classes);
        $this->code->misc .= !empty($classesString) ? ' classes=' . $classesString : '';

        //parsing gallery config
        $config='';
        if (isset($attr['config'])) {
            $config = $this->removeBrackets($attr['config']);
            $this->settings->config = $this->setConfig($config);

        }
        $this->code->misc .= isset($attr['config']) ? ' config=' . (int) $config : '';
    }
    /**
     * Get custom class names from string and convert to array
     *
     * @param string $classes string of custom classes separate by coma
     * @return array
     */
    protected function setCustomClassNames(string $classes)
    {
        //remove spaces
        $class_names=array();
        $remove_spaces = preg_replace('/(\x20|\s|%20)/i', '', $classes);
        $classes_arr = explode(',', $remove_spaces);
        foreach ($classes_arr as $class) {
            $class_names[] = esc_attr($class);
        }
        return $class_names;
    }
    /**
     * Facfde function for Images Trait function
     *
     * @param array $ids
     * @return array
     */
    protected function setImage(array $ids)
    {

        return $this->createImageObject($ids);

    }

    /**
     * Set default structure for empty shortcode object
     *
     * @return void
     */
    protected function setEmptyShortcode()
    {
        $this->images = array();
        $this->code = (object) array(
            'ids' => '',
            'config' => '',
            'misc' => '',
        );
    }
    /**
     * Check if shortcode has correct name
     *
     * @return boolean
     */
    protected function checkShortcodeName()
    {
        preg_match($this->shortcodeNamePattern, $this->originalCode, $match);

        return isset($match['name']);
    }
}
