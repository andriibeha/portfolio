/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu')

	navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
	const header = document.getElementById('header')

	this.scrollY >= 50
		? header.classList.add('shadow-header')
		: header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)
/*=============== EMAIL JS ===============*/
const contactFrom = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail = e => {
	e.preventDefault()

	emailjs
		.sendForm(
			'service_tvoxurj',
			'template_4fow97b',
			'#contact-form',
			'-TXyjCAIU2YgNq8xf'
		)
		.then(
			() => {
				contactMessage.textContent = 'Message sent succesfuly'

				setTimeout(() => {
					contactMessage.textContent = ''
				}, 5000)

				contactFrom.reset()
			},
			() => {
				contactMessage.textContent = 'Message not sent (services error)'
			}
		)
}

contactFrom.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
	const scrollUpEl = document.getElementById('scroll-up')

	this.scrollY >= 350
		? scrollUpEl.classList.add('show-scroll')
		: scrollUpEl.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
