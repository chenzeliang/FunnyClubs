<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<!-- 新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="bootstrap-3.2.0-dist/css/bootstrap.min.css">
<!-- 登录界面CSS -->
<link href="css/signin.css" rel="stylesheet">

<!-- 可选的Bootstrap主题文件（一般不用引入） -->
<link rel="stylesheet" href="bootstrap-3.2.0-dist/css/bootstrap-theme.min.css">

<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="js/jquery.min.js"></script>

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>

</head>
<body>
	<div class="container">
		<div class="header-signin page-header">
			<h1>
				 <span class="glyphicon glyphicon-leaf"></span> 
				 <span class="red">&nbsp;个人应用</span> 
			</h1>
		</div>
		<form class="form-signin" role="form" action="login.action" method="post">
			<h2 class="form-signin-heading">登录</h2>
			<div>
				<span class="glyphicon glyphicon-user"></span> 
				<input name = "user.name" type="email" class="form-control" placeholder="Email address" required="" autofocus=""> 
			</div>
			<span class="glyphicon glyphicon-lock"></span>
			<input type="password" name ="user.password" class="form-control" placeholder="Password" required="">
			<div class="checkbox">
				<label> <input type="checkbox" value="remember-me">
					记住密码
				</label>
			</div>
			<button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
		</form>
	</div>
</body>
</html>