<?php
use MyGallery\Models\PostModel;

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
        $this->settings = include 'mock/defaultGallerySettings.php';
        $this->shortcode = '[my-gallery ids=434,232 title="Test" config=11111]';
        $this->postId = $this->factory()->post->create(['post_title' => 'Test post', 'post_content' => $this->shortcode]);
        $this->instance = new PostModel($this->postId);
        $this->newShortcode = '[my-gallery ids=434,232,435 title="New test" config=11611]';

    }
    public function testGetShortcodes()
    {
        $shortcode = $this->instance->getShortcode();
        $this->assertCount(1, $shortcode);
        $this->assertInstanceOf(stdClass::class, $shortcode[0]);
    }
    public function testUpdatePostShortcodes()
    {
        
        $postInstance = $this->getNewPost();

        $shortcode = (object) array(
            'code' => $this->newShortcode,
            'status' => 'changed',
        );
        $postInstance->updatePostShortcodes(array($shortcode));
        $post = get_post($postInstance->postId());

        $this->assertEquals($this->newShortcode, $post->post_content);
    }
    public function testAddNewPostShortcodes()
    {
      
        $postInstance = $this->getNewPost();

        $shortcode = (object) array(
            'code' => $this->newShortcode,
            'status' => 'draft',
        );
        $postInstance->updatePostShortcodes(array($shortcode));
        $post = get_post($postInstance->postId());
        $this->assertEquals($this->shortcode . '<p>' . $this->newShortcode . '</p>', $post->post_content);
    }
    public function testDeletePostShortcodes()
    {
       
        $postInstance = $this->getNewPost();

        $shortcode = (object) array(
            'code' => $this->shortcode,
            'status' => 'deleted',
        );
        $postInstance->updatePostShortcodes(array($shortcode));
        $post = get_post($postInstance->postId());
        $this->assertEmpty($post->post_content);
    }
    protected function getNewPost(){
        $postId = $this->factory()->post->create(['post_title' => 'Test post', 'post_content' => $this->shortcode]);
        return new PostModel($postId);
    }   
    public function tearDown()
    {
        parent::tearDown();
    }
}
