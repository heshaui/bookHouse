var indexHome=require('../tpls/home.string');

//定义视图
SPA.defineView('home',{
	//装载模板
	html:indexHome,
	
	plugins: [
		'delegated',{
    	name: 'avalon',
    	options: function (vm) {
      	vm.home = [];
      	vm.home_goodb=[];
      	vm.home_man=[];
      	vm.home_nv=[];
      	vm.home_want=[];
      	vm.home_chu=[];
    }
  }],
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
    'show': function () {		
		//获得vm
      	var vm = this.getVM();
		
		//获取ajax数据
		$.ajax({
			url:"/bookHouse/mock/home.json",
			type:'get',
			
			success:function(res){
				vm.home=res.data;
				
			}
		});
		//好书速递
		$.ajax({
			url:"/bookHouse/mock/home_goodb.json",
			type:'get',
			
			success:function(res){
				vm.home_goodb=res.data;				
			}
		});	
		//原创男生
		$.ajax({
			url:"/bookHouse/mock/home_man.json",
			type:'get',
			
			success:function(res){
				vm.home_man=res.data;
				
			}
		});
		//原创女生
		$.ajax({
			url:"/bookHouse/mock/home_nv.json",
			type:'get',
			
			success:function(res){
				vm.home_nv=res.data;
			}
		});
				//出版推荐
		$.ajax({
			url:"/bookHouse/mock/home_chu.json",
			type:'get',
			
			success:function(res){
				vm.home_chu=res.data;
			}
		});
		//最想读的书
		$.ajax({
			url:"/bookHouse/mock/home_want.json",
			type:'get',
			
			success:function(res){
				vm.home_want=res.data;
			}
		});		
		

		
		// swiper
		var mySwiper = new Swiper('#home-swiper', {
		    loop: false,
			onSlideChangeStart: function(swiper){
		      var index = swiper.activeIndex;
//		      var H = $(".swiper-slide").eq(index).height();
		      $('#home-nav li').eq(index).addClass('active').siblings().removeClass('active');

//				$(".swiper-container").css('height', H + 'px');
		    }
		});
		$('#home-nav li').on('tap', function () {
		    mySwiper.slideTo($(this).index());
		});	
		

	   }
	}

});

