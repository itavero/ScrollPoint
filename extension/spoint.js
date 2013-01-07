// Check body tag
function amnl_scrollpoint_fix() {
	if(document.body.getAttribute('data-scrollpoint') != null) {
		// Already applied fix
		return;
	}
	
	var onload = document.body.getAttribute('onload');
	if(document.body.getAttribute('scroll') == 'no' && onload != null && onload.indexOf('spBodyOnLoadWrapper') > 0) {
		console.log('ScrollPoint: Let\'s try to fix this!');
		
		// Remove scroll attribute
		document.body.removeAttribute('scroll');
		
		// Fix overflow
		var currentStyle = document.body.getAttribute('style');
		var newStyle = 'overflow:auto';
		if(currentStyle != null) {
			newStyle = currentStyle + ';' + newStyle;
		}
		document.body.setAttribute('style',newStyle);
		
		// Just a reminder so we won't apply the fix multiple times
		document.body.setAttribute('data-scrollpoint','fixed');
	}
}

amnl_scrollpoint_fix();