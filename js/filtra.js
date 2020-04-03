var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
  this.value;
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressao = new RegExp(this.value, "i");

      if (!expressao.test(nome)) {
    //utilizando a função substring
    /*var partesDoNome = nome.substring(0, this.value.length);
      var partesDoNomeMinusculo = partesDoNome.toLowerCase();
      var nomePesquisado = this.value.toLowerCase();
      if (!(nomePesquisado == partesDoNomeMinusculo)) { */
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});
