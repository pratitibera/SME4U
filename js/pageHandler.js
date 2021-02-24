$('.chat_icon').click(function () {
	$('.chat_box').toggleClass('active');
});

$('.my-conv-form-wrapper').convform({
	selectInputStyle: 'disable'
})

var googleUser = {};

var startApp = function (page) {
	gapi.load('auth2', function () {
		// Retrieve the singleton for the GoogleAuth library and set up the client.
		auth2 = gapi.auth2.init({
			client_id: '1020161679527-t9736hq9ahb33ilojdrb0qsuac9g2mc8.apps.googleusercontent.com',
			cookiepolicy: 'single_host_origin',
			// Request scopes in addition to 'profile' and 'email'
			//scope: 'additional_scope'
		});
		attachSignin(document.getElementById('customBtn'));
	});
};


function attachSignin(element) {
	auth2.attachClickHandler(element, {},
		function (googleUser) {
			var profile = googleUser.getBasicProfile();
			console.log(profile);
			val = 0;
			var account = "google";
			var account_id = profile.getId();
			var email = profile.getEmail();
			var name = profile.getName();
			console.log(account, account_id, email, name, val);
			// loginWithSocialMedia(account, account_id, email, name, val);
		},
		function (error) {
			// alert(JSON.stringify(error, undefined, 2));
			swal({
				title: 'Oops !!!',
				text: 'Your authorisation has failed',
				imageUrl: 'https://firebasestorage.googleapis.com/v0/b/putatoeapp/o/Tshirt%2F1231601715117658?alt=media&token=4f3ed340-9128-4b40-89bd-f0336876b52b',
				imageSize: '200x200',
				imageAlt: 'custom image',
				timer: 3000,
				showConfirmButton: false
			})
		}
	);
}


//Function to hide sign in methods and display otp box
function otpboxUSER() {
	document.getElementById('signIn_modal_content_user').setAttribute('style', 'display: none');
	document.getElementById('forgot_password_modal_content_user').setAttribute('style', 'display: none');
	document.getElementById('otp_modal_content_user').setAttribute('style', 'display: block');
	document.getElementById('otp_modal_dialogue_user').setAttribute('class', 'modal-dialog modal-sm');
}

function otpboxSME() {
	document.getElementById('signIn_modal_content_sme').setAttribute('style', 'display: none');
	document.getElementById('forgot_password_modal_content_sme').setAttribute('style', 'display: none');
	document.getElementById('otp_modal_content_sme').setAttribute('style', 'display: block');
	document.getElementById('otp_modal_dialogue_sme').setAttribute('class', 'modal-dialog modal-sm');
}

function hideuserOTPsection() {
	console.log("called user");
	document.getElementById('signIn_modal_content_user').setAttribute('style', 'display: block');
	document.getElementById('otp_modal_content_user').setAttribute('style', 'display: none');
	document.getElementById('forgot_password_modal_content_user').setAttribute('style', 'display: none');
	document.getElementById('otp_modal_dialogue_user').setAttribute('class', 'modal-dialog');
}

function hidesmeOTPsection() {
	console.log("called sme");
	document.getElementById('signIn_modal_content_sme').setAttribute('style', 'display: block');
	document.getElementById('otp_modal_content_sme').setAttribute('style', 'display: none');
	document.getElementById('forgot_password_modal_content_sme').setAttribute('style', 'display: none');
	document.getElementById('otp_modal_dialogue_sme').setAttribute('class', 'modal-dialog');
}

function forgotPassworduser() {
	console.log("forgot");
	document.getElementById('signIn_modal_content_user').setAttribute('style', 'display: none');
	document.getElementById('forgot_password_modal_content_user').setAttribute('style', 'display: block');
	document.getElementById('otp_modal_content_user').setAttribute('style', 'display: none');
	document.getElementById('otp_modal_dialogue_user').setAttribute('class', 'modal-dialog modal-sm');
}

function forgotPasswordsme() {
	console.log("forgot");
	document.getElementById('signIn_modal_content_sme').setAttribute('style', 'display: none');
	document.getElementById('forgot_password_modal_content_sme').setAttribute('style', 'display: block');
	document.getElementById('otp_modal_content_sme').setAttribute('style', 'display: none');
	document.getElementById('otp_modal_dialogue_sme').setAttribute('class', 'modal-dialog modal-sm');
}

function sme_dashboard() {
	document.getElementById('sme_profile').setAttribute('style', 'display: none;');
}

function viewSMEprofile() {
	document.getElementById('section1').setAttribute('style', 'display: none;');
	document.getElementById('section2').setAttribute('style', 'display: none;');
	document.getElementById('section3').setAttribute('style', 'display: none;');
	document.getElementById('sme_profile').setAttribute('style', 'display: block;');
}

