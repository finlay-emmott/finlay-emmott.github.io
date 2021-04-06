document.body.onload = addElement;
document.body.onload = addButton;

function addElement(){
	const newP = document.createElement("p");
	
	const newContent = document.createTextNode("Hi there!");
	
	newP.appendChild(newContent);

	const currentDiv = document.getElementById("div1");
	document.body.insertBefore(newP, currentDiv);
}

function addButton(){
	var btn = document.createElement("button");
	
	btn.innerHTML = "CLICK ME";
	btn.onclick = function(){alert('oh no! up the ra! We love Micheal Collins <3'); return false;}
	document.body.appendChild(btn);
}

function change() {
	document.getElementById("para").innerHTML = 'paragraph changed';
}
function name() {
  var x = document.getElementById("a").value;
}

console.log(location.hash)

function getContent(fragmentId){

// lets do some custom content for each page of your website
  var pages = {
    home: "This is the Home page. Welcome to my site.",
    about: "This page will describe what my site is about",
    contact: "Contact me on this page if you have any questions"
  };

// look up what fragment you are searching for in the object
  return pages[fragmentId];
}

function loadContent(){

  var contentDiv = document.getElementById("app"),
      fragmentId = location.hash.substr(1);

  contentDiv.innerHTML = getContent(fragmentId);
}

if(!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent)

function openNav(){
	document.getElementById("sideNav").style.width = "250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav(){
	document.getElementById("sideNav").style.width = "0";
	document.body.style.backgroundColor = "white";
}
