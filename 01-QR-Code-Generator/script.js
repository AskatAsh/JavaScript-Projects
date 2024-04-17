const linkInput = document.getElementById("linkInput");
const generateBtn = document.getElementById("generateBtn");
const qrImg = document.getElementById("qrImg");

generateBtn.addEventListener("click", () => {
  const inputURL = linkInput.value;

  if (!inputURL) {
    alert("Please Enter a valid URL or Link");
    return;
  } else {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputURL}`;
    console.log(qrImg);
  }
});
