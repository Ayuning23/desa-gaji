document.addEventListener("DOMContentLoaded", () => {
  // 1. MENU RESPONSIF (UNTUK HP)
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".signpost-nav");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !expanded);
    });
  }

  // 2. FILTER KATALOG UMKM (HALAMAN umkm.html)
  const filterButtons = document.querySelectorAll(".umkm-filter .btn");
  const umkmCards = document.querySelectorAll(".umkm-card");

  if (filterButtons.length > 0 && umkmCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Hapus kelas aktif dari semua tombol, lalu tambah ke tombol yang diklik
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        // Sembunyikan atau tampilkan kartu berdasarkan kategori
        umkmCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");
          if (filterValue === "semua" || filterValue === cardCategory) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // 3. MENANDAI NAVBAR YANG AKTIF SECARA OTOMATIS
  const currentUrl = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".signpost-nav a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (currentUrl === linkHref || (currentUrl === "" && linkHref === "index.html")) {
      link.classList.add("active");
    }
  });
});