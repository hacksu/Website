// Change the widths of the content based on the width of the window.

$(window).resize(function() {
  if($('#content_main').width() < 900){
	$('#news').width('100%');
	$('#apps').width('100%');
	$('#feed').width('100%');	  
  }else{
	$('#news').width('33.33%');
	$('#apps').width('33.33%');
	$('#feed').width('33.33%'); 
  }
});