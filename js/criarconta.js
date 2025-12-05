document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.querySelector("#nome").value();
  const email = document.querySelector("#email").value();
  const password = document.querySelector("#password").value();

  if (!nome || !email || !password) {
    alert("Preencha todos os campos!");
    return;
  }

  fetch("http://localhost:3333/cadastrar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, password })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
    if (data.message.includes("sucesso")) {
      window.location.href = "login.html";
    }
  })
  .catch(err => alert("Erro ao cadastrar usuário."));
});
