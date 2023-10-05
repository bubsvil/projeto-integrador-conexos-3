// Elementos HTML
const openModalButton = document.getElementById('open-modal-button');
const statusModal = document.getElementById('status-modal');
const closeButton = document.querySelector('.close');
const statusContent = document.getElementById('status-content');

// Evento de clique para abrir o modal
openModalButton.addEventListener('click', () => {
    // Realize a requisição GET usando Axios para obter o status com base no ID
    axios.get('URL_DO_SERVIDOR?id=ID_ESPECIFICO')
        .then(response => {
            const status = response.data.status; // Suponha que o servidor forneça o status em um campo 'status'

            // Atualize o conteúdo do modal com o status obtido
            statusContent.textContent = status;

            // Abra o modal
            statusModal.style.display = 'block';
        })
        .catch(error => {
            console.error('Erro na requisição GET:', error);
        });
});

// Evento de clique para fechar o modal
closeButton.addEventListener('click', () => {
    statusModal.style.display = 'none';
});

// Feche o modal se o usuário clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === statusModal) {
        statusModal.style.display = 'none';
    }
});