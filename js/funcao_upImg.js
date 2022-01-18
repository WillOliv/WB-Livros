var vitrine = function(event) {
	var image = document.getElementById('vitrine');
	image.src = URL.createObjectURL(event.target.files[0]);
};
