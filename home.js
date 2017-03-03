$(document).ready(function(){ 
	var clickedLog = false;

	$('.study').click(function(){
		$('.form, .exit, .overlay').addClass('active');
		$('#select-class').children('.content-wrapper').addClass('active');
		$('#select-class').addClass('btn-primary').removeClass('btn-info');
		$('#select-assignment').addClass('btn-primary').removeClass('btn-info');
		$('#select-time').addClass('btn-primary').removeClass('btn-info');
		$('#select-time-title').html("Set Time Goal");
		$('#assignment-buttons').addClass('visible');
		$('.assignment').removeAttr("data-toggle");
		$('.assignment').removeAttr("data-target");
		clickedLog = false;
	});
	
	$('.log').click(function(){
		$('.form, .exit, .overlay, .modal-link').addClass('active');
		$('#select-class').children('.content-wrapper').addClass('active');
		$('#select-class').addClass('btn-info').removeClass('btn-primary');
		$('#select-assignment').addClass('btn-info').removeClass('btn-primary');
		$('#select-time').addClass('btn-info').removeClass('btn-primary');
		$('#select-time-title').html("Enter Time Studied");
		$('#assignment-buttons').addClass('visible');
		clickedLog = true;
	});

	$('.analytics').click(function(){
		 window.location.href = "grade.html";
	});

	$('.exit').click(function(){
		if ($(this).hasClass('active')) {
			$('.active').removeClass('active');
			$('.visible').removeClass('visible');
			$('.done').removeClass('done');
		}
		clickedLog = false;
	});
	
	$('#modal-done').click(function(){
		$('.active').removeClass('active');
		$('.visible').removeClass('visible');
		$('.done').removeClass('done');
		clickedLog = false;
	});
	
	$('.subject').click(function() {
		$('#select-class').addClass('done');
		$('.content-wrapper').addClass('active');
	});
	
	$('.assignment').click(function() {
		$('#select-assignment').addClass('done');
		if (clickedLog) {
			$('.modal-link').attr("data-toggle",'modal');
			$('.modal-link').attr("data-target",'#myModal');
		}
	});
	
	$('.modal-link').click(function() {
		var $hr = $('#hr').val();
		var $min = $('#min').val();
		if($min == 0){
			$min = "00";
		}else if($min<10){
			$min = "0"+$('#min').val();
		}
		if($hr == 0){
			$hr = "00";
		}else if($hr < 10){
			$hr = "0"+$('#hr').val();
		}
		var $time =  $hr + ":" + $min;
		$('#summary').text($time);
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
