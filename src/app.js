import { data } from "./data/english-spanish.js"
import { shuffleArray } from "./utils.js"

const originalText = document.querySelector('.original')
const translatedText = document.querySelector('.translated')
const showContainer = document.querySelector('.show-container')
const optionsContainer = document.querySelector('.options')
const scoreText = document.querySelector('.score')
const failBtn = document.querySelector('.fail');
const successBtn = document.querySelector('.success');
const showBtn = document.querySelector('.show-button');

let currentNumber = 0;
let score = 0;
const cards = shuffleArray(data)

scoreText.textContent = score
const cleanAndNew = () => {
	optionsContainer.classList.add('hide')
	optionsContainer.classList.remove('show')
	showContainer.classList.remove('hide')
	translatedText.classList.remove('show')

	originalText.textContent = cards[currentNumber].original
	translatedText.textContent = cards[currentNumber].translation
}

const handleOptionClick = (event) => {
	if (event.target.name === 'fail') {
		score--

		const [failAnswer] = cards.splice(currentNumber, 1)

		const randomNumber = Math.floor(Math.random() * 10) + 1
		const newPosition = randomNumber+currentNumber

		cards.splice(newPosition, 0, failAnswer)
	}

	if (event.target.name ==='success') {
    score++
  }

	if (score < 0) {
		scoreText.classList.add('text-red')
	} else {
		scoreText.classList.remove('text-red')
	}

	currentNumber++
	scoreText.textContent = score
	cleanAndNew()
}


showBtn.addEventListener('click', () => {
	translatedText.classList.add('show')
	optionsContainer.classList.add('show')

	showContainer.classList.add('hide')
})


successBtn.addEventListener('click', handleOptionClick)
failBtn.addEventListener('click', handleOptionClick)


originalText.textContent = cards[currentNumber].original
translatedText.textContent = cards[currentNumber].translation
