
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');
	const body = document.querySelector('body');
	const overlay = document.getElementById('overlay');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
		body.classList.toggle('active');
		overlay.classList.toggle('active');
	});
}


$(function () {

	// ヘッダー
	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$('.header_in').addClass('active');
		}else{
			$('.header_in').removeClass('active');
		}
	});
	
	$('header .menu_open').on('click',function(){
		if($(this).hasClass('active')){
			$('.header_in').addClass('active');
		}else if(!$(this).hasClass('active') && $(window).scrollTop() <= 500){
			$('.header_in').removeClass('active');
		}
	});

	// アニメーション発動
	$('.underline, .fadein, .txt_show, .fade_side_r, .fade_side_l').on('inview',function(){
		$(this).addClass('active');
	});
	$('.txt_anime').on('inview',function(){
		$(this).addClass('start');
	});

	// スムーススクロール
	var headerHeight = $('header').outerHeight();
	var urlHash = location.hash;
	if(urlHash) {
			$('body,html').stop().scrollTop(0);
			setTimeout(function(){
					var target = $(urlHash);
					var position = target.offset().top - headerHeight;
					$('body,html').stop().animate({scrollTop:position}, 1000);
			}, 100);
	}
	$('a[href^="#"]').click(function () {
		var speed = 300;
		var header = $('header').innerHeight();
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({ scrollTop: position - header }, speed, "swing");
		return false;
	}); 

	// 一番最後に記述
	$("body").removeClass("preload");

});