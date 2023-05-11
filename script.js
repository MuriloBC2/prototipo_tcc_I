(function() {

    var tabela = document.querySelector('[data-js="tbody"]')

    function selectID(linha, coluna){
        var tr = tabela.children[linha]
        var td = tabela.children[coluna]
        td.classList.add("color")
    }

    var lines = []

    letters.map(function(item, index){
        lines[index] = document.querySelector('[data-js="linha' + index + '"]')
    })


    var p = [
        ['a', 'j', 'f', 'k', 'l', 'm'],
        ['b', 'c', 'i', 'h', 'd', 'z'],
        ['j', 'b', 'l', 't', 'c', 'w'],
        ['q', 'x', 'h', 'p', 'y', 'r'],
        ['u', 'n', 'o', 'v', 'x', 'r'],
    ]

})



