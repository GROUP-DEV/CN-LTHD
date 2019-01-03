$(document).ready(function() {
	setTimeout(popup, 3000);
	function popup() {
		$("#logindiv").css("display", "block");
	}
	$("#login #cancel").click(function() {
		$(this).parent().parent().hide();
	});
	$("#onclick").click(function() {
		$("#contactdiv").css("display", "block");
	});
	$("#contact #cancel").click(function() {
		$(this).parent().parent().hide();
	});
	// Login form popup login-button click event.
	$("#loginbtn").click(function() {
		var name = $("#username").val();
		var password = $("#password").val();
		if (username == "" || password == ""){
			alert("Username or Password was Wrong");
		}else{
			$("#logindiv").css("display", "none");
		}
	});
});