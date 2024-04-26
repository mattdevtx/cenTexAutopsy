'use strict'

const dropdownBtn = document.querySelector('.dropdown')
const navMenu = document.querySelector('.nav-menu')
const navMenuExit = document.querySelector('.nav-menu-exit')
const navbar = document.querySelector('.navbar-fixed')

window.addEventListener('scroll', function () {
	if (window.scrollY > 100) {
		navbar.classList.add('navbar-color-bg')
	} else {
		navbar.classList.remove('navbar-color-bg')
	}
})

dropdownBtn.addEventListener('click', () => {
	navMenu.classList.toggle('show-nav-menu')
})

navMenuExit.addEventListener('click', () => {
	navMenu.classList.toggle('show-nav-menu')
})
