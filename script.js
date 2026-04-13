function updateOutput(value) {
  const output = document.getElementById("input-output");
  if (!output) {
    return;
  }

  output.textContent = value ? "Bạn đã nhập: " + value : "";
}

function showAlert() {
  alert("Bạn đã nhấn nút! Đây là hành động của button.");
}

document.addEventListener("DOMContentLoaded", function () {
  const demoInput = document.getElementById("example-input");
  if (demoInput) {
    demoInput.addEventListener("input", function () {
      updateOutput(this.value);
    });
  }

  const demoButton = document.getElementById("demo-button");
  if (demoButton) {
    demoButton.addEventListener("click", showAlert);
  }
});
