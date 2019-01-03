//alert("123456");
var socket = io('http://localhost:2471', {transports: ['websocket', 'polling', 'flashsocket']});

$(document).ready(function() {

	if(typeof sessionStorage.getItem('info_user') == 'undefined') {
		$('#logindiv').hide();
	}
	else {
		$('#logindiv').show();
	}

	$(document).on('click', '#btnLogOut', function() {
		sessionStorage.clear();
	});

	$(document).on('click', '#loginbtn', function() {
		alert($('#username').val()+'   '+$('#password').val());
		let info = {user: $('#username').val(),
		pass: $('#password').val()};
		socket.emit('login',info);
	});

	$(document).on('click', '#')

	socket.on('login_response',info => {
		alert(info);
		console.log(info);
		if(typeof info.key === 'undefined') {
			$('#logindiv').hide();
			sessionStorage.setItem('info_user',info);
		}
		else if(info.key == -1) {
			alert('Có lỗi xảy ra khi server xử lý.');
		}
		else if(info.key == 0) {
			alert('Đăng nhập sai tài khoản.');
		}
	});
});