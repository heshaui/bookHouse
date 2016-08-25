var detailTpl=require("../tpls/detail.string");
var scroll = require('../utils/scroll.js');
//定义视图
SPA.defineView('detail',{
	html: detailTpl,
		//引入avalon
	plugins:[
	  'delegated',{
	  	  name:'avalon',
	  	  options:function(vm){
	  	  	 vm.detail=[];
	  	  }
	  }	
	],
	// 绑定tap
	  bindActions: {
	    'goto.subdetail': function (el, data) {
	      SPA.open('subdetail', {
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
				url:'/bookHouse/mock/detail.json',
				type:'get',
				success: function(res){
					vm.detail=res.data;
				}
			});
			
			// scroll
      scroll({
        scroll: this.widgets.myScroll,
        vm: vm
      })
		}
		
	}
});
