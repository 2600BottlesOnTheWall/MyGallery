<?php
namespace MyGallery\Factories;

use MyGallery\Models\PostModel;

/**
 * Factory class creates instance of PostModel class
 *
 *  *
 * @package  Factories
 * @author   Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license  MIT
 */

class PostFactory
{

    /**
     * Getter for creating new instance.
     *
     * @param integer $postId Id of post.
     * @return PostModel
     */

    public static function get($postId){
        return new PostModel($postId);
    }
}
