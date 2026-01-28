function selectOption(element) {
  const boxes = document.querySelectorAll(".option-box");
  boxes.forEach((box) => box.classList.remove("active"));

  element.classList.add("active");

  const radio = element.querySelector('input[type="radio"]');
  if (radio) radio.checked = true;
}
