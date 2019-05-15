/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase
{
	constructor(phrase)
	{
		this.phrase = phrase.toLowerCase();
	}

	// creating and displaying the phrase, adding or hiding the letters
	addPhraseToDisplay()
	{
		const phraseUl = document.querySelector('#phrase ul');
		for (let i = 0; i < this.phrase.length; i++)
		{
			const phraseLi = document.createElement('li');
			const letter = this.phrase[i];
			phraseLi.textContent = letter;
			phraseLi.className = `hide letter ${letter}`;
			if (letter === " ")
			{
				phraseLi.className = 'space';
			}
			phraseUl.appendChild(phraseLi);
		}
	};


	// check if letter is what is in the phrase
	checkLetter(letter)
	{
		if (this.phrase.includes(letter))
		{
			return true;
		}
		else
		{
			return false;
		}
	};
	//see if the letter matches and it will either show or hide it
	showMatchedLetter(letter)
	{
		const letterLis = document.querySelectorAll('li');
		letterLis.forEach(function (li)
		{
			if (li.textContent === letter)
			{
				li.classList.remove('hide');
				li.classList.add('show');
			}
		})
	};
}
