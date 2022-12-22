//Mettre le code JavaScript lié à la page photographer.html

const paramsId = new URLSearchParams(document.location.search).get('id')

async function getProjectPhotographer() {
	const response = await fetch('./data/photographers.json')
	const json = await response.json()
	const newArrayPhotographer = json.photographers.filter(
		(photographer) => photographer.id === Number(paramsId)
	)
	const photographer = newArrayPhotographer[0]
	const medias = json.media.filter(
		(media) => media.photographerId === Number(paramsId)
	)
	return {
		photographer,
		medias,
	}
}
async function displayphotographer(photographer, totalLikes) {
	const photographerSection = document.querySelector('.photograph-header')

	const photographerModel = photographerFactory(photographer, totalLikes)
	const { infoPhotographer, photo, aside } =
		photographerModel.getOneUserCardDOM()

	photographerSection.prepend(infoPhotographer)
	photographerSection.appendChild(photo)
	photographerSection.appendChild(aside)
}

async function displayMedia(medias, photographer) {
	const mediaSection = document.querySelector('.list-item')
	const mediaCarousel = document.querySelector('.list-carousel')
	mediaCarousel.innerHTML = ''
	mediaSection.innerHTML = ''

	medias.forEach((media) => {
		const mediaModel = mediaFactory(media, photographer.name)
		//card DOM insert
		const mediaCardDOM = mediaModel.getMediaCardDOM()
		mediaSection.appendChild(mediaCardDOM)
		//carousel DOM insert
		const mediaCarouselDom = mediaModel.getMediaCarouselDom()
		mediaCarousel.appendChild(mediaCarouselDom)
	})
}

function displayNameArtistInModal(photographer) {
	const name = document.querySelector('#contact-me')
	name.textContent = `Contactez-moi ${photographer.name}`
}

async function init() {
	const { photographer, medias } = await getProjectPhotographer()
	const likes = medias.map((mediaLikes) => mediaLikes.likes)
	const totalLikes = likes.reduce((acc, curr) => acc + curr, 0)

	orderMedia(medias, 'Popularité')

	displayphotographer(photographer, totalLikes)
	displayMedia(medias, photographer)
	displayNameArtistInModal(photographer)
}

init()

function orderMedia(media, order) {
	switch (order) {
		case 'Popularité':
			media.sort((a, b) => {
				return b.likes - a.likes
			})
			break
		case 'Date':
			media.sort((a, b) => {
				return new Date(b.date) - new Date(a.date)
			})
			break
		case 'Titre':
			media.sort((a, b) => {
				return a.title.localeCompare(b.title)
			})
			break
		default:
			break
	}
}

async function updateMedia(order) {
	const { photographer, medias } = await getProjectPhotographer()
	orderMedia(medias, order)

	displayMedia(medias, photographer)
	setTimeout(() => {
		loadLike(), loadCarousel()
	}, 1000)
}

//evenement de gestion carousel avec touche clavier
window.addEventListener('load', () => {
	window.addEventListener('keydown', (keyboardEvent) => {
		switch (keyboardEvent.key) {
			case 'Escape':
				escapeCarousel(keyboardEvent)
				escapeModal(keyboardEvent)
				break
			case 'ArrowRight':
				if (isCarouselOpen) nextCarousel()
				break
			case 'ArrowLeft':
				if (isCarouselOpen) previousCarousel()
				break
			default:
				break
		}
	})
})
