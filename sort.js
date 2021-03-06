

	var current = 0;
	var allQuestions = [
	  "Which of the following would you most hate people to call you?",
	  "Once every century, the Flutterby bush produces flowers that adapt their scent to attract the unwary. If it lured you, it would smell of:",
	  "Given the choice, would you rather invent a potion that would guarantee you: ",
	  "After you have died, what would you most like people to do when they hear your name? ",
	  "What kind of instrument most pleases your ear? ",
	  "Which of the following do you find most difficult to deal with? ",
	  "Which of the following would you most like to study?",
	  "Late at night, walking alone down the street, you hear a peculiar cry that you believe to have a magical source. Do you:",
	  "You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:",
	  "Moon or Stars?",
	  "Black or White?",
	  "Dawn or Dusk",
	  "Left or Right",
	  "Heads or Tails",
	  "Forest or River",
	  "You enter an enchanted garden. What would you be most curious to examine first?",
	  "Four goblets are placed before you. Which would you choose to drink?",
	  "Four boxes are placed before you. Which would you try and open:",
	  "A Muggle confronts you and says that they are sure you are a witch or wizard. Do you:",
	  "What are you most looking forward to learning at Hogwarts?",
	  "Which would you rather be?",
	  "If you could have any power, which would you choose?",
	  "One of your house mates has cheated in a Hogwarts exam by using a Self-Spelling Quill. Now he has come top of the class in Charms, beating you into second place. Professor Flitwick is suspicious of what happened. He draws you to one side after his lesson and asks you whether or not your classmate used a forbidden quill. What do you do?",
	  "A troll has gone berserk in the Headmaster's study at Hogwarts. It is about to smash, crush and tear several irreplaceable items and treasures, including a cure for dragon pox, which the Headmaster has nearly perfected; student records going back 1000 years; a mysterious handwritten book full of strange runes, believed to have belonged to Merlin and an invisibility cloak.  Which one item would you rescue from the trolls club?",
	  "Which road tempts you most?",
	  "Which nightmare would frighten you most?",
	  "How would you like to be known in history?"
	];

	var allAnswers = [
	    ["Ordinary","Ignorant","Cowardly","Selfish"],
	    ["a crackling log fire","the sea","fresh parchment","home"],
	    ["love","glory","wisdom","power"],
	    ["Miss you, but smile.", "Ask for more stories about your adventures.","Think with admiration of your achievements.","I do not care what people think of me after I am dead; it is what they think of me while I am alive that counts."],
	    ["the violin","the trumpet","the piano","the drum"],
	    ["cold","loneliness","boredom","being ignored"],
	    ["ghosts","vampires","trolls","centaurs"],
	    ["Proceed with caution, keeping one hand on your concealed wand and an eye out for any disturbance.","Draw your wand and try to find the source of the noise.", "Draw your wand and stand your ground.","Withdraw into the shadows to await developments, while mentally reviewing the most appropriate defensive and offensive spells, should trouble occur?"],
	    ["Attempt to confuse the troll into letting all three of you pass without fighting.","Suggest drawing lots to decide which of you will fight.","Suggest that all three of you should fight (without telling the troll).","Volunteer to fight."],
	    ["Moon","Stars"],
	    ["Black","White"],
	    ["Dawn", "Dusk"],
	    ["Left", "Right"],
	    ["Heads","Tails"],
	    ["Forest","River"],
	    ["the silver leafed tree bearing golden apples","the fat red toadstools that appear to be talking to each other","the bubbling pool, in the depths of which something luminous is swirling","the statue of an old wizard with a strangely twinkling eye."],
	    ["The foaming, frothing, silvery liquid that sparkles as though containing ground diamonds.","The smooth, thick, richly purple drink that gives off a delicious smell of chocolate and plums.","The golden liquid so bright that it hurts the eye, and which makes sunspots dance all around the room.","The mysterious black liquid that gleams like ink, and gives off fumes that make you see strange visions."],
	    ["The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.","The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.","The ornate golden casket, standing on clawed feet, whose inscription warns that both secret knowledge and unbearable temptation lie within.","The small pewter box, unassuming and plain, with a scratched message upon it that reads: I open only for the worthy."],
	    ["Ask what makes them think so?","Agree, and ask whether they would like a free sample of a jinx?","Agree, and walk away, leaving them to wonder whether you are bluffing?","Tell them that you are worried about their mental health, and offer to call a doctor."],
	    ["Every area of magic I can.","Hexes and jinxes.","All about magical creatures, and how to befriend or care for them.","Flying on a broomstick."],
	    ["feared","trusted","imitated","praised"],
	    ["The power to speak to animals.","The power to change your appearance at will.","The power to read minds.","The power of invisibility."],
	    ["Lie and say you do not know (but hope that somebody else tells Professor Flitwick the truth).","Tell Professor Flitwick that he ought to ask your classmate (and resolve to tell your classmate that if he does not tell the truth, you will).","Tell Professor Flitwick the truth. If your classmate is prepared to win by cheating, he deserves to be found out. Also, as you are both in the same house, any points he loses will be regained by you, for coming first in his place.","You would not wait to be asked to tell Professor Flitwick the truth. If you knew that somebody was using a forbidden quill, you would tell the teacher before the exam started."],
	    ["dragon pox cure","student records","Merlin's book","invisibility cloak"],
	    ["The narrow, dark, lantern-lit alley.","The twisting, leaf-strewn path through the woods.","The cobbled street lined with ancient buildings","The wide, sunny, grassy lane."],
	    ["Standing on top of something very high and realizing suddenly that there are no hand or footholds, nor any barrier to stop you falling.","An eye at the keyhole of the dark, windowless room in which you are locked.","Waking up to find that neither your friends nor your family have any idea who you are.","Being forced to speak in such a silly voice that hardly anyone can understand you, and everyone laughs at you."],
	    ["the wise","the good","the great","the bold"]
	 ];
	var houseType = [
	  ['h','r','g','s'],
	  ['g','s','r','h'],
	  ['g','h','r','s'],
	  ['h','g','r','s'],
	  ['h','g','r','s'],
	  ['r','h','g','s'],
	  ['g','h','s','r'],
	  ['h','s','g','r'],
	  ['r','s','h','g'],
	  ['h','g'],
	  ['s','h'],
	  ['h','r'],
	  ['r','s'],
	  ['g','r'],
	  ['r','g'],
	  ['s','h','g','r'],
	  ['r','h','g','s'],
	  ['h','r','s','g'],
	  ['r','s','g','h'],
	  ['r','s','h','g'],
	  ['s','h','r','g'],
	  ['h','s','r','g'],
	  ['h','r','g','s'],
	  ['h','r','s','g'],
	  ['s','g','r','h'],
	  ['h','g','r','s'],
	  ['r','h','s','g']
	];
	//[h,g,r,s]
	  var person="hii";
	var answerArr = [0,0,0,0];
	var questionArea = document.getElementsByClassName('questions')[0],
	    answerArea = document.getElementsByClassName('answers')[0];

	function loadQuestion(){
	  questionArea.innerHTML = '';
	  questionArea.innerHTML = allQuestions[current];
	}

	function loadAnswers(){
	  var answers = allAnswers[current];
	  answerArea.innerHTML = '';
	  
	  for(var i=0; i<answers.length; i++){
	    (function(i){
	      var createDiv = document.createElement('div'),
	          text = document.createTextNode(allAnswers[current][i]);
	      createDiv.appendChild(text);
	      createDiv.addEventListener("click",function(){logAnswer(i)}, false);
	      answerArea.appendChild(createDiv);
	    })(i)
	  }
	}

	function logAnswer(i){
	  var choice = houseType[current][i];
	  switch(choice){
	    case ("h"):
	      answerArr[0] += 1;
	      break;
	    case("g"):
	      answerArr[1] += 1;
	      break;
	    case("r"):
	      answerArr[2] += 1;
	      break;
	    case("s"):
	      answerArr[3] += 1;
	      break;
	    default:
	      break;
	  } 
	  
	  if(current < allQuestions.length-1){
	    current += 1;
	    progressQuiz();
	  }
	  else{
	    //current = 0;
	    addAnswers();
	    questionArea.innerHTML =" Welcome to "+person;
	    answerArea.innerHTML = '';
	    Result();
	  }  
	}

	function addAnswers(){
	  var max = 0;
	  var maxIndex;
	
	  for(var i=0; i<4; i++){
	    if(answerArr[i]>=max){
	      maxIndex = i;
	      max = answerArr[i];
	    }
	  }; 
	  
	  switch(maxIndex){
	    case 0:
	      person = "Hufflepuff";
	      break;
	    case 1:
	      person  = "Gryffindor";
	      break;
	    case 2:
	      person = "Ravenclaw";
	      break;
	    case 3:
	      person = "Slytherin";
	      break;	 
	  
	}
	  
	  }
	function Result(){
		this.img = document.createElement("img");
		this.img.src = "images/huffle.png";
		src = document.getElementByClassName("Result");
		src.appendChild(this.img)
	}


	function progressQuiz(){
	  loadQuestion();
	  loadAnswers();
	}
	$(document).ready(function(){
		  progressQuiz();      
		})

	