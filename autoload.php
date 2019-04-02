<?php

function my_gallery_autoload($class)
{

    if (strpos($class, MYGALLERY_NAMESPACE) === false) {
        return;
    }

    $class_mod = str_replace(MYGALLERY_NAMESPACE . '\\', '', $class);
    $cl = str_replace('\\', '/', $class_mod);
    $path = __DIR__ . DIRECTORY_SEPARATOR . 'inc' . DIRECTORY_SEPARATOR . $cl . ".php";
    if (file_exists($path)) {
        include $path;
    }
}
//set_include_path(__DIR__);
spl_autoload_register("my_gallery_autoload");
