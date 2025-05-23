// 1. Elementlarni tanlab olish
const openBtn = document.querySelector(".link .btn"); // Ariza topshirish tugmasi
const modal = document.querySelector(".modal-window"); // modal oynasi
const form = document.querySelector(".modal-form"); // forma
const successMsg = document.querySelector(".success-message"); // xabarnoma

// 2. Modal oynani ko'rsatish
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// 3. Modal tashqarisiga bosilganda yopish
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// 4. Formani yuborishda xabarnoma chiqarish
form.addEventListener("submit", (event) => {
  event.preventDefault();
  modal.style.display = "none";
  form.reset();

  // Xabarnomani ko‘rsatish
  successMsg.style.display = "block";
});
