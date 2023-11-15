<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    $myCompanyName = "Multichain Media";
    $myCompanyEmail = "shubhameglobal20@gmail.com";
    $myCompanyEmailPassword = "hnfyaqzhmvavxgcn";   
    $myPersonalEmail = "utkarshk495@gmail.com";

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';

    if(isset($_POST['sender_name']) && isset($_POST['sender_email'])) {

        $mail = new PHPMailer();

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $myCompanyEmail;
        $mail->Password = $myCompanyEmailPassword;
        $mail->Port = 465;
        $mail->SMTPSecure = 'ssl';
        

        $mail->setFrom($myCompanyEmail, $myCompanyName);
        $mail->addAddress($myPersonalEmail);
        $mail->addReplyTo($_POST['sender_email'], $_POST['sender_name']);

        $mail->isHTML(true);
        $mail->Subject = $_POST['sender_subject'];
        $clientdata = '<!DOCTYPE html>
						<html>
						<head>
						<style>
						table {
						  font-family: arial, sans-serif;
						  border-collapse: collapse;
						  width: 100%;
						}

						td, th {
						  border: 3px solid #dddddd;
						  text-align: left;
						  padding: 8px;
						}
						</style>
						</head>
						<body>

						<h2>A New Form Submitted</h2>

						<table>
                        <tr>
						    <td style="width:80px">Subject</td>
						    <td>'.$_POST["sender_subject"].'</td>
						  </tr>
						  <tr>
						    <td style="width:80px">Name</td>
						    <td>'.$_POST["sender_name"].'</td>
						  </tr>
						  <tr>
						    <td style="width:80px">Email</td>
						    <td>'.$_POST["sender_email"].'</td>
						  </tr>
                          <tr>
						    <td style="width:80px">Contact</td>
						    <td>'.$_POST["sender_phone"].'</td>
						  </tr>
						 
						  <tr>
						    <td style="width:80px">Messege</td>
						    <td>'.$_POST["message"].'</td>
						  </tr>
						</table>

						</body>
						</html>';
        $mail->Body = $clientdata;

        if($mail->send()){
        $status = "success";
        $response = "Email is sent!";
        }
	    else
	    {
	        $status = "failed";
	        $response = "Something is wrong: <br>" . $mail->ErrorInfo;
	    }
         exit(json_encode(array("status" => $status, "response" => $response)));
    } 

?>