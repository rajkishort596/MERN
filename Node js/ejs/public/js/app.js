const followBtn = document.querySelector(".follow-btn");
followBtn.addEventListener("click", () => {
  if (followBtn.dataset.follow === "false") {
    followBtn.dataset.follow = "true";
    followBtn.innerHTML = "Following";
    followBtn.style.backgroundColor = "green";
  } else {
    followBtn.dataset.follow = "false";
    followBtn.innerHTML = "Follow";
    followBtn.style.backgroundColor = "blue";
  }
});
