let modal = document.getElementById("myModal");
let btn = document.getElementById("btnModalWindow");
let span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
	 modal.style.display = "block";
}

span.onclick = function () {
	 modal.style.display = "none";
}

window.onclick = function (event) {
	 if (event.target == modal) {
			 modal.style.display = "none";
	 }
}