function viewSections() {
	document.getElementById('section1').setAttribute('style', 'display: block;');
	document.getElementById('sme_profile').setAttribute('style', 'display: none;');
}

function thoughtChecker() {
	var smethoughts = document.getElementById('SMEthoughts');
	if (smethoughts.value != '') {
		$('#acceptClientRequest').modal('show');
	} else {
		$('.error').text('Please give your thoughts...!');
		$('.error').fadeIn('slow');
		setTimeout(function () {
			$('.error').fadeOut('slow');
		}, 3000);
	}
}

var mode_id = "";

function onlyOne(checkbox) {
	mode_id = checkbox.id;
	var checkboxes = document.getElementsByName('consultation_mode')
	checkboxes.forEach((item) => {
		if (item !== checkbox) item.checked = false
	})

	if (mode_id == 'chat' || mode_id == 'call') {
		document.getElementById('savebutton').style.visibility = "visible";
		if (document.getElementById(mode_id).checked) {
			document.getElementById('appointment').style.display = "block";
			document.getElementById('emailResponse').style.display = "none";

		} else {
			document.getElementById('appointment').style.display = "none";
			document.getElementById('emailResponse').style.display = "none";

		}
	} else {
		if (document.getElementById(mode_id).checked) {
			document.getElementById('appointment').style.display = "none";
			document.getElementById('emailResponse').style.display = "block";
			document.getElementById('savebutton').style.visibility = "hidden";

		} else {
			document.getElementById('appointment').style.display = "none";
			document.getElementById('emailResponse').style.display = "none";
			document.getElementById('savebutton').style.visibility = "hidden";
		}
	}
}

var date_id = "";

function onlyOneDate(checkbox) {
	date_id = checkbox.id;
	var checkboxes = document.getElementsByName('date_choice')
	checkboxes.forEach((item) => {
		if (item !== checkbox) item.checked = false
	})
	// alert(date_id);
}

function finalValidation() {
	console.log("final");
	if (mode_id == '') {
		alert("Choose one mode");
		document.getElementById('finalValidate').checked = false;
	} else {
		if (mode_id == 'chat' || mode_id == 'call') {
			var date1 = document.getElementById('date1').value;
			var date2 = document.getElementById('date2').value;
			var date3 = document.getElementById('date3').value;

			var start1 = document.getElementById('startone').value;
			var end1 = document.getElementById('one').value;

			var start2 = document.getElementById('starttwo').value;
			var end2 = document.getElementById('two').value;

			var start3 = document.getElementById('startthree').value;
			var end3 = document.getElementById('three').value;

			if (date1.length != 0 && date2.length != 0 && date3.length != 0 && start1.length != 0 && end1.length != 0 && start2.length != 0 && end2.length != 0 && start3.length != 0 && end3.length != 0) {
				var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth() + 1;
				var yyyy = today.getFullYear();

				if (dd < 10) {
					dd = '0' + dd;
				}

				if (mm < 10) {
					mm = '0' + mm;
				}

				today = yyyy + '-' + mm + '-' + dd;
				var checkround1 = compare_dates(new Date(date1), new Date(today));
				var checkround2 = compare_dates(new Date(date2), new Date(today));
				var checkround3 = compare_dates(new Date(date3), new Date(today));
				if (checkround1 == true && checkround2 == true && checkround3 == true) {
					var split1a = start1.split(":");
					var split1b = end1.split(":");
					var split2a = start2.split(":");
					var split2b = end2.split(":");
					var split3a = start3.split(":");
					var split3b = end3.split(":");
					if (parseInt(split1a[0]) < parseInt(split1b[0])) {
						if (parseInt(split2a[0]) < parseInt(split2b[0])) {
							if (parseInt(split3a[0]) < parseInt(split3b[0])) {
								alert("Success");
								alert("send data to backend");

							} else {
								alert("Start time is after end time");
								// document.getElementById('finalValidate').checked = false;
							}

						} else {
							alert("Start time is after end time");
							// document.getElementById('finalValidate').checked = false;
						}
					} else {
						alert("Start time is after end time");
						// document.getElementById('finalValidate').checked = false;
					}
				} else {
					alert("Choose any date after today");
					// document.getElementById('finalValidate').checked = false;
				}
			} else {
				alert("Please fill all fields");
				// document.getElementById('finalValidate').checked = false;
			}
		} else {
			alert("success with email");
		}
	}
}

var compare_dates = function (check1, check2) {
	if (check1 > check2) return true;
	else return false;
}

