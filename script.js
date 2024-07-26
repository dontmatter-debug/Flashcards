const flashcards = document.getElementsByClassName('flashcards')[0];
const createBox = document.getElementsByClassName('create-box')[0];
const question = document.getElementById('question');
const answer = document.getElementById('answer');

const contentArray = localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : [];


contentArray.forEach(divMaker);

function divMaker(text){
	var div = document.createElement('div');
	var h2_question = document.createElement('h2');
	var h2_answer = document.createElement('h2');

	div.classList.add('flashcard')
	h2_question.setAttribute('style', "border-top: 1px solid red; padding: 10px; margin-top: 30px");

	h2_question.innerHTML = text.myQuestion;

	h2_answer.setAttribute('style', 'text-align: center; display: none; color: red;');

	h2_answer.innerHTML = text.myAnswer;

	div.appendChild(h2_question);
	div.appendChild(h2_answer);

	div.addEventListener("click", () => {
		if(h2_answer.style.display === 'none'){
			h2_answer.style.display = 'block'
		} else if(h2_answer.style.display === 'block') {
			h2_answer.style.display = 'none'
		}
	});

	flashcards.appendChild(div);
}

function delCard() {
localStorage.clear();
flashcards.innerHTML = '';
contentArray = []
};


function newCard() {
    createBox.style.display = 'block';
};

function hideBox() {
    createBox.style.display = 'none'
};

function addFlashCard() {
let flashcardInfo = {
    myQuestion: question.value,
    myAnswer: answer.value
}

contentArray.push(flashcardInfo);
localStorage.setItem('cards', JSON.stringify(contentArray))

divMaker(contentArray[contentArray.length - 1]);
question.value = ''
answer.value = ''
}