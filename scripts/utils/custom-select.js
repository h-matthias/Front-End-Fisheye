//Dom element
const select = document.querySelector('select')
const selectedBtn = document.querySelector('.selected')
const optionSelected = document.querySelector('.custom-select .selected p')
const customSelected = document.querySelector('.custom-select')
const selectOption = document.querySelector('.custom-select .option')
const imgBtn = document.querySelector('.custom-select .selected img')

const arrayOption = ['Popularité', 'Date', 'Titre']

let optionIsSelect = select.selectedOptions[0].value
let isDropdownOpen = false

let optionBtn

optionSelected.textContent = optionIsSelect

function writeOptionDom() {
	arrayOption.map((item) => {
		if (item != optionIsSelect) {
			selectOption.innerHTML += `<hr><p tabindex='0' aria-labelledby="${item}" >${item}</p>`
		}
	})
}

selectedBtn.addEventListener('click', () => {
	if (!isDropdownOpen) {
		openDropdown()
	} else {
		closeDropdown()
	}
})
selectedBtn.addEventListener('keydown', (keyboardEvent) => {
	keyboardEvent.stopPropagation()
	if (keyboardEvent.key == 'Enter') {
		if (!isDropdownOpen) {
			openDropdown()
		} else {
			closeDropdown()
		}
	}
})

function openDropdown() {
	isDropdownOpen = true
	imgBtn.style.transform = 'rotate(90deg)'
	customSelected.style.borderRadius = '5px 5px 0 0 '
	selectOption.style.height = '92px'
	writeOptionDom()
	addQuerySelectorAndEventListener(optionBtn)
}
function closeDropdown() {
	isDropdownOpen = false
	imgBtn.style.transform = 'rotate(-90deg)'
	selectOption.style.height = '0px'
	customSelected.style.borderRadius = '5px 5px 5px 5px'
	selectOption.innerHTML = ''
}

function addQuerySelectorAndEventListener(elements) {
	elements = document.querySelectorAll('.custom-select .option p')
	elements.forEach((element) => {
		element.addEventListener('click', () => {
			select.selectedIndex = arrayOption.indexOf(element.textContent)
			optionSelected.textContent = element.textContent
			optionIsSelect = element.textContent
			updateMedia(optionIsSelect)
			closeDropdown()
		})
		element.addEventListener('keydown', (keyboardEvent) => {
			if (keyboardEvent.key == 'Enter') {
				select.selectedIndex = arrayOption.indexOf(element.textContent)
				optionSelected.textContent = element.textContent
				optionIsSelect = element.textContent
				updateMedia(optionIsSelect)
				closeDropdown()
			}
		})
	})
}
