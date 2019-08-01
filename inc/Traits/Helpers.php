<?php
namespace MyGallery\Traits;

/**
 * Misc helpers function s
 *
 * @package Models
 * @author  Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license MIT
 */
trait Helpers
{
    /**
     * Convert boolean to string
     *
     * @param boolean $var
     * @return string
     */
    protected function boolToString(bool $var)
    {
        return $var ? 'true' : 'false';
    }
    /**
     * remove square brackets
     *
     * @param string $text
     * @return string
     */
    protected function removeBrackets(string $text)
    {
        $left_bracket = '\x5b';
        $right_bracket = '\x5d';
        $pattern = '/(' . $left_bracket . ')*(' . $right_bracket . ')*/i';
        return preg_replace($pattern, '', $text);
    }
    /**
     * Remove symbols that confused regexp functions
     *
     * @param string $text
     * @return void
     */
    protected function removeProblemSymbols(string $text)
    {
        $pattern = '/(&quot;)/i';
        return \preg_replace($pattern, '', $text);
    }
}
