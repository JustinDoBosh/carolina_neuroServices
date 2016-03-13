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
		$(".dropdown").click(            
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


function setDrEwertHeightDiv(){
		var DrEwertPic = $("#ewertBioPic").height();
	    var DrEwertTitle = $("#DrEwertTitle").height();
	    var DrEwertTxt = $("#ewertExplainerTxt").height();
	    var eduHistoryTitle = $("#eduHistoryTitle").height();
	    var eduHistoryUL = $("#eduHistoryUL").height();
	    var professionalAffilationsTitle = $("#professionalAffilationsTitle").height();
	    var professionalAffilationsUL = $("#professionalAffilationsUL").height();
	    var sportsAffilationsTitle = $("#sportsAffilationsTitle").height();
	    var sportsAffilationsUL = $("#sportsAffilationsUL").height();

	    var DREwertMargins = 100 + 200 + 150;

	    var DREwertSectionHeight = DrEwertPic + DrEwertTitle + DrEwertTxt + eduHistoryTitle + eduHistoryUL + professionalAffilationsTitle + professionalAffilationsUL + sportsAffilationsTitle + sportsAffilationsUL;
	    var DREwertSectionHeight = DREwertSectionHeight + "px";
	    console.log("DREwertSectionHeight: " + DREwertSectionHeight);
	    $("#ewertBioTxt").css("height", DREwertSectionHeight);
}

$(document).ready(function(){
	clickOrHover();
	setConcussionHeight();
});

$(document).load(function(){
	setConcussionHeight();
});

$(window).resize(function () {
    clickOrHover();
    setConcussionHeight();
});


function setConcussionHeight(){

	var windowWidth = $(window).width();

	if(windowWidth < 1200){
		var concussSigns = $("#concussSigns").height();
		var concussVid = $("#concussVid").height();
		var concussSpace = 65;

		console.log("concussSigns: " + concussSigns);
		console.log("concussVid: " + concussVid);

		var concussHeight = concussSigns + concussVid + concussSpace;

		console.log("concussHeight: " + concussHeight);
		$("#concussContentWrapper").css("height", concussHeight);
	}
}


function setWhatWeDoHeight(){
	var windowWidth = $(window).width();
	if(windowWidth < 993){
		console.log(windowWidth);
		//What We Do Section Logic
		var WWD_nueroDivHeight = $("#NueroEvalDiv").height();
	    var WWD_therapyDivHeight = $("#therapyDiv").height();
	    var WWD_treatmentDivHeight = $("#treatmentDiv").height();
	    var WWD_whatWeDoTitleH4Height = $("#WhatWeDoTitleH4").height();
	 
	    var WWD_margins = (80 * 3) + 100;

	    var WWD_totalHeight = WWD_nueroDivHeight + WWD_therapyDivHeight + WWD_treatmentDivHeight + WWD_margins + WWD_whatWeDoTitleH4Height;
	    var WWD_totalHeight = WWD_totalHeight + "px";
	    $("#whoWeHelp").css("height", WWD_totalHeight);
	    //DR EWERT Section Logic

	    //Call DREwert Function uncommment if css if acting up
	    //setDrEwertHeightDiv();
	    
	}else{
		$("#whoWeHelp").css("height", "auto");
		//setDrEwertHeightDiv();
		console.log(windowWidth);
	}
}

