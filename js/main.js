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

//ESSA FUNÇÃO AQUI EU GUARDO PRA

const inputDeOrdem = document.querySelectorAll(".input-ordem");
inputDeOrdem.checked;
const mudarIcone = document.querySelectorAll(".fa-sort-down");

inputDeOrdem.forEach((input) => {
  input.addEventListener("change", function () {
    const icone = this.closest("th").querySelector(".fa-sort-down");
    console.log(icone);
    if (this.checked) {
      icone.setAttribute("class", "fa-solid fa-sort-up");
    } else {
      const temClasse = icone.classList.contains("fa-solid fa-sort-up");
      if (temClasse == true) {
        icone.setAttribute("class", "fa-solid fa-sort-down");
      }
    }
  });
});

//teste
