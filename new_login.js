// new_login.js
function newLogin(username, password){
	if(username && password){
		return "Login successfull";
	}else{
		return "Login failed"
	}
}

// 추가 기능 : 비밀번호 보안 확인
fuction validatePassword(password){
	if(password.length < 8){
		return "Password too short";
	} else {
		return "Password is strong enough";
	}
}
