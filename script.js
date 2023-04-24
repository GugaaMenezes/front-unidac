$(document).ready(function () {

    var multipleCancelButton = new Choices('#itens_cafe', {
        removeItemButton: true,
        maxItemCount: 3,
        searchResultLimit: 8,
        renderChoiceLimit: 8
    });


});

$(document).ready(function () {
    $.getJSON('https://unidacdesafio-production-8747.up.railway.app/unidac/listar', function (data) {
        var lista = '';
        $.each(data, function (index, colaborador) {
            lista += '<ul>' + colaborador.id + ' | ' + colaborador.nome + ' | ' + colaborador.cpf + ' | ' + colaborador.dataDoCafedaManha + '</ul>';
        });
        $('#colaboradores').html(lista);
    });
});

