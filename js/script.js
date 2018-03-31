var link = document.querySelector(".booking-form-btn");
var popup = document.querySelector(".hotels-search");

var dataArrival = popup.querySelector("[name=arrival-date]");
var dataDeparture = popup.querySelector("[name=departure-date]");
var form = popup.querySelector("form");

	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.toggle("hide-modal");
		dataArrival.focus();
	});

	form.addEventListener("submit", function (evt) {
		if (!dataArrival.value || !dataDeparture.value) {
			evt.preventDefault()
			popup.classList.add("modal-error");
			console.log("Укажите даты заезда и отъезда");
		} else {
		}
	})
