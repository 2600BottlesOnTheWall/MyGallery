<?php
use MyGallery\Models\PostModel;
use MyGallery\Models\ShortcodeModel;
/**
 * Class PostModelTest
 *
 * @package MyGallery
 */


class PostModelTest extends \WP_UnitTestCase
{
    public function setUp()
    {
        parent::setUp();
        $this->settings=include 'mock/defaultGallerySettings.php';
        $this->shortcode='[my-gallery ids=434,232 title="Test" config=11111]';
        $this->postId=$this->factory()->post->create(['post_title'=>'Test post','post_content'=>$this->shortcode]);
        $this->instance=new PostModel($this->postId);

    }
    public function  testGetShortcodes(){
        $shortcode=$this->instance->getShortcode();
        $this->assertCount(1,$shortcode);
        $this->assertInstanceOf(stdClass::class,$shortcode[0]);
    }
    public function testUpdatePostShortcodes(){
        $new_shortcode='[my-gallery ids=434,232,435 title="New test" config=11611]';
        $shortcode=(object) array(
            'code'=>$new_shortcode,
            'status'=>'changed'
        );
     
        $this->instance->updatePostShortcodes(array($shortcode));
        $post=get_post($this->postId);
        $this->assertEquals($new_shortcode,$post->post_content);
    }
    public function tearDown()
    {
        parent::tearDown();
    }
}
