fetch("data.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("cpfForm").addEventListener("submit", function (event) {
            event.preventDefault();

            const cpfInput = document.getElementById("cpfInput").value;
            const resultDiv = document.getElementById("result");

            // Buscar o CPF nos dados
            const result = data.find(entry => entry.cpf === cpfInput);

            if (result) {
                document.getElementById("statusLabel").querySelector("span").innerText = result.status;
                document.getElementById("paymentDate").querySelector("span").innerText = result.paymentDate || "N/A";
                document.getElementById("paymentMethod").querySelector("span").innerText = result.paymentMethod || "N/A";
                resultDiv.classList.remove("hidden");
            } else {
                alert("CPF não encontrado.");
            }
        });
    })
    .catch(error => console.error("Erro ao carregar os dados:", error));
