<?php
namespace MyGallery\Models;

use MyGallery\Exception\MyException;
use MyGallery\Factories\ShortcodeFactory;

/**
 * Operates with WP post content
 *
 * @package Models
 * @author  Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license MIT
 */

class PostModel
{

    protected $shortcode_pattern = "/(?<shortcodes>\[my\-gallery.*\])/i";
    protected $postId;
    protected $post;
    protected $postBody;
    protected $shortcodes;

    public function __construct(int $postId)
    {
        $this->postId = $postId;
        $this->init();
    }
    /**
     * Initialization
     *
     * @return void
     */
    protected function init()
    {
        $this->post = get_post($this->postId, 'OBJECT');
        if (is_null($this->post)) {
            throw new MyException(Error::text('NO_SUCH_POST'));
        }

        $this->postBody = $this->post->post_content;
        $this->shortcodes = $this->parseShortcodes();
    }
    /**
     * Getter for postId
     *
     * @return int
     */
    public function postId()
    {
        return $this->postId;
    }
    /**
     * Get array of shortcodes
     *
     * @param integer $index shortcode index in array
     * @return boolean|array|object
     */

    public function getShortcode(int $index = -1)
    {
        if (count($this->shortcodes) == 0) {
            return array();
        }

        if ($index == -1) {
            return $this->shortcodes;
        }

        return isset($this->shortcodes[$index]) ? $this->shortcodes[$index] : false;
    }
    /**
     * Parse shorcodes from post content.Not using  do_shortcode( $content ) because
     * it is not flexible no filters that allow to change regexp patterns.
     *
     *
     * @return array
     */
    protected function parseShortcodes()
    {
        if (!isset($this->postBody)) {
            return false;
        }

        preg_match_all($this->shortcode_pattern, $this->postBody, $matches);
        if (count($matches['shortcodes']) == 0) {
            return array();
        }
        $shortcodes = array();
        foreach ($matches['shortcodes'] as $item) {
            $shortcode_item = $this->getShotcodeModel($item)->toObject();
            $shortcode_item->postId = $this->postId;
            $shortcode_item->status = 'saved';
            $shortcodes[] = $shortcode_item;
        }
        return $shortcodes;
    }
    /**
     * Update post shortcodes
     *
     * @param array $shortcodes array of shortcodes object
     * @return integer post id
     */
    public function updatePostShortcodes(array $shortcodes)
    {
        preg_match_all($this->shortcode_pattern, $this->postBody, $matches);
        foreach ($shortcodes as $key => $shortcode) {
            switch ($shortcode->status) {
                case 'changed':
                    $this->postBody = str_replace($matches['shortcodes'][$key], $shortcode->code, $this->postBody);
                    break;
                case 'draft':
                    $this->postBody .= '<p>' . $shortcode->code . '</p>';
                    break;
                case 'deleted':
                    $this->postBody = str_replace($matches['shortcodes'][$key], '', $this->postBody);
                    break;
            }
        }
        return $this->updatePost();
    }
    /**
     * wp_update_post function facade
     *
     * @return integer|null
     */
    protected function updatePost()
    {
        $post_array = [
            'ID' => $this->postId,
            'post_content' => $this->postBody,
        ];
        return \wp_update_post($post_array);
    }
    /**
     * ShortcodeFactory facade
     *
     * @param string $code
     * @return void
     */
    protected function getShotcodeModel(string $code)
    {

        return ShortcodeFactory::get($code);
    }

}
