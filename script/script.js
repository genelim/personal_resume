$(document).ready(function() {
	/* Load Pages */
	$("#banner").load("banner.html"); 
	$("#aboutme").load("aboutme.html"); 
	$("#skills").load("skills.html"); 
	$("#education").load("education.html"); 
	$("#experience").load("experience.html"); 
	$("#portfolio").load("portfolio.html"); 
	$("#contact").load("contact.html"); 
	$("#footer").load("footer.html"); 

	/*Nav Menu Scrolling Navigating */
	$('a').each( function() {
	    var a_tag = $(this);
	    var target = this.hash;
	    $(this).click(function (e) { 
	    	if ($(target).length) {
	    		e.preventDefault();
	            $('html, body').animate({
			        scrollTop: $(target).offset().top -50
			    }, 200);  
	    	}
	    });
	});  

	/* Header Scrolling
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 600) {
	        $("nav").addClass("scrolling");
	    } else {
	        $("nav").removeClass("scrolling");
	    }
	});	
	*/
});
