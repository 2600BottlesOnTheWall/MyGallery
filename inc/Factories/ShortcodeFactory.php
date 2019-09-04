<?php
namespace MyGallery\Factories;

use MyGallery\Models\ShortcodeModel;

/**
 * Factory class creates instance of ShortcodeModel class
 *
 * PHP version 7.0
 *
 * @package  Factories
 * @author   Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license  MIT
 */
class ShortcodeFactory
{
    public static $defaultSettings;
    /**
     * Set default settings for shortcode parameters.
     *
     * @param \stdClass $settings default settings for gallery.
     * @return void
     */
    public static function setDefaultSettings(\stdClass $settings)
    {
        static::$defaultSettings = $settings;
    }
    /**
     * Getter for creating new instance.
     *
     * @param string $code shortcode.
     * @return ShortcodeModel
     */
    public static function get(string $code)
    {
        if (static::$defaultSettings) {
            return new ShortcodeModel($code, static::$defaultSettings);
        }
    }
}
