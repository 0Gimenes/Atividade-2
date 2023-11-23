const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.render("index", {produtos});
});

const produtos = [
{id:1, nome: "Lp Black Sabbath", preco:"400", descricao: "descricao", imagem:"https://artefinalvinil.com.br/wp-content/uploads/2022/05/J-0283.jpg"},
{id:2, nome: "Lp Metallica", preco:"400", descricao: "descricao", imagem:""},
{id:3, nome: "Lp Pinky Floid", preco:"400", descricao: "descricao", imagem:""},
{id:4, nome: "Lp Judas Priest", preco:"400", descricao: "descricao", imagem:""},
{id:5, nome: "Lp Michael Jackson", preco:"400", descricao: "descricao", imagem:""},
{id:6, nome: "nome", preco:"400", descricao: "descricao", imagem:""},
{id:7, nome: "nome", preco:"400", descricao: "descricao", imagem:""},
{id:8, nome: "nome", preco:"400", descricao: "descricao", imagem:""},
{id:9, nome: "nome", preco:"400", descricao: "descricao", imagem:""},
{id:10, nome: "nome", preco:"400", descricao: "descricao", imagem:""},

]

function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id)
  return produto || null
} 
console.log(buscarProdutoPorID)

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.get('/tiagas', (req, res) => {
  res.render('index', { message: 'tigas' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/albumb.ejs', (req, res) => {
  res.render("albumb", {produtos});
});

