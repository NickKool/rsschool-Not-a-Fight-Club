const username = localStorage.getItem("username");
const modal = document.getElementById("avatarModal");
const playerAvatar = document.getElementById("playerAvatar");
const span = modal.querySelector(".close");
const avatars = document.querySelectorAll(".avatar");

if (username) {
  document.getElementById("character").textContent = `${username}`;
} 


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
