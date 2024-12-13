import { cards } from "./data/english-spanish.js"

const originalText = document.querySelector('.original')
const translatedText = document.querySelector('.translated')
const showContainer = document.querySelector('.show-container')
const optionsContainer = document.querySelector('.options-container')
const scoreText = document.querySelector('.score')

const failBtn = document.querySelector('.fail');
const successBtn = document.querySelector('.success');
const showBtn = document.querySelector('.show-button');


let currentNumber = 0;
let score = 0;


scoreText.textContent = score
const cleanAndNew = () => {
	optionsContainer.classList.add('hide')
	optionsContainer.classList.remove('show')
	showContainer.classList.remove('hide')
	translatedText.classList.remove('show')


	// currentNumber++;
	console.log(currentNumber)
	originalText.textContent = cards[currentNumber].original
	translatedText.textContent = cards[currentNumber].translation
}

const handleOptionClick = (event) => {
	if (event.target.name === 'fail') {
		score--
	}
	if (event.target.name ==='success') {
    score++
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







console.log("DEBUG")

