const show_toast_button = document.getElementById("show-toast-btn"),
  horizontal_toast_positon = document.getElementById("horizontal-options"),
  vertical_toast_position = document.getElementById("vertical-options"),
  toast_option_type = document.getElementById("toast-type-options"),
  toast_message_input = document.getElementById("toast-text"),
  toast_duration = document.getElementById("toast-delay"),
  toast = document.getElementById("toast"),
  toast_close = document.getElementById("toast-close"),
  toast_text = document.getElementById("toast-para"),
  show_duration = document.getElementById("show-duration"),
  text_error = document.getElementById("text-error");


show_duration.innerHTML = `[ ${toast_duration.value}s ]`;
toast_duration.addEventListener("change", () => {
  show_duration.innerHTML = `[ ${toast_duration.value}s ]`;
});

// add new classes and romove old classes in toast element
const checkChanges = () => {
  toast.className = "";
  toast.className = `${horizontal_toast_positon.value} ${vertical_toast_position.value} ${toast_option_type.value}`;
};

// Checks if the text input is empty or not
const checkTextMessage = (messageInput) => {
  if (messageInput == "" || !messageInput) {
    return false;
  } else {
    return true;
  }
};

// shows this error if the text input is empty
const showError = () => {
    text_error.style.display = 'block';
};

// hides the error message when user writes something
toast_message_input.addEventListener('input', ()=>{
    text_error.style.display = 'none';
})

// show toast popUp on clicking show toast button
show_toast_button.addEventListener("click", function (e) {
  e.preventDefault();

  checkChanges();
  if (checkTextMessage(toast_message_input.value)) {
    toast_text.textContent = toast_message_input.value;
    toast.classList.add("toast-show");
    setTimeout(() => {
      toast.classList.remove("toast-show");
    }, +toast_duration.value * 1000);
  } else {
    showError();
  }
});

// hides tho popup when clicked to X
toast_close.addEventListener("click", () => {
  toast.classList.remove("toast-show");
});
