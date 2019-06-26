<?php

namespace MyGallery\Render;

/**
 * Render template for slider and gallery.
 *
 * @package Render
 * @author  Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license MIT https://opensource.org/licenses/MIT
 */

class Slider
{
    public function __construct($templatePath)
    {
        if (file_exists($templatePath)) {
            $this->templatePath = $templatePath;
        } else {
            throw new \Exception('Wrong template file path ' . $templatePath);
        }
    }
    /**
     * Render html for slider from template.
     *
     * @param array $attr parameters for slider render
     * 
     * @return string
     */
    public function render($attr)
    {
        $images = $this->getImageUrls(explode(',', $attr['ids']));
        ob_start();
        include_once $this->templatePath;
        $content = ob_get_contents();
        ob_end_clean();
        return $content;
    }
    /**
     * Get image urls object from IDS.
     *
     * @param array $IDs wordpess ids of images
     * 
     * @return object
     */
    protected function getImageUrls($IDs)
    {
        $result = array();
        foreach ($IDs as $id) {
            $result[] = (object) array(
                'large' => wp_get_attachment_image_src($id, 'full'),
                'thumbnail' => wp_get_attachment_image_src($id, 'thumbnail'),
            );
        }
        return $result;
    }

}
