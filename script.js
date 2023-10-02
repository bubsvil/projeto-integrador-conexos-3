
const btn = document.querySelector('#submitbtn')

btn.addEventListener("click", function(event) {
    event.preventDefault()

    const nome = document.querySelector('#nome').value
    const cpf = document.querySelector('#cpf').value
    const telefone = document.querySelector('#telefone').value
    const email = document.querySelector('#email').value
    // const plano = document.querySelector('#plano').value
    // const horario = document.querySelector('#horario').value

    console.table(nome,cpf,telefone,email)

})

axios.post('bronxe.html', formData)
  .then((response) => {
    // Lide com a resposta da API (por exemplo, exiba uma mensagem de sucesso)
    console.log('Resposta da API:', response.data);
  })
  .catch((error) => {
    // Lide com erros (por exemplo, exiba uma mensagem de erro)
    console.error('Erro ao enviar dados:', error);
  });




// function enviarFormulario() {
//     // Coleta os valores do formulário
//     const nomeCompleto = document.getElementById('nomeCompleto').value;
//     const email = document.getElementById('email').value;
//     const telefone = document.getElementById('telefone').value;
//     const cpf = document.getElementById('cpf').value;
//     const plano = document.getElementById('plano').value;
//     const horario = document.getElementById('horario').value;
  
//     // Crie um objeto com os dados do formulário
//     const formData = {
//       nomeCompleto,
//       email,
//       telefone,
//       cpf,
//       plano,
//       horario,
//     };
  
//     // Faça uma solicitação POST Axios para o servidor
//     axios.post('http://localhost:5173/formulario', formData)
//       .then((response) => {
//         // Lide com a resposta da API (por exemplo, exiba uma mensagem de sucesso)
//         console.log('Resposta da API:', response.data);
//       })
//       .catch((error) => {
//         // Lide com erros (por exemplo, exiba uma mensagem de erro)
//         console.error('Erro ao enviar dados:', error);
//       });
//   }
  