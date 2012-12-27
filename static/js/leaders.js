$(document).ready(function() {
	$('div.view-sixth').click(function() {
    var that = this;
    $.get("/leaders/" + $(this).attr('leader-id'), function(data) {
			var leader = data[0].fields;
			// Set all the fields for the leader.
			$('#leader-name').html(leader.name);
			$('#leader-description').html(leader.description);
			$('#leader-email').html('email').attr('href','mailto:' + leader.email);	
			$('#leader-website').html('website').attr('href',leader.website);
      $('#leader-img').attr('src', $(that).children('img').attr('src'));
      $('#leaders-placeholder').hide();
		})
  });
});
