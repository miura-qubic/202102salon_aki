
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
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

	// アニメーション発動
	$('.underline').on('inview',function(){
		$(this).addClass('active');
	});


	// 一番最後に記述
	$("body").removeClass("preload");

});