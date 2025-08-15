const http = require('http');
const porta = 3000;

const server = http.createServer((req, res) => {

    let url = req.url
    console.log('Acessando URL: ',url);

    //url vazia
    if(url === '/') {
        res.end('<h1>Mercadinho da Juju</ul><br><h3>Eduardo Terto</h3>');

        //url com para pagina verduras
    } else if(url === '/verduras'){
        res.writeHead(200,'foik',{ 'Content-Type': 'text/html; charset=utf-8' })//para as letras e caracter nao dar erro
        res.end('<ul><li>rucula</li><li>alface</li><li>couve</li></ul>');//retorna os itens 

        //url para ver as frutas
    } else if(url === '/frutas'){ //nova rota acrescentada
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) //para as letras e caracter nao dar erro
        res.end('<li>manga</li><li>morango</li><li>uva roxa</li>');//retorna os itens 

        //url para ver as carnes
    } else if(url === '/carnes'){ //nova rota acrescentada
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) //para as letras e caracter nao dar erro
        res.end('<li>Picanha</li><li>Patinho</li><li>Carré de Cordeiro</li>');//retorna os itens 

        //url para ver as bebidas
    } else if(url === '/bebidas'){ //nova rota acrescentada
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) //para as letras e caracter nao dar erro
        res.end('<li>água</li><li>Coca Cola</li><li>Suco</li>'); //retorna os itens 
    }
    
    else {
       res.writeHead(404,'Pagina não encontrada',{ 'Content-Type': 'text/html; charset=utf-8' }) //rota nao cadastrada
       res.end('Pagina não encontrada');
    }
});

server.listen(porta, () => {
    console.log('Servidor rodando');
    console.log('Site no ar: http://localhost:' + porta);
});


//url === '/bla' (isso é para adicionar um nome na url e um endereco de pagina nova)
//res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) (isso aqui é para mostrar para o network se a pagina esta certa (statusCode 200) ou se deu erro (statusCode 404))
 //res.end('<li>água</li><li>suco de laranja</li><li>refrigerante</li>'); retorna uma mensagem em outra pagina e outra url