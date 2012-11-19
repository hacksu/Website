$(document).ready(function() {
	$('.info').click(function() {
		$.get("/leaders/" + $(this).attr('leader-id'), function(data) {
			var leader = data[0].fields;
			// Set all the fields for the leader.
			$('#leader-name').html(leader.name);
			$('#leader-description').html(leader.description);
			$('#leader-email').html('email').attr('href','mailto:' + leader.email);	
			$('#leader-website').html('website').attr('href',leader.website);			
		}).done(function(){
			$(window).scrollTop($(document).height(),"fast");
		});
	});
});
