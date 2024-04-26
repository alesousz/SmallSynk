document.getElementById("open_btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("open-sidebar");
});

const modal = document.querySelector("dialog");
//criando uma model!!
const botaoIncluir = document.querySelector(".botao-incluir");
const modais = document.querySelectorAll("dialog");
const fecharModal = document.querySelector(".fecharmodal");
const modalDeDiv = document.querySelectorAll(".info-box");
const modalDentroDaModal = document.querySelector(".botoes-compras");
const modalDentrodoModal = document.querySelector(".modalDentrodoModal");

if (botaoIncluir) {
  botaoIncluir.onclick = function () {
    modal.showModal();
  };
}
if (fecharModal) {
  fecharModal.onclick = function () {
    modal.close();
  };
}
//teste de filtro modal
modalDeDiv.forEach((div) => {
  div.addEventListener("click", filtrarModais);
});

function filtrarModais() {
  const botoes = document.getElementById(this.id);
  const valor = botoes.classList[1];
  console.log(valor);
  modais.forEach((modal) => {
    const classesDoModal = Array.from(modal.classList);
    console.log(classesDoModal);
    if (classesDoModal.includes(valor)) {
      modal.showModal(); // Abre o modal correspondente à classe do botão
    }
  });
}

// Criando modal tela de vendas

function criarModal(elemento1, elemento2) {
  if (elemento1) {
    elemento1.addEventListener("click", function () {
      elemento2.showModal(); // Adicionamos parênteses para invocar a função
    });
  }
}
criarModal(botaoIncluir, modal);
criarModal(modalDentroDaModal, modalDentrodoModal);

//ESSA FUNÇÃO SERVE SO PRA MUDAR O ICONE <3 DEMOREI 75 HORAS PRA FAZER ELA

const inputDeOrdem = document.querySelectorAll(".input-ordem");

const mudarIcone = document.querySelectorAll(".fa-sort-down");

inputDeOrdem.forEach((input) => {
  input.addEventListener("change", function () {
    const icone = this.closest("th").querySelector(".fa-sort-down");
    const icone2 = this.closest("th").querySelector(".fa-sort-up");
    if (this.checked == true) {
      icone.setAttribute("class", "fa-solid fa-sort-up");
    } else if (this.checked == false) {
      icone2.setAttribute("class", "fa-solid fa-sort-down");
    }
  });
});

//teste
var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Vendas mês de Abril",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "Vendas mês de FADF",
        backgroundColor: "rgb(21, 54, 142)",
        borderColor: "rgb(21, 54, 142)",
        data: [0, 25, 15, 27, 13, 30, 68],
      },
    ],
  },

  // Configuration options go here
  options: {},
});

//PDF

function gerarPdf() {
  const doc = new jsPDF();

  doc.text("Lorem Ypussk, sendo o descritivo", 10, 10);
  doc.save("Relatorio de vendas.pdf");
}
modalDentroDaModal.addEventListener("click", gerarPdf);
