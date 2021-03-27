containerDivsForRecipes = [
	'.wprm-recipe-container', //wordpress
	'.tasty-recipes', //wordpress
    'div[itemtype="http://schema.org/Recipe"]', //wordpress
	'div[itemtype="https://schema.org/Recipe"]', //wordpress
	'.recipe-summary.wide', //pioneer woman
	'.recipe-callout',
	'.recipe-content',
	'.easyrecipe',
	'.innerrecipe',
	'.simple-recipe-pro'
]

containerDivsForRecipes.every(function(s){
	var recipeDiv = document.querySelector(s);
	if (recipeDiv){
		// copy html of recipeDiv
		var copy = recipeDiv.cloneNode(true);
		copy.id = 'recipePopup';
		copy.style.transition = 'opacity 350ms';
		copy.style.display = 'block';
		document.body.insertBefore(copy, document.body.firstChild);

		//close popup if user clicks outside it
		var hidePopupFunction = function(e) {
			if (e.target !== copy && !copy.contains(e.target)) 
			{
			    document.getElementById('recipePopup').style.opacity = 0;
				document.removeEventListener('mouseup', hidePopupFunction);
			}
		};		
		document.addEventListener('mouseup', hidePopupFunction);

		//Refreshing when in middle of page was causing issues, so go to top
		window.setTimeout(() => {
			scrollTo(0, -1);
			copy.style.opacity = 1;
			}, 0);
		
		return false;
	}
	return true;
});

