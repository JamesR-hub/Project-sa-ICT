function openSection(sectionId) {
  const sections = document.querySelectorAll('.popup-section');

  sections.forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
}
function openOrder() {
  document.getElementById("orderModal").style.display = "flex";
}

function closeOrder() {
  document.getElementById("orderModal").style.display = "none";
}