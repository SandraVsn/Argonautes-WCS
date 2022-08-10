let newArgonaute = document
  .querySelector("#new-member")
  .addEventListener("click", (e) => {
    // Annuler le comportement par défaut
    e.preventDefault();

    // récupérer le nom indiqué dans l'input text du formulaire
    let newArgonauteName = document.querySelector("#name").value;

    // Envoyer les données avec une requête POST

    fetch("http://localhost:3000/api/argonaute", {
      method: "POST",
      headers: {},
      body: JSON.stringify({ name: newArgonauteName }),
    });
  });
