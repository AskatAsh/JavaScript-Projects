const verificationCodes = document.querySelectorAll(".verification-code");
console.log(verificationCodes);
// verificationCodes[0].focus();

verificationCodes.forEach((code, idx) => {
  code.addEventListener("keydown", (event) => {
    // console.log(event.key);
    if (event.key >= 0 && event.key <= 9) {
      verificationCodes[idx].value = "";
      if(idx < verificationCodes.length-1){
        setTimeout(() => {
            verificationCodes[idx + 1].focus();
          }, 10);
      }
    } else if (event.key === "Backspace") {
        if(idx > 0){
            setTimeout(() => {
                verificationCodes[idx - 1].focus();
              }, 10);
        }
    }
  });
});
