$(window).load( function(){
	FB.api( '/414549295277975/feed?access_token=437941556240886|0tWLfqXxX-WLjYOStMpFrXw3ipg', function (response) { 
		
		// This is the HTML that is going to be modified with the new feed post.
		$("#feed .post").each( function(index, element){
			var item = response["data"][index];
		
			// Set the message and link.
			$(element).children(".summary").text(item.message).attr("href","http://www.facebook.com/"+item.id);
			
			// Get the date.		
			$(element).children(".date").text($.timeago(String(item.created_time)));
		});
		
	});
	
	
});