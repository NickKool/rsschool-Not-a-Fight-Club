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

const modal = document.getElementById("avatarModal");
const playerAvatar = document.getElementById("playerAvatar");
const span = modal.querySelector(".close");
const avatars = document.querySelectorAll(".avatar");

playerAvatar.onclick = () => {
  modal.style.display = "flex";
}

span.onclick = () => {
  modal.style.display = "none";
}

avatars.forEach(img => {
  img.onclick = () => {
    playerAvatar.src = img.src;              
    localStorage.setItem("avatar", img.src); 
    modal.style.display = "none";            
  }
});

window.onload = () => {
  const savedAvatar = localStorage.getItem("avatar");
  if (savedAvatar) playerAvatar.src = savedAvatar;
}
