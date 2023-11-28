<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/vendor/autoload.php';

// Function to sanitize user input
function sanitize_input($input) {
    return htmlspecialchars(stripslashes(trim($input)));
}

if(isset($_POST['contact_name']) && isset($_POST['contact_email'])) {
// Assuming your HTML form has fields named 'name', 'email', and 'message'
$user_name = sanitize_input($_POST['contact_name']);
$user_email = sanitize_input($_POST['contact_email']);
$user_phone = sanitize_input($_POST['contact_phone']);
$user_msg = sanitize_input($_POST['contact_msg']);

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'mailer@airbrickinfra.com';
        $mail->Password   = 'jzrerosdljxldqiq';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

         // Set the 'From' and 'Reply-To' addresses
        $mail->setFrom('mailer@airbrickinfra.com', 'Airbrick Infra');
        $mail->addReplyTo('mailer@airbrickinfra.com', 'Airbrick Infra');

        // Recipient (user)
        $mail->addAddress($user_email, $user_name);

        // Email content for user
        $mail->isHTML(true);
        $mail->Subject = 'Greetings from AirBrick !!';
        $htmlUserBody = '<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<title>Email Confirmation</title>
</head>
<body>
	<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921nl2go-body-table" role="presentation" style="background-color:#ffffff;width:100%" width="100%">
		<tbody>
			<tr>
				<td>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r0-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
						<tbody>
							<tr>
								<td valign="top">
									<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r2-o" role="presentation" style="table-layout:fixed;width:600px" width="600">
										<tbody>
											<tr>
												<td class="m_4750760328253690921r3-i" style="padding-top:20px">
													<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
														<tbody>
															<tr>
																<th class="m_4750760328253690921r4-c" style="font-weight:normal" valign="top" width="100%">
																	<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r5-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
																		<tbody>
																			<tr>
																				<td class="m_4750760328253690921r6-i" style="padding-left:15px;padding-right:15px" valign="top">
																					<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
																						<tbody>
																							<tr>
																								<td align="center" class="m_4750760328253690921r7-c">
																									<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r8-o" role="presentation" style="table-layout:fixed;width:359px" width="359">
																										<tbody>
																											<tr>
																												<td class="m_4750760328253690921r9-i" style="font-size:0px;line-height:0px;padding-bottom:15px;padding-top:15px"><img border="0" class="CToWUd" data-bit="iit" src="https://ci6.googleusercontent.com/proxy/Zf8kWiSWqvkK9F8IRNGqPuptBHKwG5J5QYLj7iZN86iNCMaGl4BvmYSZuzDEp88N7WfulN0mnx0nMmXMLyU5QvrB1upbI6cB0RPcL10NonlAl2WmOOn099GKRyp5atbVGWaFqddX4UHZKJQ7rZ1GHLtLjw2hUBPNL1I0Cy1JHItxap4rHfDVEZkOTrQvq1nJqfUHcPg1CthrDv3flqF1zZ-r-NC2Dj__pHLDP0RzgSK0gSpy_9cnm8Hy-9K7tLxOFTlmSahVvN7QDAJWmK0Df5yLNclYrnl-gvQvMgIZb7QpyROO0LL9OjhfTTUvFPgAvoowVA_mlkd5L4eoj3y5cDqBFEW1gEtS7LVDqWizajZ2pTscFjwxXxL2bF17oz6tNa2hwq-DtMnzHK3qR3vvbtgjJEuCAjYdim4DU1ebzd3QAI18Sxi8QbB__rFJCma81bwpsENBKExkgxanyjwfSx7h4uyB3PC7HNlLGkCpedMXmWzEuPkQ8ybRPwcRcfqB7HmrTKF8gQfJYzVUMjOX7ANyJ3tzjQ8hhDZMkICPxyfsVOUvmQuwBA6YDndOXz-Dhz0STbtAHSmkNdzpJUVY0N116DdcSERrw37L9_8=s0-d-e1-ft#https://ghachia.r.af.d.sendibt2.com/im/6702780/5720d1657c5601e6716f3747a899780f6b711725557602a468db167be4ab6e14.jpg?e=PxHi9QWOCckN-eKfYJaGIMLNaDcvTLMCjvvZlHNfH8-npG2EZiL9gJ9-KtyE952NtehKXEy0W_Cx89PbUdUYwBYR27MJHvuY3scFbJSjV-B_lfWoTukLZvmyWTVO1PbHFSJxbOZzT5vXJCwex55ZbeumXqAe6IB2ITScsr-tbrxO7kjAofh1i96yqI7VItUdxZRu5dnZqbCegNpkOfaKtM_K_IQGDV9y4ynP4deRBGO9AriI0evcz28iENzdZecmWz_vNGMlzc5YmlLIbbnLPALBoLe0499buEsnjwaYod6WMHPiCLv8RG42Y_U9bv3jZds" style="display:block;width:100%" width="359"></td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																						</tbody>
																					</table>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</th>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r0-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
						<tbody>
							<tr>
								<td valign="top">
									<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r2-o" role="presentation" style="table-layout:fixed;width:600px" width="600">
										<tbody>
											<tr>
												<td class="m_4750760328253690921r10-i" style="padding-bottom:20px">
													<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
														<tbody>
															<tr>
																<th class="m_4750760328253690921r4-c" style="font-weight:normal" valign="top" width="100%">
																	<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r5-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
																		<tbody>
																			<tr>
																				<td class="m_4750760328253690921r6-i" style="padding-left:10px;padding-right:10px" valign="top">
																					<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
																						<tbody>
																							<tr>
																								<td align="left" class="m_4750760328253690921r11-c">
																									<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r12-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
																										<tbody>
																											<tr>
																												<td align="left" class="m_4750760328253690921r13-i m_4750760328253690921nl2go-default-textstyle" style="color:#3b3f44;font-family:arial,helvetica,sans-serif;font-size:16px;line-height:1.5;word-break:break-word;padding-bottom:15px;padding-top:15px;text-align:left;word-wrap:break-word" valign="top">
																													<div>
																														<p style="margin:0"><span style="font-family:Palatino,"Palatino Linotype","Palatino LT STD","Book Antiqua",Georgia,serif">Hi&nbsp;'. $user_name .'</span></p>
																														<p style="margin:0">&nbsp;</p>
																														<p style="margin:0"><span style="font-family:Palatino,"Palatino Linotype","Palatino LT STD","Book Antiqua",Georgia,serif">Trust you are doing good !</span></p>
																														<p style="margin:0">&nbsp;</p>
																														<p style="margin:0"><span style="font-family:Palatino,"Palatino Linotype","Palatino LT STD","Book Antiqua",Georgia,serif">Thanks for visiting our website and showing interest in our services, we are very happy to introduce you to AirBrick- A Tech Driven Interior Design &amp; Build company.</span></p>
																														<p style="margin:0">&nbsp;</p>
																														<p style="margin:0"><span style="font-family:Palatino,"Palatino Linotype","Palatino LT STD","Book Antiqua",Georgia,serif">With over 30+ years of collective experience in the industry, we have built a reputation for delivering exceptional interior design services that exceeds our clients" expectations. Our expertise ranges from Interior Design &amp; Space planning to Project Management &amp; construction, making us your one-stop-shop for all Interior design needs&nbsp;</span></p>
																														<p style="margin:0"><br>
																														<span style="font-family:Palatino,"Palatino Linotype","Palatino LT STD","Book Antiqua",Georgia,serif">Our team is dedicated to providing high-quality Commercial, Retail &amp; Residential Interior Design services that are tailored to your specific needs and preferences.</span></p>
																														<p style="margin:0"><span style="font-family:Palatino,"Palatino Linotype","Palatino LT STD","Book Antiqua",Georgia,serif">Be it an OfficeSpace, CoWorking, Retail outlet or Residence, we are one stop highly technology Driven interior organisation committed to delivering high-quality workmanship, using only the best materials and products to ensure that your space not only looks great but also stands the test of time. We pride ourselves on our attention to detail and our ability to stay on time and within budget.</span></p>
																														<p style="margin:0">&nbsp;</p>
																														<p style="margin:0"><span style="font-family:Palatino,"Palatino Linotype","Palatino LT STD","Book Antiqua",Georgia,serif">Our business rep, Ms Garima (copied in this email), will be reaching out to you within&nbsp;12&nbsp;hours. You can reach out to her directly as well on : <a href="mailto:garima.jain@airbrickinfra.com" target="_blank">garima.jain@airbrickinfra.com</a></span></p>
																														<p style="margin:0">&nbsp;</p>
																														<p style="margin:0"><span style="font-family:Palatino,"Palatino Linotype","Palatino LT STD","Book Antiqua",Georgia,serif">Until then, we"re happy to share our company deck. Please click the button below to view&nbsp;&amp;&nbsp;download.</span></p>
																													</div>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																							<tr>
																								<td align="left" class="m_4750760328253690921r11-c">
																									<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r14-o" role="presentation" style="table-layout:fixed;width:174px" width="174">
																										<tbody>
																											<tr class="m_4750760328253690921nl2go-responsive-hide">
																												<td height="15" style="font-size:15px;line-height:15px"></td>
																											</tr>
																											<tr>
																												<td align="center" class="m_4750760328253690921r15-i m_4750760328253690921nl2go-default-textstyle" height="18" style="color:#3b3f44;font-family:arial,helvetica,sans-serif;font-size:16px;line-height:1.5;word-break:break-word" valign="top">
																													<a class="m_4750760328253690921r16-r m_4750760328253690921default-button" data-saferedirecturl="https://www.google.com/url?q=https://ghachia.r.af.d.sendibt2.com/tr/cl/_4afgmNCEU0TzuTnaFHSNF1iZCVilHntcsDElgS_rW9CDn1ajUfC-Ii24re-egCBBH514qS-7fc_0baszBRQg7gEfVffVt97HkXmHyzqffpYj-IDSV5XUQIathNbvpenDJqJmKMPds7228bGjo0UjjIQA3HIzb8cEbyTTiVSp7YKci1V_xPLseV9gBBUsaljOfMqFSv9Q5LuVLw5Ta-ejdPFrQPzWb6l2fTVZNuwAIDf3HM6w_ZrUzhVtkC6wGqQH0rkzqcJUVaxlw7fzvAWvj5qF_h3bEQafSj3O9zhhBv5wQmUwfBubZuglZElucbnt93zBXNPNA27HCwarhQBSXVCuuWWbccURxm-5VACAJiAV5-op9a-_KjQxUQyaN5Qtj792Ex9_tGb_0VqUlXKBfCmbTx6FML2R0Hf8oVmldn_nfEOjmHTcOZdmQDA9XUjaVqxmmaVbd4QgAJZeR0K&amp;source=gmail&amp;ust=1700982185908000&amp;usg=AOvVaw2tDznx_nHhRZKIbag8c9KW" href="https://ghachia.r.af.d.sendibt2.com/tr/cl/_4afgmNCEU0TzuTnaFHSNF1iZCVilHntcsDElgS_rW9CDn1ajUfC-Ii24re-egCBBH514qS-7fc_0baszBRQg7gEfVffVt97HkXmHyzqffpYj-IDSV5XUQIathNbvpenDJqJmKMPds7228bGjo0UjjIQA3HIzb8cEbyTTiVSp7YKci1V_xPLseV9gBBUsaljOfMqFSv9Q5LuVLw5Ta-ejdPFrQPzWb6l2fTVZNuwAIDf3HM6w_ZrUzhVtkC6wGqQH0rkzqcJUVaxlw7fzvAWvj5qF_h3bEQafSj3O9zhhBv5wQmUwfBubZuglZElucbnt93zBXNPNA27HCwarhQBSXVCuuWWbccURxm-5VACAJiAV5-op9a-_KjQxUQyaN5Qtj792Ex9_tGb_0VqUlXKBfCmbTx6FML2R0Hf8oVmldn_nfEOjmHTcOZdmQDA9XUjaVqxmmaVbd4QgAJZeR0K" style="font-style:normal;font-weight:normal;line-height:1.15;text-decoration:none;word-break:break-word;border-style:solid;word-wrap:break-word;display:block;background-color:#1b1b1b;border-color:#1b1b1b;border-radius:13px;border-width:0px;color:#ffffff;font-family:arial,helvetica,sans-serif;font-size:16px;height:18px;padding-bottom:12px;padding-top:12px;width:174px" target="_blank"><span style="direction:rtl">Company Deck</span></a>
																												</td>
																											</tr>
																											<tr class="m_4750760328253690921nl2go-responsive-hide">
																												<td height="15" style="font-size:15px;line-height:15px"></td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																							<tr>
																								<td align="left" class="m_4750760328253690921r11-c">
																									<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r12-o" role="presentation" style="table-layout:fixed;width:88%" width="88%">
																										<tbody>
																											<tr>
																												<td align="left" class="m_4750760328253690921r13-i m_4750760328253690921nl2go-default-textstyle" style="color:#3b3f44;font-family:arial,helvetica,sans-serif;font-size:16px;line-height:1.5;word-break:break-word;padding-bottom:15px;padding-top:15px;text-align:left" valign="top">
																													<div>
																														<p style="margin:0"><strong>Website</strong> - &nbsp; &nbsp;&nbsp;<a data-saferedirecturl="https://www.google.com/url?q=https://ghachia.r.af.d.sendibt2.com/tr/cl/w5UJjSUWjJFIuZqqI20dFazZ9aIXjUolDfL3JdW0wA8WryaKU3wVcKQ0beixEuOZMKFdeKltjoDufrxKrAduzl-LRWzbRfCcp6K86HGHHzeyciG_gOBcHbGRGkb9hDW0iF0f0W6bIAktpnzG5SxViAAFe7HWPk3c5ZkgNLL_LrG3wQWwdP-ybZg6g0SYa7eB-8XjAcVb7RmEE1VHmOFawTKiFs2S3WQf3p6BfZfMYOC-NOhjIQzRMXWZAFfqsyYGOQOEA0SE5C2vFpAbZih4KfaQz3Zyty8RkPZEC7O7dMPfXISnRR32iaHqy35mNf2m2JqXbjAf8NzRh37eb5V9s7waAyaMMbz_nZIQ3MMCOY-Nu67uihweuQUom5T0&amp;source=gmail&amp;ust=1700982185908000&amp;usg=AOvVaw3iKxS-Ig0ac1feMTAnslPa" href="https://ghachia.r.af.d.sendibt2.com/tr/cl/w5UJjSUWjJFIuZqqI20dFazZ9aIXjUolDfL3JdW0wA8WryaKU3wVcKQ0beixEuOZMKFdeKltjoDufrxKrAduzl-LRWzbRfCcp6K86HGHHzeyciG_gOBcHbGRGkb9hDW0iF0f0W6bIAktpnzG5SxViAAFe7HWPk3c5ZkgNLL_LrG3wQWwdP-ybZg6g0SYa7eB-8XjAcVb7RmEE1VHmOFawTKiFs2S3WQf3p6BfZfMYOC-NOhjIQzRMXWZAFfqsyYGOQOEA0SE5C2vFpAbZih4KfaQz3Zyty8RkPZEC7O7dMPfXISnRR32iaHqy35mNf2m2JqXbjAf8NzRh37eb5V9s7waAyaMMbz_nZIQ3MMCOY-Nu67uihweuQUom5T0" style="color:#696969;text-decoration:underline" target="_blank">https://airbrickinfra.com/</a>&nbsp;<br>
																														<strong>LinkedIn</strong>- &nbsp; &nbsp;&nbsp;<a data-saferedirecturl="https://www.google.com/url?q=https://ghachia.r.af.d.sendibt2.com/tr/cl/e9N6fVptcLF7gmn0dyZunj2nLdfn0pZQjbRNZiQvoWrldrZ1aMxspPbMJlemF4SESkBTG2Yz6zJH9Oblnzt9v56uJC-zPDhSyW8smPkGYM1QYUpwPmOK7zqV8HdpsGpt3OsDiiubPWMR0Q8YSCh45decWObikmDzRimXCTOdMgfdhNB0TkEGBb67B_u00OlNe2hByn4EitmBxhS-EaWia8mBkQ3d2unTkCmyZcRhe29IioZZWZWwQzDSp1NfuhRBOUXHiZ1zsVjYlZ2WwOX2RfhekfC2R6RN4Liu-2oQM0lrKrm2Mg6bZlJFtJPi_3UkvP2kzoFdtLpSFhUUFkLmAPh2iHmgKUXEyNxptOmRKAOFVmiLu3tbqC1HB8iqbnOLFICjzT0S5P8_2He-cEOmN3UujILV8TU&amp;source=gmail&amp;ust=1700982185908000&amp;usg=AOvVaw3V9hFHwUgOwvAdxdWWnobF" href="https://ghachia.r.af.d.sendibt2.com/tr/cl/e9N6fVptcLF7gmn0dyZunj2nLdfn0pZQjbRNZiQvoWrldrZ1aMxspPbMJlemF4SESkBTG2Yz6zJH9Oblnzt9v56uJC-zPDhSyW8smPkGYM1QYUpwPmOK7zqV8HdpsGpt3OsDiiubPWMR0Q8YSCh45decWObikmDzRimXCTOdMgfdhNB0TkEGBb67B_u00OlNe2hByn4EitmBxhS-EaWia8mBkQ3d2unTkCmyZcRhe29IioZZWZWwQzDSp1NfuhRBOUXHiZ1zsVjYlZ2WwOX2RfhekfC2R6RN4Liu-2oQM0lrKrm2Mg6bZlJFtJPi_3UkvP2kzoFdtLpSFhUUFkLmAPh2iHmgKUXEyNxptOmRKAOFVmiLu3tbqC1HB8iqbnOLFICjzT0S5P8_2He-cEOmN3UujILV8TU" style="color:#696969;text-decoration:underline" target="_blank">https://www.linkedin.com/<wbr>company/airbrick-infra/</a>&nbsp;<br>
																														<strong>Instagram</strong> - &nbsp;<a data-saferedirecturl="https://www.google.com/url?q=https://ghachia.r.af.d.sendibt2.com/tr/cl/y5RtqfT0dlDRA8pWQ169l1Y4no7lIaxOF4Wo7Asraqm1-S0tbZ-p1ksi2ZQdRF2O5cbNua9RU_t_jSMm4QewpgLh2mC36WN73sOjKVwpaRyDtU-k3VvxqtL0pj04SfKF6fWQvusbb1zaNFWftEqa5fNGIY0O6OO-B9drpa9tO4D-BEWq-sgkUkM6x7AxZpFPk7bFEMH5a0kE_7FFce7WxgkJLohzkCHQp14F9B3JsP3h5nVSGgBJdLBGSL13C97ZNuUycGsBhGVKADQG_cQ3NEP1WOsun95f89W0fYq6DvuFdTjJmL3zER7EZ8IQfZrgH4L8tjSauxz-Tc2e7IjbTdKJ7ZTSyGQ23gkfW27gynBECRnc4fAssgBacwB1FxNwNcq_Fusb4SMTIlMIOHJknA&amp;source=gmail&amp;ust=1700982185908000&amp;usg=AOvVaw3055QGixB3l-EO24bYDIqS" href="https://ghachia.r.af.d.sendibt2.com/tr/cl/y5RtqfT0dlDRA8pWQ169l1Y4no7lIaxOF4Wo7Asraqm1-S0tbZ-p1ksi2ZQdRF2O5cbNua9RU_t_jSMm4QewpgLh2mC36WN73sOjKVwpaRyDtU-k3VvxqtL0pj04SfKF6fWQvusbb1zaNFWftEqa5fNGIY0O6OO-B9drpa9tO4D-BEWq-sgkUkM6x7AxZpFPk7bFEMH5a0kE_7FFce7WxgkJLohzkCHQp14F9B3JsP3h5nVSGgBJdLBGSL13C97ZNuUycGsBhGVKADQG_cQ3NEP1WOsun95f89W0fYq6DvuFdTjJmL3zER7EZ8IQfZrgH4L8tjSauxz-Tc2e7IjbTdKJ7ZTSyGQ23gkfW27gynBECRnc4fAssgBacwB1FxNwNcq_Fusb4SMTIlMIOHJknA" style="color:#696969;text-decoration:underline" target="_blank">https://www.instagram.com/<wbr>airbrickofficial</a></p>
																													</div>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																						</tbody>
																					</table>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</th>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r2-o" role="presentation" style="table-layout:fixed;width:600px" width="600">
						<tbody>
							<tr>
								<td class="m_4750760328253690921r17-i" style="background-color:#ffffff" valign="top">
									<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r0-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
										<tbody>
											<tr>
												<td class="m_4750760328253690921r18-i" style="padding-bottom:20px;padding-top:20px">
													<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
														<tbody>
															<tr>
																<th class="m_4750760328253690921r4-c" style="font-weight:normal" valign="top" width="100%">
																	<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r5-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
																		<tbody>
																			<tr>
																				<td class="m_4750760328253690921r6-i" style="padding-left:15px;padding-right:15px" valign="top">
																					<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
																						<tbody>
																							<tr>
																								<td align="center" class="m_4750760328253690921r7-c">
																									<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r0-o" role="presentation" style="table-layout:fixed;width:570px" width="570">
																										<tbody>
																											<tr>
																												<td class="m_4750760328253690921r19-i" style="font-size:0px;line-height:0px;padding-bottom:15px;padding-top:15px">
																													<img border="0" class="CToWUd a6T" data-bit="iit" src="https://ci3.googleusercontent.com/proxy/1f0rNyzjGHRfeuCPxapX0dPhYmJa9cBbPWyJGnqSYGb5YHPdqGZpEeMMszRVEZ9xYiPK4-L8Dckb3PYKuxR6sPpUcmNd2VBQKqaFImk15vytkxfQLR95buMgCWrLUQP_wU71i9mwrbEwFS4_mqldclP5indnEYoBYkk1mJ4syF3dIdgMF5tiDzNGb6QbBYpH5ZsgO_fSE0M-EJaI93_2IUWhyrRiSJ-Wy2w84h6NhWFNYiuWR2l9RbzpE4QLM-XcaErRFEgPHV0jNhvGIqlAOusoh5ZTHN-oV4uL4e0ypHtf6gfUWFlbobzdX3WdouEWtOxBmeDjEf9Z8Rwk3mtsQEEZVTIudHX-u5i-QHY6MzBAiSOUYMwnAFu1bpb7Rdy2-u6wseaq8aOzjqE0oh9dmPhqt8Ecyn19CDaB4vCpBzyzPNrdmS2XicAwWJUygNWzOX5g0gWp2yglbvmB8uUr8Wxq2-36ErdE6US6grd2rfTu4zLAXPi5eotrdvirEYn6QrMhCr4HuwrEZlIB6hLxBPDrUlHtwYO_EQGlxpl5tHg22dHZmmho7peXOb-WH9fETX5MmdiSPIHhVSsJLvg6NxLWFYjWN_8WwK1FmFk=s0-d-e1-ft#https://ghachia.r.af.d.sendibt2.com/im/6702780/0b2bcfa412be9fc9d11e867d676e17eeab13a96be4ae2f35f117ff9b55fd9113.jpg?e=iUNE5Y0T0pWkLIcCrhWlcidRJIZBpTUjwsS7o7-wkvL6ZCAC0s2djqjKecVV4IRrHrPv-PTGz971Wou9XMd8A0-ZbtJvRSjuHsILYcxgAJzdpUJyBndsRQrCYA-V-7y6a8mN4GqH2ZtEq65jPBmR6Y6nj8QsQUKUBEXJ_-m3EEfz7JBHY_RsDG9Qpgkb3FEI_Ewa69VaAECQsma5RfhdYGtuH4kopWqQJvsUzNt1QZajkpaQvGAOcAsHEwT-Dlp8Aa3i6K5TqMwgR5hMp6smSEsOSibxHHAH7MLFSdMNqmoYp9EBpp7HbRImALfVUteXLCI" style="display:block;width:100%" tabindex="0" width="570">
																													<div class="a6S" dir="ltr" style="opacity: 0.01; left: 819.99px; top: 1537.58px;">
																														<div aria-label="Download attachment" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" data-tooltip-class="a1V" id=":no" role="button" tabindex="0" title="Download">
																															<div class="akn">
																																<div class="aSK J-J5-Ji aYr"></div>
																															</div>
																														</div>
																													</div>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																						</tbody>
																					</table>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</th>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r0-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
						<tbody>
							<tr>
								<td class="m_4750760328253690921r20-i" style="background-color:#eff7f3" valign="top">
									<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r2-o" role="presentation" style="table-layout:fixed;width:600px" width="600">
										<tbody>
											<tr>
												<td class="m_4750760328253690921r18-i" style="padding-bottom:20px;padding-top:20px">
													<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
														<tbody>
															<tr>
																<th class="m_4750760328253690921r4-c" style="font-weight:normal" valign="top" width="100%">
																	<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r5-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
																		<tbody>
																			<tr>
																				<td class="m_4750760328253690921r6-i" style="padding-left:15px;padding-right:15px" valign="top">
																					<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
																						<tbody>
																							<tr>
																								<td align="left" class="m_4750760328253690921r11-c">
																									<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r21-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
																										<tbody>
																											<tr>
																												<td align="center" class="m_4750760328253690921r22-i m_4750760328253690921nl2go-default-textstyle" style="color:#3b3f44;font-family:arial,helvetica,sans-serif;word-break:break-word;font-size:18px;line-height:1.5;padding-top:15px;text-align:center" valign="top">
																													<div>
																														<p style="margin:0"><strong>AirBrick Infra</strong></p>
																													</div>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																							<tr>
																								<td align="left" class="m_4750760328253690921r11-c">
																									<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r21-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
																										<tbody>
																											<tr>
																												<td align="center" class="m_4750760328253690921r23-i m_4750760328253690921nl2go-default-textstyle" style="color:#3b3f44;font-family:arial,helvetica,sans-serif;word-break:break-word;font-size:18px;line-height:1.5;text-align:center" valign="top">
																													<div>
																														<p style="margin:0;font-size:14px">Business Towers 3rd Floor -&nbsp;<br>
																														BPTP Centra One&nbsp;<br>
																														Golf Course Extension Road Sec 61<br>
																														Gurgaon, 120061</p>
																													</div>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																							<tr>
																								<td align="center" class="m_4750760328253690921r24-c">
																									<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r0-o" role="presentation" style="table-layout:fixed;width:570px" width="570">
																										<tbody>
																											<tr>
																												<td valign="top">
																													<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
																														<tbody>
																															<tr>
																																<td class="m_4750760328253690921r25-c" style="display:inline-block">
																																	<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r5-o" role="presentation" style="table-layout:fixed;width:570px" width="570">
																																		<tbody>
																																			<tr>
																																				<td class="m_4750760328253690921r26-i" style="padding-bottom:15px;padding-left:229px;padding-right:229px;padding-top:15px">
																																					<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
																																						<tbody>
																																							<tr>
																																								<th class="m_4750760328253690921r27-c m_4750760328253690921mobshow m_4750760328253690921resp-table" style="font-weight:normal" width="40">
																																									<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r28-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
																																										<tbody>
																																											<tr>
																																												<td class="m_4750760328253690921r29-i" style="font-size:0px;line-height:0px;padding-bottom:5px;padding-top:5px">
																																													<a data-saferedirecturl="https://www.google.com/url?q=https://ghachia.r.af.d.sendibt2.com/tr/cl/nbmwoXGZAtH9LQjpXXIoyK4FgH-PliPXxUmOtIOStH8Xx83Hyomw4Y8sq-58T91PW-R8yTLZoN5mhYO8fiS41XvOEPtZe3lPBLyQEU24N6GVGzLrusYHarWFHnBK1n9790WmOXxbhdxstPhkQDTCD8r-r_Y4XtJ9ll2gJpyLMBW5f1Fhvczbi1sNex_5KU7bO8SlwCv4cBJTz_xYJ3bnIzFyTmkdbLi4sfpEMFarVyRpHHQeyF0yJBA9sEpMzQwK0y6Yd-DS7Q2I2pJk9LEPngnuS6_5hz4Yvcg-_QOxS7dE8bHnGhRRfjg-VEwh4-8Z5tii2421IYfA7Kf3NXYKywgRQCxudVopQQjbtAlFLvnxLSIZoGteBzF9kCjzb5fLxnn6&amp;source=gmail&amp;ust=1700982185908000&amp;usg=AOvVaw0ZRPp9TT3J0RrdJL0uHueG" href="https://ghachia.r.af.d.sendibt2.com/tr/cl/nbmwoXGZAtH9LQjpXXIoyK4FgH-PliPXxUmOtIOStH8Xx83Hyomw4Y8sq-58T91PW-R8yTLZoN5mhYO8fiS41XvOEPtZe3lPBLyQEU24N6GVGzLrusYHarWFHnBK1n9790WmOXxbhdxstPhkQDTCD8r-r_Y4XtJ9ll2gJpyLMBW5f1Fhvczbi1sNex_5KU7bO8SlwCv4cBJTz_xYJ3bnIzFyTmkdbLi4sfpEMFarVyRpHHQeyF0yJBA9sEpMzQwK0y6Yd-DS7Q2I2pJk9LEPngnuS6_5hz4Yvcg-_QOxS7dE8bHnGhRRfjg-VEwh4-8Z5tii2421IYfA7Kf3NXYKywgRQCxudVopQQjbtAlFLvnxLSIZoGteBzF9kCjzb5fLxnn6" style="color:#696969;text-decoration:underline" target="_blank"><img border="0" class="CToWUd" data-bit="iit" src="https://ci6.googleusercontent.com/proxy/67DUioCGIxPa0GiqWMQIpjcK0FXnHDMUhuwNU2EG9dKpeHMxfc6auodi9cjwojTI-SF_DCfCLvVuCE712ypHfe7ffyLdrOSBsAL35Dhii81XhKRpswrMjtEoz7u--0MuVvqOV8x0LkBQUWfpJEcu38qJ7aApgwNY0-uoBukSYn1rO56kDLfgaVBdBj91ixDeapWckREM9huadbZ7jB-w7zbjTLfqFAVwaZSXYu7kjFUJ_3AlTI1UoujnQ7NWcW45KPZ7JBXyeaYEcVOeEukVh5OdwRCsOfZxYhaAIpNEexqLp2MKD4518nVOJNBtp7vckAxErkSbo9r92AZVux3qPjQuIjbw77f7729B1UDRbIpaTBH6NwhFYuRkCdpDx6WvRX6fnk0RD1rXX0VzsZdaEz4ABR11oLzK3OkQQahgbdQLSsMvBwUGliXQwdGRKEPFJFDKh1QXwTXJFaoIHwO_BDZffwlLIWzWkADrvOZqyEHrYvoFu771NHwCCYlLoj6XWUYmgrEQ6yBr7KmrpgNorRsC7JI2kA6uatrm6I--q-jaKBR7jeUjhKm0iz_hEr7NwonLqn_c1kBN4QgCkNb7RIkWop3jEQ=s0-d-e1-ft#https://ghachia.r.af.d.sendibt2.com/im/6702780/222244d31eb97bf87c97e39cfae167967c2db928fe79536e6baca38c96337154.png?e=zulvt4thrwBvj-0lGHnlJkkcY39TKz5MxQrIY8izSJko_mWUiMy4FqYAcbX3Oiy8b0s0s6P7cLsFeQzhnNeD1P8SyaM6A7h43I8xS1rzYphA1v60qYTz5AUtl7Cy6Ipw9PJnH9q8lR-Vx723mkClKKBY4yTPB1vAeuUFIa5bl8cERsvUGmf9fwcbkoSY2rQV7HKsOgPNOr4rqrzVMJPJf3xVnOW15teO93tzFEHgpft7IiglBGIH5GHisSIM6TvjbJayYqmf5IaVjLdfZSXQ5UT7kUUu9T5fvT8NHks-5WYaAFv93OAscWofcVmE" style="display:block;width:100%" width="32"></a>
																																												</td>
																																												<td class="m_4750760328253690921nl2go-responsive-hide" style="font-size:0px;line-height:1px" width="8"></td>
																																											</tr>
																																										</tbody>
																																									</table>
																																								</th>
																																								<th class="m_4750760328253690921r27-c m_4750760328253690921mobshow m_4750760328253690921resp-table" style="font-weight:normal" width="40">
																																									<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r28-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
																																										<tbody>
																																											<tr>
																																												<td class="m_4750760328253690921r29-i" style="font-size:0px;line-height:0px;padding-bottom:5px;padding-top:5px">
																																													<a data-saferedirecturl="https://www.google.com/url?q=https://ghachia.r.af.d.sendibt2.com/tr/cl/0YhvWf4pRcu8xsusEfVk1g7wmoZhqwTYrLj3KlqcFJ7_8h-neTufYdEIgTrec1wHZZgG_yURrFxQoasH50U4MmnQkUYrSgprSn4UKDn09MY_xf8FWif8EKsrkis6sHfCLW4ACftCamn_Ohxp7BZMRAH7K5s-QVAPmiAZloSBTPyMzWAZ5XvasXKZg6wpl7VrSMO5S-O4f5BLoG22YWI-H11kjaBRD5fFmG0dIwbcL_URfJJEMd5yOfGl_YpKyT6q0SDFxnwN7uaBZXS6nooK9LD7tsxnPODJeaR_z64J2gMWQKurxVm66ffJ2fADB9kTiHqNJngn77k_M55uZI9MfuOf96nZug6IAx9Hf2mmN7LTN7zCVu3B7oykfMegUCSex6y6bty0OHF__0bTLAFeHQ&amp;source=gmail&amp;ust=1700982185908000&amp;usg=AOvVaw3Xb_TJcYujNFXXZlS4Eafj" href="https://ghachia.r.af.d.sendibt2.com/tr/cl/0YhvWf4pRcu8xsusEfVk1g7wmoZhqwTYrLj3KlqcFJ7_8h-neTufYdEIgTrec1wHZZgG_yURrFxQoasH50U4MmnQkUYrSgprSn4UKDn09MY_xf8FWif8EKsrkis6sHfCLW4ACftCamn_Ohxp7BZMRAH7K5s-QVAPmiAZloSBTPyMzWAZ5XvasXKZg6wpl7VrSMO5S-O4f5BLoG22YWI-H11kjaBRD5fFmG0dIwbcL_URfJJEMd5yOfGl_YpKyT6q0SDFxnwN7uaBZXS6nooK9LD7tsxnPODJeaR_z64J2gMWQKurxVm66ffJ2fADB9kTiHqNJngn77k_M55uZI9MfuOf96nZug6IAx9Hf2mmN7LTN7zCVu3B7oykfMegUCSex6y6bty0OHF__0bTLAFeHQ" style="color:#696969;text-decoration:underline" target="_blank"><img border="0" class="CToWUd" data-bit="iit" src="https://ci6.googleusercontent.com/proxy/IV1cakxqQIXvO7DaEGisV8LIxNA6WJpQ5h6yMHTsra-DfV9XnDr57KRnNSIvuguscjE5VddlsBeNZhSe4CK4xgU4JHCbniqBXBOrL7CLjSepc-42ikkqlbwrUSC2-J92Cm6QIanoZsuo91-gURZKkXcjb4pWHDK0nyowmaE-fKZTQzxlfLCvqmmxfDFmxSa8MvE5vYJGLfZjjDkz92VVR570TrbCamLYqEX9VxBWnETGx0WtohIe7G9ukYXGXGF0XjNat85cJHsPkyGzBSe6lDt8iwHSI6O9SZytvbt1FvF-DDQqqO-sHHjzwUGKQfc_kAyKzRXbkSui_q8-jEojeYfWsFgWhzuXqzfqeZYT-r438fdbsfNI58ZK_hvhgzSklHD67SG98vkrJfmWO430-eTVXC4QUxm7zD5ka_jGyUeBo0oBePHEefYTcEe2kv0NiITEN4CdXV65iRn0MrroHeKJpp1_GRxwiZmr2OnSzSDCZlCw6ejBRYk8fo3dcsJrXSIs69Xlc7jRDhQz5hjbUvguSqqPsArwphqFWBbDI8hd1xFlhKB9cvKTf5cH4D-E7zzLX9EAvp2CGat00eIgcV5V1XcZLq-O=s0-d-e1-ft#https://ghachia.r.af.d.sendibt2.com/im/6702780/c2c25c4d2076c7f37112ced457f98550565bdfc92294241b91ec5dff5262f4ac.png?e=ED_Jt_lMPphRRr0nhYZ5GtV9Yd3D51lYhibi-Cj_HfhUcGO0og0cHMfmfr2bFtAocQllg5Qeun2ebgkw-QehP0yCT2uYIdCJwU-DdsnWrzZfn6C8Hv_2CDFF07Clw131T9vN04foWay1nz5fRT4bgbi7Ts9HnW1HU4Js4FOP6n1oDM2LcDze18OCBLzu3ublIOqH4iCPvNs1LalVlHSa58gckAZ_hbDFs5tSDppgg76-TRos0iS2eEcouw-Rtd3liNzL42jPlrHRfWXvX-GEiMVPIntmiHczfVUQ177dIA0ncIHc-kcE2iElc7FesA" style="display:block;width:100%" width="32"></a>
																																												</td>
																																												<td class="m_4750760328253690921nl2go-responsive-hide" style="font-size:0px;line-height:1px" width="8"></td>
																																											</tr>
																																										</tbody>
																																									</table>
																																								</th>
																																								<th class="m_4750760328253690921r27-c m_4750760328253690921mobshow m_4750760328253690921resp-table" style="font-weight:normal" width="32">
																																									<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r30-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
																																										<tbody>
																																											<tr>
																																												<td class="m_4750760328253690921r29-i" style="font-size:0px;line-height:0px;padding-bottom:5px;padding-top:5px">
																																													<a data-saferedirecturl="https://www.google.com/url?q=https://ghachia.r.af.d.sendibt2.com/tr/cl/A4QwPGGbLzeCDiXapF5zcBPunRGbRISsv5iuqzBv5Pf6bRS9aZQWHe8v3EdCDzJ7MfGic1DOh9RQtnocv5wuQ_VewHNkXeRrLtej39kpW_jL-6NOyHcfDlz-TixZy0FAuhTC0GW4keKMY826lzvCaS5tu1Ipg5SXi46eSAPfaPFNtg4qh2lJJLvyzxb6CyuuU1LVNj6-A8VSzykt7zTuFZ-pTug8aVQxgfDlcwi6uUPub0oEAoUa8NoF5ahbB-RQ_ziR-5SBjipWpo98Jj02KX_m1HmG2lDWyKKmqS6HoGE0OIlwhPNY-8vDHSxdPFt7gxc2ppUO3JMMP7O0zjhQhPn7h9C3djnKEpfgxrtiNTxuS5b9jZws4lXc3Dsy&amp;source=gmail&amp;ust=1700982185908000&amp;usg=AOvVaw3tNiJ0NpRpwA8qIzBDAmI7" href="https://ghachia.r.af.d.sendibt2.com/tr/cl/A4QwPGGbLzeCDiXapF5zcBPunRGbRISsv5iuqzBv5Pf6bRS9aZQWHe8v3EdCDzJ7MfGic1DOh9RQtnocv5wuQ_VewHNkXeRrLtej39kpW_jL-6NOyHcfDlz-TixZy0FAuhTC0GW4keKMY826lzvCaS5tu1Ipg5SXi46eSAPfaPFNtg4qh2lJJLvyzxb6CyuuU1LVNj6-A8VSzykt7zTuFZ-pTug8aVQxgfDlcwi6uUPub0oEAoUa8NoF5ahbB-RQ_ziR-5SBjipWpo98Jj02KX_m1HmG2lDWyKKmqS6HoGE0OIlwhPNY-8vDHSxdPFt7gxc2ppUO3JMMP7O0zjhQhPn7h9C3djnKEpfgxrtiNTxuS5b9jZws4lXc3Dsy" style="color:#696969;text-decoration:underline" target="_blank"><img border="0" class="CToWUd" data-bit="iit" src="https://ci4.googleusercontent.com/proxy/_DRYXrVoQ0fSg70WX0FCyr4bPX3C-zrGxii4c_z9K-dmclCklwqjg-YmI53EAl386H1w484N2jeTq0QjteJzvycWv_NB0tbgATfzPHXqEt2VVb09rFCf-C1N1y6DRPI4cXskWkHC6mSmYWd9cvwY3AGzwXeEEjhBscNp8j8yOcWBR6x1LufTs52lyFBXtGY4YgD7WM8adri500i_qca5mAJHdttEOQB_GWHRMhMamopEFlky0wUA0z1-_Azbn-4CN586T-7Rw45cQf68XjRO9igt17XRpj7kv68DiWPtXdU6EY-NOqRlJIqIDxTp1eURIidZ0Lfc1arm6FREn9sOim2xl_7eqkYZXeXzMwliZMSydwJUipG1v9TLRLJk0L2Qwh33qDtJKkTXulmC82Dal0ttxVtrDipRY4C_HI8DONTrf0J1ZNklXVpEoMZYqACSQYKLvLkgnGOcpIaVKRVsC-drmjDePu1qz-R1dLtH69KTSumpdaeeLQ0gMYqV-dylqw4sbpsAKbVWorcQCRqltCOIDnUnAm13uVvmnITFRV2KfFFL3LtYOVyKYnO_VU35Z6LfID0yIBmI_C9z1cnvQHNJq-gB=s0-d-e1-ft#https://ghachia.r.af.d.sendibt2.com/im/6702780/362c3ff4940f2ab2c65e4288c565eeccc94bc34c5e4b642e51e076d927c4a958.png?e=ALavpoKoJQ0DO0Ne0Vc0joQhHLc2TJOIWBqvDpELmpK2MX6ZyZKRKWv1vz1-awrsEWZ6yihlFjekZxCSPy43lERIB7R2FbJ9Eymj5SBQz1x-Ednvv-aqaW6MsW4VTzk092ZV6wc2LeAUSRnLwXVekjl8W4QbGUjeEoga62Zn5tv0qFeteQ171Gw2vscUmb7Xz_daUEC3Hxs-zg9zQ7bdbdcz4WLK_Us0Bj3Up8laBS_zp7b9ZFPsIM0qEhP1sjfv3FcASVFdnRlt-s3yiB6HetCReUYmXHi7bvc6fP-Cb_YwwTAdNuCri4Jer18" style="display:block;width:100%" width="32"></a>
																																												</td>
																																											</tr>
																																										</tbody>
																																									</table>
																																								</th>
																																							</tr>
																																						</tbody>
																																					</table>
																																				</td>
																																			</tr>
																																		</tbody>
																																	</table>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																							<tr>
																								<td align="left" class="m_4750760328253690921r11-c">
																									<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r21-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
																										<tbody>
																											<tr>
																												<td align="center" class="m_4750760328253690921r31-i m_4750760328253690921nl2go-default-textstyle" style="color:#3b3f44;font-family:arial,helvetica,sans-serif;word-break:break-word;font-size:18px;line-height:1.5;padding-bottom:15px;padding-top:15px;text-align:center" valign="top">
																													<div>
																														<p style="margin:0;font-size:14px"><a data-saferedirecturl="https://www.google.com/url?q=https://ghachia.r.af.d.sendibt2.com/tr/un/5_WN8z5SgqfrVkY8Sb3vDG80YDjmQ5wEM1A0IRXo5czmfV--iobQHHpw-nIks-goZyhG5SJgyEqHm4CjV7lSlcqr1XetHQgTBRbz3Sw_EMCB2EMPEr80_GtPI8ZWJF7PmkMk8GekwYhM5F8-DWfZd2-sf6PrtD7NOudp7C-uXkLvVcL8aum3nj1MT2n6OtB3UgyVYtyVpJJBBYgu6YIDq2CjE9xEG8OTZBXSATBmM14uZN9sEBubL-BWqzDYUdY2pdlpD4Ura-KS8Rf8MzbSvmxL_BtTO4JkzjGbmKstJ9nXU5Fa&amp;source=gmail&amp;ust=1700982185909000&amp;usg=AOvVaw02J6Uq-Nby32bkBrT5A9kW" href="https://ghachia.r.af.d.sendibt2.com/tr/un/5_WN8z5SgqfrVkY8Sb3vDG80YDjmQ5wEM1A0IRXo5czmfV--iobQHHpw-nIks-goZyhG5SJgyEqHm4CjV7lSlcqr1XetHQgTBRbz3Sw_EMCB2EMPEr80_GtPI8ZWJF7PmkMk8GekwYhM5F8-DWfZd2-sf6PrtD7NOudp7C-uXkLvVcL8aum3nj1MT2n6OtB3UgyVYtyVpJJBBYgu6YIDq2CjE9xEG8OTZBXSATBmM14uZN9sEBubL-BWqzDYUdY2pdlpD4Ura-KS8Rf8MzbSvmxL_BtTO4JkzjGbmKstJ9nXU5Fa" style="color:#696969;text-decoration:underline" target="_blank">Unsubscribe</a></p>
																													</div>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																							<tr>
																								<td align="center" class="m_4750760328253690921r24-c">
																									<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r0-o" role="presentation" style="table-layout:fixed;width:100%" width="100%">
																										<tbody>
																											<tr>
																												<td class="m_4750760328253690921r32-i" style="padding-bottom:15px" valign="top">
																													<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
																														<tbody>
																															<tr>
																																<td align="center" class="m_4750760328253690921r33-c">
																																	<table border="0" cellpadding="0" cellspacing="0" class="m_4750760328253690921r34-o" role="presentation" style="table-layout:fixed" width="129">
																																		<tbody>
																																			<tr>
																																				<td height="48" style="font-size:0px;line-height:0px">
																																					<a data-saferedirecturl="https://www.google.com/url?q=https://ghachia.r.af.d.sendibt2.com/tr/cl/fvUSsDL_pLbcnfVffe4wb2LSKoPYHg9qq31nvHNoR3TjGFF3h8kwrORUvGUV67GdBXyuJntY-Kkc2LXxPNRaDrvPGQyaA2msTpNIXIZII3-1-wFDgpWy51AF8BOmM0JTTxxQiD1y2RG66YQ_venVrXn0T4Crmv8bkMjhqaR1ZJOJt6tTaMfb8-svYW_BVc3xzplJ6FIyGW0g3rMRqX0NAfEAP0vuRKE-33qP6-VtMF0l6ATGPLSKEftYc3VUF3Q02z8pSz7FMSn76mOEdRg2PNcAWdnwj11j74qW1D5--785nR5kPkq4_apM2oITq95Us9lbvoIrpAj-TsRLKw&amp;source=gmail&amp;ust=1700982185909000&amp;usg=AOvVaw3l1KS1m5dmaiFgzZ40QQg3" href="https://ghachia.r.af.d.sendibt2.com/tr/cl/fvUSsDL_pLbcnfVffe4wb2LSKoPYHg9qq31nvHNoR3TjGFF3h8kwrORUvGUV67GdBXyuJntY-Kkc2LXxPNRaDrvPGQyaA2msTpNIXIZII3-1-wFDgpWy51AF8BOmM0JTTxxQiD1y2RG66YQ_venVrXn0T4Crmv8bkMjhqaR1ZJOJt6tTaMfb8-svYW_BVc3xzplJ6FIyGW0g3rMRqX0NAfEAP0vuRKE-33qP6-VtMF0l6ATGPLSKEftYc3VUF3Q02z8pSz7FMSn76mOEdRg2PNcAWdnwj11j74qW1D5--785nR5kPkq4_apM2oITq95Us9lbvoIrpAj-TsRLKw" target="_blank"><img border="0" class="CToWUd" data-bit="iit" height="48" src="https://ci4.googleusercontent.com/proxy/4qjeqToBpYfV5Z8TzZlL39v-UNWtohoY8MluqxNpO3_rRFKJXl7GWQDDzQj3erDwdVwmj8pPSr6MaTUQJ9edggTxN75AuoD2oOiQywZ26hG7H5yshI4FuKrCQxqSmJv0vIK9B9A5Jr4qzqSL9CrN6HY3HXhIXTvb6SO-lVDqdRCxU77Y_6bu0ew1uqpWb8fbSrrvi-ijUb1DSvHndQTgV6xBFbi8fTdFvH_8mKyXV7-KjS8iWiSTaOKfV1lnMPR9rYtVSJgdH6Jliu9jOx-lfnwP1ujLUdQZncWmeKSUpL5MSQ9uTpGcT7Li9q9elN3wKbsSEqkAUBotPnlf-4Il5Dg8FKphVpfWz2IkH9N12JsIn-vOgyfAWIgMhrWChkCCV50tEoL9awYQgHbW5OBTKlz9qtr5HagVy-3XdcrlpxEHlLvORDCZMxQ84iYo5oYZR6xNPes5yKPck2YmQctEJUh1paWF4osDnRLEH2uxBSQnQKik73RBw1RUyKfy-3Qgv41ApT9ssI0ZKqsisjqsXpw=s0-d-e1-ft#https://ghachia.r.af.d.sendibt2.com/im/6702780/ec9bdbff369bfa6eded87bb22dd8c4f320454721e5daf3e5b5ee5091a2ffc8f1.png?e=ML9SPlRvnzxnGH1kFe7bOv_6I7JroKrYXbzrPhL-kbfdC96umUlx9pznonfkA0gO1Y0jgjrYFX0TsAWRcthfDA_a5vh5LZJ_dp4cYBrCeYpbwpr-SBONqGewV0iWBmPC0h8_pP5pPFjVMNwImt0sKPXEU_mlKtrTeMt__Lcwe__slAtGJjBNpxkozFSpUrAaMk7HZtTXjRlMtNsQTB3kD-vIJSk7HOIZL-5XKSM_gCZACfjf4fU8hP3x0VUMx6MYzMKpDOY" style="display:block;width:100%" width="129"></a>
																																				</td>
																																			</tr>
																																		</tbody>
																																	</table>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																						</tbody>
																					</table>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</th>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
</body>
</html>';
        $mail->Body    = $htmlUserBody;

        // Send confirmation email to the user
        $mail->send();

        // Clear all recipients and set new ones for the actual form submission
        $mail->clearAllRecipients();
        $mail->addAddress('utkarshk495@gmail.com', 'Airbrick Infra');

        $mail->AddCC('garima.jain@airbrickinfra.com', 'Garima Jain');
        $mail->AddCC('sb@airbrickinfra.com', 'Sanjeev Bhandari');
        $mail->AddCC('business@airbrickinfra.com', 'Airbrick Infra');
        
        // Email content for form submission notification
        $mail->isHTML(true);
        $mail->Subject = 'New Form Submission';
        // Construct the HTML body
        $htmlBody = '
        <!DOCTYPE html>
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
                    <td>' . $user_name  . '</td>
                </tr>
                <tr>
                    <td style="width:80px">Email</td>
                    <td>' . $user_email . '</td>
                </tr>
                <tr>
                    <td style="width:80px">Contact</td>
                    <td>' . $user_phone . '</td>
                </tr>
                <tr>
                    <td style="width:80px">Messege</td>
                    <td>' . $user_msg . '</td>
                </tr>
            </table>

        </body>
        </html>
    ';

    $mail->Body = $htmlBody;

    if($mail->send()){
        $status = "success";
        $response = "Email is sent!";
    }
    else{
        $status = "failed";
        $response = "Something is wrong: <br>" . $mail->ErrorInfo;
    }
    
    exit(json_encode(array("status" => $status, "response" => $response)));

    } catch (Exception $e) {
        echo "Error sending email: {$mail->ErrorInfo}";
    }
}
?>
