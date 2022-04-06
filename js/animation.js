animation = {
	time: 500,
	fadeOut: function(obj){

		obj.animate({
			opacity: 0
		},
		{
			duration: animation.time,
			complete: function(){
				obj.remove();
			}
		});

	},
	fadeIn: function(obj){
		obj.css("opacity", 0);
		obj.show().animate({
			opacity: 1
		},
		{
			duration: animation.time
		});
	}
}
