function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Feche o menu suspenso se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('button')) {
        var dropdownContent = document.getElementById("dropdown-content");
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    }
}