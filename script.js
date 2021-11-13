document.body.onload = buildPage;
var percentage = '';
var currentSize = 100;
var score = 0;

function buildPage(){
	
	//setup game
	buttons()
}

function buttons(){
	var divIn = document.getElementById('changeMe');
	const heading = document.createElement("h1");
	
	var day1 = document.createElement("button");
	var day2 = document.createElement("button");
	var day3 = document.createElement("button");
	var day4 = document.createElement("button");
	var day5 = document.createElement("button");
	var day6 = document.createElement("button");
	var day7 = document.createElement("button");
	var day8 = document.createElement("button");
	
	const newContent = document.createTextNode("Hi Han, here's 8 days of isolation");
	heading.appendChild(newContent);
	heading.className = 'page-head';
	
	day1.innerHTML = "Saturday 13th";
	day1.className = 'btn-group btn-home';
	day1.id = 'startGame';
	day2.innerHTML = "Sunday 14th";
	day2.className = 'btn-group btn-home';
	day2.id = 'startGame';
	day3.innerHTML = "Monday 15th";
	day3.className = 'btn-group btn-home';
	day3.id = 'startGame';
	day4.innerHTML = "Tuesday 16th";
	day4.className = 'btn-group btn-home';
	day4.id = 'startGame';
	day5.innerHTML = "Wednesday 17th";
	day5.className = 'btn-group btn-home';
	day5.id = 'startGame';
	day6.innerHTML = "Thursday 18th";
	day6.className = 'btn-group btn-home';
	day6.id = 'startGame';
	day7.innerHTML = "Friday 19th";
	day7.className = 'btn-group btn-home';
	day7.id = 'startGame';
	day8.innerHTML = "Saturday 20th";
	day8.className = 'btn-group btn-home';
	day8.id = 'startGame';
	
	day1.onclick = function() {
		divIn.innerHTML = '';
		sat();
	}
	day2.onclick = function() {
		divIn.innerHTML = '';
		sun();
	}
	day3.onclick = function() {
		divIn.innerHTML = '';
		mon();
	}
	day4.onclick = function() {
		divIn.innerHTML = '';
		tue();
	}
	day5.onclick = function() {
		divIn.innerHTML = '';
		wed();
	}
	day6.onclick = function() {
		divIn.innerHTML = '';
		thur();
	}
	day7.onclick = function() {
		divIn.innerHTML = '';
		fri();
	}
	day8.onclick = function() {
		divIn.innerHTML = '';
		sat1();
	}
	divIn.appendChild(heading);
	divIn.appendChild(day1);
	divIn.appendChild(day2);
	divIn.appendChild(day3);
	divIn.appendChild(day4);
	divIn.appendChild(day5);
	divIn.appendChild(day6);
	divIn.appendChild(day7);
	divIn.appendChild(day8);
	
}

function sat(){
	var divIn = document.getElementById('changeMe');
	
	var heading = document.createElement('h1');
	heading.innerHTML = 'Saturday 13th';
	heading.className = 'page-head';
	
	var desc = document.createElement('p');
	desc.className = 'desc-style';
	desc.innerHTML = 'Day 2 woop woop! Hard to say having covid is fun but after today we only gotz 7 days of iso left gurlllll';
	
	var desc1 = document.createElement('p');
	desc1.className = 'desc-style';
	desc1.innerHTML = 'This website is the product of my boredom, and if you check back each day there will probably be some new stuff under the button for that day';
	
	var desc2 = document.createElement('p');
	desc2.className = 'desc-style';
	desc2.innerHTML = 'Today you have a link to Koalas to the max - which was going to be a custom photo but for some reason I could not get any of my sexy pics of you to work and an (I think) funny TikTok.';
	
	var desc3 = document.createElement('p');
	desc3.className = 'desc-style';
	desc3.innerHTML = "<a href='https://www.koalastothemax.com/' target='_blank'>Koalas</a>";
	
	var desc4 = document.createElement('p');
	desc4.className = 'desc-style';
	desc4.innerHTML = "<a href='https://photos.app.goo.gl/mDpFFa5TDaitkoE68' target='_blank'>Sexy tiktok vid</a>";
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(desc1);
	divIn.appendChild(desc2);
	divIn.appendChild(desc3);
	divIn.appendChild(desc4);
}

function sun(){
	var divIn = document.getElementById('changeMe');
	
	var heading = document.createElement('h1');
	heading.innerHTML = 'Sunday 14th';
	heading.className = 'page-head';
	
	var desc = document.createElement('p');
	desc.className = 'desc-style';
	desc.innerHTML = 'Sorry... it is not Sunday yet, or laziness has taken over so come back later.';
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
}

function mon(){
	var divIn = document.getElementById('changeMe');
	
	var heading = document.createElement('h1');
	heading.innerHTML = 'Monday 15th';
	heading.className = 'page-head';
	
	var desc = document.createElement('p');
	desc.className = 'desc-style';
	desc.innerHTML = 'Sorry... it is not Monday yet, or laziness has taken over so come back later.';
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
}

function tue(){
	var divIn = document.getElementById('changeMe');
	
	var heading = document.createElement('h1');
	heading.innerHTML = 'Tuesday 16th';
	heading.className = 'page-head';
	
	var desc = document.createElement('p');
	desc.className = 'desc-style';
	desc.innerHTML = 'Sorry... it is not Tuesday yet, or laziness has taken over so come back later.';
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
}

function wed(){
	var divIn = document.getElementById('changeMe');
	
	var heading = document.createElement('h1');
	heading.innerHTML = 'Wednesday 17th';
	heading.className = 'page-head';
	
	var desc = document.createElement('p');
	desc.className = 'desc-style';
	desc.innerHTML = 'Sorry... it is not Wednesday yet, or laziness has taken over so come back later.';
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
}

function thur(){
	var divIn = document.getElementById('changeMe');
	
	var heading = document.createElement('h1');
	heading.innerHTML = 'Thursday 18th';
	heading.className = 'page-head';
	
	var desc = document.createElement('p');
	desc.className = 'desc-style';
	desc.innerHTML = 'Sorry... it is not Thursday yet, or laziness has taken over so come back later.';
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
}

function fri(){
	var divIn = document.getElementById('changeMe');
	
	var heading = document.createElement('h1');
	heading.innerHTML = 'Friday 19th';
	heading.className = 'page-head';
	
	var desc = document.createElement('p');
	desc.className = 'desc-style';
	desc.innerHTML = 'Sorry... it is not Friday yet, or laziness has taken over so come back later.';
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
}

function sat1(){
	var divIn = document.getElementById('changeMe');
	
	var heading = document.createElement('h1');
	heading.innerHTML = 'Saturday 20th';
	heading.className = 'page-head';
	
	var desc = document.createElement('p');
	desc.className = 'desc-style';
	desc.innerHTML = 'Sorry... it is not Saturday yet, or laziness has taken over so come back later.';
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
}