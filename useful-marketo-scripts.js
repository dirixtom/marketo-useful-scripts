/* ! marketo-useful-scripts.js v0.2.0 | MIT License | https://github.com/dirixtom/marketo-useful-scripts.js*/

// If ${ABC} is defined in comments, where ABC can be whatever, a Marketo String Variable is recommended

// Hard redirect if not on certain page
// replace("marketodesigner", "${url}", ${time});
function replace(s, u, t) {
	if (document.location.href.indexOf(s) === -1){
		window.setTimeout(function(){
			window.location.replace(u);
		}, t);
	}
}

// Soft redirect if not on certain page
// redirect("marketodesigner", "${url}", ${time});
function redirect(s, u, t) {
	if (document.location.href.indexOf(s) === -1){
		window.setTimeout(function(){
			window.location.href = u;
		}, t);
	}
}

// Preference center unsubscribe checkbox functionality, unchecks all checkboxes other when unsubscribe is checked
function uncheck(u) {
	let checkboxes = document.querySelectorAll('input[type=checkbox]:not([name=' + u + '])'),
			unsubInput = document.querySelector('input[name=' + u + ']');

	for (i = 0; i < checkboxes.length; i++) {
		checkboxes[i].addEventListener("click", function() {
			if (this.checked == true) {
				unsubInput.checked = false;
			}
		});
	}

	unsubInput.onchange = function() {
		if (this.checked) {
			let inputs = document.getElementsByTagName("input");
			for (index = 0; index < inputs.length; ++index) {
				if (inputs[index].type == "checkbox" && inputs[index].name != u) {
						inputs[index].checked = false;
				}
			}
		}
	};
}

MktoForms2.whenReady(function(form) {
	uncheck("Unsubscribed");
});
