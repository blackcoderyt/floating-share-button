const shareButton = document.getElementById("share-button");
const shareList = document.getElementById("share-list");

shareButton.addEventListener("click", () => {
  shareList.classList.toggle("active");
});
