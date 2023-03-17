<?php
if (isset($_POST['email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "contact@mikata-inc.co.jp";
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
        !isset($_POST['cname']) ||
        !isset($_POST['phone']) ||
        !isset($_POST['pname']) ||
        !isset($_POST['msg'])
    ) {
        problem('We are sorry, but there appears to be a problem with the form you submitted.');
    }

    $cname = $_POST['cname']; // required
    $phone = $_POST['phone']; // required
    $pname = $_POST['pname']; // required
    $email = $_POST['email']; // required
    $msg = $_POST['msg']; // required
    $pcode = $_POST['pcode'];
    $addr = $_POST['addr'];

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'The Email address you entered does not appear to be valid.<br>';
    }

    if (strlen($msg) < 2) {
        $error_message .= 'The Message you entered do not appear to be valid.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "会社名: " . clean_string($cname) . "\n";
    $email_message .= "郵便番号: " . clean_string($pcode) . "\n";
    $email_message .= "住所: " . clean_string($addr) . "\n";
    $email_message .= "電話番号: " . clean_string($phone) . "\n";
    $email_message .= "ご担当者様名: " . clean_string($pname) . "\n";
    $email_message .= "メールアドレス: " . clean_string($email) . "\n";
    $email_message .= "お問い合わせ内容: " . clean_string($msg) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

    <!-- include your success message below -->

    <link rel="stylesheet" href="./assets/css/contact-form.css">

    <p class="desc">お問い合わせ有り難う御座いました。担当者より追ってご連絡させていただきますので、今しばらくお待ちくださいませ。</p>
    <p class="btn-box"><a class="link-return" href="https://mikata-inc.co.jp/laborious/">戻る</a></p>

<?php
}
?>