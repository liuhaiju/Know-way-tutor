var vueAjax = new Vue({
		el:'#main',
		data:{
			banner:[],
			subjects:[],
			list: [],
		},
		mounted: function(){
            this.getData();
            var mySwiper = new Swiper ('.swiper-container', {
					    direction: 'horizontal',
					    loop: true,

					     // 如果需要分页器
					    pagination: '.swiper-pagination',
					     paginationClickable: true,
					            speed: 500,
					            loop: true,
					            observer:true,
					            observeParents:true,
					            autoplayDisableOnInteraction : false,
					            autoplay:2000

					    })
        },
        methods:{
        	getData: function(){
        		var that = this;
	        	$.ajax({
	                url: "http://api.zhituteam.com/api/index",
	                type: "get",
	                dataType: "json",
	                success: function(res){
	                	var newBannerList=[];
	                	for(i=0;i<5;i++){
	                		newBannerList=newBannerList.concat(res.data.banner)
	                	}
	                	that.banner=newBannerList;
	                	console.log(that.banner);
	                	that.subjects=res.data.subjects;
	                	console.log(that.subjects);
	                    that.list=res.data.teacher;
	                    console.log(that.list);
	                },
	                error: function(res){

	                }
	            })
	            console.log(this.list);
	            console.log(that.list);
        	},
        }
	})