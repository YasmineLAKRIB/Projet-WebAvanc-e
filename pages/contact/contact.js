let inputNomprenom = document.getElementById("nomprenom");
let inputEmail = document.getElementById("email");
let inputTel = document.getElementById("tel");
let inputMessage = document.getElementById("message");
let button = document.getElementById("btn");
let text = document.querySelector("#text");
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


button.addEventListener("click", function(){
    var verif = inputEmail.value.indexOf("@");
    var verif2 = inputEmail.value.indexOf(".");

    if(inputNomprenom.value.length < 1 || inputEmail.value.length < 1
    || inputTel.value.length < 1 || inputMessage.value.length < 1) {
      text.innerHTML = "Veuillez remplir tous les champs du formulaire";
      text.style.display = "block";
      text.style.background = "red";
      setTimeout(() => {text.style.display = "none";}, 3000);

    } else {
      if(verif == -1 || verif2 == -1) {
        text.innerHTML = "Veuillez saisir un email correct";
        text.style.display = "block";
        text.style.background = "orange";
        setTimeout(() => {text.style.display = "none";}, 3000);
        
      }
      else {
          text.innerHTML = "Votre Message a bien été envoyé, merci et à la prochaine ";
          text.style.display = "block";
          text.style.background = "green";
      }
    }
 
})


