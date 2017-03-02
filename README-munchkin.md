# Core Features

* Setup
  * Start a new game (player vs computer)
  * Shuffle
  * Deal 2 hands
  	* 1 card to player
  	* 1 card to computer

* Play
	* Select a card from the deck
	* Select a card to play
	* Take an action based on card played (or take no action)

* Win
	* Play continues back and forth
	* A winner is declared

* Save winners on leaderboard
* Restart the game


# User Stories

* As a player, I want to be able to choose my name.
* As a player, I want to be able to start a new game.
* As a computer, I want to shuffle/deal 1 card to each player.

# How

* A card will be removed from the player's state array when clicked and moved to the discard array.
This will change it's physical location on the page
