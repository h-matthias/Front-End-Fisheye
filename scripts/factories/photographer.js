function photographerFactory(data) {
	const { id, name, portrait, city, country, tagline, price } = data

	const picture = `assets/photographers/${portrait}`
	//page index.html
	function getUserCardDOM() {
		const article = document.createElement('article')
		const a = document.createElement('a')
		a.setAttribute('href', `./photographer.html?id=${id}`)
		const img = document.createElement('img')
		img.setAttribute('src', picture)
		img.setAttribute('alt', '')
		const h2 = document.createElement('h2')
		h2.textContent = name
		a.appendChild(img)
		a.appendChild(h2)
		article.appendChild(a)

		const aside = document.createElement('aside')
		const cityAndCountry = document.createElement('p')
		const tag = document.createElement('p')
		const priceElt = document.createElement('p')

		cityAndCountry.textContent = `${city}, ${country}`
		cityAndCountry.classList.add('city')
		tag.textContent = tagline
		tag.classList.add('tagline')
		priceElt.textContent = `${price}€/jour`
		priceElt.classList.add('price')
		aside.appendChild(cityAndCountry)
		aside.appendChild(tag)
		aside.appendChild(priceElt)

		article.appendChild(aside)

		return article
	}
	//page photographer.html
	function getOneUserCardDOM() {
		//bloc donné photographe
		const infoPhotographer = document.createElement('div')
		const h1 = document.createElement('h1')
		const pCity = document.createElement('p')
		const pTag = document.createElement('p')

		h1.textContent = name
		h1.id = "namePhotograph"
		pCity.textContent = `${city}, ${country}`
		pCity.classList = "city"
		pTag.textContent = tagline
		pTag.classList = "tag"

		infoPhotographer.appendChild(h1)
		infoPhotographer.appendChild(pCity)
		infoPhotographer.appendChild(pTag)

		//photo du photographe
		const photo = document.createElement('img')
		photo.setAttribute('src', picture)
		photo.setAttribute('alt', '')
		photo.setAttribute('aria-labelledby', "namePhotograph")

		//encart like et prix journalier
		const aside = document.createElement('aside')
		const plike = document.createElement('p')
		const pPrice = document.createElement('p')
		
		pPrice.textContent = `${price}€/jour`

		aside.appendChild(pPrice)


		return {infoPhotographer, photo, aside}
	}
	return {
		getOneUserCardDOM,
		getUserCardDOM,
	}
}
