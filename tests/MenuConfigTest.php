<?php
use MyGallery\Utils\MenuConfig;


class MenuConfigTest extends \WP_UnitTestCase{
    protected $configPath=__DIR__.'/../menu-config.php';
    public function  testWrongPath(){
        $wrong_path=__DIR__.'/../menu-config-wrong.php';
        $this->expectException('Exception');
        $this->expectExceptionMessage('Cannot load template file '.$wrong_path);
        new MenuConfig($wrong_path);
    }
}