const addTarefa = () => {
    let inputAdd = document.getElementById("tarefa").value
    let diaDaSemana = document.getElementById("dias-semana").value
    
    const tarefas = document.getElementById(diaDaSemana)
    tarefas.innerHTML += "<div>" + inputAdd + "</div>"
    tarefa.value = ""
    
    if (inputAdd === ""){
        alert("Informe uma tarefa!")
    }
}

