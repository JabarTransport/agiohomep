// Konfigurasi Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyB62dgVC2BMKm7d-UjNms93SNN38BFUb4I",
        authDomain: "login-agio.firebaseapp.com",
        projectId: "login-agio",
        storageBucket: "login-agio.firebasestorage.app",
        messagingSenderId: "1089500143018",
        appId: "1:1089500143018:web:7b3bbaa11a0c86af989fd3",
        measurementId: "G-WQT0VC0EBE"
      };

    // Inisialisasi Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // Cek status login dan validasi masa aktif (contoh: 1 jam)
    document.addEventListener('DOMContentLoaded', () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      const loginTime = localStorage.getItem('loginTime');
      const now = new Date().getTime();
      if (!isLoggedIn || (loginTime && now - loginTime > 3600000)) {
        handleLogout();
      }
    });

    // Fungsi Logout
    function handleLogout() {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loginTime');
      auth.signOut();
      window.location.href = "https://login-with-agio.web.app/";
    }

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
  } else {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
  }
});
