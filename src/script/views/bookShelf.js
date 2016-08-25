var bookShelfTpl = require('../tpls/bookShelf.string');

//定义视图
SPA.defineView('bookShelf',{
	//装载模板
	html:bookShelfTpl,
	//引入avalon
	plugins:[
	  'delegated',{
	  	  name:'avalon',
	  	  options:function(vm){
	  	  	 vm.bookShelf=[];
	  	  	 vm.bookShelf2=[];
	  	  }
	  }	
	],
	// 绑定tap
	  bindActions: {
	    'goto.book': function (el, data) {
	      SPA.open('book', {
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
				url:'/bookHouse/mock/bookShelf.json',
				type:'get',
				success: function(res){
					vm.bookShelf=res.data;
				}
			});
			$.ajax({
				url:'/bookHouse/mock/bookShelf2.json',
				type:'get',
				success: function(res){
					vm.bookShelf2=res.data;
				}
			});
		}
	}
});
