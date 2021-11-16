document.body.onload = buildPage;
var percentage = '';
var currentSize = 100;
var score = 0;

function buildPage(){
	
	//setup game
	goHome();
	buttons();
	helpModal();
}

function goHome(){
	//reload the page to return home from the navigation button
	//will confirm reload
	
	var divIn = document.getElementById('changeMe');
	var gh = document.getElementById('home');
	
	gh.onclick = function(){
		location.reload();
	}
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
	desc.innerHTML = 'Welcome to day 3 of isolating, can you imagine a more fun way to spend our week? Gotta admit I am bored and lowkey missing seeing your face';
	
	var desc1 = document.createElement('p');
	desc1.className = 'desc-style';
	desc1.innerHTML = 'Today we start off with a little QR code. From the link navigate to the HEX value below by popping it in the box, and then wall 5, shelf 5 and volume 5. Page 179 should be a message for you.';
	
	var desc5 = document.createElement('p');
	desc5.className = 'desc-style';
	desc5.innerHTML = '<img src="qr.PNG">';
	
	var desc2 = document.createElement('p');
	desc2.className = 'desc-style';
	desc2.innerHTML = 'lda1kd8rh1e9jsduuvasacct150r22h1x2aho5vxgmykudp7rqi7f2gnyq4til6m0u198vm3ao5b77ryx7pkx1dl9l2sbbcl8tfngrp61zd56rs1wnniiwz6ese672dh3g1nnxsz1wnd8ilzqxfr06z3ygvrg8u47v9hv9mf37qxy7xrdvpsc01pl3b1uq9tg55rg1ei7ns21q98a5cn59uhksojnz3wyaf2nam3l4q7n1g4r8esaq59byvxk7ays59l4ewoub1j3d38qxrex31w7255i91yq0hoxh00pun9uj5yj5h77ww4fd83j8drbf404vm57d02h33u2or9kzvkvr25o8bhhuutiw4kzgc1psbkhxd6a5mgzn5adxlv75nnpzqezb37eoul8rzty5tztvn13ueul8gffoj7p9o2w3ys32hcn0zwxxhz8rdi9vdx1d838wmn8d8s1nfyw3eou9flxl1jkclb6l8o0x92xnr9n7oo59p4aexo8psyg55ovsrrqow2pxrp0a7g61vxn4538fdwb2vq18jtt0qvet9iirk345p45d0zrgub3yse980jw1n6eoqu711avdtqcura75daxpwdt3qja2hr2g26dt7ox8d2947mj6bzjjzrz2cte4lev1p4q9dizzh2mba48xp1u92p5efleab1mxnc3d3lwn3s5aj7bci1jpvvftr1hlgnafqnfuji3uirjv6mebpl3vxi6vif0p0725no5vdttiwiqm3mh4ho3jbsrugcrrl80huxxr8ys9js2tf1u00t0qkjcbd0qfv1hx4plq8btk1quqs62f0sreqw50qqzgduuvrsinort8hu6vlpxk91xacdpmjdohz7mi722nlnmzyh9nz4oddi6kn6gi80ep2rqhhkv09673gyv3nttdbthtjv69eke9fxivplv68yhszd4yq8ojs7uyu6sdnszocodlk5ced7q9grkhoqej9bcxajykec3pslsyi5gvivgk4cjhfex1b5de2lwhkazkd3bcvhyfu1w42yzvr8zwwxfdbcnq4hjtq7k3e2r725879242vteg8s2p3ctxcfo5rg283n0o66cmmgj97x9f318wm4a13rh8quaflmzwlodu1nno6ne5j8z8he028jvb62ead6j3h8y6yiu2n8fwfjli7ugl2aenem3xto6vqkmux569ssw0efazs3onds4h68ml3m8l7w73qjsh3dr4peyz5xpo8341b5nit0ucc1iogf6yc599pgxh40uc3znymkesfwh5jt9syoaz7gj2b9ya0c44jt5uc6nbk9o10p83irm2trumnzlho0aj5ydrh4iiaogn59vmy4iqmqz03jcixefp9fbhaukqedgj53b2m73am82d87kn3l6pokqf2qpntqe7w5dunizyilaexzd7ii99auhojrfr1fojthlrxfrfvvxz3nariahoxvms9wf6lxkroa1nlgjyj3wse9ghz2dd7spgyqj5aky04uir8rrgzws8qjl7eqn15c6roudwgocylbfx1xvkqnbpeh2aw67pvg4vugyinwj6wkt3vvf4m2kqin75h1p0higryac2f02lyrr72nkrvdqh96j2sniw9gr82t9tc6pp22is5d0ocucjfd83hgpb5e9vixt6ic6ssrawqiif6i1hedi6nuqx8mowi64mdid1wxg39vhkz4cfa1445lu6bzk8768nszn7wts5brv8fdsha6y7sgvmersg6vplq5m2x3ubkdcxi9nyu8cmicgfg5l0kd3jk8uj6mhc39p6gl044y5rzifq0ybln1r3o5wyzuessv5clijymo3rbivqkzcaraacy3ebf4uwkyveml2zat6pqwzmiyit3svtekv1ay6j09dkkvtxupw3onvgcpvdhedmsl4cza2xo0k3b204nj5efshuxbb6zmsql7892b51ndx89pa4o3ygmg1k2yapk8gx74yv5qgiomyisuvvk73ar61th97h0ooiobxr7cp6sd8eiguptwqohn4omvp7ir4pioe0vomwhgsixzbyc7aosbsarkll2ow6xj8h5tblf6o5lpqlgstdcd1r5au5sy1rtpu0hn61o1gophz3qk37mkkg8ipbyh8p55l0xtfzoln6cc9ynav3v77j64ws5wn92r1kqe2ef30alg2yslzlqsssf8ixcgfwjhmhlppstsl7w9z6vc91rvtye07bhvz1n95h5ur2n6alban6ntlu9yvmki4p69uk399gluthpzx0hjhii8fnbh5sabmxh9dl09bogqe0k6uyxud8u6p7trtqywbotnwowuuytc3p06e43vn8s8xoo2286x85d8b0fguaf98ij1yckt5yjkge6sgh57k89uppygb5j9neguajxequ02ydr7yq6fyrk0rgjyyf7a0tl2ygastf7n875wbpodrbupt8ytuzsnq3k73bi37qkdcpa4fje2tjf196zm5bvmbpz0twl8uec75bnpfst2jld522t5azn5jyi7ufxktohfrh2dwhi8p8rdh0ysp8w49180471veqm87cm1z2wjuak6r9hk3h7cd7eu7anpicg4pyvd3uftf8bqtst9ncd0df9ue5j6wszg0h02ztjjqiabgbe0o31rem4ec3khjf1dbx731cf3xmg1nvyqb7v2k4e8x9lyh9tndf6k4f31jz9zknwo4vnvk4hh3ong7sdjhfhbmgoz6nk0uvdke9640ziexau8d40iq1c3p7w5skl97s5y6z5asp5kp0l2d0jlxsbfwdmu0vpiwi6erfmbz541xvg1lbkmyyx1f3n7fmvos7eql4ia48igx6n417obkcn9q7qbpe7pgfqef4w0f6w0oqo24u4nj1968q0z1a2xcgyg0uv87iu1k4yq01qicf1s3tnkps0doy3au60wectphurtchyrhwv51dq5tynbp3556x9di6n0ipmiuw7o6em3h6mkpvv7a7sxuqj3qi27ptypyd9x4r9kh9x6q8gdenf6tmlldljpphx8scbg6741iuf1t60gja1o9la9b2no7sahl7suwe0y49wyvo8s8gba94jqbpk569g08upw0v55mqrtut03tcy56ycm8l3qpc6f4lc5j654mcww04omn6cr2hugnkctbq643yxkijgjv0j2mac6judfyjejjnoh5uwnaby8k5vyjdyxly2as4wn3d5w9';
	
	var desc3 = document.createElement('p');
	desc3.className = 'desc-style';
	desc3.innerHTML = "Sorry for the lengthy HEX, I coould tell you how to read it and what all the numbers and letters represent because I used to be a steezy computing student but I won't :) Here's the link for our game-site-thing-a-ma-wotsit! let me know when you wanna play";
	
	var desc4 = document.createElement('p');
	desc4.className = 'desc-style';
	desc4.innerHTML = '<a href="https://www.flickr.com/photos/192666811@N02/51091096588/in/dateposted-public/" target="_blank">This is meant to be a link to some games but I literally cannot find any that have not shut down since covid, but I shall find something. Instead enjoy a photo of me.</a>';
	
	var desc6 = document.createElement('p');
	desc6.className = 'desc-style';
	desc6.innerHTML = "Oh and last but not least, here is today's tiktok. Shame these don't fit in with my normal pages vibez. But I figure you'll appreciate them :)";
	
	var desc7 = document.createElement('p');
	desc7.className = 'desc-style';
	desc7.innerHTML = "<a href='https://photos.app.goo.gl/mDpFFa5TDaitkoE68' target='_blank'>Sexy tiktok vid DAY 2</a>";
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(desc1);
	divIn.appendChild(desc5);
	divIn.appendChild(desc2);
	divIn.appendChild(desc3);
	divIn.appendChild(desc4);
	divIn.appendChild(desc6);
	divIn.appendChild(desc7);
}

