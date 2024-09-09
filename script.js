document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Obtém os valores dos campos
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    // Obtém o elemento para a mensagem
    const messageDiv = document.getElementById('message');

    // Valida se o campo B é maior que o campo A
    if (campoB > campoA) {
        messageDiv.textContent = 'O formulário é válido! Campo B é maior que o Campo A.';
        messageDiv.className = 'message success';
    } else {
        messageDiv.textContent = 'O formulário é inválido! Campo B deve ser maior que o Campo A.';
        messageDiv.className = 'message error';
    }
});
