<?php
use MyGallery\Menu\Admin\MenuPage;
use MyGallery\Utils\MenuConfig;
/**
 * class MenuPageTest
 * 
 * @package MyGallery
 */

 class MenuPageTest extends \WP_UnitTestCase{
    protected $configPath;
    public function setUp()
    {
        
        parent::setUp();
        $this->configPath=__DIR__.'/../menu_config.php';
        wp_set_current_user($this->factory->user->create([
            'role' => 'administrator',
        ]));
        
        $this->instance=new MenuPage();

       
    }
    public function testAddMainMenu (){
        echo $this->configPath;
        $menu_config=new MenuConfig($this->configPath);
        $this->instance->init($menu_config);
        $menu_slug=MYGALLERY_PLUGIN_SLUG . '-main-menu';
        $this->assertNotEmpty(menu_page_url( $menu_slug ));

    }
}