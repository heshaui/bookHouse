var honorRollTpl = require('../tpls/honorRoll.string');

//定义视图
SPA.defineView('honorRoll',{
	//装载模板
	html:honorRollTpl,
	
	//引入avalon
	plugins:[
	  'delegated',{
	  	  name:'avalon',
	  	  options:function(vm){
	  	  	 vm.honorRoll=[];
	  	  	 vm.honorRoll2=[];
	  	  	 vm.honorRoll3=[];
	  	  }
	  }	
	],
	// 绑定tap
	  bindActions: {
	    'goto.detail': function (el, data) {
	      SPA.open('detail', {
	        param: {
	          id: data.id
	        }
	      });
	    }
	  },
	
	
	//绑定视图事件
	bindEvents:{
		'show':function(){
			//console.log(1);
			//获取vm
			var  vm=this.getVM();
			//ajax拉取数据
			$.ajax({
				url:'/bookHouse/mock/honorRoll.json',
				type:'get',
				data:{
					type:'more',
					pageNo:1
				},
				success: function(res){
					vm.honorRoll=res.data;
				}
			});
			$.ajax({
				url:'/bookHouse/mock/honorRoll2.json',
				type:'get',
				data:{
					type:'more',
					pageNo:2
				},
				success: function(res){
					vm.honorRoll2=res.data;
				}
			});
			$.ajax({
				url:'/bookHouse/mock/honorRoll3.json',
				type:'get',
				data:{
					type:'more',
					pageNo:3
				},
				success: function(res){
					vm.honorRoll3=res.data;
				}
			});
		}
	}
	
});