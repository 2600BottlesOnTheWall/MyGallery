<?php
use MyGallery\Models\ShortcodeModel;
/**
 * Class ShortcodeModelTest
 *
 * @package MyGallery
 */
class DefaultSettings{
    protected static $settings;
    public static function get(){
        if (isset(self::$settings)){
            return self::$settings;
        }
        self::$settings=include 'mock/defaultGallerySettings.php';
        return self::$settings;
    }
}
class ShortcodeModelTest extends \WP_UnitTestCase
{  
    protected $defaultSettings;
    public function setUp()
    {
        // before
        parent::setUp();
        $this->defaultSettings=DefaultSettings::get();
        $this->factory()->attachment->create_many(5);

       
    }
    /**
     * @dataProvider codeIdsParsing
     */
    public function  testToObjectIdsParsing ($code,$expected){
        
   
        $instance=new ShortcodeModel($code,$this->defaultSettings);
        $result=$instance->toObject();
        $this->assertEquals($expected,$result->code->ids);
    }
    /**
    * @dataProvider codeTitleParsing
    */
    public function  testToObjectTitleParsing ($code,$expected){
        $instance=new ShortcodeModel($code,$this->defaultSettings);
        $result=$instance->toObject();
        $this->assertEquals($expected,$result->code->misc);
    }
    /**
    * @dataProvider codeConfigParsing
    */
    public function testToObjectConfigParsing ($code,$expected){
        $instance=new ShortcodeModel($code,$this->defaultSettings);
        $result=$instance->toObject();
        $this->assertEquals($expected,$result->code->misc);
    }
    /**
    * @dataProvider codeClassesParsing
    */
    public function testToObjectClassesParsing ($code,$expected){
        $instance=new ShortcodeModel($code,$this->defaultSettings);
        $result=$instance->toObject();
        $this->assertEquals($expected,$result->code->misc);
    }
    public function codeIdsParsing(){
        return [
            ['[my-gallery ids=3,3,4,5,4,1]','ids=3,3,4,5,4,1'],
            ['[my-gallery ids="3,1,12,1"]','ids=3,1,12,1'],
        ];
    }
    public function codeTitleParsing(){
        return [
            ['[my-gallery ids=3,3,4,5,4,1 title="Test title" ]','title="Test title"'],
            ['[my-gallery ids="3,1,12,1" title=&quot;Test title&quot;]','title="Test title"'],
        ];
    }
    public function codeConfigParsing(){
        return [
            ['[my-gallery ids=3,3,4,5,4,1 title="Test title" config=10161 ]','title="Test title" config=10161'],
            ['[my-gallery ids="3,1,12,1"  config=10161 title=&quot;Test title&quot;]','title="Test title" config=10161'],
        ];
    }
    public function codeClassesParsing(){
        return [
            ['[my-gallery ids=3,3,4,5,4,1 classes=class-1,class-sub-class config=10161 ]',' classes=class-1,class-sub-class config=10161'],
            ['[my-gallery ids="3,1,12,1"  config=10161 title=&quot;Test title&quot; classes=class-1,class-sub-class]','title="Test title" classes=class-1,class-sub-class config=10161'],
        ];
    }
    public function tearDown()
    {
        // your tear down methods here

        // then
        parent::tearDown();
    }
}
