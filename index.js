//--------------------------------------------------------------------------------------


$('#submit').click(event => {
    event.preventDefault();
    let dataSelecionadaTexto = $('#data-selecionada').val()
    let chaveAPI = `odGcc4PNIa8SDI7K4nf0wrjzCTUxLBqe3UwMlSj7`
    let dataDeHoje = new Date();

    if (dataSelecionadaTexto == "") {
        alert("Escolha uma data");
        return
    }

    let dataSelecionada = new Date(dataSelecionadaTexto)

    if (dataSelecionada > dataDeHoje) {
        alert("Esolha uma data válida")
        return
    }

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?date=${dataSelecionadaTexto}&api_key=${chaveAPI}`,
        success: function (response) {
            let url = response.url;
            let description = response.title;
            let mediaType = response.media_type;

            let imgDoDia = $('#img-do-dia');
            let videoDoDia = $('#video-do-dia');
            let descricao = $("#descricao");  
            
            descricao.text(description);
            if (mediaType == "image") {
                imgDoDia.attr("src", url);
                imgDoDia.show();
                videoDoDia.hide();
            } else {
                videoDoDia.attr("src", url);
                videoDoDia.show();
                imgDoDia.hide();
            }
        }
    });
});