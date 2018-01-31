$('').load();
$.get();
$('a').on('click', function(e){  
   e.preventDefault( ); 
var pageRef = $(this).attr('href');
callPage(pageRef)
});


function callPage(pageRefInput){
	//using the core $.ajax() method
	$.ajax({
		url: pageRefInput,
		type: "GET",

		dataType : "text/html",

		success: function( response ){
			console.log('the page was loaded'. response);
			$('.content').html(response);
		},
		error: function( error ) {
			console.log('the page was NOT loaded', error)
		},