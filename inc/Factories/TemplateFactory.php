<?php
namespace MyGallery\Factories;

use MyGallery\View\TemplateRender;

/**
 * Factory class creates instance of TemplateRender class
 *
 *  *
 * @package  Factories
 * @author   Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license  MIT
 */

class TemplateFactory
{

    /**
     * Getter for creating new instance
     *
     * @param integer $postId
     * @return object [PostModel]
     */

    public static function get($templatePath)
    {
        return new TemplateRender($templatePath);
    }
}
