// Seleciona elementos da página
const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const countButton = document.getElementById("countButton");
const result = document.getElementById("result");

// Adiciona evento ao botão
countButton.addEventListener("click", () => {
    // Obtém valores do input
    const start = parseInt(startInput.value);
    const end = parseInt(endInput.value);

    // Verifica se os valores são válidos
    if (isNaN(start) || isNaN(end)) {
        result.textContent = "Por favor, insira números válidos!";
        return;
    }

    if (start > end) {
        result.textContent = "O valor inicial deve ser menor que o final.";
        return;
    }

    // Gera os números
    result.textContent = ""; // Limpa resultados anteriores
    for (let i = start; i <= end; i++) {
        result.textContent += i + "\n"; // Adiciona números ao resultado
    }
});
