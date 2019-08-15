<?php
namespace MyGallery\Interfaces;

use MyGallery\Utils\MenuConfig;

/**
 * Interface for Menu pages class.
 *
 *  *
 * @package  Menu
 * @author   Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license  MIT
 */
interface MenuPageInterface
{
    public function init(MenuConfig $config);
}
