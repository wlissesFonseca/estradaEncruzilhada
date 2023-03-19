// funcao configurar tamanho da tela
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

// funcao desenhar na tela
function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
 
}
