# Git配置

### 第三次配置了，还有百度，记录一下：
	1.下载安装Git
	2.git config --global user.name "你的名字或昵称"
	3.git config --global user.email "你的邮箱"
	4.配置全局密码输入一次以后就不用输入了：
		1.记住十五分钟密码
			git config --global credential.helper cache
		2.自定义记住的时间
			git config credential.helper 'cache --timeout=3600' //这里记住的是一个小时，如需其他时间，请修改3600为你想修改的时间，单位是秒
		3.你也可以设置长期记住密码
			git config --global credential.helper store
	5. 配置SSH
		ssh-keygen -t rsa -C "xxx@gmail.com"

### 使用
	1.git init
	2.git remote add wang url
	3.git pull wang master
	4.git add *
	5.git commit -m "xx"
	5.git push wang master


