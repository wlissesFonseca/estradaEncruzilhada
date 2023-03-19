//código do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}
function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
  }
}
function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      larguraCarro,
      xAtor,
      yAtor,
      15
    );
    if (colisao) {
      voltaAtorParaPosisaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosisaoInicial() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(255, 215, 0);
  text(meusPontos, width / 5, 27);
}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    somDosPontos.play();
    voltaAtorParaPosisaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMover() {
  return yAtor < 366;
}
