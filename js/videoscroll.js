(function($){
	$.fn.vscroll = function(){
		var video = $(this);
		$(window).scroll(function(){
			var posicion = $(window).scrollTop();
			if(posicion >= 380){
				video.css({position:"fixed", width:"280px", height:"160px", bottom:"10px", left:"10px"});
			}
		});
	};
}(jQuery)); //compatibilidad con otros plugins