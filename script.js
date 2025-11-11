const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const age = document.getElementById("age").value.trim();
	const name = document.getElementById("name").value.trim();

	if(age === "" || name === "") {
		alert("Please enter valid details.");
		return;
	}

	const prom = new Promise((resolve, reject) => {
		if(parseInt(age, 10) > 18) {
			setTimeout(() => {
				resolve(`Welcome, ${name}. You can vote`)
			}, 4000)
		} else{
			setTimeout(() => {
				reject(`Oh sorry ${name}. You aren't old enough`)
			}, 4000)
		}
	})

	prom
		.then((data) => alert(data))
		.catch((err) => alert(err))
	
	
})