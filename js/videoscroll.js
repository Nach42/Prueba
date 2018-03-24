(function($){
	$.fn.vscroll = function(){
		var video = $(this);
		var height = video.height();
		var width = video.width();
		$(window).scroll(function(){
			var posicion = $(window).scrollTop();
			if(posicion >= 380){
				video.css({position:"fixed", width:"280px", height:"160px", bottom:"10px", left:"10px"});
			}else if(posicion < 300){
				video.css({position:"relative",width:width, height:height});
			}
		});
	};
}(jQuery)); //compatibilidad con otros plugins