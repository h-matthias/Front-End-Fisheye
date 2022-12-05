function photographerFactory(data) {
	const {id, name, portrait, city, country, tagline, price } = data

	const picture = `assets/photographers/${portrait}`

	function getUserCardDOM() {
		const article = document.createElement('article')
		const a = document.createElement('a')
		a.setAttribute('href', '#')
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
	return {
		id,
		name,
		city,
		country,
		tagline,
		price,
		picture,
		getUserCardDOM,
	}
}
