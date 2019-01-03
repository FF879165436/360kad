window.onload = function(){
	var oUname = document.getElementById('username');
	var oPwd = document.getElementById("pwd"); 
	var oLog = document.getElementById("login_Button");
	var oReg = document.getElementById("register_left");
	var oTishi = document.getElementById("#tiShi-font");
	oLog.onclick = function(){
		var username = oUname.value;
		var pwd = oPwd.value;
		var cookieStr = getCookie('registorUser') ? getCookie('registorUser') : '';
		var obj = convertCookieStrToObj(cookieStr);
		if(obj[username] == pwd){
			alert('登陆成功');
			location.href = 'index.html';
			createCookie('loginUser',uname,7)
		}else{
			alert('用户名与密码不匹配！');
		}
	}
	oReg.onclick = function(){
		location.href = 'register.html';
	}
	function convertCookieStrToObj(str){
		if(!str){
			return {};
		}
		var obj = {};
		var arr = str.split(',');
		for(var i = 0, len = arr.length; i < len ; i ++){
			var list = arr[i].split(':');
			obj[list[0]] = list[1];
		}
		return obj;
	}
}
