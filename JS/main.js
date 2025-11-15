/*
 * File: main.js
 * Deskripsi: File JavaScript utama untuk fungsionalitas website Warteg Adhyaksa Pratama.
 */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Navigasi Sticky & Mobile (Hamburger)
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Efek shadow pada navbar saat scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Toggle menu mobile
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active"); // (Bisa digunakan untuk mengubah ikon hamburger menjadi 'X')
    });

    // Tutup menu saat link di-klik (untuk navigasi di halaman yang sama)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          hamburger.classList.remove("active");
        }
      });
    });
  }

  // 2. Animasi Scroll Reveal (Intersection Observer)
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Hentikan observasi setelah animasi
        }
      });
    },
    {
      threshold: 0.1, // Tampil saat 10% elemen terlihat
    }
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // 3. Validasi Formulir Kontak (contact.html)
  const contactForm = document.getElementById("main-contact-form");

  if (contactForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const successMessage = document.getElementById("form-success");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Mencegah form submit
      let isValid = true;

      // Reset pesan error
      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";
      successMessage.style.display = "none";

      // Validasi Nama
      if (nameInput.value.trim() === "") {
        nameError.textContent = "Nama lengkap tidak boleh kosong.";
        isValid = false;
      }

      // Validasi Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() === "") {
        emailError.textContent = "Email tidak boleh kosong.";
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Format email tidak valid.";
        isValid = false;
      }

      // Validasi Pesan
      if (messageInput.value.trim() === "") {
        messageError.textContent = "Pesan tidak boleh kosong.";
        isValid = false;
      }

      // Jika semua valid
      if (isValid) {
        // Tampilkan pesan sukses
        successMessage.textContent =
          "Pesan Anda telah berhasil terkirim. Terima kasih!";
        successMessage.style.display = "block";

        // Reset form
        contactForm.reset();

        // (Di aplikasi nyata, di sinilah Anda mengirim data ke server/API)
        console.log("Form berhasil divalidasi dan siap dikirim.");
      }
    });
  }

  // 4. Lightbox/Modal Galeri (portfolio.html)
  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    const modalImg = document.getElementById("modal-image");
    const modalCaption = document.getElementById("modal-caption");
    const galleryImages = document.querySelectorAll(".gallery-image");
    const closeModal = document.querySelector(".modal-close");

    galleryImages.forEach((img) => {
      img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalCaption.textContent = this.alt; // Ambil 'alt' sebagai caption
      });
    });

    // Fungsi untuk menutup modal
    const close = () => {
      modal.style.display = "none";
    };

    closeModal.addEventListener("click", close);

    // Tutup modal jika klik di luar gambar
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        close();
      }
    });
  }

  // 5. Validasi Formulir Kemitraan (kemitraan.html)
  const kemitraanForm = document.getElementById("kemitraan-form");

  if (kemitraanForm) {
    // Ambil elemen form
    const nameInput = document.getElementById("mitra-name");
    const emailInput = document.getElementById("mitra-email");
    const phoneInput = document.getElementById("mitra-phone");
    const typeInput = document.getElementById("mitra-type");
    const locationInput = document.getElementById("mitra-location");
    const messageInput = document.getElementById("mitra-message");

    // Ambil elemen pesan error
    const nameError = document.getElementById("mitra-name-error");
    const emailError = document.getElementById("mitra-email-error");
    const phoneError = document.getElementById("mitra-phone-error");
    const typeError = document.getElementById("mitra-type-error");
    const locationError = document.getElementById("mitra-location-error");
    const messageError = document.getElementById("mitra-message-error");
    const successMessage = document.getElementById("kemitraan-success");

    kemitraanForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;

      // Reset pesan error
      nameError.textContent = "";
      emailError.textContent = "";
      phoneError.textContent = "";
      typeError.textContent = "";
      locationError.textContent = "";
      messageError.textContent = "";
      successMessage.style.display = "none";

      // Validasi Nama
      if (nameInput.value.trim() === "") {
        nameError.textContent = "Nama lengkap tidak boleh kosong.";
        isValid = false;
      }

      // Validasi Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() === "") {
        emailError.textContent = "Email tidak boleh kosong.";
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Format email tidak valid.";
        isValid = false;
      }

      // Validasi Telepon
      if (phoneInput.value.trim() === "") {
        phoneError.textContent = "Nomor telepon tidak boleh kosong.";
        isValid = false;
      }

      // Validasi Jenis Pengajuan
      if (typeInput.value === "") {
        typeError.textContent = "Silakan pilih jenis pengajuan.";
        isValid = false;
      }

      // Validasi Lokasi
      if (locationInput.value.trim() === "") {
        locationError.textContent = "Lokasi usulan tidak boleh kosong.";
        isValid = false;
      }

      // Validasi Pesan
      if (messageInput.value.trim() === "") {
        messageError.textContent = "Pesan tidak boleh kosong.";
        isValid = false;
      }

      // Jika semua valid
      if (isValid) {
        // Tampilkan pesan sukses
        successMessage.textContent =
          "Pendaftaran Anda telah berhasil terkirim. Tim kami akan segera meninjau dan menghubungi Anda. Terima kasih!";
        successMessage.style.display = "block";

        // Reset form
        kemitraanForm.reset();

        console.log("Form Kemitraan berhasil divalidasi dan siap dikirim.");
      }
    });
  }
});
