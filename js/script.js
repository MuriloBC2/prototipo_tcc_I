var tabela = document.querySelector('[data-js="tabela"]')
let main = document.querySelector('#exibir')

var alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
'N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


    l= alfabeto[Math.floor(Math.random()*25)]

    var jogo = [

        
        [l, l, 'F', l, l, l],
        [l, l, 'I', l, l, l],
        [l, l, 'L', l, l, l],
        [l, l, 'H', l, l, l],
        [l, l, 'O', l, l, l],
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




    





