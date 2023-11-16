<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    $myCompanyName = "AirBrick Infra";
    $myCompanyEmail = "shubhameglobal20@gmail.com";
    $myCompanyEmailPassword = "hnfyaqzhmvavxgcn";   
    $myPersonalEmail = "utkarshk495@gmail.com";

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';

    if(isset($_POST['lead_name']) && isset($_POST['lead_email'])) {

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
        $mail->addReplyTo($_POST['lead_email'], $_POST['lead_name']);

        $mail->isHTML(true);
        $mail->Subject = "A New Lead Form Submitted";
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

						<h2>A New Lead Form Submitted</h2>

						<table>
						  <tr>
						    <td style="width:80px">Name</td>
						    <td>'.$_POST["lead_name"].'</td>
						  </tr>
						  <tr>
						    <td style="width:80px">Email</td>
						    <td>'.$_POST["lead_email"].'</td>
						  </tr>
                          <tr>
						    <td style="width:80px">Contact</td>
						    <td>'.$_POST["lead_phone"].'</td>
						  </tr>
						  <tr>
						    <td style="width:80px">Budget</td>
						    <td>'.$_POST["lead_budget"].'</td>
						  </tr>
						  <tr>
						    <td style="width:80px">Size</td>
						    <td>'.$_POST["lead_size"].'</td>
						  </tr>
                          <tr>
						    <td style="width:80px">Location</td>
						    <td>'.$_POST["lead_location"].'</td>
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


	elseif(isset($_POST['contact_name']) && isset($_POST['contact_email'])) {

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
        $mail->addReplyTo($_POST['contact_email'], $_POST['contact_name']);

        $mail->isHTML(true);
        $mail->Subject = "A New Contact Form Submitted";
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

						<h2>A New Contact Form Submitted</h2>

						<table>
						  <tr>
						    <td style="width:80px">Name</td>
						    <td>'.$_POST["contact_name"].'</td>
						  </tr>
						  <tr>
						    <td style="width:80px">Email</td>
						    <td>'.$_POST["contact_email"].'</td>
						  </tr>
                          <tr>
						    <td style="width:80px">Contact</td>
						    <td>'.$_POST["contact_phone"].'</td>
						  </tr>
						  <tr>
						    <td style="width:80px">Messege</td>
						    <td>'.$_POST["contact_msg"].'</td>
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