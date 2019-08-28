<?php

namespace MyGallery\Rest;

use MyGallery\Message\Errors;

/**
 * Rest controller
 * GET /my-gallery/v1/post-list/{order_by}/{order} return list of posts (titles & post_id).
 *
 * @author  Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license MIT
 */
class PostsListController
{
    protected $namespace = 'my-gallery/v1';
    protected $resource_name = 'posts-list';

    public function __construct()
    {
        $this->init();
    }

    /**
     * Initialization.Add action for rest function registration.
     *
     * @return void
     */
    protected function init()
    {
        add_action('rest_api_init', [$this, 'registerRouts']);
    }

    /**
     * Register routes.
     *
     * @return void
     */
    public function registerRouts()
    {
        register_rest_route(
            $this->namespace,
            $this->resource_name.'/(?P<order_by>[a-z]+)'.'/(?P<order>desc|asc)',
            [
                'method'              => 'GET',
                'callback'            => [$this, 'getPostsList'],
                'permission_callback' => [$this, 'checkPermission'],
                'schema'              => [$this, 'getSchema'],
                'args'                => [
                    'id' => [
                        'description'       => 'post id',
                        'type'              => 'integer',
                        'validate_callback' => function ($param) {
                            return is_numeric($param);
                        },
                    ],
                    'title' => [
                        'description' => 'post title',
                        'type'        => 'string',
                    ],
                ],
            ]
        );
    }

    /**
     * Check if user have rights to read posts.
     *
     *
     * @return void
     */
    public function checkPermission()
    {
        if (!current_user_can('read')) {
            return new \WP_Error('rest_forbidden', Errors::text('NO_RIGHTS_TO_READ'));
        }

        return true;
    }

    /**
     * Get sample schema for posts list.
     *
     *
     * @return void
     */
    public function getSchema()
    {
        $schema = [
            '$schema'     => 'http://json-schema.org/draft-04/schema#',
            'title'       => 'Posts',
            'description' => 'List of posts with ids',
            'type'        => 'object',
            'items'       => [
                'type'       => 'object',
                'properties' => [
                    'title' => [
                        'description' => 'post title',
                        'type'        => 'string',
                    ],
                    'id' => [
                        'description' => 'post id',
                        'type'        => 'integer',
                    ],
                ],
            ],
        ];

        return $schema;
    }

    /**
     * Get List of posts.
     *
     * @param \WP_REST_Request $request
     *
     * @return void
     */
    public function getPostsList(\WP_REST_Request $request)
    {
        $order = $request['order'];
        $order_by = $request['order_by'];

        $args = [
            'author'         => get_current_user_id(),
            'orderby'        => $order_by,
            'order'          => $order,
            'posts_per_page' => -1,
            'post_status'    => ['publish', 'pending', 'draft', 'future'],

        ];
        $posts = get_posts($args);
        $response = $this->prepareResponse($posts);

        return $response;
    }

    /**
     * Prepare object of post titles.
     *
     * @param array $posts Array of WP_Post objects
     *
     * @return string json
     */
    protected function prepareResponse(array $posts)
    {
        $response = [];
        foreach ($posts as $post) {
            $response[] = [
                'id'    => $post->ID,
                'title' => $post->post_title,
            ];
        }

        return \json_encode($response);
    }
}
