document.body.onload = buildPage;

var percentage = '';
var currentSize = 100;
var score = 0;


function buildPage(){
	
	score=0;
	goHome();
	welcomePage();
	helpModal();
	
}

function welcomePage(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var start = document.createElement("button");
	var help = document.createElement("button");
	var span = document.getElementsByClassName("close")[0];
	var modal = document.getElementById("myModal");
	var leader = document.createElement('button');
	var mtb = document.createElement('button');
	
	const newContent = document.createTextNode("Welcome to bike race");
	
	heading.appendChild(newContent);
	heading.className = 'page-head';
	
	start.innerHTML = "Start Game";
	start.className = 'btn-group';
	start.id = 'startGame';

	help.innerHTML = "Help";
	help.className = 'btn-group';
	help.id = 'modal-btn';
	
	leader.innerHTML = 'View the leaderboard...';
	leader.className = 'btn-group';
	
	mtb.innerHTML = 'Learn more about mtb!';
	mtb.className = 'btn-group';
	
	
	start.onclick = function(){
		divIn.innerHTML = "";
		bikeSelect();
	}
	
	help.onclick = function(){
		modal.style.display = "block"
	}
	
	span.onclick = function() {
		modal.style.display = "none";
	}
	
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	
	mtb.onclick = function() {
		divIn.innerHTML = '';
		learnMTB();
	}
	
	leader.onclick = function() {
		divIn.innerHTML = '';
		leaderboard();
	}

	divIn.appendChild(heading);
	divIn.appendChild(start);
	divIn.appendChild(help);
	divIn.appendChild(leader);
	divIn.appendChild(mtb);
	fontSet();
	fontChange();
	
}


