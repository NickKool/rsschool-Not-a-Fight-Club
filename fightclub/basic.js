  function saveCharacter(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location.href = "index1.html";
  }

  const username = localStorage.getItem("username");

  if (username) {
    document.getElementById("character").textContent = `${username}`;
  } 