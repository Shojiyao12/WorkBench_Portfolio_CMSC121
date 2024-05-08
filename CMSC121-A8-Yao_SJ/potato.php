<?php
$filename = 'potato.txt';

$visitorName = isset($_COOKIE['visitorName']) ? $_COOKIE['visitorName'] : 'Anonymous';

$visitorFilename = 'potato_' . md5($visitorName) . '.txt';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $accessories = isset($_COOKIE['accessories']) ? $_COOKIE['accessories'] : '';

    if (!empty($accessories)) {
        file_put_contents($visitorFilename, $accessories);
        echo 'Data saved successfully.';
    } else {
        echo 'No data to save.';
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($visitorFilename)) {
        $accessories = file_get_contents($visitorFilename);
        echo $accessories;
    } else {
        file_put_contents($visitorFilename, '');
        echo '';
    }
} else {
    echo 'Unsupported request method.';
}
?>
