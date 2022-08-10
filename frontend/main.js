// AJOUTER UN NOUVEL ARGONAUTE A LA BASE DE DONNEE

let newArgonaute = document
  .querySelector("#new-member")
  .addEventListener("click", (e) => {
    // Annuler le comportement par défaut
    e.preventDefault();

    // récupérer le nom indiqué dans l'input text du formulaire
    let newArgonauteName = {
      name: document.querySelector("#name").value,
    };

    // Envoyer le nom avec une requête POST

    fetch("http://localhost:3000/api/argonaute", {
      method: "POST",
      body: { name: "Sandra" },
    });
    window.location.reload();
  });

// LISTER LES ARGONAUTES DE LA BASE DE DONNEE

document.addEventListener("DOMContentLoaded", (e) => {
  fetch("http://localhost:3000/api/argonaute")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((datas) => {
      let affichage = `<section class="member-list">`;
      for (let data of datas) {
        affichage += ` <div class="member-item">${data._id}</div>`;
      }
      affichage += "</section>";
      document.querySelector("#argonautes").innerHTML = affichage;
    })
    .catch((err) => {
      console.log("erreur : " + err);
    });
});
