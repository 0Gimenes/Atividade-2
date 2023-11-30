const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render("index", {produtos});
});

const produtos = [
{id:1, nome: "Lp Black Sabbath", preco:"400", descricao: "descricao", imagem:"https://artefinalvinil.com.br/wp-content/uploads/2022/05/J-0283.jpg"},
{id:2, nome: "Lp Metallica", preco:"400", descricao: "descricao", imagem:"https://townsquare.media/site/295/files/2016/10/Kill_em_All_album.jpg"},
{id:3, nome: "Lp Pinky Floid", preco:"400", descricao: "descricao", imagem:"https://m.media-amazon.com/images/I/61hw9WloObL._UF1000,1000_QL80_.jpg"},
{id:4, nome: "Lp Slipknot", preco:"400", descricao: "descricao", imagem:"https://m.media-amazon.com/images/I/71CH4S56+tL._UF1000,1000_QL80_.jpg"},
{id:5, nome: "Lp Michael Jackson", preco:"400", descricao: "descricao", imagem:"https://m.media-amazon.com/images/I/81ogsUqshzL._UF1000,1000_QL80_.jpg"},
{id:6, nome: "Lp Quenn", preco:"400", descricao: "descricao", imagem:"https://http2.mlstatic.com/D_NQ_NP_904405-MLB45400002732_032021-O.webp"},
{id:7, nome: "Lp Foo Figthes", preco:"400", descricao: "descricao", imagem:"https://m.media-amazon.com/images/I/81sH2OqakxL._AC_SX679_.jpg"},
{id:8, nome: "Lp Nirvana", preco:"400", descricao: "descricao", imagem:"https://media.s-bol.com/3JxqyKPxo8AM/NYVBxD/550x550.jpg"},
{id:9, nome: "Lp Deftones", preco:"400", descricao: "descricao", imagem:"https://m.media-amazon.com/images/I/A1H2Sj0P78L._UF1000,1000_QL80_.jpg"},
{id:10, nome: "Lp RadioHead ", preco:"400", descricao: "descricao", imagem:"https://images-americanas.b2w.io/produtos/16877373/imagens/lp-radiohead-ok-computer-180g-duplo/16877375_1_large.jpg"},

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


