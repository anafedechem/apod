var requisicao = new XMLHttpRequest(); //passo 1: cria a requisição

requisicao.open("GET", "https://api.nasa.gov/planetary/apod"); //passo 2: configura a requisição

requisicao.onload = function () { //ajax/onload é antes do send
    if (requisicao.status == "DATA ESCOLHIDA PELA PESSOA, PEGAR O VALOR DO CALENDARIO") {
        let response = requisicao.response;


    }
}


//--------------------------------------------------------------------------------------

$('#submit').click(event => {
    event.preventDefault();
    let data = $('#data-selecionada').val()
    let chaveAPI = `odGcc4PNIa8SDI7K4nf0wrjzCTUxLBqe3UwMlSj7`
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?date=${data}&api_key=${chaveAPI}`,
        success: function (response) {
            let url = response.url
            document.getElementById("img-do-dia").src = url;
           //inserir imagem da data correspondente fornecida no input data-selecionada
          //
        }
    })
});