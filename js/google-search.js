

$(document).ready(function() {
	$('button').on('click', function(e){
		e.preventDefault();

		// vars 
		var term = $('input').val();
		var url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyArZQGhf1dbDJo_SdrFRcF_zL4ulkj5Ygg&cx=017576662512468239146:omuauf_lfve&q=' + term;
		var items = [];

		// getJSON

		$.getJSON(url, function( data ){
			$.each(data.items, function(index, value){
				$('.search-results').append("<li><a href='" + data.items[index].link + "'" + ">" + data.items[index].title + "</a></li>");				
			})
		});

		$(".search-results").empty();
		$('.results-heading').text("Results")
		$(".form-control").val("");
	});
});
