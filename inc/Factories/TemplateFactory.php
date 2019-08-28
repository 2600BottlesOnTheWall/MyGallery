<?php

namespace MyGallery\Factories;

use MyGallery\View\TemplateRender;

/**
 * Factory class creates instance of TemplateRender class.
 *
 *  *
 *
 * @author   Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license  MIT
 */
class TemplateFactory
{
    /**
     * Getter for creating new instance.
     *
     * @param int $templatePath path to template file
     *
     * @return object [PostModel]
     */
    public static function get(string $templatePath)
    {
        return new TemplateRender($templatePath);
    }
}
