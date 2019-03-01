'use strict';

/*global $:false */
/*jshint unused: false */
/*jshint indent: false */

$(document).ready(function () {

//smooth scroll
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 750);
					return false;
				}
			}
		});
	});

//scrollspy
	$('.section').waypoint(function() {
			if ($(window).scrollTop() === 0) {
				$('.poz').removeClass('active');
				$('.linkhome').addClass('active');
			} else {
				var id = $(this).attr('id');
				$('.poz').removeClass('active');
				$('.link'+id).addClass('active');
			}
		});

	$(window).scroll(function () {
		$('.section').waypoint(function() {
			if ($(window).scrollTop() === 0) {
				$('.poz').removeClass('active');
				$('.linkhome').addClass('active');
			} else {
				var id = $(this).attr('id');
				$('.poz').removeClass('active');
				$('.link'+id).addClass('active');
			}
		});
		if ($(window).scrollTop() === 0) {
			$('.poz').removeClass('active');
			$('.linkhome').addClass('active');
		}
		if($(window).scrollTop() + $(window).height() === $(document).height()) {
			$('.poz').removeClass('active');
			$('.linkcontact').addClass('active');
		}
	});

	$('.poz a').on('click', function () {
		$('.section').waypoint(function() {
			if ($(window).scrollTop() === 0) {
				$('.poz').removeClass('active');
				$('.linkhome').addClass('active');
			} else {
				var id = $(this).attr('id');
				$('.poz').removeClass('active');
				$('.link'+id).addClass('active');
			}
		});
		if ($(window).scrollTop() === 0) {
			$('.poz').removeClass('active');
			$('.linkhome').addClass('active');
		}
		if($(window).scrollTop() + $(window).height() === $(document).height()) {
			$('.poz').removeClass('active');
			$('.linkcontact').addClass('active');
		}
	});
});