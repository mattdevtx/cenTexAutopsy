'use strict'

const dropdownBtn = document.querySelector('.dropdown')

const navMenu = document.querySelector('.nav-menu')

const navMenuExit = document.querySelector('.nav-menu-exit')

dropdownBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show-nav-menu')
})

navMenuExit.addEventListener('click', () => {
  navMenu.classList.toggle('show-nav-menu')
})