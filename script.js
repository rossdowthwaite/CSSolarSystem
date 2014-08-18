$(document).ready(function(){

	var years = 0;
	var mars_orbits = 0;
	var mercury_orbits = 0;
	var venus_orbits = 0;
	var jupiter_orbits = 0;
	var saturn_orbits = 0;
	var uranus_orbits = 0;
	var neptune_orbits = 0;
	
	setInterval(function() {
	  years++;
      $('#years').html('<h2>YEARS: ' + years + '</h2>');
      $('#earth_orbits').html('<h2>' + years + '</h2>');
	}, 4000);

	setInterval(function() {
	  mercury_orbits++;
      $('#mercury_orbits').html('<h2>' + mercury_orbits + '</h2>');
	}, 964);

	setInterval(function() {
	  venus_orbits++;
      $('#venus_orbits').html('<h2>' + venus_orbits + '</h2>');
	}, 2462);

	setInterval(function() {
	  mars_orbits++;
      $('#mars_orbits').html('<h2>' + mars_orbits + '</h2>');
	}, 7528);

	setInterval(function() {
	  jupiter_orbits++;
      $('#jupiter_orbits').html('<h2>' + venus_orbits + '</h2>');
	}, 47473);

	setInterval(function() {
	  saturn_orbits++;
      $('#saturn_orbits').html('<h2>' + saturn_orbits + '</h2>');
	}, 117917);

	setInterval(function() {
	  uranus_orbits++;
      $('#uranus_orbits').html('<h2>' + saturn_orbits + '</h2>');
	}, 336438);

	setInterval(function() {
	  neptune_orbits++;
      $('#neptune_orbits').html('<h2>' + saturn_orbits + '</h2>');
	}, 659726);


	$('#earth_tag').draggable();
	$('#mars_tag').draggable();
	$('#venus_tag').draggable();
	$('#saturn_tag').draggable();
	$('#jupiter_tag').draggable();
	$('#uranus_tag').draggable();
	$('#mercury_tag').draggable();
	$('#neptune_tag').draggable();

	$('#complete').click(function(){
		var earth_pos = $('#earth').offset();
		$('#earth_tag').animate({left: earth_pos.left, top: earth_pos.top}, 'slow');

		var mars_pos = $('#mars').offset();
		$('#mars_tag').animate({left: mars_pos.left, top: mars_pos.top}, 'slow');

		var venus_pos = $('#venus').offset();
		$('#venus_tag').animate({left: venus_pos.left, top: venus_pos.top}, 'slow');

		var saturn_pos = $('#saturn').offset();
		$('#saturn_tag').animate({left: saturn_pos.left, top: saturn_pos.top}, 'slow');

		var jupiter_pos = $('#jupiter').offset();
		$('#jupiter_tag').animate({left: jupiter_pos.left, top: jupiter_pos.top}, 'slow');

		var neptune_pos = $('#neptune').offset();
		$('#neptune_tag').animate({left: neptune_pos.left, top: neptune_pos.top}, 'slow');

		var uranus_pos = $('#uranus').offset();
		$('#uranus_tag').animate({left: uranus_pos.left, top: uranus_pos.top}, 'slow');

		var mercury_pos = $('#mercury').offset();
		$('#mercury_tag').animate({left: mercury_pos.left, top: mercury_pos.top}, 'slow');
	});  

	$('#reset').click(function(){
		$('#earth_tag').animate({left: "60px", top: "60"}, 'slow');

		$('#mars_tag').animate({left: "60px", top: "80"}, 'slow');

		$('#venus_tag').animate({left: "60px", top: "100"}, 'slow');

		$('#saturn_tag').animate({left: "60px", top: "120"}, 'slow');

		$('#jupiter_tag').animate({left: "60px", top: "140"}, 'slow');

		$('#neptune_tag').animate({left: "60px", top: "160"}, 'slow');

		$('#uranus_tag').animate({left: "60px", top: "180"}, 'slow');

		$('#mercury_tag').animate({left: "60px", top: "200"}, 'slow');
	});

	$('#earth_tag').dblclick(function(){
		var earth_pos = $('#earth').offset();
		$('#earth_tag').animate({left: earth_pos.left, top: earth_pos.top}, 'slow');
	});
	$('#mars_tag').dblclick(function(){
		var mars_pos = $('#mars').offset();
		$('#mars_tag').animate({left: mars_pos.left, top: mars_pos.top}, 'slow');
	});
	$('#venus_tag').dblclick(function(){
		var venus_pos = $('#venus').offset();
		$('#venus_tag').animate({left: venus_pos.left, top: venus_pos.top}, 'slow');
	});
	$('#saturn_tag').dblclick(function(){
		var saturn_pos = $('#saturn').offset();
		$('#saturn_tag').animate({left: saturn_pos.left, top: saturn_pos.top}, 'slow');
	});
	$('#jupiter_tag').dblclick(function(){
		var jupiter_pos = $('#jupiter').offset();
		$('#jupiter_tag').animate({left: jupiter_pos.left, top: jupiter_pos.top}, 'slow');
	});
	$('#neptune_tag').dblclick(function(){
		var neptune_pos = $('#neptune').offset();
		$('#neptune_tag').animate({left: neptune_pos.left, top: neptune_pos.top}, 'slow');
	});
	$('#uranus_tag').dblclick(function(){
		var uranus_pos = $('#uranus').offset();
		$('#uranus_tag').animate({left: uranus_pos.left, top: uranus_pos.top}, 'slow');
	});
	$('#mercury_tag').dblclick(function(){
		var mercury_pos = $('#mercury').offset();
		$('#mercury_tag').animate({left: mercury_pos.left, top: mercury_pos.top}, 'slow');
	});

	$('#label').toggle(
	function(){
		$(".pl_tags").fadeIn();
		$("#planet_info_links").fadeOut();
	},
	function(){
		$(".pl_tags").fadeOut();
	});

	$('#info').toggle(
	function(){
		$("#planet_info_links").fadeIn();
		$(".pl_tags").fadeOut();
	},
	function(){
		$("#planet_info_links").fadeOut();
	});
});
