document.addEventListener("DOMContentLoaded", function() {
    new fullpage('#fullpage', {
      // Opciones de Fullpage.js aquí
      autoScrolling:true,
      scrollHorizontally: true
      // Puedes personalizar esto según tus necesidades
    });
  });

  function toggleCards() {
    var cards = document.querySelectorAll('.s-card');
    cards.forEach(function(card, index) {
      setTimeout(function() {
        card.classList.add('show');
      }, index * 300);
    });
  }