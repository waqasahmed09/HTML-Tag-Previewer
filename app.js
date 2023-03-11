const previewBtn = document.getElementById("preview-btn");
const htmlInput = document.getElementById("html-input");
const htmlPreview = document.getElementById("html-preview");

previewBtn.addEventListener("click", () => {
  htmlPreview.innerHTML = htmlInput.value;
});
