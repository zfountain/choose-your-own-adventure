// Choose Your Own Post-Apocalyptic Adventure!

var name = prompt("Greetings! What is your name?");

var move1 = prompt("Hello, " + name + "! Which version of the post-apocalyptic future would you like to visit? Mutant animal-human hybrids, zombies, or nuclear wasteland dominated by desert pirates? Choose hybrids, zombies, or pirates.");

if (move1.toUpperCase() === "HYBRIDS") {
	var hybridsMove2 = prompt("Mutant human-animal hybrids. Excellent choice! You are approached by a human carrying a machete and an animal-human hybrid with antlers. Both offer to take you in, or you could always wait for someone else to come along. Who do you go with? Choose human, antlers, or wait.");
		if (hybridsMove2.toUpperCase() === "HUMAN") {
			var hybridsMove3 = prompt("Human. Seems like a logical choice. Do you want to take his machete and run or stay with him? Choose run or stay.");
				if (hybridsMove3.toUpperCase() === "RUN") {
					
					// Note from Mike: 
					// In the future, refrain from using alert(). It's an outdated method for writing contents to the webpage, in this case
					// console.log() would have been enough to see the output in the console. 
					
					alert("Run. Good call! Now that you have a machete, you're ready for whatever the apocalypse may bring.");
				} else {
					alert("Stay. Unfortunately he's a cannibal! Hope you go good with potatoes.");
				}
		} else if (hybridsMove2.toUpperCase() === "ANTLERS") {
			var hybridsMove3 = prompt("Animal-human hybrid. Deer-man offers to take you into his community, but you are kinda hungry. Do you kill and eat him or go back to his camp? Choose kill or camp.");
				if (hybridsMove3.toUpperCase() === "KILL") {
					alert("Kill/eat. Ew. But you gotta eat.");
				} else {
					alert("Go back to camp. The deer guy takes you into their community.  Although there’s a scarcity of hamburgers and hotdogs, you are set for life.");
				}
		} else {
			alert("Wait. Unfortunately, a band of wolf-people come along and eat you. (Sad trombone.)");
		}
} else if (move1.toUpperCase() === 'ZOMBIES') {
	var zombiesMove2 = prompt("Zombies. Well, that’s very Walking Dead of you. With zombies shambling toward you and your back to a wall, you notice a gun and a crowbar on the ground, but they're on opposite sides of you and you only have time to reach one. You could always give up and let the zombies get you. Choose gun, crowbar, or give up.");
		if (zombiesMove2.toUpperCase() === "gun") {
			alert("Gun. Come on, really? Everyone knows bullets are scarce in the apocalypse, and whoever left the gun didn't reload it. You have time to fight off a few zombies, but, well, then it gets ugly.");
		}
		else if (zombiesMove2.toUpperCase() === "CROWBAR") {
			alert("Crowbar. You chose wisely! Not only can you easily smash zombie skulls from a safe distance, but you can also use it to break open doors and procure supplies.");
		}

		else if (zombiesMove2.toUpperCase() === "GIVE UP") {
			alert("Let the zombies get you. Who would do that?! Well, at least you kept some zombies busy for a while.");
		}

} else {
	var piratesMove2 = prompt("Nuclear wasteland dominated by desert pirates. Arrrr. At dusk, you see three different camps: one camp is holding a loud, wild bonfire; the next contains a few quiet people with small campfire; the last contains a solo camper. Which camp do you approach? Choose bonfire, campfire, or camper.")
		if (piratesMove2.toUpperCase() === "BONFIRE") {
			var piratesMove3 = prompt("Wild Bonfire. Straight to the party, eh? Looks like you've found a band of pirates! The first mate approaches you and, assuming you're a pirate, asks how many travelers you robbed today. Not knowing how many travelers a pirate is expected to rob, you take a wild guess.");
			if (piratesMove3 <= 10) {
				alert("The pirate is so enraged by the low number he throws you in the bonfire. Ouch!");
			} else if (piratesMove3 >= 11 && piratesMove3 < 40) {
				alert("The pirate is disappointed and tells you to go out and rob a few more before it gets dark.");
			} else if (piratesMove3 >= 41 && piratesMove3 < 199) {
				alert("The pirate tells you you've done well and invites you to drink rum and eat.");
			} else {
				alert("The pirate is convinced you are lying and he throws you in the bonfire. Ouch!");
			}
		} else if (piratesMove2.toUpperCase() === "CAMPFIRE") {
			var piratesMove3 = prompt("Quiet Campers. These are some nice people. They are camping awfully close to the pirate party, but you all have a good time anyway. Ask if they want to move or keep quiet? Choose move or quiet.");
			if (piratesMove3.toUpperCase() === "MOVE") {
				alert("Move. The campers mock your cowardice, but listen to you and pack up.");
			} else if (piratesMove3.toUpperCase() === "QUIET") {
				alert("Keep quiet. The pirates attack the camp! It was only a matter of time.");
			}
		} else if (piratesMove2.toUpperCase() === "CAMPER") {
			var piratesMove3 = prompt("Solo camper. The solo camper is alone for a reason. He complains about his life and how there aren’t any good restaurants anymore. Do you fall asleep out of boredom or listen intently? Choose sleep or listen.");
			if (piratesMove3.toUpperCase() === "SLEEP") {
				alert("Fall asleep. Solo camper wakes you up to complain about how you fell asleep while he was talking.");
			} else if (piratesMove3.toUpperCase() === "LISTEN") {
				alert("Listen intently. Solo camper is so pleased at your attentiveness that he gives you a bottle of water.");
			}
		}
	}