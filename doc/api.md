#api

### /getAccountInfo 获取用户信息
入参：
	guid 		String
出参：
	moible		String	
	weixin		String
	name 		String
	nickName	String
	gender		Interger 0:female, 1:male, 2:other
	adress		Object
		country		String
		province	String
		city		String
		country 	String
		town		String
	picUrls 	String[]
	tags		Object
		personality	Object
			defaut	interger[]
			customize String[]
		hobby		Object
			defaut	interger[]
			customize String[]
		food		Object
			defaut	interger[]
			customize String[]
		travel		Object
			defaut	interger[]
			customize String[]

### /updateAccount 更新用户信息接口
入参:
	guid		String
	moible		String	
	weixin		String
	name 		String
	nickName	String
	gender		Interger 0:female, 1:male, 2:other
	adress		Object
		country		String
		province	String
		city		String
		country 	String
		town		String
	picUrls 	String[]
		tags		Object
		personality	Object
			defaut	interger[]
			customize String[]
		hobby		Object
			defaut	interger[]
			customize String[]
		food		Object
			defaut	interger[]
			customize String[]
		travel		Object
			defaut	interger[]
			customize String[]
出参：
	guid		String

### /getMatchList 获取推荐列表
	