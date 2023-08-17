
const search = document.getElementById("search");

const google = 'https://www.google.com/search?tbm=isch&q=';

function buscar(){
    const url = google + search.value;
    const win = window.open(url, '_blank');
    win.focus();
}

// Execute a function when the user presses a key on the keyboard
search.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      buscar();
    }
  });