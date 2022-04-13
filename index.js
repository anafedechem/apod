//--------------------------------------------------------------------------------------

$('#submit').click(event => {
    event.preventDefault();
    let data = $('#data-selecionada').val()
    let chaveAPI = `odGcc4PNIa8SDI7K4nf0wrjzCTUxLBqe3UwMlSj7`
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?date=${data}&api_key=${chaveAPI}`,

        success: function (response) {
            let url = response.url
            let description = response.title

            $("#img-do-dia").attr("src", url);
            $("#descricao").text(description);

        }
    })
});