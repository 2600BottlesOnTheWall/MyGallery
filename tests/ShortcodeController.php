<?php

class PostsListControllerTest extends \WP_UnitTestCase
{
    protected $server;
    protected $namespacedRoute = '/my-gallery/v1';
    protected $postId;
    public function setUp()
    {
        parent::setUp();

        global $wp_rest_server;
        wp_set_current_user($this->factory->user->create([
            'role' => 'administrator',
        ]));
        $this->server = $wp_rest_server = new \WP_REST_Server;
        do_action('rest_api_init');
        $this->postId = $this->factory()->post->create(['post_title' => 'Test post', 'post_content' => '[my-gallery ids=434,232,435 title="New test" config=11611]']);

    }
    public function testRegisteredRouts()
    {
        $routes = $this->server->get_routes();

        $this->assertArrayHasKey($this->namespacedRoute, $routes);
    }

    public function testGetPostRoute()
    {
        $request = new WP_REST_Request('GET', '/my-gallery/v1/post/' . $this->postId);
        $response = $this->server->dispatch($request);
        $this->assertEquals(200, $response->get_status());
        $data = json_decode($response->get_data(), true);
        $this->assertArrayHasKey('postId', $data);
        $this->assertArrayHasKey('status', $data);
        $this->assertArrayHasKey('shortcodes', $data);
        $this->assertEquals($data['postId'], $this->postId);
        $this->assertCount(1, $data['shortcodes']);
        $this->assertEquals($data['status'], 'saved');
    }
    public function testPatchPostRoute()
    {
        $request = new WP_REST_Request('PATCH', '/my-gallery/v1/post/' . $this->postId);
        $code='[my-gallery ids=1,2,3 title="New test1" config=11611]';
        $body=array(
            'shortcodes'=>array(
                'status'=>'changed',
                'code'=>$code
            )
            );
        $request->set_body($body);
        $response = $this->server->dispatch($request);
        $this->assertEquals(200, $response->get_status());
        $post=get_post($this->postId);
        $this->assertEquals($post->post_content,$code);
    }

}
