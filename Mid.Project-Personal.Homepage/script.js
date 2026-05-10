const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  fadeElements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      element.classList.add("show");
    }
  });
});

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Semua field harus diisi!");
    return false;
  }

  alert("Pesan berhasil dikirim!");
  return true;
}

window.addEventListener("load", () => {
  fadeElements.forEach((element) => {
    element.classList.add("show");
  });
});

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = image.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});
