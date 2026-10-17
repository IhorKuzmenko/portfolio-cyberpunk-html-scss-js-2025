const drawingForm = document.querySelector("#drawing-form");
const formStatus = document.querySelector("#drawing-form-status");

if (drawingForm && formStatus) {
  drawingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formStatus.textContent =
      "This is a portfolio demo. No data has been sent or stored.";
  });
}
