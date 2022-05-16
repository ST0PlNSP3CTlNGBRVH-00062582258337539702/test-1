var loadpage = function(page){
	document.getElementById("home").style.display = "none"
	document.getElementById("about").style.display = "none"
	
	document.getElementById(page).style.display = "block"
}

//HEAD
document.head.innerHTML = `
<title>Bob's Game Shack</title>
<link rel="icon" href="https://assets.codepen.io/2104921/bgs-logo.png">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Radio+Canada:400,400i,700">
<style>
body {
background-color:#000000;
color:white;
text-align:center;
line-height:150%;
font-family: "Radio Canada";
}
.wr {
color:#ffb429;
}
.wr::before {
content:"👑 "
}
select {
font-family: "Radio Canada";
}
hr {
width:95%;
}
a {
color:white;
text-decoration:none;
font-size:20px;
}
a:hover {
color:grey;
}
font {
font-size:20px;
}
.banner {
background-color:#7a7a7a;
text-align:center;
border-radius:5px;
color:black;
padding:10px;
line-height:120%;
font-size:20px;
}
table {
margin-left: auto;
margin-right: auto;
font-family:"Radio Canada";
border-collapse: collapse;
width: 50%;
color:white;
}
.lt {
margin-left: auto;
margin-right: auto;
font-family:"Radio Canada";
border-collapse: collapse; 
width: 90%;
color:white;
}
td, th {
border: 1px solid #dddddd;
text-align: left;
padding: 8px;
}
.gameIframeFull {
background:url('/g/bgs-loading.png') center center no-repeat;
overflow: hidden;
border-color:white;
margin-bottom:0;
border:hidden;
overflow:hidden;
position:absolute;
top:0;
left:0%;
bottom:0%;
right:0%;
width:100%;
height:100%;
}
tr:nth-child(even) {
background-color: #1f1f1f;
}
tr:nth-child(odd) {
background-color: #363636;
}
::-webkit-scrollbar {
width:7px;
}
::-webkit-scrollbar-track {
background: none;
}
::-webkit-scrollbar-thumb {
background: #888;
}
::-webkit-scrollbar-thumb:hover {
background: #555;
}
</style>
`;

//BODY
document.body.innerHTML = `
<br>
<div style="line-height:200%;">
<font style="font-size:50px;color:#000000;" id="title"><b>Bob's Game Shack</b></font><br>
<font style="font-size:35px;color:#000000;" id="title2">v3.1.6</font><br>
</div>
<hr>
<a href="#" onclick="loadpage('home')">Home • </a>
<a href="#" onclick="loadpage('games')">Games • </a>
<a href="#" onclick="loadpage('about')">About • </a>
<a href="https://bit.ly/bobs-games"target="_blank">Alt links • </a>
<a href="https://bit.ly/bobs-games"target="_blank">Forums • </a>
<a href="#" onclick="loadpage('other')">Other • </a>
<a href="https://forms.gle/tgmjeycJWa5eVHLS6"target="_blank">Game suggestion</a>
<hr>

<!--HOME PAGE-->
<span id="home" style="display:block;">
<div style="line-height:50%;">
<h2>View count</h2>
<img src="https://hitwebcounter.com/counter/counter.php?page=7982716&style=0009&nbdigits=6&type=page&initCount=200000"border="0"></div>

<h3 class="banner">Bob's Game Shack is the best unblocked games website, with 50+ quality games of various genres.</h3>

<h3 class="banner" id="updatebanner" style="background-color:#000000">
	<b>UPDATE v3.1.6 (5/13/22)</b><br>
	• Website is back up and running<br>
	• Added Ice Age Baby Adventure 2<br>
	• Removed leaderboards<br>
	• Added forums (probably bad idea)<br>
</h3>
</span>

<!--ABOUT PAGE-->
<span id="about" style="display:none;">

<h1>ABOUT</h1>
<h2>Bob's Game Shack is an unblocked games website packed with great browser games to play during school or work for your freetime.<br><br>Contact: bob@bobs-shack.xyz</h2>

</span>
`;

setInterval(function() {
	var col = document.getElementById("title")
	var ban = document.getElementById("updatebanner")
	ban.style["background-color"] = col.style.color
	}, 10);

function setTheme() {
	var sel = document.getElementById("themeSelect")
	var theme
	if (sel === null) {
		if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
		theme = localStorage.getItem('theme')
	} else {theme = document.getElementById("themeSelect").value}
 
 if (theme==="Classic") {
   document.getElementById("title").style.color="#fc033d";
	 	document.getElementById("title2").style.color="#fc033d";
 }
 if (theme==="Gold") {
   document.getElementById("title").style.color="#ffbb00";
		document.getElementById("title2").style.color="#ffbb00";
 }
 if (theme==="Blue") {
   document.getElementById("title").style.color="#0073ff";
		document.getElementById("title2").style.color="#0073ff";
 }
 if (theme==="Green") {
   document.getElementById("title").style.color="#0be600";
		document.getElementById("title2").style.color="#0be600";
 }
}


window.addEventListener("load",function(){
	
	var themeSelect = document.getElementById("themeSelect")
 if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}

 var ddl = document.getElementById('themeSelect');
	if (ddl == null) {} else	{
var opts = ddl.options.length;
for (var i=0; i<opts; i++){
    if (ddl.options[i].value == localStorage.getItem('theme')){
        ddl.options[i].selected = true;
        break;
    }
} }
})
	
window.onload = (event) => {	
 setTheme()
	
		var themeSelect = document.getElementById("themeSelect")
		if (themeSelect != null) {
		themeSelect.addEventListener("change",function(event){
	if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
 localStorage.setItem('theme', event.target.value);
 setTheme()
}
)}
};

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

var threshold = 160;
var devtools = {
open: false,
orientation: null
};
setInterval(function () {
		var widthThreshold = window.outerWidth - window.innerWidth > threshold;
		var heightThreshold = window.outerHeight - window.innerHeight > threshold;
		var orientation = widthThreshold ? 'vertical' : 'horizontal';

if (!(heightThreshold && widthThreshold) &&
      ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
if (!devtools.open || devtools.orientation !== orientation) {
window.open("about:blank","_self")
}
} else {
//closed
}
}, 100);

if (typeof module !== 'undefined' && module.exports) {
module.exports = devtools;
} else {
window.devtools = devtools;
}
