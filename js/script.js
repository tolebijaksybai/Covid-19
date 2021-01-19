showMapData("Акмолинская");

function showMapData(stateName) {

	// console.log(stateName);

	fetch("http://localhost:3000/informations/")
		.then((response) => {
			return response.json();
		})
		.then((data) => {

			for (var i in data) {
				if (data[i].city == stateName) {
					document.querySelector(".header-description_title").innerHTML = stateName;
					document.querySelector("#active").innerHTML =
						data[i].active;
					// document.querySelector(".caseFigConfirmed").innerHTML =
					// 	data[i].confirmed;
					document.querySelector("#recovered").innerHTML =
						data[i].recovered;
					document.querySelector("#died").innerHTML =
						data[i].deaths;
				}
			}
		})
}