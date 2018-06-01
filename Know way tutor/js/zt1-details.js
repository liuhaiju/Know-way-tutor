var vueAjax = new Vue({
		el:'#main',
		data:{
			list: {},
		},
		mounted: function(){
            this.getData();
        },
        methods:{
        	getData: function(){
        		var that = this;
	        	$.ajax({
	                url: "http://api.zhituteam.com/api/teacher/info/id/",
	                type: "get",
	                data:{
	                	id: window.location.search.split("=")[1],
	                },
	                dataType: "json",
	                success: function(res){
	                   that.list=res.data.teacher;
	                   console.log(that.list);
	                },
	                error: function(res){

	                }
	            })
        	},
        }
	})