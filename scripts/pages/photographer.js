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

async function displayMedia(medias, photographer, totalLikes) {
	const photographerSection = document.querySelector('.photograph-header')

	const photographerModel = photographerFactory(photographer, totalLikes)
	const { infoPhotographer, photo, aside } =
		photographerModel.getOneUserCardDOM()
	photographerSection.prepend(infoPhotographer)
	photographerSection.appendChild(photo)
	photographerSection.appendChild(aside)

	const mediaSection = document.querySelector('.list-item')
    const mediaCarousel = document.querySelector('.list-carousel')

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

	displayMedia(medias, photographer, totalLikes)
	displayNameArtistInModal(photographer)
}

init()
