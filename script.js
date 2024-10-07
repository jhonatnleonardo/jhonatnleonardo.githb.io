let hasSelected = false; // Variable para verificar si se ha realizado una selección

function selectOption(option) {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const message = document.getElementById('message');

    // Verificar si ya se ha hecho una selección
    if (hasSelected) {
        alert("Ya has seleccionado una opción. No puedes elegir otra vez.");
        return; // Salir de la función si ya se hizo una selección
    }


    hasSelected = true;


    yesButton.disabled = true;
    noButton.disabled = true;


    if (option === 'yes') {
        message.textContent = "Seleccionaste la opcion : Yes...";
        setTimeout(() => {
            window.location.href = 'yes.html';
        }, 2000);
    } else {
        message.textContent = "Seleccionaste la opcion : No....";
        setTimeout(() => {
            window.location.href = 'no.html';
        }, 2000);
    }

    message.classList.remove('hidden');
}
