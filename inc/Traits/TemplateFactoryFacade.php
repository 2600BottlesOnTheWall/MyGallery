<?php
namespace MyGallery\Traits;

use MyGallery\Factories\TemplateFactory;

/**
 * Trait for include facade method for Template Factory
 *
 *  *
 * @package  Factories
 * @author   Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license  MIT
 */

trait TemplateFactoryFacade
{
    /**
     * Facade for templateFactory return TemplateRenderer class
     *
     * @param string $templatePath path to template
     * @return object
     */
    protected function getTemplate(string $templatePath){
        return TemplateFactory::get($templatePath);
    }
}