function mon(){
	var divIn = document.getElementById('changeMe');
	
	var heading = document.createElement('h1');
	heading.innerHTML = 'Monday 15th';
	heading.className = 'page-head';
	
	var desc = document.createElement('p');
	desc.className = 'desc-style';
	desc.innerHTML = 'Orite sweethceeks, I completley forgot today - so here is a poem about dragons as a late addition :)';
	
	
	var desc1 = document.createElement('p');
	desc1.className = 'desc-style';
	desc1.innerHTML = '<img src="drag.jpg">';
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(desc1);
}

function tue(){
	var divIn = document.getElementById('changeMe');
	
	var heading = document.createElement('h1');
	heading.innerHTML = 'Tuesday 16th';
	heading.className = 'page-head';
	
	var desc = document.createElement('p');
	desc.className = 'desc-style';
	desc.innerHTML = "Depending on when you're reading this we either have 5 or almost only 4 days left of staying inside. I hope you be feeling less shit today.";
	
	var desc1 = document.createElement('p');
	desc1.className = 'desc-style';
	desc1.innerHTML = "I'm uber prepared today (it's 23:37 on Monday as I type this) I am stupidly awake and bored because I don't have you to voice note. Honestly, imagine trying to sleep your COVID away ;)";
	
	var desc4 = document.createElement('p');
	desc4.className = 'desc-style';
	desc4.innerHTML = "Today's random things include a word search, x, y, and z.";
	
	var desc2 = document.createElement('p');
	desc2.className = 'desc-style';
	desc2.innerHTML = "Word search is full of random han/finlay related words. There's 12 to find. I can give you the list of words if you want. Idk how easy it'll be to find them... it's a shame you can't highlight on screens?";
	
	var desc3 = document.createElement('p');
	desc3.className = 'desc-style';
	desc3.innerHTML = '<img src="search.png">';
	
	divIn.appendChild(heading);
	divIn.appendChild(desc);
	divIn.appendChild(desc1);
	//divIn.appendChild(desc4);
	divIn.appendChild(desc2);
	divIn.appendChild(desc3);
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