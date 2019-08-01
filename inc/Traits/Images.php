<?php
namespace MyGallery\Traits;
/**
 * Get image urls and creates object
 *
 * @package Models
 * @author  Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license MIT
 */
trait Images{
    /**
     * Creates object with image ids and urls
     *
     * @param array $imageIds array of image ids
     * @param string $size size of images could be a string or array
     * @return object
     */
    protected function createImageObject(array $imageIds,$size='thumbnail'){
        foreach($imageIds as $image_id){
            $image_url=$this->getImageUrl($image_id,$size);
            if($image_url){
                $image[]=(object)array(
                    'id'=>$image_id,
                    'url'=>$image_url
                );
                }
            }
        return $image;
    }
    /**
     * Get image url using wp_get_attachment_image_src() function 
     *
     * @param integer $id
     * @param string $size size of images could be a string or array
     * @return object|boolean
     */
    protected function getImageUrl(int $id,$size='thumbnail'){
        if(gettype($size)=='string'){
            $image_url=wp_get_attachment_image_src($id,$size);
            return $image_url[0];
        }else if(gettype($size)=='array'){
            foreach($size as $size_name){
                $image[$size_name]=wp_get_attachment_image_src($id,$size_name);
            }
            return (object)$image;
        }
         return false;
    }
}