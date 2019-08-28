<?php

namespace MyGallery\Factories;

use MyGallery\Models\PostModel;

/**
 * Factory class creates instance of PostModel class.
 *
 *  *
 *
 * @author   Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license  MIT
 */
class PostFactory
{
    /**
     * Getter for creating new instance.
     *
     * @param int $postId
     *
     * @return object [PostModel]
     */
    public static function get($postId)
    {
        return new PostModel($postId);
    }
}
