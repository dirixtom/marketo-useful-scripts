// /* ! marketo-useful-scripts.js v0.2.0 | MIT License | https://github.com/dirixtom/marketo-useful-scripts.js | https://codepen.io/TomDirix/ */

// If ${ABC} is defined in comments, where ABC can be whatever, a Marketo String Variable is recommended

// ------------------------- //
// -------- GENERAL -------- //
// ------------------------- //

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

// Create cookie
// setCookie("cookiename", "content", 30);
function setCookie(cn, cv, ed) {
	let d = new Date(),
			expires = "expires=" + d.toGMTString();

	d.setTime(d.getTime() + (ed*24*60*60*1000));
	document.cookie = cn + "=" + cv + ";" + expires + ";path=/";
}

// Read cookie value
// getCookie("cookiename");
function getCookie(cn) {
	let name = cn + "=",
			decodedCookie = decodeURIComponent(document.cookie),
			ca = decodedCookie.split(';');

	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

// ------------------------- //
// --------- FORMS --------- //
// ------------------------- //

// Preference center unsubscribe checkbox functionality, unchecks all checkboxes other when unsubscribe is checked
// MktoForms2.whenReady(function(form) {
// 	uncheck("Unsubscribed");
// });
function uncheck(in) {
	let checkboxes = document.querySelectorAll('input[type=checkbox]:not([name=' + in + '])'),
			unsubInput = document.querySelector('input[name=' + in + ']');

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
				if (inputs[index].type == "checkbox" && inputs[index].name != in) {
						inputs[index].checked = false;
				}
			}
		}
	};
}

// Add hidden field to form from cookie content
// MktoForms2.whenReady(function(form) {
// 	addCookieField("fieldAPIname", "cookiename");
// });
function addCookieField(an, cn) {
	let decodedCookie = decodeURIComponent(document.cookie);
	 form.addHiddenFields({
			an : decodedCookie[cn]
	 });
}
