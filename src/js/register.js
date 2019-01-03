window.onload = function(){
	var oUname = document.getElementById("userphone");
	var oPwd = document.getElementById("pwdH");
	var oDx = document.getElementById("duanXin");
	var oReg = document.getElementById("toLogin");
	var oLog = document.getElementById("loginL");
	var oSpanUn = document.getElementById("jingG1");
	var oSpanPwd = document.getElementById("jingG2");
	var oSpanYz = document.getElementById("jingG3");
	var arr = [false,false];
	oUname.onblur = function(){
		var uname = oUname.value;
		var re = /^[\u4e00-\u9fa5\w]{3,12}$/;
		if(!re.test(uname)){
			oSpanUn.style.display = "block";
			arr[0] = false;
		}else{
			arr[0] = true;
		}
	}
	oPwd.onblur = function(){
		var pwd = oPwd.value;
		var re = /^\w{6,12}$/;
		if(!re.test(pwd)){
			oSpanPwd.style.display = "block";
		}else{
			arr[1] = true;
		}
	}
	oDx.onblur = function(){
		var dx = oDx.value;
		var re = /^\w{1,6}$/;
		if(!re.test(dx)){
			oSpanYz.style.display = "block";
		}else{
			arr[2] = true;
		}
	}
	oReg.onclick = function(){
		var uname = oUname.value;
		var pwd = oPwd.value;
		console.log(uname,pwd);
		if(!uname){
			alert('用户名不能为空！');
			return;
		}
		if(arr.indexOf(false) != -1){
			alert('请输入正确信息！');
			return;
		}
		var cookieStr = getCookie('registorUser') ? getCookie('registorUser') : '';
		var cookieObj = convertCookieStrToObj(cookieStr);
		if(uname in cookieObj){
			alert('用户名已存在!');
			return;
		}else{
			cookieObj[uname] = pwd;
			cookieStr = convertObjToCookieStr(cookieObj);
			createCookie('registorUser',cookieStr,7);
			alert('注册成功！');
		}
		alert(decodeURIComponent(document.cookie))
	}
	oLog.onclick = function(){
		location.href = 'login.html';
	}
	//将cookie字符串转为对象
	function convertCookieStrToObj(str){
		if(!str){
			return{};
		}
		var arr = str.split(',');
		console.log(arr);
		var obj = {};
		for(var i = 0;i < arr.length; i ++){
			var list = arr[i].split(':');
			obj[list[0]] = list[1];
		}
		return obj;
	}
	//将对象转为cookie字符串
	function convertObjToCookieStr(obj){
		var str = '';
		for(var i in obj){
			var pwd = obj[i];
			if(str){
				str += ',';
			}
			str += i + ':' + pwd;
		}
		return str;
	}
}
