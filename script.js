// const searchBar = document.getElementById('search-bar');
// const sectionList = document.getElementById('section-list');
// const sections = sectionList.getElementsByTagName('h2');

// searchBar.addEventListener('keyup', () => {
//   const searchTerm = searchBar.value.toLowerCase();

//   for (let i = 0; i < sections.length; i++) {
//     const sectionText = sections[i].textContent.toLowerCase();

//     if (sectionText.includes(searchTerm)) {
//       sections[i].style.display = 'block';
//     } else {
//       sections[i].style.display = 'none';
//     }
//   }
// });

function inputSearch (inputID, container) {
	document.getElementById(inputID).onkeyup= function(e) {
		var word=this.value.toLowerCase();
		if (word.length==0) $(container).show();
		if (word.length>=2) {
			$(container).hide();
			$(container).each(function () {
				var card=this.innerHTML.toLowerCase();
				if (card.indexOf(word)>=0) {
					$(this).show();
				}
			});
		}
	};		
}

inputSearch ("searchBar", ".container");