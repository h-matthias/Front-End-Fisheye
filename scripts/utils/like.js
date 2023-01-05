window.addEventListener('load', () => {loadLike()})

function loadLike() {
	const numbersOfLikes = Array.from(document.querySelectorAll('.numberLikes'))
	const likesBtns = Array.from(document.querySelectorAll('.heart'))
	const totalLikes = document.querySelector('.total-likes')
	let arrayIndexLiked = []

	likesBtns.forEach((btnLike, index) => {
		btnLike.addEventListener('click', (e) => {
			e.stopPropagation()
			likesItem(index)
		})
		btnLike.addEventListener('keypress', (key) => {
			key.stopPropagation()
			if (key.key === "Enter") likesItem(index)
		})
	})

	function likesItem(index) {
		if (arrayIndexLiked.includes(index)) {
			unlike(index)
		} else {
			like(index)
		}
	}
	function unlike(index) {
		const newArr = arrayIndexLiked.filter((item) => item != index)
		arrayIndexLiked = newArr
		const numberLike = Number(numbersOfLikes[index].textContent)
		const totallike = Number(totalLikes.textContent)
		numbersOfLikes[index].textContent = numberLike - 1
		totalLikes.textContent = totallike - 1
		likesBtns[index].setAttribute('src', './assets/icons/heart.svg')
		likesBtns[index].removeAttribute('aria-label')
	}
	function like(index) {
		arrayIndexLiked.push(index)
		const numberLike = Number(numbersOfLikes[index].textContent)
		const totallike = Number(totalLikes.textContent)
		numbersOfLikes[index].textContent = numberLike + 1
		totalLikes.textContent = totallike + 1
		likesBtns[index].setAttribute('src', './assets/icons/heart-black.svg')
		likesBtns[index].setAttribute('aria-label', 'Vou aimez déjà ce media')
	}
}
