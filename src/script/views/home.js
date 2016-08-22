var indexHome=require('../tpls/home.string');

//定义视图
SPA.defineView('home',{
	//装载模板
	html:indexHome,
	
	//绑定视图事件
	bindEvents:{
    'show': function () {		
		//获得vm
//    var vm = this.getVM();
		
		// swiper
		var mySwiper = new Swiper('#home-swiper', {
		    loop: false,
		    onSlideChangeStart: function(swiper){
		      var index = swiper.activeIndex;
		      $('#home-nav li').eq(index).addClass('active').siblings().removeClass('active');
		    }
		});
		$('#home-nav li').on('tap', function () {
		    mySwiper.slideTo($(this).index());
		    console.log(1);
		});	
		
	      // scroll
//	      scroll({
//	        scroll: this.widgets.myScroll,
//	        vm: vm
//	      })	
	   }
	}

});
