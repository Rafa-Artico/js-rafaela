//Divertidamente, LIVRE, Animação, Aventura, Família
//Os Três Cães Mosqueteiros, LIVRE, Aventura, Comédia
//Viva: A Vida é Uma Festa, LIVRE, Comédia, Família, Fantasia
//Rua do Medo: 1994 - Parte 1, 18, 	Mistério, Terror idade >= 14
//Coraline e o Mundo Secreto, 10, Animação, Fantasia, Suspense idade >= 10
let campoIdade;
let campoFantasia;

function setup() {
  createCanvas(600, 400);
   createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
    campoIdade = createInput("0");
    campoFantasia = createCheckbox("Gosta de Aventuras na narrativa?"); 
  campoAventura = createCheckbox("Gosta de filmes agitados?");
}
function draw() {
    background("rgb(16,106,136)");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
  
   fill(color("white")); // Um tom de roxo escuro
   textAlign(CENTER, CENTER);
    textSize(20);
    text(recomendacao, width / 2, height / 2);
}
function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "A Rua Do Medo 1994 - Parte 1";
    } else {
      if (idade >= 18) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "As Vantagens de ser invisivel";          
        } else{
         return "Caroline";
        }
      } else {
        if (gostaDeFantasia) {
          return "Viva: A vida é uma festa";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Divertidamente";
    } else {
      return "Castelo animado";
    }
  }
}
