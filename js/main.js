// console.log('main.js');

document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){

	e.preventDefault();

	var siteName = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value;
	
	var bookmark = {
		name: siteName,
		url: siteUrl
	}

	// console.log(bookmark);

	if(localStorage.getItem('bookmarks') === null){
		
		var bookmarks = [];

		// bookmarks.push(bookmark);

		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	} else {
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		bookmarks.push(bookmark);

		console.log(bookmarks);

		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	document.getElementById('myForm').reset();
}

function fetchBookmarks(){
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	var bookmarksResults = document.getElementById('bookmarksResults');

	bookmarksResults.innerHTML = '';

	for(var i = 0; i < bookmarks.length; i++){
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		bookmarksResults.innerHTML += '<div class="well">'+
																	'<h3>'+name+
																	'</h3>'+
																	'</div>'
	}
}
