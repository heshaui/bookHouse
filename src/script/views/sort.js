var sortTpl = require('../tpls/sort.string');

//定义视图
SPA.defineView('sort',{
	//装载模板
	html:sortTpl,
		bindEvents:{
    'show': function () {		
		//获得vm
//    var vm = this.getVM();
		
		// swiper
		var mySwiper = new Swiper('#sort-swiper', {
		    loop: false,
		    onSlideChangeStart: function(swiper){
		      var index = swiper.activeIndex;
		      $('#sort-nav li').eq(index).addClass('active').siblings().removeClass('active');
		    }
		});
		$('#sort-nav li').on('tap', function () {
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