function dateChecker(data) {
	var date = document.getElementById(data.id).value;
	var date_error = "id" + data.id;
	console.log(date_error);
	if (date.length != 0) {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();

		if (dd < 10) {
			dd = '0' + dd;
		}

		if (mm < 10) {
			mm = '0' + mm;
		}

		today = yyyy + '-' + mm + '-' + dd;
		console.log(date, today);
		var checkround = compare_dates(new Date(date), new Date(today));
		console.log(checkround);
		if (checkround == false) {
			$('#' + date_error).text('Please give a future date');
			$('#' + date_error).fadeIn('slow');
			setTimeout(function () {
				$('#' + date_error).fadeOut('slow');
			}, 3000);


			document.getElementById(data.id).value = "";
		}
	}


}

function timeChecker(data) {
	console.log(data.id);
	time_error = "id" + data.id;
	var end = document.getElementById(data.id).value;
	var start = document.getElementById("start" + data.id).value;
	var splitstart = start.split(":");
	var splitend = end.split(":");
	if (parseInt(splitstart[0]) < parseInt(splitend[0])) {
		// alert("success");
	} else if (parseInt(splitstart[0]) == parseInt(splitend[0])) {
		$('#' + time_error).text('Duration must be atleast for an hour');
		$('#' + time_error).fadeIn('slow');
		setTimeout(function () {
			$('#' + time_error).fadeOut('slow');
		}, 3000);

		document.getElementById(data.id).value = "";
		document.getElementById("start" + data.id).value = "";

	} else {
		$('#' + time_error).text('Start time is ahead of end time');
		$('#' + time_error).fadeIn('slow');
		setTimeout(function () {
			$('#' + time_error).fadeOut('slow');
		}, 3000);

		document.getElementById(data.id).value = "";
		document.getElementById("start" + data.id).value = "";
	}
}

function cancelConsultation(id) {
	//$('#cancelConsultation').modal('show');
	var datesplit = id.split("_");
	var fixed_date = document.getElementById('consultation_' + datesplit[1]).innerHTML;
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();

	if (dd < 10) {
		dd = '0' + dd;
	}

	if (mm < 10) {
		mm = '0' + mm;
	}

	today = yyyy + '-' + mm + '-' + dd;

	var check_duration = compare_duration(new Date(fixed_date), new Date(today));
	if (check_duration == true) {
		var check_duration2 = compare_duration2(new Date(fixed_date), new Date(today));
		if (check_duration2 == true) {
			alert("Cancel allowed");
			$('#cancelConsultation').modal('show');
		} else {
			var consultation_time = document.getElementById('consultation_time_' + datesplit[1]).innerHTML;
			var timeplit = consultation_time.split(":");
			var d = new Date();
			var h = d.getHours();
			var timediff = parseInt(timeplit) - h;
			if (timediff > 7) {
				alert("cancel allowed");
				$('#cancelConsultation').modal('show');
			} else {
				alert("cancel not allowed");

			}
		}
	} else {
		alert("cancel not allowed");

	}
}

var compare_duration = function (check1, check2) {
	if (check1 >= check2) return true;
	else return false;
}
var compare_duration2 = function (check1, check2) {
	if (check1 > check2) return true;
	else return false;
}

function schedule() {
	var follow_date = document.getElementById('follow_date').value;
	var follow_start = document.getElementById('follow_stime').value;
	var follow_end = document.getElementById('follow_etime').value;

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();

	if (dd < 10) {
		dd = '0' + dd;
	}

	if (mm < 10) {
		mm = '0' + mm;
	}

	today = yyyy + '-' + mm + '-' + dd;
	var follow_date_check = compare_dates(new Date(follow_date), new Date(today));
	if (follow_date_check == true) {
		var split_follow_start = follow_start.split(":");
		var split_follow_end = follow_end.split(":");
		if (split_follow_start[0] < split_follow_end[0]) {
			if(split_follow_end[0] - split_follow_start[0] == 1){
				if(split_follow_end[1] == split_follow_start[1]){
					document.getElementById('schedule_follow_up').setAttribute('data-dismiss', 'modal');
					// values accepted
				}
				else{
					alert("Give atleast one hour");
				}
			}
			else{
				document.getElementById('schedule_follow_up').setAttribute('data-dismiss', 'modal');
				// Values accepted
			}
		}
		else{
			alert("Give atleast one hour");
		}
	}
	else{
		alert("Please enter a future date");
	}
	document.getElementById('follow_date').innerHTML = "";
	document.getElementById('follow_stime').innerHTML = "";
	document.getElementById('follow_etime').innerHTML = "";
}