function load_page(Document){
	var xhttp;
	if(Document){
		$.ajax({
			type: 'GET',
			data: Document,
			url: Document,
			success: function (data){
				("#pagina_retorno").html(data);

			},
			error: function(error){
				console.log(error);
			}

		});
	};
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			document.getElementById("#pagina_retorno").innerHTML = this.responseText;
	    	}
		};
	xhttp.open("GET", "index.html"+str, true);
	xhttp.send();

}