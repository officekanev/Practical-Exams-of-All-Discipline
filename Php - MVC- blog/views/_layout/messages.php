<?php

if(isset($_SESSION['messages'])) {
    echo "<ul id='messages'>";
    $messages = $_SESSION['messages'];
    foreach ($messages as $msg) {
        $type = htmlentities($msg['type']);
        $msgText = htmlentities($msg['text']);
        echo "<li class='$type'>$msgText</li>";
    }
    echo "</ul>";
    unset($_SESSION['messages']);
}