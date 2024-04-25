document.getElementById("open_btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("open-sidebar");
});

//criando uma model!!
const botaoIncluir = document.querySelector(".botao-incluir");
const modal = document.querySelector("dialog");

botaoIncluir.onclick = function () {
  modal.showModal();
};

const fecharModal = document.querySelector(".fecharmodal");
fecharModal.onclick = function () {
  modal.close();
};

const inputDeOrdem = document.querySelectorAll(".input-ordem");
const mudarIcone = document.querySelectorAll(".fa-sort-down");

//ESSA FUNÇÃO AQUI EU GUARDO PRA
inputDeOrdem.addEventListener("change", function () {
  if (this.checked) {
    mudarIcone.setAttribute("class", "fa-solid fa-sort-down");
  } else {
    mudarIcone.setAttribute("class", "fa-solid fa-sort-up");
  }
});

//teste
