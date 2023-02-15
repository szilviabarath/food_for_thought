var mykey = config.MY_KEY;
var secretkey = config.SECRET_KEY;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
		'X-RapidAPI-Key': mykey,
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)

	.then(response => response.json()) // NEW!
	.then(data => { // NEW!
	  const div = document.getElementById("content") // NEW!
	  div.innerText = JSON.stringify(data.content); // NEW!
	  const p = document.getElementById("name") // NEW!
	  p.innerText = JSON.stringify(data.originator.name); // NEW!
	  })

	.catch(err => {
	  console.log(err);
	});

