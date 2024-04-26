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

//ESSA FUNÇÃO SERVE SO PRA MUDAR O ICONE <3 DEMOREI 75 HORAS PRA FAZER ELA

const inputDeOrdem = document.querySelectorAll(".input-ordem");

const mudarIcone = document.querySelectorAll(".fa-sort-down");

inputDeOrdem.forEach((input) => {
  input.addEventListener("change", function () {
    const icone = this.closest("th").querySelector(".fa-sort-down");
    const icone2 = this.closest("th").querySelector(".fa-sort-up");
    if (this.checked == true) {
      icone.setAttribute("class", "fa-solid fa-sort-up");
      inputDeOrdem.style.display = "block";
    } else if (this.checked == false) {
      icone2.setAttribute("class", "fa-solid fa-sort-down");
      inputDeOrdem.style.display = "none";
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
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },

  // Configuration options go here
  options: {},
});
