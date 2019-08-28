<?php

namespace MyGallery\View;

use MyGallery\Traits\TemplateFactoryFacade;

/**
 * Render media button for classic editor.
 *
 * @author  Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license MIT https://opensource.org/licenses/MIT
 */
class MediaButtons
{
    //adds getTemplate() method
    use TemplateFactoryFacade;

    protected $template;

    public function __construct(string $templatePath)
    {
        $this->template = $this->getTemplate($templatePath);
        $this->registerFilters();
    }

    /**
     * Add filter to edit media buttons content.
     *
     * @return void
     */
    protected function registerFilters()
    {
        add_filter('media_buttons_context', [$this, 'renderMediaButton']);
    }

    /**
     * Render template of media button.
     *
     * @param string $buttons content of media button
     *
     * @return string
     */
    public function renderMediaButton(string $buttons)
    {
        $button = $this->template->render();

        return $buttons.$button;
    }
}
