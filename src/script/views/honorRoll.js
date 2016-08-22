var honorRollTpl = require('../tpls/honorRoll.string');

//定义视图
SPA.defineView('honorRoll',{
	//装载模板
	html:honorRollTpl,
	
	//绑定视图事件
	bindEvents:{
		'show':function(){
			console.log(1);
		}
	}
	
});