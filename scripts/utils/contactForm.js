//Dom Element
const first = document.querySelector('#first')
const last = document.querySelector('#last')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const form = document.querySelector('form')
const closeModalBtn = document.querySelector('.closeModal')
const headerMenu = document.querySelector('header')
const main = document.querySelector("main")
const body = document.querySelector('body')
const modal = document.getElementById('contact_modal')
const contactButton = document.querySelector('.contact_button')

const sendButton = document.querySelector('.sendForm')

let isModalFormOpen = false

function displayModal() {
	isModalFormOpen = true
	modal.style.display = 'block'
    modal.setAttribute('aria-hidden', false)
	body.classList.add('no-scroll')
	main.setAttribute('aria-hidden', true)
	headerMenu.setAttribute('aria-hidden', true)
	closeModalBtn.focus()
}
function closeModal() {
	isModalFormOpen = false
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', true)
    main.setAttribute('aria-hidden', false)
    headerMenu.setAttribute('aria-hidden', false)
    body.classList.remove('no-scroll')
    contactButton.focus()
}
function escapeModal() {
	if (isModalFormOpen) {
		closeModal()
	}
}

//event sendForm
sendButton.addEventListener('click', () => sendForm() )

//envoye formulaire en console
function sendForm () {
    console.log({
		first: first.value,
		last: last.value,
		email: email.value,
		message: message.value,
	})
    form.reset()
    closeModal()
}



