$(document).ready(function(){ 

	$('.study').click(function(){
		$('.form, .exit, .overlay').addClass('active');
		$('#select-class').children('.content-wrapper').addClass('active');
		$('#assignment-buttons').addClass('visible');
	});
	
	$('.exit').click(function(){
		if ($(this).hasClass('active')) {
			$('.active').removeClass('active');
			$('.visible').removeClass('visible');
			$('.done').removeClass('done');
		}
	});
	
	$('.subject').click(function() {
		$('#select-class').addClass('done');
		$('.content-wrapper').addClass('active');
	});

	$('.cancel').click(function() {
		$('.form').removeClass('active');
	});
});
