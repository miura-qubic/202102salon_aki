
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
	$('.underline').on('inview',function(){
		$(this).addClass('active');
	});


	// 一番最後に記述
	$("body").removeClass("preload");

});