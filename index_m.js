const loginPopup = document.querySelector(".achatPull");


window.addEventListener("load", function () {
  afficherAchat();
});

function afficherAchat() {
  const timeLimit = 1; // seconds;
  let i = 0;
  const timer = setInterval(function () {
    i++;
    if (i == timeLimit) {
      clearInterval(timer);
      loginPopup.classList.add("show");
    }
    console.log(i);
  }, 1000);
}

close.addEventListener("click", function () {
  loginPopup.classList.remove("show");
});




/*Code pour la validation de l'achat*/
/*
let inputNomprenom = document.getElementById("nomprenom");
let inputTel = document.getElementById("tel");
let inputlieu = document.getElementById("lieu");
let text = document.querySelector("#text");
let button = document.getElementById("btn");

button.addEventListener("click", function(){

    if(inputNomprenom.value.length < 1 || inputTel.value.length < 1 || inputlieu.value.length < 1) {
      text.innerHTML = "Veuillez remplir tous les champs du formulaire";
      text.style.display = "block";
      text.style.background = "red";
      setTimeout(() => {text.style.display = "none";}, 3000);

    } 
      else {
          text.innerHTML = "Votre Commande a bien été envoyé, merci et à la prochaine ";
          text.style.display = "block";
          text.style.background = "green";
      }

 
})

*/



