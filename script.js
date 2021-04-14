// Bike Race JS Script by Finlay Emmott
// Help from a variety of websites was used throughout, due to repetition of features they have been listef here:
// https://blog.logrocket.com/how-to-dynamically-create-javascript-elements-with-event-handlers/
// https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript
// https://stackoverflow.com/questions/9422974/createelement-with-id
//

document.body.onload = buildPage;

var percentage = '';
var currentSize = 100;
var score = 0;


function buildPage(){
	
	//setup game
	score=0;
	volume();
	goHome();
	welcomePage();
	helpModal();
	
}

function welcomePage(){
	//build and display welcome options to the user
	
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var start = document.createElement("button");
	var help = document.createElement("button");
	var span = document.getElementsByClassName("close")[0];
	var modal = document.getElementById("myModal");
	var leader = document.createElement('button');
	var mtb = document.createElement('button');
	var soundModal = document.getElementById('sound-modal');
	
	const newContent = document.createTextNode("Welcome to bike race");
	heading.appendChild(newContent);
	heading.className = 'page-head';
	
	start.innerHTML = "Start Game";
	start.className = 'btn-group btn-home';
	start.id = 'startGame';

	help.innerHTML = "Help";
	help.className = 'btn-group btn-home';
	help.id = 'modal-btn';
	
	leader.innerHTML = 'View the leaderboard';
	leader.className = 'btn-group btn-home';
	
	mtb.innerHTML = 'Learn more about MTB';
	mtb.className = 'btn-group btn-home';
	
	var audio = document.getElementById('back');
	
	start.onclick = function(){
		divIn.innerHTML = "";
		audio.play();
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
	
	soundModal.style.display = 'block';
	
}

function startGate(){
	//display the start gate
	
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var btn = document.createElement("button");
	var desc = document.createElement("p");
	var img = document.createElement('img');
	
	img.src = './graphics/startgate.jpg';
	img.className = 'graphic';
	
	desc.innerHTML = "As the rider in front of you dissapears down the hill you take your place in the start gate. Pulling on your helmet and adjusting your goggles as you prepare to race in your first downhill world cup. Your heart quickens as you grip the bars and stand up on your pedals. As the third beep sounds you power out of the gate. A perfect start."
	desc.className = 'desc-style'
	
	heading.innerHTML = 'In the start gate...';
	heading.className = 'page-head';
	
	btn.innerHTML = "Go go go!";
	btn.className = 'btn-group btn-choice';
	btn.id = 'option1';
	
	var audio = document.getElementById('heart');
	var audio2 = document.getElementById('back')
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		audio.pause();
		audio2.play();
		firstCorner();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(img);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function goHome(){
	//reload the page to return home from the navigation button
	//will confirm reload
	
	var divIn = document.getElementById('changeMe');
	var gh = document.getElementById('home');
	
	gh.onclick = function(){
		if(confirm('Are you sure you want to go home? This will delete your current progress.')){
		location.reload();
		return false;
		} else {
			
		}
	}
}

function fontSet() {
	//sets the font size to the users preference
	
	document.getElementById('changeMe').style.fontSize = percentage;
	var buttons = document.getElementsByClassName('btn-group');
	
	for (var i = 0; i < buttons.length; i++){
		var button = buttons[i];
		button.style.fontSize = percentage;
	}
	
	var paras = document.getElementsByClassName('desc-style');
	
	for (var i = 0; i < paras.length; i++){
		var para = paras[i];
		para.style.fontSize = percentage;
	}
}
	
function fontChange() {
	//changes the font size od elements on the page - help from:
	//https://www.w3schools.com/jsref/prop_style_fontsize.asp
	//https://stackoverflow.com/questions/30217146/changing-fontsize-for-a-class-using-javascript
	
	var fontS = document.getElementById('textSize');
	var increaseS = 20;
	
		fontS.onclick = function() {
		
		var buttons = document.getElementsByClassName('btn-group');
		var paras = document.getElementsByClassName('desc-style');
		
		if (currentSize < 140){
			currentSize = currentSize + increaseS;
			percentage = currentSize + '%'
			
			document.getElementById('changeMe').style.fontSize = percentage;
			
			for (var i = 0; i < buttons.length; i++){
				var button = buttons[i];
				button.style.fontSize = percentage;
			}
		
	
			for (var i = 0; i < paras.length; i++){
				var para = paras[i];
				para.style.fontSize = percentage;
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
	//display the learn mtb page with video links
	
	var divIn = document.getElementById('changeMe');
	
	var heading = document.createElement('h1');
	heading.innerHTML = 'Want to get to know more about MTB?';
	heading.className = 'page-head';
	
	var desc = document.createElement('p');
	desc.className = 'desc-style';
	desc.innerHTML = 'Here are some cool videos to watch to inspire you to get out, explore, and ride your bike!';
	
	var list = document.createElement('ul');
	
	list.className = 'list';
	list.innerHTML = "<li class='list-item'><a href='https://www.youtube.com/watch?v=K_7k3fnxPq0&ab_channel=RedBull' target='_blank'>Danny MacAskill - Wee day out</a></li><li class='list-item'><a href='https://www.youtube.com/watch?v=yotOZVELSMc&ab_channel=IFHTFilms' target='_blank'>IHFT How to buy a mountain bike </a></li><li class='list-item'></li><li class='list-item'><a href='https://www.youtube.com/watch?v=L4268ai-XHI&ab_channel=TheAthertons' target='_blank'>Gee Atherton - The slate line</a></li><li class='list-item'><a href='https://www.youtube.com/channel/UCu8YylsPiu9XfaQC74Hr_Gw' target='_blank'>Berm Peak</a></li>";
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(list);

	
	fontSet();
}

function bikeSelect() {
	//display the bike selection screen
	
	var divIn = document.getElementById('changeMe');
	var forkScore = 0;
	var shockScore = 0;
	var frameScore = 0;
	
	var heading = document.createElement('h1');
	var desc = document.createElement('p');
	
	heading.innerHTML = 'Please choose your bike!';
	heading.className = 'page-head';
	
	desc.innerHTML = "First up you need to build your bike. Different components may affect your finish score! Once you are happy with your selection click 'Continue' to start the race. <span id='help-link'>Click here to learn more about bike parts.</span>";
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
	
	item1.src='./parts/RS.png';
	item2.src='./parts/FOX.png';
	item3.src='./parts/OHLINS.png';
	item4.src='./parts/RSS.png';
	item5.src='./parts/OHLINSS.png';
	item6.src='./parts/FOXS.png';
	item7.src='./parts/ALT.png';
	item8.src='./parts/MOND.png';
	item9.src='./parts/COVE.png';

	item1.className='grid-item';
	item2.className='grid-item';
	item3.className='grid-item';
	item4.className='grid-item';
	item5.className='grid-item';
	item6.className='grid-item';
	item7.className='grid-item';
	item8.className='grid-item';
	item9.className='grid-item';

	right1.src='./parts/fill.png';
	right2.src='./parts/fill.png';
	right3.src='./parts/fill.png';
	
	right1.className='grid-item';
	right2.className='grid-item';
	right3.className='grid-item';
	
	var forkP = 0;
	var shockP = 0;
	var frameP = 0;
	
	var modal = document.getElementById("myModal");
	
	
	
	item1.onclick = function() {
		item1.style.backgroundColor = '#ffb2f4';
		item2.style.backgroundColor = 'transparent';
		item3.style.backgroundColor = 'transparent';
		
		right1.src = './parts/RS.png';
		forkScore = 30;
		forkP = 1;
	}
	item2.onclick = function() {
		item1.style.backgroundColor = 'transparent';
		item2.style.backgroundColor = '#ffb2f4';
		item3.style.backgroundColor = 'transparent';
		
		right1.src = './parts/FOX.png';
		forkScore = 10;
		forkP = 1;
	}
	item3.onclick = function() {
		item1.style.backgroundColor = 'transparent';
		item2.style.backgroundColor = 'transparent';
		item3.style.backgroundColor = '#ffb2f4';
		
		right1.src = './parts/OHLINS.png';
		forkScore = 30;
		forkP = 1;
	}
	item4.onclick = function() {
		item4.style.backgroundColor = '#ffb2f4';
		item5.style.backgroundColor = 'transparent';
		item6.style.backgroundColor = 'transparent';
		
		right2.src = './parts/RSS.png';
		shockScore = 10;
		shockP = 1;
	}
	item5.onclick = function() {
		item4.style.backgroundColor = 'transparent';
		item5.style.backgroundColor = '#ffb2f4';
		item6.style.backgroundColor = 'transparent';
		
		right2.src = './parts/OHLINSS.png';
		shockScore = 20;
		shockP = 1;
	}
	item6.onclick = function() {
		item4.style.backgroundColor = 'transparent';
		item5.style.backgroundColor = 'transparent';
		item6.style.backgroundColor = '#ffb2f4';
		
		right2.src = './parts/FOXS.png';
		shockScore = 30;
		shockP = 1;
	}
	item7.onclick = function() {
		item7.style.backgroundColor = '#ffb2f4';
		item8.style.backgroundColor = 'transparent';
		item9.style.backgroundColor = 'transparent';
		
		right3.src = './parts/ALT.png';
		frameScore = 10;
		frameP = 1;
	}
	item8.onclick = function() {
		item7.style.backgroundColor = 'transparent';
		item8.style.backgroundColor = '#ffb2f4';
		item9.style.backgroundColor = 'transparent';
		
		right3.src = './parts/MOND.png';
		frameScore = 20;
		frameP = 1;
	}
	item9.onclick = function() {
		item7.style.backgroundColor = 'transparent';
		item8.style.backgroundColor = 'transparent';
		item9.style.backgroundColor = '#ffb2f4';
		
		right3.src = './parts/COVE.png';
		frameScore = 30;
		frameP = 1;
	}
	
	var audio = document.getElementById('heart');
	var audio2 = document.getElementById('back');
	
	var btn = document.createElement('button');
	btn.innerHTML = "Continue...";
	btn.className = 'btn-group btn-choice';
	btn.id = 'bikeButton';
			
	btn.onclick = function() {
		var total = forkP + shockP + frameP;
		
		if(total == 3){
		score = (frameScore + shockScore + forkScore);
		console.log(score);
		divIn.innerHTML = "";
		audio2.pause();
		audio.play();
		startGate();
		} else { 
			alert("You need to pick one fork, frame and shock before continuing!");
	}
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
	bikeModal();
	
	fontSet();
	
}

function firstCorner(){
	//dispaly the first corner screen 
	
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var btn2 = document.createElement("button");
	var img = document.createElement('img');
	
	var btnBlock = document.createElement('div');
	btnBlock.className = 'btn-choice';
	
	img.src = './graphics/firstCorner.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'You approach the first corner...';
	heading.className = 'page-head';
	
	desc.innerHTML = 'You race out of the start gate and are confronted with the first beautifully built berm on the track. Two obvious lines have dug themselves into the bank of the corner. But which would you choose for maximum speed?';
	desc.className = 'desc-style';
	
	btn.innerHTML = "Stay high";
	btn.className = 'btn-group btn-choice';
	
	btn2.innerHTML = "Tight inside";
	btn2.className = 'btn-group btn-choice';
	
	var audio = document.getElementById('crash');
	var audio2 = document.getElementById('back');
	
	btn.onclick = function(){
		score = score - 10;
		divIn.innerHTML = '';
		audio2.pause();
		audio.play();
		miniCrash()
	}
	
	btn2.onclick = function(){
		score = score + 10;
		divIn.innerHTML = '';
		audio2.play();
		bigJump();
	}
	
	btnBlock.appendChild(btn);
	btnBlock.appendChild(btn2);
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(img);
	divIn.appendChild(btnBlock);
	fontSet();
	fontChange();
}

function miniCrash(){
	// display the mini crash scene
	
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = './graphics/crash.png';
	img.className = 'graphic';
	
	heading.innerHTML = 'Uh-oh... You came off the track!';
	heading.className = 'page-head';
	
	desc.innerHTML = "Your high line through the corner was too fast! Your front wheel slid out in the dusty conditions and you slid over the top of the berm. You've lost some time, but if you recover quickly you might still make the podium.";
	desc.className = 'desc-style';
	
	btn.innerHTML = "Get back on!";
	btn.className = 'btn-group btn-choice';
	
	var audio = document.getElementById('crash');
	var audio2 = document.getElementById('back');
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		audio.pause();
		audio2.play()
		bigJump();
		
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(img);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function bigJump(){
	//dispplay the big jump scene
	
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var btn2 = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = './graphics/jump.png';
	img.className = 'graphic';
	
	heading.innerHTML = "Woah there's a big jump ahead";
	heading.className = 'page-head';
	
	desc.innerHTML = 'Next up on the track is a big gap jump, with the takeoff sending you 35ft through the air to the carefully built wooden landing. Is it time to show off and pull a steezy backflip for the crowds? Or play it safe and squash the jump for maximum speed?';
	desc.className = 'desc-style';
	
	btn.innerHTML = "Squash";
	btn.className = 'btn-group btn-choice';
	
	btn2.innerHTML = "Flip";
	btn2.className = 'btn-group btn-choice';
	
	btn.onclick = function(){
		score = score + 15;
		divIn.innerHTML = '';
		treeCorner();
		
	}
	
	var audio = document.getElementById('cheer');
	var audio2 = document.getElementById('back');
	
	btn2.onclick = function(){
		score = score + 20;
		divIn.innerHTML = '';
		audio2.pause;
		audio.play();
		backflip();
		
	}
	
	var btnBlock = document.createElement('div');
	btnBlock.className = 'btn-choice';
	
	btnBlock.appendChild(btn);
	btnBlock.appendChild(btn2);
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(img);
	divIn.appendChild(btnBlock);
	fontSet();
	fontChange();
}

function treeCorner(){
	//display the tree corner scene
	
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var btn2 = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = './graphics/corner.png';
	img.className = 'graphic';
	
	heading.innerHTML = 'The corner of tech!';
	heading.className = 'page-head';
	
	desc.innerHTML = "As you enter the first wooded section of the track there is a difficult corner. You've already seen two riders before you crash here and miss out on the podium... so what do you do?";
	desc.className = 'desc-style';
	
	btn.innerHTML = "Hug the tree!";
	btn.className = 'btn-group btn-choice';
	
	btn2.innerHTML = "Round the roots";
	btn2.className = 'btn-group btn-choice';
	
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
	
	var btnBlock = document.createElement('div');
	btnBlock.className = 'btn-choice';
	
	btnBlock.appendChild(btn);
	btnBlock.appendChild(btn2);
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(img);
	divIn.appendChild(btnBlock);
	fontSet();
	fontChange();
}

function backflip(){
	//display the backflip scene
	
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = './graphics/back.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'That backflip was INSANE';
	heading.className = 'page-head';
	
	desc.innerHTML = "Well your backflip certainly impressed the crowds and your sponsors! Even if you don't win, at least you looked awesome going down the hill!";
	desc.className = 'desc-style';
	
	btn.innerHTML = "Keep shredding!";
	btn.className = 'btn-group btn-choice';
	
	var audio = document.getElementById('cheer');
	var audio2 = document.getElementById('back');
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		audio.pause();
		audio2.play();
		treeCorner();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(img);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function motorway(){
	//display the motorway scene
	
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var btn2 = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = './graphics/motorway.png';
	img.className = 'graphic';
	
	heading.innerHTML = 'The fastes section of track lies ahead...';
	heading.className = 'page-head';
	
	desc.innerHTML = "The motorway, a section of track with big jumps and flat full speed ground lies ahead. You've been riding with Bruni all season and know that a quick fork adjustment might you go even faster... But is there anything more effective than pedalling through as hard as possible?";
	desc.className = 'desc-style';
	
	btn.innerHTML = "Pedal pedal pedal";
	btn.className = 'btn-group btn-choice';
	
	btn2.innerHTML = "Adjust your fork! #BruniMode";
	btn2.className = 'btn-group btn-choice';
	
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
	
	var btnBlock = document.createElement('div');
	btnBlock.className = 'btn-choice';
	
	btnBlock.appendChild(btn);
	btnBlock.appendChild(btn2);
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(img);
	divIn.appendChild(btnBlock);;
	fontSet();
	fontChange();
}

function techSection(){
	//dispaly the tech section scene
	
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var btn2 = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = './graphics/tech.png';
	img.className = 'graphic';
	
	heading.innerHTML = 'The risky tech section';
	heading.className = 'page-head';
	
	desc.innerHTML = 'A segment of the track well known for taking riders down. It was on a similar section in 2019 that Brook Macdonald crashed and broke his spine. But what is the best line?';
	desc.className = 'desc-style';
	
	btn.innerHTML = "Straight line speed!";
	btn.className = 'btn-group btn-choice';
	
	btn2.innerHTML = "Trickier outside line";
	btn2.className = 'btn-group btn-choice';
	var audio2 = document.getElementById('back');
	
	var audio = document.getElementById('heli');
	
	btn.onclick = function(){
		score = 0;
		divIn.innerHTML = '';
		audio2.pause();
		audio.play(heli);
		heliEvac();
	}
	
	var cheerAudio = document.getElementById('cheer');
	
	btn2.onclick = function(){
		score = score + 12;
		divIn.innerHTML = '';
		audio2.pause();
		cheerAudio.play();
		finishStraight();
	}
	
	var btnBlock = document.createElement('div');
	btnBlock.className = 'btn-choice';
	
	btnBlock.appendChild(btn);
	btnBlock.appendChild(btn2);
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(img);
	divIn.appendChild(btnBlock);
	fontSet();
	fontChange();
}

function bruniMode(){
	//display the bruni mode screen
	
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = './graphics/bruni.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'You went.... BRUNI MODE!!!';
	heading.className = 'page-head';
	
	desc.innerHTML = "Well it paid off for Bruni... let's hope it pays off for you too...";
	desc.className = 'desc-style';
	
	btn.innerHTML = "Keep racing!";
	btn.className = 'btn-group btn-choice';
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		techSection();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(img);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function finishStraight(){
	//display the finish straight scene
	
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var btn2 = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = './graphics/finish.png';
	img.className = 'graphic';
	
	heading.innerHTML = "It's your chance to shine!";
	heading.className = 'page-head';
	
	desc.innerHTML = 'The finish line approaches and the crowds cheering rings in your ears. You know you need to finish impressivley... but which trick will impress the most?';
	desc.className = 'desc-style';
	
	btn.innerHTML = "MASSIVE whip";
	btn.className = 'btn-group btn-choice';
	
	btn2.innerHTML = "No-hander!";
	btn2.className = 'btn-group btn-choice';
	
	var cheerAudio = document.getElementById('cheer');
	var hornAudio = document.getElementById('horn');
	
	btn.onclick = function(){
		score = score + 15;
		divIn.innerHTML = '';
		cheerAudio.pause();
		hornAudio.play();
		podium();

	}
	
	btn2.onclick = function(){
		score = score + 14;
		divIn.innerHTML = '';
		cheerAudio.pause();
		hornAudio.play();
		podium();
		
	}
	
	var btnBlock = document.createElement('div');
	btnBlock.className = 'btn-choice';
	
	btnBlock.appendChild(btn);
	btnBlock.appendChild(btn2);
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(img);
	divIn.appendChild(btnBlock);
	fontSet();
	fontChange();
}

function podium(){
	//display the podium scene
	
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = './graphics/podium.png';
	img.className = 'graphic';
	
	heading.innerHTML = 'THE PODIUM';
	heading.className = 'page-head';
	
	desc.innerHTML = 'You made it to the bottom! Possibly with a few scrapes and bruises on the way, follow through to the leaderboard to see where you ended up.';
	desc.className = 'desc-style';
	
	btn.innerHTML = "See the results...";
	btn.className = 'btn-group btn-choice';
	
	var hornAudio = document.getElementById('horn');
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		scoreStore();
		hornAudio.pause();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(img);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function heliEvac(){
	//display the heli evac scene
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = './graphics/air.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'In the helicopter...';
	heading.className = 'page-head';
	
	desc.innerHTML = "Well that loos sore... looks like it's time to get taken to the nearest hospital in the air ambulance. At least you get a ride in the helicopter?";
	desc.className = 'desc-style';
	
	btn.innerHTML = "Take me to the hospital...";
	btn.className = 'btn-group btn-choice';
	
	var audio = document.getElementById('heli');
	var audio2 = document.getElementById('hosp');
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		audio.pause();
		audio2.play();
		hospital();
		
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(img);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function hospital(){
	//display the hospital scene
	
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	
	img.src = './graphics/hosp.jpg';
	img.className = 'graphic';
	
	heading.innerHTML = 'Much better! Better luck next time...';
	heading.className = 'page-head';
	
	desc.innerHTML = 'Only a few broken bones... You should be back to racing by next season. :) ';
	desc.className = 'desc-style';
	
	btn.innerHTML = "Show me the leaderboard...";
	btn.className = 'btn-group btn-choice';
	
	var audio = document.getElementById('hosp');
	var audio2 = document.getElementById('back');
	
	btn.onclick = function(){
		divIn.innerHTML = '';
		audio.pause();
		audio2.play();
		scoreStore();
	}
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(img);
	divIn.appendChild(btn);
	fontSet();
	fontChange();
}

function scoreStore(){
	//get the current score and store it in localStorage, along with a username and unique identifier in a JSON format.
	//https://stackoverflow.com/questions/42596022/get-multiple-values-with-local-storage
	//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
	
	var keyCount = 0;
	for(var key in localStorage){
		console.log(key);
		console.log(localStorage.getItem(key));
		keyCount = keyCount+1;
	}
	
	do{
		var name = window.prompt('Please enter a username!');
	} while(name !== null && name === "");
	
	var user_score = score;
	var newKey = keyCount + 1;
	
	var person = {
		num: newKey,
		name: name,
		score: score, 
	};
		
	localStorage.setItem(newKey, JSON.stringify(person));
	
	leaderboard();
}

function leaderboard(){
	//get each leaderboard entry. Sort into order and display to the screen.
	//https://stackoverflow.com/questions/5117127/use-dynamic-variable-names-in-javascript
	
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	var desc = document.createElement('p');
	var btn = document.createElement("button");
	var img = document.createElement('img');
	var result = document.createElement('p');
	
	var board = document.createElement('div')
	
	var inScore = document.createElement('p');
	
	board.className = 'leaderboard';
	
	result.innerHTML = score;
	result.className = 'result-item';
	
	heading.innerHTML = 'LEADERBOARD';
	heading.className = 'page-head';
	
	desc.innerHTML = 'Here you can see all the local top scores. Can you make it to the top?';
	desc.className = 'desc-style';
	
	btn.innerHTML = "Go home";
	btn.className = 'btn-group btn-choice';
	
	btn.onclick = function(){
		location.reload();
		return false;
	}
	
	var person = {};
	
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
	
	var keyCount = 0;
	
	for(var key in localStorage){
		keyCount = keyCount + 1;
	}
	
	keyCount = keyCount - 6;
	
	var personStore = [];
	var personSort = [];
	
	for(var key in localStorage){
		if(key == 'length' || key == 'clear' || key == 'getItem' || key == 'key' || key == 'removeItem' || key == 'setItem'){
		
		} else {
			person = JSON.parse(localStorage.getItem(key));
			personStore.push(person);
		}
	}
	
	personStore.sort(compareScore);
	console.log(personStore);
		
	for(var i = 0; i < personStore.length; i++){
		var nameD = {};
		var scoreD = {};
		
		nameD['name' + personStore[i].num] = document.createElement('aside');
		if(personStore[i].name == null){
			nameD['name' + personStore[i].num].innerHTML = 'No username';
		} else {
			nameD['name' + personStore[i].num].innerHTML = personStore[i].name;
		}
		nameD['name' + personStore[i].num].className = 'name-item';
	
		scoreD['score' + personStore[i].num] = document.createElement('aside');
		scoreD['score' + personStore[i].num].innerHTML = personStore[i].score;
		scoreD['score' + personStore[i].num].className = 'score-item';
		
		if(i == 0){
			nameD['name' + personStore[i].num].id = 'high-name';
			scoreD['score' + personStore[i].num].id = 'high-score';
		} else if (i == 1){
			nameD['name' + personStore[i].num].id = 'second-name';
			scoreD['score' + personStore[i].num].id = 'second-score';
		} else if (i == 2){
			nameD['name' + personStore[i].num].id = 'third-name';
			scoreD['score' + personStore[i].num].id = 'third-score';
		}

		
		board.appendChild(nameD['name' + personStore[i].num]);
		board.appendChild(scoreD['score' + personStore[i].num]);
	}

	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(board);
	divIn.appendChild(btn);
	
	fontSet();
	fontChange();
}

function compareScore(a,b){
	//sort array of scores based on score
	//https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
	
	return b.score - a.score;
}

function helpModal(){
	//display modal containing help info and also allow fullscreen
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

function bikeModal() {
	//show the modal describing the bike build page.
	var elem = document.getElementById('help-link');
	var modal = document.getElementById("bike-modal");
	var span = document.getElementsByClassName("close")[1];
	
	elem.onclick = function(){
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
	//open full screen
	//https://www.w3schools.com/howto/howto_js_fullscreen.asp
	
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }
}

function openNav(){
	//open side navigation menu
	document.getElementById("sideNav").style.width = "250px";
	document.getElementById('changeMe').style.opacity = "0.5";	

}

function closeNav(){
	//close side navigation menu
	document.getElementById("sideNav").style.width = "0";
	document.getElementById('changeMe').style.opacity = "1";
}

function volume(){
	//adjust volume
	var slider = document.getElementById('myRange');
	var audios = document.getElementsByClassName('audio');
	
	slider.addEventListener('input', function(){
		for(var i = 0; i < audios.length; i++){
			audios[i].volume = (slider.value / 100);
		}
		console.log(slider.value);
	}, false);
}

 function playOpen(){
	 //play background music when modal closes
	var backT = document.getElementById('back');
	var modal = document.getElementById('sound-modal');
	backT.play();
	modal.style.display = "none";
}
