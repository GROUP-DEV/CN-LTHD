//alert("123456");
var socket = io('http://localhost:2471', {transports: ['websocket', 'polling', 'flashsocket']});
socket.close();
$(document).ready(function() {

	// check da dang nhap chua
	if(typeof sessionStorage.getItem('info_user') == 'undefined') {
		$('#logindiv').hide();

		// cap nhat tu dong vi tri hien tai cua xe
		setInterval(function() {
			var info_location = {
				latitude: 150,
				longitude: 250
			};
			socket.emit('update_location_driver', info_location);
		}, 5000);
	}
	else {
		$('#logindiv').show();
	}

	// yeu cau tim xe
	$(document).on('click', '#searchBooked', function() {
		socket.emit('search_request');
	});

	// thoat chuong trinh
	$(document).on('click', '#btnLogOut', function() {
		sessionStorage.clear();
	});

	// dang nhap he thong
	$(document).on('click', '#loginbtn', function() {
		alert($('#username').val()+'   '+$('#password').val());
		let info = {user: $('#username').val(),
		pass: $('#password').val()};
		socket.emit('login',info);
	});

	// doi trang thai cua xe
	$(document).on('change', '#status_driver', function() {
		socket.emit('driver_change_status', $(this).val());
	});

	// phan hoi ket qua dang nhap
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

	// nhan thong tin nhan dat xe
	//info_request: customer_name, customer_phone, welcome_address, note, status, seats, time_request, geocoding_lat, geocoding_lon
	socket.on('sent_request', info_request => {
		sessionStorage.setItem('info_booked_car', info_request);
	});

	// vao khi da nhan chay xe
	$(document).on('click', '#btndongy', function() {
		socket.emit('accept_request', sessionStorage.getItem('info_booked_car'));
	});

	// vao khi tu choi nhan xe
	$(document).on('click', '#btntuchoi', function() {
		socket.emit('reject_request', sessionStorage.getItem('info_booked_car'));
	});

	socket.on('request_resent_profile', () => {
		socket.emit('relogin', sessionStorage.getItem('info_user'));
	});
});