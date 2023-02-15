const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://pexelsdimasv1.p.rapidapi.com/v1/search?query=ocean&locale=en-US&per_page=15&page=1");
xhr.setRequestHeader("Authorization", "undefined");
xhr.setRequestHeader("X-RapidAPI-Key", "d0841880f8msh7096a86c0f2386ep194eb4jsnbd4df5524a07");
xhr.setRequestHeader("X-RapidAPI-Host", "PexelsdimasV1.p.rapidapi.com");

xhr.send(data);