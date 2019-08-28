<?php

namespace MyGallery\Traits;

/**
 * Get image urls and creates object.
 *
 * @author  Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license MIT
 */
trait Images
{
    /**
     * Creates object with image ids and urls.
     *
     * @param array        $imageIds array of image ids
     * @param string|array $size     size of images could be a string or array
     *
     * @return object
     */
    protected function createImageObject(array $imageIds, $size = 'thumbnail')
    {
        $image = [];
        foreach ($imageIds as $image_id) {
            $image_url = $this->getImageUrl((int) $image_id, $size);
            if ($image_url) {
                $image[] = (object) [
                    'id' => $image_id,
                    'url'=> $image_url,
                ];
            }
        }

        return $image;
    }

    /**
     * Get image url using wp_get_attachment_image_src() function.
     *
     * @param int          $id
     * @param string|array $size size of images could be a string or array
     *
     * @return object|bool
     */
    protected function getImageUrl(int $id, $size = 'thumbnail')
    {
        $image = [];
        if (gettype($size) == 'string') {
            $image_url = wp_get_attachment_image_src($id, $size);

            return $image_url[0];
        } elseif (gettype($size) == 'array') {
            foreach ($size as $size_name) {
                $image[$size_name] = wp_get_attachment_image_src($id, $size_name);
            }

            return (object) $image;
        }

        return false;
    }
}
