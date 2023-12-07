const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render("index", {produtos});
});

const produtos = [
{id:1, nome: "Lp Black Sabbath", preco:"359,99", descricao: "Lançado em 1982, é o primeiro álbum ao vivo oficial da discografia do Black Sabbath. Gravado durante a Mob Rules Tour em shows ocorridos em Dallas, Seattle e San Antonio. A capa é uma das mais criativas da banda, cada desenho inserido nela representa uma música específica do Black Sabbath", imagem:"https://artefinalvinil.com.br/wp-content/uploads/2022/05/J-0283.jpg"},
{id:2, nome: "Lp Metallica", preco:"245,55", descricao: "Lançado em 1983, Kill 'Em All é o álbum de estreia da banda de thrash metal Metallica. O álbum vendeu mais de 3 milhões de cópias nos Estados Unidos. Em 2017, foi eleito o 35º melhor álbum de metal de todos os tempos pela revista Rolling Stone", imagem:"https://townsquare.media/site/295/files/2016/10/Kill_em_All_album.jpg"},
{id:3, nome: "Lp Pinky Floid", preco:"299,99", descricao: "descricao", imagem:"https://m.media-amazon.com/images/I/61hw9WloObL._UF1000,1000_QL80_.jpg"},
{id:4, nome: "Lp Slipknot", preco:"324,99", descricao: "We Are Not Your Kind foi feito enquanto a banda ainda lidava com a morte de Paul Gray, a saída de Joey Jordison e a briga com Chris Fehn. Corey ainda havia acabado de se divorciar de sua esposa. É desses períodos de desesperança total que o Slipknot parece tirar o melhor de suas pretensões artísticas", imagem:"https://m.media-amazon.com/images/I/71CH4S56+tL._UF1000,1000_QL80_.jpg"},
{id:5, nome: "Lp Michael Jackson", preco:"354,99", descricao: "Thriller é o sexto álbum de estúdio em carreira solo do artista estadunidense Michael Jackson, lançado em 30 de novembro de 1982, através da Epic Records. Assim como o álbum anterior do cantor, Off the Wall (1979), que foi aclamado e bem-sucedido comercialmente, Thriller foi inteiramente produzido por Quincy Jones e coproduzido por Jackson. As gravações do projeto ocorreram entre 14 de abril a 8 de novembro de 1982 nos estúdios Westlake Recording", imagem:"https://m.media-amazon.com/images/I/81ogsUqshzL._UF1000,1000_QL80_.jpg"},
{id:6, nome: "Lp Quenn", preco:"399,99", descricao: "Queen II é o segundo álbum de estúdio da banda britânica de Queen, lançado em 8 de março de 1974 no Reino Unido pela EMI e em 9 de abril na América do Norte pela Elektra Records. Foi gravado no Trident Studios, na cidade de Londres, entre agosto de 1973 e fevereiro de 1974 com co-produção de Roy Thomas Baker e John Anthony.", imagem:"https://http2.mlstatic.com/D_NQ_NP_904405-MLB45400002732_032021-O.webp"},
{id:7, nome: "Lp Foo Figthes", preco:"189,99", descricao: "Foo Fighters é o álbum de estreia da banda americana Foo Fighters, foi lançado no dia 4 de julho de 1995. Teve origem em uma fita demo que Dave Grohl fez, onde ele tocava todos os instrumentos. “O primeiro álbum do Foo Fighters não deveria ter sido um álbum. Foi uma espécie de experiência – ou quase um exorcismo.", imagem:"https://m.media-amazon.com/images/I/81sH2OqakxL._AC_SX679_.jpg"},
{id:8, nome: "Lp Nirvana", preco:"374,99", descricao: "In Utero é o terceiro e último álbum de estúdio da banda grunge americana Nirvana, lançado em 13 de setembro de 1993 pela DGC Records. O grupo pretendia que essa gravação se afastasse significativamente da produção polida do seu álbum anterior, Nevermind (1991).", imagem:"https://media.s-bol.com/3JxqyKPxo8AM/NYVBxD/550x550.jpg"},
{id:9, nome: "Lp Deftones", preco:"234,99", descricao: "Bloody Cape dos Deftones é uma canção sobre correr riscos e viver a vida ao máximo, apesar das potenciais consequências. O primeiro verso pinta uma imagem do mar aberto e um sentido de aventura. O narrador convida alguém a juntar-se a ele na sua viagem, mesmo que isso signifique deixar tudo para trás e confiar no desconhecido. No segundo verso, o narrador sugere que as suas necessidades serão satisfeitas e que encontrará uma ligação profunda com a pessoa que está a convidar para esta viagem", imagem:"https://m.media-amazon.com/images/I/A1H2Sj0P78L._UF1000,1000_QL80_.jpg"},
{id:10, nome: "Lp RadioHead ", preco:"344,99", descricao: "OK Computer é o terceiro álbum de estúdio da banda inglesa de rock alternativo Radiohead. Foi lançado pela Capitol e Parlophone Records em 1997. O álbum foi o primeiro a ser auto-produzido pela banda, apesar de contar com a assistência de Nigel Godrich. O Radiohead gravou as canções em Oxfordshire e Bath, entre os anos de 1996 e o início de 1997, com grande parte das sessões realizadas na mansão histórica de St. Catherine's Court.", imagem:"https://images-americanas.b2w.io/produtos/16877373/imagens/lp-radiohead-ok-computer-180g-duplo/16877375_1_large.jpg"},

]

function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id)
  return produto || null
} 
console.log(buscarProdutoPorID)

app.get('/produtos/:id', (req, res) => {
  const produto = buscarProdutoPorID(req.params.id)
  res.render("albumb", {produto});
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


