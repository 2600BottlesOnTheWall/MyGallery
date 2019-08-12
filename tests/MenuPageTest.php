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
        $this->configPath=__DIR__.'/../menu-config.php';
        wp_set_current_user($this->factory->user->create([
            'role' => 'administrator',
        ]));
        
        $this->instance=new MenuPage();

       
    }
    public function testAddMainMenu (){
        $menu_config=new MenuConfig($this->configPath);
        $this->instance->init($menu_config);
        $this->instance->addMainMenu();
        $menu_slug=MYGALLERY_PLUGIN_SLUG . '-main-menu';
        $this->assertNotEmpty(menu_page_url( $menu_slug ,false ));

    }
}