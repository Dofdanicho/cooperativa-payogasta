// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Función para agrandar la carta suavemente
    function enlargeCard(event) {
      const card = event.currentTarget;
      card.classList.add("enlarged");
    }
  
    // Función para restaurar el tamaño original de la carta
    function resetCardSize(event) {
      const card = event.currentTarget;
      card.classList.remove("enlarged");
    }
  
    // Selecciona todas las cartas y agrega eventos de mouse
    const cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
      card.addEventListener('mouseover', enlargeCard);
      card.addEventListener('mouseout', resetCardSize);
    });
  });
  