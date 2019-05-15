/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game
 {
 	constructor()
 	{
 		this.missed = 0;
 		this.phrases = [
 			new Phrase("Grit"),
 			new Phrase("Dream"),
 			new Phrase("Determination"),
 			new Phrase("The Grind"),
 			new Phrase("Consistency")
 		]
 		this.activePhrase = null;
 	}
 	// hide start menu
 	startGame()
 	{
 		document.getElementById('overlay').style.visibility = 'hidden';
 		this.activePhrase = this.getRandomPhrase();
 		this.activePhrase.addPhraseToDisplay();
 	};

 	// select and return a random phrase from array in 'phrases property'
 	getRandomPhrase()
 	{
 		const randomIndex = Math.floor(Math.random() * this.phrases.length);
 		return this.phrases[randomIndex];
 	};
 	// if all the letters match then you win
 	checkForWin()
 	{
 		const hides = document.querySelectorAll('.hide');
 		if (hides.length === 0)
 		{
 			return true;
 		}
 		else
 		{
 			return false
 		}
 	};
 	// Everytime guess is incorrect it will remove a heart
 	removeLife()
 	{
 		this.missed += 1;
 		const hearts = document.querySelectorAll('img');
 		for (let i = 0; i < this.missed; i++)
 		{
 			hearts[i].src = "images/lostHeart.png";
 		}
 		if (this.missed === 5)
 		{
 			this.gameOver(false);
 		}
 	};

 	// if you guessed it correct or not
 	gameOver(gameWon)
 	{
 		const gameOverMessage = document.getElementById('game-over-message');
 		const overLay = document.getElementById('overlay');
 		if (gameWon === true)
 		{
 			gameOverMessage.innerHTML = "Great job, you win!";
 			overLay.className = "win";
 			overLay.style.visibility = 'visible';
 		}
 		else
 		{
 			gameOverMessage.innerHTML = "Sorry, you lost!";
 			overLay.className = "lose";
 			overLay.style.visibility = 'visible';
 		}
 		this.resetGame();
 	};
 	// if the button matches the correct letter if not the letter becomes disabled
 	handleInteraction(button)
 	{
 		button.disabled = true;
 		if (!this.activePhrase.phrase.includes(button.textContent))
 		{
 			button.className = "wrong";
 			this.removeLife();
 		}
 		else
 		{
 			button.className = "chosen";
 			this.activePhrase.showMatchedLetter(button.textContent);
 			if (this.checkForWin() === true)
 			{
 				this.gameOver(true);
 			}
 		}
 	};
 	// reset game
 	resetGame()
 	{
 		this.missed = 0;
 		document.querySelector('ul').innerHTML = " ";
 		const keys = document.querySelectorAll('button');
 		keys.forEach(key =>
 		{
 			key.disabled = false;
 			key.className = "key";
 		});
 		const heartImages = document.querySelectorAll('img');
 		heartImages.forEach(image =>
 		{
 			image.src = "images/liveHeart.png";
 		});
 	};
 }
