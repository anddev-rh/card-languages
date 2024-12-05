const cards = [
	{
		id: 1,
		original: "Hello world",
		translation: "Hola mundo",
	},
	{
		id: 2,
    original: "Goodbye world",
    translation: "Adiós mundo",
	},
	{
		id: 3,
    original: "Welcome to the website",
    translation: "Bienvenido a la web",
	},
	{
		id: 4,
    original: "This is a test",
    translation: "Este es un test",
	}
]


const originalText = document.querySelector('.original')
const translatedText = document.querySelector('.translated')
const showContainer = document.querySelector('.show-container')
const optionsContainer = document.querySelector('.options-container')

const showBtn = document.querySelector('.show-button')



showBtn.addEventListener('click', () => {
	translatedText.style.display = 'block'
	optionsContainer.style.display = 'block'

	showContainer.classList.add('hidden')

})




originalText.textContent = cards[0].original
translatedText.textContent = cards[0].translation







console.log("DEBUG")

