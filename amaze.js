var s = document.getElementsByTagName('img');
for(var i = 0; i < s.length; ++i) {
	var x = Math.floor(Math.random() * 23) + 1;
	s[i].src = "http://users15.jabry.com/amaze1/wow/" + x + ".gif";
	console.log(s[i].src	)
}
