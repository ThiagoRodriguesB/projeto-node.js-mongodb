const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const editora = document.getElementById("editora").value;
  const paginas = document.getElementById("paginas").value;
  
  const data = {
    titulo,
    autor,
    editora,
    paginas
  };
  
  fetch("http://localhost:3000/livros", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});
