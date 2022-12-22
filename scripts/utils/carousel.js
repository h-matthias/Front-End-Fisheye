window.addEventListener('load', () => {
	loadCarousel()
})

let listItems = []
let listItemsCarousel = []
let indexCarousel = 0
let carousel
let isCarouselOpen = false

const controlLeft = document.querySelector('.controls-left')

function loadCarousel() {
	//Dom Element
	carousel = document.querySelector('.carousel')

	listItems = Array.from(document.querySelectorAll('.item'))
	listItemsCarousel = Array.from(document.querySelectorAll('.carousel-item'))

	listItems.forEach((item, index) => {
		item.addEventListener('click', () => openCarousel(index))
		
	})
	function openCarousel(index) {
		isCarouselOpen = true
		carousel.style.display = 'block'
		listItemsCarousel[index].style.display = 'block'
		listItemsCarousel[index].setAttribute('aria-hidden', false)
		carousel.setAttribute('aria-hidden', false)
		main.setAttribute('aria-hidden', true)
		headerMenu.setAttribute('aria-hidden', true)
		main.style.display = 'none'
		body.classList.add('no-scroll')
		indexCarousel = index
	}
}

function closeCarousel() {
	resetCarousel()
	isCarouselOpen = false
	main.style.display = 'block'
	carousel.style.display = 'none'
	carousel.setAttribute('aria-hidden', true)
	main.setAttribute('aria-hidden', false)
	headerMenu.setAttribute('aria-hidden', false)
	body.classList.remove('no-scroll')
	listItems[indexCarousel].children[0].children[0].focus()
}

function resetCarousel() {
	listItemsCarousel.forEach((item) => {
		item.style.display = 'none'
		item.setAttribute('aria-hidden', true)
	})
}

function escapeCarousel(keyboardEvent) {
	const attrs = main.getAttribute('aria-hidden')
	if (keyboardEvent.key === 'Escape' && attrs) {
		closeCarousel()
	}
}

function nextCarousel() {
	const curentIndex = indexCarousel
	const nextIndex =
		curentIndex == listItemsCarousel.length - 1 ? 0 : curentIndex + 1

	listItemsCarousel[curentIndex].setAttribute('aria-hidden', true)
	listItemsCarousel[curentIndex].style.display = 'none'

	listItemsCarousel[nextIndex].setAttribute('aria-hidden', false)
	listItemsCarousel[nextIndex].style.display = 'block'
	indexCarousel = nextIndex
}

function previousCarousel() {
	const curentIndex = indexCarousel
	const previousIndex =
		curentIndex == 0 ? listItemsCarousel.length - 1 : curentIndex - 1

	listItemsCarousel[curentIndex].setAttribute('aria-hidden', true)
	listItemsCarousel[curentIndex].style.display = 'none'

	listItemsCarousel[previousIndex].setAttribute('aria-hidden', false)
	listItemsCarousel[previousIndex].style.display = 'block'

	indexCarousel = previousIndex
}
