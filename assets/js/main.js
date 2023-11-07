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
const section = document.querySelectorAll('section[id]')

const scrollActive = () => {
	const scrollDown = window.scrollY

	section.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 58
		const sectionId = current.getAttribute('id')
		const sectionClass = document.querySelector(
			'.nav__menu a[href*=' + sectionId + ']'
		)

		if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
			sectionClass.classList.add('active-link')
		} else {
			sectionClass.classList.remove('active-link')
		}
	})
}

window.addEventListener('scroll', scrollActive)
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => {
	document.body.classList.contains(darkTheme) ? 'dark' : 'light'
}

const getCurrentIcon = () => {
	themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
}

if (selectTheme) {
	document.body.classList[selectTheme === 'dark' ? 'add' : 'remove'](darkTheme)

	themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
		iconTheme
	)
}

themeButton.addEventListener('click', () => {
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)

	localStorage.setItem('selected-theme', getCurrentTheme)
	localStorage.setItem('selected-icon', getCurrentIcon)
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	/* reset: true, */
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: 'right' })

sr.reveal(`.home__name, .home__info`, { origin: 'left' })

sr.reveal(
	`.about__container, .section__title-1, .about__info, .contact__social, .contact__data`,
	{
		origin: 'left',
	}
)

sr.reveal(`.services__card, .projects__card`, { interval: 100 })
