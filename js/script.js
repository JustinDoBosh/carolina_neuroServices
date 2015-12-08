function clickOrHover(){
	var windowWidth = $(window).width();

	if(windowWidth > 767){
		$(".dropdown").hover(            
		    function() {
		        $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
		        $(this).toggleClass('open');        
		    },
		    function() {
		        $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
		        $(this).toggleClass('open');       
		    }
		);
	}else{
		$(".dropdown").onclick(            
		    function() {
		        $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
		        $(this).toggleClass('open');        
		    },
		    function() {
		        $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
		        $(this).toggleClass('open');       
		    }
		);
	}
}//ClickOrHover


$(document).ready(function(){
	clickOrHover();
});

$(window).resize(function () {
    clickOrHover();
});

$(document).ready(function(){
        
});