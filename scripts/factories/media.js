function mediaFactory(data, name) {
	const { id, photographerId, title, image, video, likes, date, price } = data
	const nameArtist = name.split(' ')[0]
	const urlPicture = image
		? `assets/Sample_Photos/${nameArtist}/${image}`
		: ''
	const urlVideo = video ? `assets/Sample_Photos/${nameArtist}/${video}` : ''
	const heart = 'assets/icons/heart.svg'

	function getMediaCardDOM() {
		const li = document.createElement('li')
		const div = document.createElement('div')
		const divMedia = document.createElement('div')
		const pName = document.createElement('p')
		const pLikes = document.createElement('p')
		const imgLikes = document.createElement('img')
		const img = document.createElement('img')
		const video = document.createElement('video')

		imgLikes.setAttribute('src', heart)
		imgLikes.setAttribute('alt', 'likes')
		imgLikes.classList.add('heart')
		imgLikes.setAttribute('tabindex', 0)

		if (!urlVideo) {
			img.setAttribute('src', urlPicture)
			img.setAttribute('alt', title + ' closeup view')
			divMedia.setAttribute('tabindex', 0)
			divMedia.setAttribute('role', 'link')
			divMedia.appendChild(img)
			li.appendChild(divMedia)
		} else {
			video.setAttribute('src', urlVideo)
			video.setAttribute('alt', title + ' closeup view')
			video.setAttribute('aria-label', title + ' closeup view')
			divMedia.setAttribute('tabindex', 0)
			divMedia.setAttribute('role', 'link')
			divMedia.appendChild(video)
			li.appendChild(divMedia)
		}

		pName.textContent = title
		pLikes.textContent = likes
		pLikes.classList.add('numberLikes')

		div.appendChild(pName)
		div.appendChild(pLikes)
		div.appendChild(imgLikes)
		li.appendChild(div)
        li.classList.add('item')

		return li
	}

	function getMediaCarouselDom() {
		const li = document.createElement('li')
		const pName = document.createElement('p')

		const img = document.createElement('img')
		const video = document.createElement('video')

		pName.textContent = title

        li.classList.add("carousel-item")
		li.setAttribute('aria-hidden', true)

		if (!urlVideo) {
			img.setAttribute('src', urlPicture)
			img.setAttribute('alt', title)
			li.appendChild(img)
		} else {
			video.setAttribute('src', urlVideo)
			video.setAttribute('controls','')
			li.appendChild(video)
		}

        li.appendChild(pName)
        li.style.display = 'none'


        return li
	}

	return { getMediaCardDOM, getMediaCarouselDom }
}
