<?php
use MyGallery\Models\PostModel;
/**
 * Class SampleTest
 *
 * @package My_Gallery
 */


class ExampleTest extends \WP_UnitTestCase
{
    public function setUp()
    {
        // before
        parent::setUp();

        $this->postId=$this->factory()->post->create(['post_title'=>'Test post','post_content'=>'[my-gallery ids=434,232 title="Test" config=11111]']);
        $this->instance=new PostModel($this->postId);

        // your set up methods here
    }
    public function  testGetShortcodes(){
        $shortcode=$this->instance->getShortcode();
        $this->assertCount(1,$shortcode);
    }
    public function tearDown()
    {
        // your tear down methods here

        // then
        parent::tearDown();
    }
}
