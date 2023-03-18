<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

if (isset($_POST['email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "kaneda804@gmail.com";
    $email_subject = "New form submissions";

    function problem($error)
    {
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br><br>";
        echo $error . "<br><br>";
        echo "Please go back and fix these errors.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['client_name']) ||
        !isset($_POST['age']) ||
        !isset($_POST['gender']) ||
        !isset($_POST['email'])||
        !isset($_POST['phone'])||
        !isset($_POST['timezone'])||
        !isset($_POST['r_est_type'])||
        !isset($_POST['location'])||
        !isset($_POST['ground_area'])||
        !isset($_POST['building_area'])||
        !isset($_POST['building_year'])||
        !isset($_POST['b_price'])||
        !isset($_POST['structure'])||
        !isset($_POST['relation'])||
        !isset($_POST['reason'])||
        !isset($_POST['when'])
    ) {
        problem('We are sorry, but there appears to be a problem with the form you submitted.');
    }

    $client_name = $_POST['client_name']; // required
    $age = $_POST['age']; // required
    $gender = $_POST['gender']; // required
    $email = $_POST['email']; // required
    $phone = $_POST['phone']; // required
    $timezone = $_POST['timezone']; // required
    $r_est_type = $_POST['r_est_type']; // required
    $location = $_POST['location']; // required
    $ground_area = $_POST['ground_area']; // required
    $building_area = $_POST['building_area']; // required
    $building_year = $_POST['building_year']; // required
    $b_price = $_POST['b_price']; // required
    $structure = $_POST['structure']; // required
    $relation = $_POST['relation'];
    $reason = $_POST['reason'];
    $when = $_POST['when'];

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'The Email address you entered does not appear to be valid.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "お名前: " . clean_string($client_name) . "\n";
    $email_message .= "年齢: " . clean_string($age) . "\n";
    $email_message .= "性別: " . clean_string($gender) . "\n";
    $email_message .= "メールアドレス？: " . clean_string($email) . "\n";
    $email_message .= "ご連絡先のお電話番号: " . clean_string($phone) . "\n";
    $email_message .= "連絡のつきやすい時間帯: " . clean_string($timezone) . "\n";
    $email_message .= "\n\n===========================================\n\n";
    $email_message .= "種別: " . clean_string($r_est_type) . "\n";
    $email_message .= "エリア（市区町村以下）: " . clean_string($location) . "\n";
    $email_message .= "土地面積: " . clean_string($ground_area) . "\n";
    $email_message .= "建物面積: " . clean_string($building_area) . "\n";
    $email_message .= "築年数: " . clean_string($building_year) . "\n";
    $email_message .= "家賃収入: " . clean_string($b_price) . "\n";
    $email_message .= "構造: " . clean_string($structure) . "\n";
    $email_message .= " 物件とのご関係: " . clean_string($relation) . "\n";
    $email_message .= "依頼理由: " . clean_string($reason) . "\n";
    $email_message .= "売却時期: " . clean_string($when) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
}
?>
