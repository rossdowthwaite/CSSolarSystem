// popup panet info boxes

$(document).ready(function(){

	$('#mercury_info_link').toggle(
	function(){
		$('.info').fadeOut('fast');
		$('#mercury_info').fadeIn('slow');
	},
	function(){
		$('#mercury_info').fadeOut('fast');
	});	

	$('#venus_info_link').toggle(
	function(){
		$('.info').fadeOut('fast');
		$('#venus_info').fadeIn('slow');
	},
	function(){
		$('#venus_info').fadeOut('fast');
	});	

	$('#earth_info_link').toggle(
	function(){
		$('.info').fadeOut('fast');
		$('#earth_info').fadeIn('slow');
	},
	function(){
		$('#earth_info').fadeOut('fast');
	});	

	$('#mars_info_link').toggle(
	function(){
		$('.info').fadeOut('fast');
		$('#mars_info').fadeIn('slow');
	},
	function(){
		$('#mars_info').fadeOut('fast');
	});

	$('#jupiter_info_link').toggle(
	function(){
		$('.info').fadeOut('fast');
		$('#jupiter_info').fadeIn('slow');
	},
	function(){
		$('#jupiter_info').fadeOut('fast');
	});	

	$('#saturn_info_link').toggle(
	function(){
		$('.info').fadeOut('fast');
		$('#saturn_info').fadeIn('slow');
	},
	function(){
		$('#saturn_info').fadeOut('fast');
	});	

	$('#uranus_info_link').toggle(
	function(){
		$('.info').fadeOut('fast');
		$('#uranus_info').fadeIn('slow');
	},
	function(){
		$('#uranus_info').fadeOut('fast');
	});	

	$('#neptune_info_link').toggle(
	function(){
		$('.info').fadeOut('fast');
		$('#neptune_info').fadeIn('slow');
	},
	function(){
		$('#neptune_info').fadeOut('fast');
	});
});