function mediaFactory(data, name) {
    const { id, photographerId, title, image, video, likes, date, price } = data
    const nameArtist = name.split(' ')[0]
    const urlPicture = image ? `assets/Sample_Photos/${nameArtist}/${image}` : ''
    const urlVideo = video ? `assets/Sample_Photos/${nameArtist}/${video}` : ''
    const heart = 'assets/icons/heart.svg'
    console.log(urlPicture, urlVideo)

    function getMediaCardDOM() {
        const li = document.createElement('li')
        const div = document.createElement('div')
        const pName = document.createElement('p')
        const pLikes = document.createElement('p')
        const imgLikes = document.createElement('img')
        const img = document.createElement('img')
        const video = document.createElement('video')

        if (!urlVideo) {
            img.setAttribute('src', urlPicture)
            img.setAttribute('alt', title)
            li.appendChild(img)
        } else {
            video.setAttribute('src', urlVideo)
            video.setAttribute('alt', title)
            li.appendChild(video)
        }

        pName.textContent = title
        pLikes.textContent = likes

        div.appendChild(pName)
        div.appendChild(pLikes)
        li.appendChild(div)

        return li
	}


    return {getMediaCardDOM}

}
