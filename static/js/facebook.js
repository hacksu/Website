$(window).load( function(){
	FB.api( '/414549295277975/feed?access_token=437941556240886|0tWLfqXxX-WLjYOStMpFrXw3ipg', function (response) { 
		
		// This is the HTML that is going to be modified with the new feed post.
		$("#feed .post").each( function(index, element){
			var item = response["data"][index];
		
			// Set the message and link.
			var msg="";
			var msg_limit = 200;
			if(item.message.length>msg_limit){
				msg = item.message.substr(0,msg_limit);
				msg = msg.substr(0,msg.lastIndexOf(" ")) + "....";
			}
			else{
				msg = item.message;
			}
				
			$(element).children(".summary").text(msg).attr("href","http://www.facebook.com/"+item.id);
			
			// Get the date.		
			$(element).children(".date").text($.timeago(String(item.created_time)));
		});
		
	});
	
	
});