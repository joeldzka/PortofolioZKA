document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      alert("Kamu mengklik " + card.querySelector("h3").innerText);
    });
  });
});
