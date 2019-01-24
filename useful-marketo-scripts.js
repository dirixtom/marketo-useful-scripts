/* ! marketo-useful-scripts.js v0.0.1 */

// If ${ABC} is defined in comments, where ABC can be whatever, a Marketo String Variable is recommended

// Redirect if not on certain page eg. inside of Marketo LP editor (marketodesigner)
// Invoke with redirect("marketodesigner", "${url}", ${time})
function redirect(e, p, t) {
	if (document.location.href.indexOf(e) === -1){
		window.setTimeout(function(){
				window.location.replace(p);
		}, t);
	}
}
