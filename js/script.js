var tabela = document.querySelector('[data-js="tabela"]')
let main = document.querySelector('#exibir')

   
    var jogo = [
        ['a', 'j', 'f', 'k', 'l', 'm'],
        ['b', 'c', 'i', 'h', 'd', 'z'],
        ['j', 'b', 'l', 't', 'c', 'w'],
        ['q', 'x', 'h', 'p', 'y', 'r'],
        ['u', 'n', 'o', 'v', 'x', 'r'],
    ]

    var lines = [];

	jogo.map(function(item, index){
		lines[index] = document.querySelector('[data-js="linha'+ index +'"]');
	});

	jogo.forEach(function(item, index){
		jogo[index].forEach(function(item){
			lines[index].insertAdjacentHTML('beforeend', '<td>' + item +'</td>');
		});
	});




    





