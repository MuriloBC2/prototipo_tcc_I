var tabela = document.querySelector('[data-js="tbody"]')
let main = document.querySelector('#exibir')

    function selectID(linha, coluna){
        var tr = tabela.children[linha]
        var td = tabela.children[coluna]
        td.classList.add("color")
    }

   
    var jogo = [
        ['a', 'j', 'f', 'k', 'l', 'm'],
        ['b', 'c', 'i', 'h', 'd', 'z'],
        ['j', 'b', 'l', 't', 'c', 'w'],
        ['q', 'x', 'h', 'p', 'y', 'r'],
        ['u', 'n', 'o', 'v', 'x', 'r'],
    ]

    var lines = []

    
    const retornoMap =  jogo.map((nomeAtual) => {
        console.log(nomeAtual);
    });

    jogo.forEach((item) => {
        jogo.forEach(function(){
            lines.insertAdjacentHTML('beforeend', '<td>' + item + '</td>')
        })
    })

main.innerHTML = jogo


    





