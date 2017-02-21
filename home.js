$(document).ready(function(){ 
	var clickedLog = false;

	$('.study').click(function(){
		$('.form, .exit, .overlay').addClass('active');
		$('#select-class').children('.content-wrapper').addClass('active');
		$('#select-class').addClass('btn-primary').removeClass('btn-info');
		$('#select-assignment').addClass('btn-primary').removeClass('btn-info');
		$('#assignment-buttons').addClass('visible');
		$('.assignment').removeAttr("data-toggle");
		$('.assignment').removeAttr("data-target");
		clickedLog = false;
	});
	
	$('.log').click(function(){
		$('.form, .exit, .overlay').addClass('active');
		$('#select-class').children('.content-wrapper').addClass('active');
		$('#select-class').addClass('btn-info').removeClass('btn-primary');
		$('#select-assignment').addClass('btn-info').removeClass('btn-primary');
		$('#assignment-buttons').addClass('visible');
		clickedLog = true;
	});

	$('.exit').click(function(){
		if ($(this).hasClass('active')) {
			$('.active').removeClass('active');
			$('.visible').removeClass('visible');
			$('.done').removeClass('done');
		}
		clickedLog = false;
	});
	
	$('.subject').click(function() {
		$('#select-class').addClass('done');
		$('.content-wrapper').addClass('active');
		if (clickedLog) {
			$('.assignment').attr("data-toggle",'modal');
			$('.assignment').attr("data-target",'#myModal');
		}
	});
	
	$('.assignment').click(function() {
		if (clickedLog){
			$('.active').removeClass('active');
			$('.visible').removeClass('visible');
			$('.done').removeClass('done');
			clickedLog = false;
		}
	});

	$('.paper').click(function() {
		$('#log_assignment').text("Research Paper")
	});
	$('.project').click(function() {
		$('#log_assignment').text("Group Project")
	});
	$('.presentation').click(function() {
		$('#log_assignment').text("Final Presentation")
	});

	$('#submit').click(function(){
		$('.alert').removeClass('hidden');
	})

});