function startGate(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var btn = document.createElement("button");
	var desc = document.createElement("p");
	
	desc.innerHTML = "As the rider in front of you dissapears down the hill you take your place in the start gate. Pulling on your helmet and adjusting your goggles as you prepare to race in your first downhill world cup. Your heart quickens as you grip the bars and stand up on your pedals. As the third beep sounds you power out of the gate. A perfect start."
	desc.className = 'desc-style'
	
	heading.innerHTML = 'In the start gate...';
	heading.className = 'page-head';
	
	btn.innerHTML = "Go go go!";
	btn.className = 'btn-group';
	btn.id = 'option1';
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		firstCorner();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function goHome(){
	var divIn = document.getElementById('changeMe');
	var gh = document.getElementById('home');
	
	gh.onclick = function(){
		if(confirm('Are you sure you want to go home? This will delete your current progress.')){
		//divIn.innerHTML = "";
		//welcomePage();
		location.reload();
		return false;
		} else {
			
		}
	}
}

function fontSet() {
	
	document.getElementById('changeMe').style.fontSize = percentage;
	var buttons = document.getElementsByClassName('btn-group');
	
	for (var i = 0; i < buttons.length; i++){
		var button = buttons[i];
		button.style.fontSize = percentage;
	}
}
	
function fontChange() {
	var fontS = document.getElementById('textSize');
	var increaseS = 20;
	
		fontS.onclick = function() {
		
		var buttons = document.getElementsByClassName('btn-group');
		
		if (currentSize < 160){
			currentSize = currentSize + increaseS;
			percentage = currentSize + '%'
			document.getElementById('changeMe').style.fontSize = percentage;
			
			for (var i = 0; i < buttons.length; i++){
				var button = buttons[i];
				button.style.fontSize = percentage;
			}
			
		} else {
			percentage = '100%';
			currentSize = 100;
			document.getElementById('changeMe').style.fontSize = percentage;
			
			for (var i = 0; i < buttons.length; i++){
				var button = buttons[i];
				button.style.fontSize = percentage;
			}
		}
	}
}

function learnMTB() {
	var divIn = document.getElementById('changeMe');
	
	var heading = document.createElement('h1');
	
	heading.innerHTML = 'Learn some more about MTB here!';
	heading.className = 'page-head';
	
	var bigBox = document.createElement('div');
	bigBox.className = 'grid-wrap-learn';
	
	var first = document.createElement('article');
	var second = document.createElement('aside');
	
	first.className = 'double';
	second.className = 'double';
	first.id = 'first';
	second.id = 'second';
	
	first.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ligula sem, id accumsan neque semper eu. Praesent venenatis velit quis lorem dapibus, ut dictum augue lacinia. Nullam nec pellentesque ex, id porta leo. Donec lobortis turpis a mi congue lacinia. Nunc ultricies sodales diam, vel egestas mi iaculis sed. Aliquam vel tristique massa. Aenean maximus sollicitudin viverra. Nunc pharetra laoreet venenatis. Mauris viverra lobortis scelerisque. In mattis ullamcorper nulla, vel ultricies orci tincidunt vitae.';
	second.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ligula sem, id accumsan neque semper eu. Praesent venenatis velit quis lorem dapibus, ut dictum augue lacinia. Nullam nec pellentesque ex, id porta leo. Donec lobortis turpis a mi congue lacinia. Nunc ultricies sodales diam, vel egestas mi iaculis sed. Aliquam vel tristique massa. Aenean maximus sollicitudin viverra. Nunc pharetra laoreet venenatis. Mauris viverra lobortis scelerisque. In mattis ullamcorper nulla, vel ultricies orci tincidunt vitae.';
	
	var third = document.createElement('article');
	
	third.className = 'wide';
	third.id = 'third';
	third.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ligula sem, id accumsan neque semper eu. Praesent venenatis velit quis lorem dapibus, ut dictum augue lacinia. Nullam nec pellentesque ex, id porta leo. Donec lobortis turpis a mi congue lacinia. Nunc ultricies sodales diam, vel egestas mi iaculis sed. Aliquam vel tristique massa. Aenean maximus sollicitudin viverra. Nunc pharetra laoreet venenatis. Mauris viverra lobortis scelerisque. In mattis ullamcorper nulla, vel ultricies orci tincidunt vitae.';
	
	var image1 = document.createElement('aside');
	var image2 = document.createElement('aside');
	var image3 = document.createElement('aside');
	
	image1.className = 'imageRow';
	image2.className = 'imageRow';
	image3.className = 'imageRow';
	
	image1.id =  'image1';
	image2.id =  'image2';
	image3.id =  'image3';
	
	image1.innerHTML = 'This is an image';
	image2.innerHTML = 'This is an image';
	image3.innerHTML = 'This is an image';
	
	var fourth = document.createElement('article');
	
	fourth.className = 'wide';
	fourth.id = 'fourth';
	fourth.innerHTML = 'This is another block of wide text...';
	
	var fifth = document.createElement('article');
	var sixth = document.createElement('aside');
	
	fifth.className = 'double';
	sixth.className = 'double';
	
	fifth.id = 'fifth';
	sixth.id = 'sixth';
	
	fifth.innerHTML = 'some text here maybe';
	sixth.innerHTML = 'maybe an image here?';
	
	divIn.appendChild(heading);
	bigBox.appendChild(first);
	bigBox.appendChild(second);
	bigBox.appendChild(third);
	bigBox.appendChild(image1);
	bigBox.appendChild(image2);
	bigBox.appendChild(image3);
	bigBox.appendChild(fourth);
	bigBox.appendChild(fifth);
	bigBox.appendChild(sixth);
	divIn.appendChild(bigBox);
}

function bikeSelect() {
	var divIn = document.getElementById('changeMe');
	var forkScore = 0;
	var shockScore = 0;
	var frameScore = 0;
	
	var heading = document.createElement('h1');
	var desc = document.createElement('p');
	
	heading.innerHTML = 'Please choose your bike!';
	heading.className = 'page-head';
	
	desc.innerHTML = "First up you need to build your bike. Different components may affect your finish score! Once you are happy with your selection click 'Continue' to start the race.";
	desc.className = 'desc-style';
	
	var bigBox = document.createElement('div');
	
	var leftBox = document.createElement('article');
	var left2 = document.createElement('article');
	var left3 = document.createElement('article');
	
	var rightBox = document.createElement('article');

	bigBox.className = 'grid-wrapper';
	leftBox.id = 'leftTop';
	rightBox.id = 'right';
	left2.id = 'leftMid';
	left3.id = 'leftBottom';
	
	leftBox.className = 'select';
	left2.className = 'select';
	left3.className = 'select';
	
	rightBox.className = 'select';
	
	var item1 = document.createElement('img');
	var item2 = document.createElement('img');
	var item3 = document.createElement('img');
	var item4 = document.createElement('img');
	var item5 = document.createElement('img');
	var item6 = document.createElement('img');
	var item7 = document.createElement('img');
	var item8 = document.createElement('img');
	var item9 = document.createElement('img');
	
	
	var right1 = document.createElement('img');
	var right2 = document.createElement('img');
	var right3 = document.createElement('img');
	
	item1.src='RS.png';
	item2.src='FOX.png';
	item3.src='OHLINS.png';
	item4.src='RSS.png';
	item5.src='OHLINSS.png';
	item6.src='FOXS.png';
	item7.src='ALT.png';
	item8.src='MOND.png';
	item9.src='COVE.png';

	item1.className='grid-item';
	item2.className='grid-item';
	item3.className='grid-item';
	item4.className='grid-item';
	item5.className='grid-item';
	item6.className='grid-item';
	item7.className='grid-item';
	item8.className='grid-item';
	item9.className='grid-item';

	right1.src='fill.png';
	right2.src='fill.png';
	right3.src='fill.png';
	
	right1.className='grid-item';
	right2.className='grid-item';
	right3.className='grid-item';
	
	
	
	item1.onclick = function() {
		item1.style.backgroundColor = 'pink';
		item2.style.backgroundColor = 'transparent';
		item3.style.backgroundColor = 'transparent';
		
		right1.src = 'RS.png';
		forkScore = 30;
	}
	item2.onclick = function() {
		item1.style.backgroundColor = 'transparent';
		item2.style.backgroundColor = 'pink';
		item3.style.backgroundColor = 'transparent';
		
		right1.src = 'FOX.png';
		forkScore = 10;
	}
	item3.onclick = function() {
		item1.style.backgroundColor = 'transparent';
		item2.style.backgroundColor = 'transparent';
		item3.style.backgroundColor = 'pink';
		
		right1.src = 'OHLINS.png';
		forkScore = 30;
	}
	item4.onclick = function() {
		item4.style.backgroundColor = 'pink';
		item5.style.backgroundColor = 'transparent';
		item6.style.backgroundColor = 'transparent';
		
		right2.src = 'RSS.png';
		shockScore = 10;
	}
	item5.onclick = function() {
		item4.style.backgroundColor = 'transparent';
		item5.style.backgroundColor = 'pink';
		item6.style.backgroundColor = 'transparent';
		
		right2.src = 'OHLINSS.png';
		shockScore = 20;
	}
	item6.onclick = function() {
		item4.style.backgroundColor = 'transparent';
		item5.style.backgroundColor = 'transparent';
		item6.style.backgroundColor = 'pink';
		
		right2.src = 'FOXS.png';
		shockScore = 30;
	}
	item7.onclick = function() {
		item7.style.backgroundColor = 'pink';
		item8.style.backgroundColor = 'transparent';
		item9.style.backgroundColor = 'transparent';
		
		right3.src = 'ALT.png';
		frameScore = 10;
	}
	item8.onclick = function() {
		item7.style.backgroundColor = 'transparent';
		item8.style.backgroundColor = 'pink';
		item9.style.backgroundColor = 'transparent';
		
		right3.src = 'MOND.png';
		frameScore = 20;
	}
	item9.onclick = function() {
		item7.style.backgroundColor = 'transparent';
		item8.style.backgroundColor = 'transparent';
		item9.style.backgroundColor = 'pink';
		
		right3.src = 'COVE.png';
		frameScore = 30;
	}
	
	var btn = document.createElement('button');
	
	btn.innerHTML = "Continue...";
	btn.className = 'btn-group';
	btn.id = 'bikeButton';
	
	btn.onclick = function() {
		score = (frameScore + shockScore + forkScore);
		console.log(score);
		divIn.innerHTML = "";
		startGate();
	}

	divIn.appendChild(heading);
	divIn.appendChild(desc);
	
	divIn.appendChild(bigBox);
	bigBox.appendChild(leftBox);
	bigBox.appendChild(left2);
	bigBox.appendChild(left3);
	bigBox.appendChild(rightBox);
	
	leftBox.appendChild(item1);
	leftBox.appendChild(item2);
	leftBox.appendChild(item3);
	left2.appendChild(item4);
	left2.appendChild(item5);
	left2.appendChild(item6);
	left3.appendChild(item7);
	left3.appendChild(item8);
	left3.appendChild(item9);
	
	rightBox.appendChild(right1);
	rightBox.appendChild(right2);
	rightBox.appendChild(right3);
	
	divIn.appendChild(btn);
	
}

function firstCorner(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var btn2 = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = 'test.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'You approach the first corner...';
	heading.className = 'page-head';
	
	desc.innerHTML = 'You race out of the start gate and are confronted with the first beautifully built berm on the track. Two obvious lines have dug themselves into the bank of the corner. But which would you choose for maximum speed?';
	desc.className = 'desc-style';
	
	btn.innerHTML = "Stay high";
	btn.className = 'btn-group';
	
	btn2.innerHTML = "Tight inside";
	btn2.className = 'btn-group';
	
	btn.onclick = function(){
		score = score - 10;
		divIn.innerHTML = '';
		miniCrash()
	}
	
	btn2.onclick = function(){
		score = score + 10;
		divIn.innerHTML = '';
		bigJump();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	//divIn.appendChild(img);
	divIn.appendChild(btn);
	divIn.appendChild(btn2);
	fontSet();
	fontChange();
}

function miniCrash(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = 'test.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'Uh-oh... You came off the track!';
	heading.className = 'page-head';
	
	desc.innerHTML = "Your high line through the corner was too fast! Your front wheel slid out in the dusty conditions and you slid over the top of the berm. You've lost some time, but if you recover quickly you might still make the podium.";
	desc.className = 'desc-style';
	
	btn.innerHTML = "Get back on!";
	btn.className = 'btn-group';
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		bigJump();
		
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	//divIn.appendChild(img);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function bigJump(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var btn2 = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = 'test.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = "Woah there's a big jump ahead";
	heading.className = 'page-head';
	
	desc.innerHTML = 'Next up on the track is a big gap jump, with the takeoff sending you 35ft through the air to the carefully built wooden landing. Is it time to show off and pull a steezy backflip for the crowds? Or play it safe and squash the jump for maximum speed?';
	desc.className = 'desc-style';
	
	btn.innerHTML = "Squash";
	btn.className = 'btn-group';
	
	btn2.innerHTML = "Flip";
	btn2.className = 'btn-group';
	
	btn.onclick = function(){
		score = score + 15;
		divIn.innerHTML = '';
		treeCorner();
		
	}
	
	btn2.onclick = function(){
		score = score + 20;
		divIn.innerHTML = '';
		backflip();
		
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	//divIn.appendChild(img);
	divIn.appendChild(btn);
	divIn.appendChild(btn2);
	fontSet();
	fontChange();
}

function treeCorner(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var btn2 = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = 'test.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'The corner of tech!';
	heading.className = 'page-head';
	
	desc.innerHTML = "As you enter the first wooded section of the track there is a difficult corner. You've already seen two riders before you crash here and miss out on the podium... so what do you do?";
	desc.className = 'desc-style';
	
	btn.innerHTML = "Hug the tree!";
	btn.className = 'btn-group';
	
	btn2.innerHTML = "Round the roots";
	btn2.className = 'btn-group';
	
	btn.onclick = function(){
		score = score + 10;
		divIn.innerHTML = '';
		motorway();
	}
	
	btn2.onclick = function(){
		score = score + 5;
		divIn.innerHTML = '';
		motorway();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	//divIn.appendChild(img);
	divIn.appendChild(btn);
	divIn.appendChild(btn2);
	fontSet();
	fontChange();
}

function backflip(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = 'test.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'That backflip was INSANE';
	heading.className = 'page-head';
	
	desc.innerHTML = "Well your backflip certainly impressed the crowds and your sponsors! Even if you don't win, at least you looked awesome going down the hill!";
	desc.className = 'desc-style';
	
	btn.innerHTML = "Keep shredding!";
	btn.className = 'btn-group';
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		treeCorner();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	//divIn.appendChild(img);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function motorway(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var btn2 = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = 'test.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'The fastes section of track lies ahead...';
	heading.className = 'page-head';
	
	desc.innerHTML = "The motorway, a section of track with big jumps and flat full speed ground lies ahead. You've been riding with Bruni all season and know that a quick fork adjustment might you go even faster... But is there anything more effective than pedalling through as hard as possible?";
	desc.className = 'desc-style';
	
	btn.innerHTML = "Peddle peddle peddle";
	btn.className = 'btn-group';
	
	btn2.innerHTML = "Adjust your fork! #BruniMode";
	btn2.className = 'btn-group';
	
	btn.onclick = function(){
		score = score + 15;
		divIn.innerHTML = '';
		techSection();
	}
	
	btn2.onclick = function(){
		score = score + 25;
		divIn.innerHTML = '';
		bruniMode();
		
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	//divIn.appendChild(img);
	divIn.appendChild(btn);
	divIn.appendChild(btn2);
	fontSet();
	fontChange();
}

function techSection(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var btn2 = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = 'test.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'The risky tech section';
	heading.className = 'page-head';
	
	desc.innerHTML = 'A segment of the track well known for taking riders down. It was on a similar section in 2019 that Brook Macdonald crashed and broke his spine. But what is the best line?';
	desc.className = 'desc-style';
	
	btn.innerHTML = "Straight line speed!";
	btn.className = 'btn-group';
	
	btn2.innerHTML = "Trickier outside line";
	btn2.className = 'btn-group';
	
	btn.onclick = function(){
		score = 0;
		divIn.innerHTML = '';
		bigCrash();
	}
	
	btn2.onclick = function(){
		score = score + 12;
		divIn.innerHTML = '';
		finishStraight();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	//divIn.appendChild(img);
	divIn.appendChild(btn2);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function bruniMode(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = 'test.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'You went.... BRUNI MODE!!!';
	heading.className = 'page-head';
	
	desc.innerHTML = "Well it paid off for Bruni... let's hope it pays off for you too...";
	desc.className = 'desc-style';
	
	btn.innerHTML = "Keep racing!";
	btn.className = 'btn-group';
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		techSection();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	//divIn.appendChild(img);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function finishStraight(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var btn2 = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = 'test.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = "It's your chance to shine!";
	heading.className = 'page-head';
	
	desc.innerHTML = 'The finish line approaches and the crowds cheering rings in your ears. You know you need to finish impressivley... but which trick will impress the most?';
	desc.className = 'desc-style';
	
	btn.innerHTML = "MASSIVE whip";
	btn.className = 'btn-group';
	
	btn2.innerHTML = "No-hander!";
	btn2.className = 'btn-group';
	
	btn.onclick = function(){
		score = score + 15;
		divIn.innerHTML = '';
		podium();
	}
	
	btn2.onclick = function(){
		score = score + 14;
		divIn.innerHTML = '';
		podium();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	//divIn.appendChild(img);
	divIn.appendChild(btn);
	divIn.appendChild(btn2);
	fontSet();
	fontChange();
}

function podium(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = 'test.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'THE PODIUM';
	heading.className = 'page-head';
	
	desc.innerHTML = 'You made it to the bottom! Possibly with a few scrapes and bruises on the way, follow through to the leaderboard to see where you ended up.';
	desc.className = 'desc-style';
	
	btn.innerHTML = "See the results...";
	btn.className = 'btn-group';
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		scoreStore();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	//divIn.appendChild(img);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function bigCrash(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = 'test.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'Ouch...';
	heading.className = 'page-head';
	
	desc.innerHTML = "Well that didn't go to plan... looks like we're going to have to call the medic team! At least you were the last to race...";
	desc.className = 'desc-style';
	
	btn.innerHTML = "Call medical support!";
	btn.className = 'btn-group';
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		heliEvac();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	//divIn.appendChild(img);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function heliEvac(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = 'test.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'In the helicopter...';
	heading.className = 'page-head';
	
	desc.innerHTML = "A quick examination later and you're in the air ambulance on the way to hosipital... not the way you wanted the race to go. But at least you've got  agood story!";
	desc.className = 'desc-style';
	
	btn.innerHTML = "Take me to the hospital...";
	btn.className = 'btn-group';
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		hospital();
		
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	//divIn.appendChild(img);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function hospital(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = 'test.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'Much better! Better luck next time...';
	heading.className = 'page-head';
	
	desc.innerHTML = 'Only a few broken bones... You should be back to racing by next season. :) ';
	desc.className = 'desc-style';
	
	btn.innerHTML = "Show me the leaderboard...";
	btn.className = 'btn-group';
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		scoreStore();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	//divIn.appendChild(img);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function scoreStore(){
	
	var keyCount = 0;
	for(var key in localStorage){
		console.log(key);
		console.log(localStorage.getItem(key));
		keyCount = keyCount+1;
	}
	
	do{
		var name = window.prompt('Please enter a username!');
		//var date = new Date();
	} while(name !== null && name === "");
	
	var user_score = score;
	//localStorage.setItem(name, user_score);
	var newKey = keyCount + 1;
	
	var person = {
		name: name,
		score: score, 
	};
		
	localStorage.setItem(newKey, JSON.stringify(person));
	
	leaderboard();
}

function leaderboard(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	var result = document.createElement('p');
	
	var board = document.createElement('div')
	
	//var name = window.prompt('Please enter a username!');
	//var date = new Date();
	//var user_score = score;
	//localStorage.setItem(name, user_score);
	
	var inScore = document.createElement('p');
	
	board.className = 'leaderboard';
	
	result.innerHTML = score;
	result.className = 'result-item';
	
	img.src = 'test.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'LEADERBOARD';
	heading.className = 'page-head';
	
	desc.innerHTML = 'Here you can see all the local top scores. Can you make it to the top?';
	desc.className = 'desc-style';
	
	btn.innerHTML = "Go home";
	btn.className = 'btn-group';
	
	btn.onclick = function(){
		location.reload();
		return false;
	}
	
	var person = {};
	var nameD = {};
	var scoreD = {};
	
	var showName = document.createElement('aside');
	var showScore = document.createElement('aside');
	
	showName.innerHTML = 'Name';
	showScore.innerHTML = 'Score';
	
	showName.className = 'name-item';
	showScore.className= 'score-item';
	
	showName.id = 'showName';
	showScore.id = 'showScore';
	
	board.appendChild(showName);
	board.appendChild(showScore);
	
	for(var key in localStorage){
		
		if(key == 'length' || key == 'clear' || key == 'getItem' || key == 'key' || key == 'removeItem' || key == 'setItem'){
		} else {
			
		person = JSON.parse(localStorage.getItem(key));
		console.log(person);
		
		nameD['name' + key] = document.createElement('aside');
		nameD['name' + key].innerHTML = person.name;
		nameD['name' + key].className = 'name-item';
		
		scoreD['score' + key] = document.createElement('aside');
		scoreD['score' + key].innerHTML = person.score;
		scoreD['score' + key].className = 'score-item';
		
		
		board.appendChild(nameD['name' + key]);
		board.appendChild(scoreD['score' + key]);
		}
		
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(board);
	//divIn.appendChild(img);
	divIn.appendChild(btn);
	
	fontSet();
	fontChange();
}













function helpModal(){
	var fs = document.getElementById('goFull');
	var link = document.getElementById('helpMe');
	var span = document.getElementsByClassName("close")[0];
	var modal = document.getElementById("myModal");
	var btn = document.getElementById('modal-btn');
	
	link.onclick = function(){
		modal.style.display = "block"
	}
	
	fs.onclick = function() {
		var elem = document.documentElement;
		openFullscreen(elem);
	}
	
	btn.onclick = function(){
		modal.style.display = "block"
	}
	
	span.onclick = function() {
		modal.style.display = "none";
	}
	
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function openNav(){
	document.getElementById("sideNav").style.width = "250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav(){
	document.getElementById("sideNav").style.width = "0";
	document.body.style.backgroundColor = "white";
}
